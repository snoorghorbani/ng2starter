/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./diagram-configuration.service";
import { DiagramConfigurationService } from "./diagram-configuration.service";
import { AddDiagramApiModel } from "../models/add-diagram-api.model";
import { switchMap, map, takeUntil } from "rxjs/operators";
export class DiagramService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        // TODO: implement interface of c3 config
        this.charts = {};
        this.config = this.configurationService.config;
    }
    /**
     * @return {?}
     */
    getDiagrams() {
        return this.http
            .get(this.config.env.frontend_server + "/api/diagram")
            .map((response) => response)
            .catch((err) => {
            return Observable.throw(err);
        });
    }
    /**
     * @return {?}
     */
    getSources() {
        return this.http
            .get(this.config.env.frontend_server + "/api/source")
            .map((response) => ((/** @type {?} */ (response))).Result)
            .catch((err) => {
            return Observable.throw(err);
        });
    }
    /**
     * @return {?}
     */
    getGroups() {
        return this.http
            .get(this.config.env.frontend_server + "/api/diagram/groups")
            .map((response) => ((/** @type {?} */ (response))).Result)
            .catch((err) => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDiagram(id) {
        if (!id)
            debugger;
        return this.http
            .get(this.config.env.frontend_server + `/api/diagram/${id}`)
            .map((response) => response)
            .catch((err) => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    addDiagram(data) {
        /** @type {?} */
        const model = new AddDiagramApiModel.Request(data);
        return this.http
            .post(this.config.env.frontend_server + "/api/diagram", model.getRequestBody())
            .map((response) => response)
            .catch((err) => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateDiagram(body) {
        return this.http
            .put(this.config.env.frontend_server + "/api/diagram", body)
            .map((response) => response)
            .catch((err) => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteDiagram(id) {
        return this.http
            .delete(`${this.config.env.frontend_server}/api/diagram/${id}`)
            .map((response) => response)
            .catch((err) => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} source
     * @param {?} unsubscribe
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    getData(source, unsubscribe, time = 0, once = false) {
        if (once && time !== 0) {
            return this.http
                .get(`${this.config.env.frontend_server}/api/data`, {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map((res) => res.Result);
        }
        else if (source.Interval == 0) {
            return this.http
                .get(`${this.config.env.frontend_server}/api/data`, {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map((res) => res.Result);
        }
        else {
            time = time || Date.now();
            return Observable.timer(0, source.Interval).pipe(takeUntil(unsubscribe), switchMap((i) => this.http
                .get(`${this.config.env.frontend_server}/api/data`, {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            }).pipe(map((res) => res.Result))));
        }
    }
    /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    extract_columns_from_data(data, columnsMappings) {
        /** @type {?} */
        let res = [];
        columnsMappings.forEach((item) => {
            /** @type {?} */
            const ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            /** @type {?} */
            const NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map((_item, i) => [_item].concat(ValueData[i]))));
            }
            else {
                return res.push([NameData].concat(ValueData));
            }
        });
        return res;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    get_data_report(data) {
        return _.report(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    get_last_node_of_data(data) {
        return ((/** @type {?} */ (_.report(data)))).filter((item) => item.isLastNode);
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    buildChartConfig(columns) {
        return {
            data: {
                columns
            },
            legend: {
                show: true
            }
        };
    }
    /**
     * @param {?} config
     * @param {?} id
     * @param {?} route
     * @param {?} sync
     * @return {?}
     */
    generateDiagram(config, id, route, sync) {
        this.charts[id] = c3.generate(Object.assign({}, config, { bindto: `#diagram_${id}` }));
        return this.getData((/** @type {?} */ ({})), new Subject(), sync).subscribe((data) => {
            this.charts[id].load({
                columns: this.extract_columns_from_data(data.Data, config.ColumnMappings)
            });
        });
    }
    /**
     * @param {?=} precision
     * @param {?=} time
     * @return {?}
     */
    getFloorTime(precision = 60 * 1000, time = 0) {
        return Math.floor((time || Date.now()) / precision);
    }
}
DiagramService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
DiagramService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: DiagramConfigurationService }
];
/** @nocollapse */ DiagramService.ngInjectableDef = i0.defineInjectable({ factory: function DiagramService_Factory() { return new DiagramService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.DiagramConfigurationService)); }, token: DiagramService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DiagramService.prototype.config;
    /** @type {?} */
    DiagramService.prototype.charts;
    /**
     * @type {?}
     * @private
     */
    DiagramService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    DiagramService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DiagramService.prototype.configurationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBR3BDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFFMUIsWUFDUyxJQUFnQixFQUNoQixLQUEwQixFQUMxQixvQkFBaUQ7UUFGakQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCOztRQXdJMUQsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQXRJWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUErQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO2FBQ25GLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQzNCLEtB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QUFNLEVBQUUsWUFBWSxFQUFFLEVBQUUsSUFDdkIsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBQSxFQUFFLEVBQWUsRUFBRSxJQUFJLE9BQU8sRUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3BGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQzthQUN6RSxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUNELFlBQVksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxPQUFlLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQS9KRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFqQlEsVUFBVTtZQUVWLEtBQUs7WUFHTCwyQkFBMkI7Ozs7O0lBY25DLGdDQUE0Qjs7SUE0STVCLGdDQUFZOzs7OztJQTFJWCw4QkFBd0I7Ozs7O0lBQ3hCLCtCQUFrQzs7Ozs7SUFDbEMsOENBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2RpYWdyYW0tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9zb3VyY2UubW9kZWxcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9kaWFncmFtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1TZXJ2aWNlIHtcclxuXHRjb25maWc6IERpYWdyYW1Nb2R1bGVDb25maWc7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnO1xyXG5cdH1cclxuXHJcblx0Z2V0RGlhZ3JhbXMoKTogT2JzZXJ2YWJsZTxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT4odGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIFwiL2FwaS9kaWFncmFtXCIpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0U291cmNlcygpOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL3NvdXJjZVwiKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlIGFzIGFueSkuUmVzdWx0KVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRHcm91cHMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvZGlhZ3JhbS9ncm91cHNcIilcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IChyZXNwb25zZSBhcyBhbnkpLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0RGlhZ3JhbShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGlmICghaWQpIGRlYnVnZ2VyO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBgL2FwaS9kaWFncmFtLyR7aWR9YClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRhZGREaWFncmFtKGRhdGE6IGFueSk6IE9ic2VydmFibGU8QWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3Q8QWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlPih0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL2RpYWdyYW1cIiwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHR1cGRhdGVEaWFncmFtKGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIFwiL2FwaS9kaWFncmFtXCIsIGJvZHkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0ZGVsZXRlRGlhZ3JhbShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmRlbGV0ZShgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvZGlhZ3JhbS8ke2lkfWApXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0RGF0YShzb3VyY2U6IFNvdXJjZU1vZGVsLCB1bnN1YnNjcmliZTogU3ViamVjdDx2b2lkPiwgdGltZTogbnVtYmVyID0gMCwgb25jZTogQm9vbGVhbiA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGlmIChvbmNlICYmIHRpbWUgIT09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2RhdGFgLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdHRpbWU6IHRoaXMuZ2V0Rmxvb3JUaW1lKHNvdXJjZS5JbnRlcnZhbCwgdGltZSkudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpO1xyXG5cdFx0fSBlbHNlIGlmIChzb3VyY2UuSW50ZXJ2YWwgPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0dGltZTogbnVsbFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGltZSA9IHRpbWUgfHwgRGF0ZS5ub3coKTtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGltZXIoMCwgc291cmNlLkludGVydmFsKS5waXBlKFxyXG5cdFx0XHRcdHRha2VVbnRpbCh1bnN1YnNjcmliZSksXHJcblx0XHRcdFx0c3dpdGNoTWFwKChpKSA9PlxyXG5cdFx0XHRcdFx0dGhpcy5odHRwXHJcblx0XHRcdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2RhdGFgLCB7XHJcblx0XHRcdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdHRpbWU6IHRoaXMuZ2V0Rmxvb3JUaW1lKHNvdXJjZS5JbnRlcnZhbCwgdGltZSkudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSkucGlwZShcclxuXHRcdFx0XHRcdFx0XHRtYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGE6IGFueSwgY29sdW1uc01hcHBpbmdzKSB7XHJcblx0XHRsZXQgcmVzID0gW107XHJcblxyXG5cdFx0Y29sdW1uc01hcHBpbmdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0Y29uc3QgVmFsdWVEYXRhID0gXy5nZXRWYWx1ZShkYXRhLCBpdGVtLlZhbHVlUGF0aCk7XHJcblxyXG5cdFx0XHRpZiAoIWl0ZW0uTmFtZVBhdGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLnB1c2goW2l0ZW0uVmFsdWVQYXRoLnNwbGl0KFwiLlwiKS5wb3AoKV0uY29uY2F0KFZhbHVlRGF0YSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IE5hbWVEYXRhID0gXy5nZXRWYWx1ZShkYXRhLCBpdGVtLk5hbWVQYXRoKTtcclxuXHJcblx0XHRcdGlmIChfLmlzLmFycmF5KE5hbWVEYXRhKSkge1xyXG5cdFx0XHRcdHJldHVybiAocmVzID0gcmVzLmNvbmNhdChOYW1lRGF0YS5tYXAoKF9pdGVtLCBpKSA9PiBbX2l0ZW1dLmNvbmNhdChWYWx1ZURhdGFbaV0pKSkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiByZXMucHVzaChbTmFtZURhdGFdLmNvbmNhdChWYWx1ZURhdGEpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRnZXRfZGF0YV9yZXBvcnQoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gXy5yZXBvcnQoZGF0YSk7XHJcblx0fVxyXG5cdGdldF9sYXN0X25vZGVfb2ZfZGF0YShkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiAoXy5yZXBvcnQoZGF0YSkgYXMgYW55W10pLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pc0xhc3ROb2RlKTtcclxuXHR9XHJcblx0YnVpbGRDaGFydENvbmZpZyhjb2x1bW5zKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Y29sdW1uc1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRzaG93OiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cdC8vIFRPRE86IGltcGxlbWVudCBpbnRlcmZhY2Ugb2YgYzMgY29uZmlnXHJcblx0Y2hhcnRzID0ge307XHJcblx0Z2VuZXJhdGVEaWFncmFtKGNvbmZpZzogYW55LCBpZDogc3RyaW5nLCByb3V0ZTogc3RyaW5nLCBzeW5jOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG5cdFx0dGhpcy5jaGFydHNbaWRdID0gYzMuZ2VuZXJhdGUoe1xyXG5cdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdGJpbmR0bzogYCNkaWFncmFtXyR7aWR9YFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGF0YSh7fSBhcyBTb3VyY2VNb2RlbCwgbmV3IFN1YmplY3Q8dm9pZD4oKSwgc3luYykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMuY2hhcnRzW2lkXS5sb2FkKHtcclxuXHRcdFx0XHRjb2x1bW5zOiB0aGlzLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCBjb25maWcuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldEZsb29yVGltZShwcmVjaXNpb24gPSA2MCAqIDEwMDAsIHRpbWU6IG51bWJlciA9IDApIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKCh0aW1lIHx8IERhdGUubm93KCkpIC8gcHJlY2lzaW9uKTtcclxuXHR9XHJcbn1cclxuIl19