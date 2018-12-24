/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .map((response) => (/** @type {?} */ (response)).Result)
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
            .map((response) => (/** @type {?} */ (response)).Result)
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
        return (/** @type {?} */ (_.report(data))).filter((item) => item.isLastNode);
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
        return this.getData(/** @type {?} */ ({}), new Subject(), sync).subscribe((data) => {
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
            },] },
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
    /** @type {?} */
    DiagramService.prototype.http;
    /** @type {?} */
    DiagramService.prototype.store;
    /** @type {?} */
    DiagramService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBR3BDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFFMUIsWUFDUyxNQUNBLE9BQ0E7UUFGQSxTQUFJLEdBQUosSUFBSTtRQUNKLFVBQUssR0FBTCxLQUFLO1FBQ0wseUJBQW9CLEdBQXBCLG9CQUFvQjs7UUF3STdCLGNBQVMsRUFBRSxDQUFDO1FBdElYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztLQUMvQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUErQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO2FBQ25GLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQzNCLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2QsT0FBTyxVQUFVLENBQUMsS0FB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WUFDcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDO2FBQ3pFLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNIOzs7Ozs7SUFDRCxZQUFZLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsT0FBZSxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztLQUNwRDs7O1lBL0pELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQWpCUSxVQUFVO1lBRVYsS0FBSztZQUdMLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9kaWFncmFtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvc291cmNlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vZGlhZ3JhbS5jb25maWdcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgXzogYW55O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtU2VydmljZSB7XHJcblx0Y29uZmlnOiBEaWFncmFtTW9kdWxlQ29uZmlnO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IERpYWdyYW1Db25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZztcclxuXHR9XHJcblxyXG5cdGdldERpYWdyYW1zKCk6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvZGlhZ3JhbVwiKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldFNvdXJjZXMoKTogT2JzZXJ2YWJsZTxTb3VyY2VNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIFwiL2FwaS9zb3VyY2VcIilcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IChyZXNwb25zZSBhcyBhbnkpLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0R3JvdXBzKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL2RpYWdyYW0vZ3JvdXBzXCIpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldERpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRpZiAoIWlkKSBkZWJ1Z2dlcjtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgYC9hcGkvZGlhZ3JhbS8ke2lkfWApXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0YWRkRGlhZ3JhbShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wb3N0PEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZT4odGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIFwiL2FwaS9kaWFncmFtXCIsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0dXBkYXRlRGlhZ3JhbShib2R5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucHV0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvZGlhZ3JhbVwiLCBib2R5KVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGRlbGV0ZURpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5kZWxldGUoYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2RpYWdyYW0vJHtpZH1gKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldERhdGEoc291cmNlOiBTb3VyY2VNb2RlbCwgdW5zdWJzY3JpYmU6IFN1YmplY3Q8dm9pZD4sIHRpbWU6IG51bWJlciA9IDAsIG9uY2U6IEJvb2xlYW4gPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRpZiAob25jZSAmJiB0aW1lICE9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHR0aW1lOiB0aGlzLmdldEZsb29yVGltZShzb3VyY2UuSW50ZXJ2YWwsIHRpbWUpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KTtcclxuXHRcdH0gZWxzZSBpZiAoc291cmNlLkludGVydmFsID09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2RhdGFgLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdHRpbWU6IG51bGxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRpbWUgPSB0aW1lIHx8IERhdGUubm93KCk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRpbWVyKDAsIHNvdXJjZS5JbnRlcnZhbCkucGlwZShcclxuXHRcdFx0XHR0YWtlVW50aWwodW5zdWJzY3JpYmUpLFxyXG5cdFx0XHRcdHN3aXRjaE1hcCgoaSkgPT5cclxuXHRcdFx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiB0aGlzLmdldEZsb29yVGltZShzb3VyY2UuSW50ZXJ2YWwsIHRpbWUpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pLnBpcGUoXHJcblx0XHRcdFx0XHRcdFx0bWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdClcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhOiBhbnksIGNvbHVtbnNNYXBwaW5ncykge1xyXG5cdFx0bGV0IHJlcyA9IFtdO1xyXG5cclxuXHRcdGNvbHVtbnNNYXBwaW5ncy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdGNvbnN0IFZhbHVlRGF0YSA9IF8uZ2V0VmFsdWUoZGF0YSwgaXRlbS5WYWx1ZVBhdGgpO1xyXG5cclxuXHRcdFx0aWYgKCFpdGVtLk5hbWVQYXRoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5wdXNoKFtpdGVtLlZhbHVlUGF0aC5zcGxpdChcIi5cIikucG9wKCldLmNvbmNhdChWYWx1ZURhdGEpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBOYW1lRGF0YSA9IF8uZ2V0VmFsdWUoZGF0YSwgaXRlbS5OYW1lUGF0aCk7XHJcblxyXG5cdFx0XHRpZiAoXy5pcy5hcnJheShOYW1lRGF0YSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHJlcyA9IHJlcy5jb25jYXQoTmFtZURhdGEubWFwKChfaXRlbSwgaSkgPT4gW19pdGVtXS5jb25jYXQoVmFsdWVEYXRhW2ldKSkpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLnB1c2goW05hbWVEYXRhXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Z2V0X2RhdGFfcmVwb3J0KGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIF8ucmVwb3J0KGRhdGEpO1xyXG5cdH1cclxuXHRnZXRfbGFzdF9ub2RlX29mX2RhdGEoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gKF8ucmVwb3J0KGRhdGEpIGFzIGFueVtdKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXNMYXN0Tm9kZSk7XHJcblx0fVxyXG5cdGJ1aWxkQ2hhcnRDb25maWcoY29sdW1ucykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGNvbHVtbnNcclxuXHRcdFx0fSxcclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0c2hvdzogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHQvLyBUT0RPOiBpbXBsZW1lbnQgaW50ZXJmYWNlIG9mIGMzIGNvbmZpZ1xyXG5cdGNoYXJ0cyA9IHt9O1xyXG5cdGdlbmVyYXRlRGlhZ3JhbShjb25maWc6IGFueSwgaWQ6IHN0cmluZywgcm91dGU6IHN0cmluZywgc3luYzogbnVtYmVyKTogU3Vic2NyaXB0aW9uIHtcclxuXHRcdHRoaXMuY2hhcnRzW2lkXSA9IGMzLmdlbmVyYXRlKHtcclxuXHRcdFx0Li4uY29uZmlnLFxyXG5cdFx0XHRiaW5kdG86IGAjZGlhZ3JhbV8ke2lkfWBcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmdldERhdGEoe30gYXMgU291cmNlTW9kZWwsIG5ldyBTdWJqZWN0PHZvaWQ+KCksIHN5bmMpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNoYXJ0c1tpZF0ubG9hZCh7XHJcblx0XHRcdFx0Y29sdW1uczogdGhpcy5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgY29uZmlnLkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRGbG9vclRpbWUocHJlY2lzaW9uID0gNjAgKiAxMDAwLCB0aW1lOiBudW1iZXIgPSAwKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigodGltZSB8fCBEYXRlLm5vdygpKSAvIHByZWNpc2lvbik7XHJcblx0fVxyXG59XHJcbiJdfQ==