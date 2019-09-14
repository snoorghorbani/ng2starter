/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @return {?}
     */
    getSources() {
        return this.http
            .get(this.config.env.frontend_server + "/api/source")
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => ((/** @type {?} */ (response))).Result))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @return {?}
     */
    getGroups() {
        return this.http
            .get(this.config.env.frontend_server + "/api/diagram/groups")
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => ((/** @type {?} */ (response))).Result))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
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
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
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
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateDiagram(body) {
        return this.http
            .put(this.config.env.frontend_server + "/api/diagram", body)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteDiagram(id) {
        return this.http
            .delete(`${this.config.env.frontend_server}/api/diagram/${id}`)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
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
                .map((/**
             * @param {?} res
             * @return {?}
             */
            (res) => res.Result));
        }
        else if (source.Interval == 0) {
            return this.http
                .get(`${this.config.env.frontend_server}/api/data`, {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map((/**
             * @param {?} res
             * @return {?}
             */
            (res) => res.Result));
        }
        else {
            time = time || Date.now();
            return Observable.timer(0, source.Interval).pipe(takeUntil(unsubscribe), switchMap((/**
             * @param {?} i
             * @return {?}
             */
            (i) => this.http
                .get(`${this.config.env.frontend_server}/api/data`, {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            }).pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            (res) => res.Result))))));
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
        columnsMappings.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            /** @type {?} */
            const NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map((/**
                 * @param {?} _item
                 * @param {?} i
                 * @return {?}
                 */
                (_item, i) => [_item].concat(ValueData[i])))));
            }
            else {
                return res.push([NameData].concat(ValueData));
            }
        }));
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
        return ((/** @type {?} */ (_.report(data)))).filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.isLastNode));
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
        return this.getData((/** @type {?} */ ({})), new Subject(), sync).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.charts[id].load({
                columns: this.extract_columns_from_data(data.Data, config.ColumnMappings)
            });
        }));
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
/** @nocollapse */ DiagramService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DiagramService_Factory() { return new DiagramService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.DiagramConfigurationService)); }, token: DiagramService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBR3BDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFFMUIsWUFDUyxJQUFnQixFQUNoQixLQUEwQixFQUMxQixvQkFBaUQ7UUFGakQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCOztRQXdJMUQsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQXRJWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUErQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO2FBQ25GLEdBQUc7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFDO2FBQzNC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SSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxtQkFDekIsTUFBTSxJQUNULE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBRSxJQUN2QixDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFBLEVBQUUsRUFBZSxFQUFFLElBQUksT0FBTyxFQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDO2FBQ3pFLENBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBQ0QsWUFBWSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLE9BQWUsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBL0pELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQWpCUSxVQUFVO1lBRVYsS0FBSztZQUdMLDJCQUEyQjs7Ozs7SUFjbkMsZ0NBQTRCOztJQTRJNUIsZ0NBQVk7Ozs7O0lBMUlYLDhCQUF3Qjs7Ozs7SUFDeEIsK0JBQWtDOzs7OztJQUNsQyw4Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdXJjZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL2RpYWdyYW0uY29uZmlnXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVNlcnZpY2Uge1xyXG5cdGNvbmZpZzogRGlhZ3JhbU1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWc7XHJcblx0fVxyXG5cclxuXHRnZXREaWFncmFtcygpOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPih0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL2RpYWdyYW1cIilcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRTb3VyY2VzKCk6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvc291cmNlXCIpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldEdyb3VwcygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIFwiL2FwaS9kaWFncmFtL2dyb3Vwc1wiKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlIGFzIGFueSkuUmVzdWx0KVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXREaWFncmFtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKCFpZCkgZGVidWdnZXI7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGAvYXBpL2RpYWdyYW0vJHtpZH1gKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGFkZERpYWdyYW0oZGF0YTogYW55KTogT2JzZXJ2YWJsZTxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdDxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvZGlhZ3JhbVwiLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdHVwZGF0ZURpYWdyYW0oYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL2RpYWdyYW1cIiwgYm9keSlcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRkZWxldGVEaWFncmFtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZGVsZXRlKGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kaWFncmFtLyR7aWR9YClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXREYXRhKHNvdXJjZTogU291cmNlTW9kZWwsIHVuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+LCB0aW1lOiBudW1iZXIgPSAwLCBvbmNlOiBCb29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKG9uY2UgJiYgdGltZSAhPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0XHR9IGVsc2UgaWYgKHNvdXJjZS5JbnRlcnZhbCA9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHR0aW1lOiBudWxsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aW1lID0gdGltZSB8fCBEYXRlLm5vdygpO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aW1lcigwLCBzb3VyY2UuSW50ZXJ2YWwpLnBpcGUoXHJcblx0XHRcdFx0dGFrZVVudGlsKHVuc3Vic2NyaWJlKSxcclxuXHRcdFx0XHRzd2l0Y2hNYXAoKGkpID0+XHJcblx0XHRcdFx0XHR0aGlzLmh0dHBcclxuXHRcdFx0XHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KS5waXBlKFxyXG5cdFx0XHRcdFx0XHRcdG1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHQpXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YTogYW55LCBjb2x1bW5zTWFwcGluZ3MpIHtcclxuXHRcdGxldCByZXMgPSBbXTtcclxuXHJcblx0XHRjb2x1bW5zTWFwcGluZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRjb25zdCBWYWx1ZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uVmFsdWVQYXRoKTtcclxuXHJcblx0XHRcdGlmICghaXRlbS5OYW1lUGF0aCkge1xyXG5cdFx0XHRcdHJldHVybiByZXMucHVzaChbaXRlbS5WYWx1ZVBhdGguc3BsaXQoXCIuXCIpLnBvcCgpXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgTmFtZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uTmFtZVBhdGgpO1xyXG5cclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkoTmFtZURhdGEpKSB7XHJcblx0XHRcdFx0cmV0dXJuIChyZXMgPSByZXMuY29uY2F0KE5hbWVEYXRhLm1hcCgoX2l0ZW0sIGkpID0+IFtfaXRlbV0uY29uY2F0KFZhbHVlRGF0YVtpXSkpKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5wdXNoKFtOYW1lRGF0YV0uY29uY2F0KFZhbHVlRGF0YSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdGdldF9kYXRhX3JlcG9ydChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBfLnJlcG9ydChkYXRhKTtcclxuXHR9XHJcblx0Z2V0X2xhc3Rfbm9kZV9vZl9kYXRhKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIChfLnJlcG9ydChkYXRhKSBhcyBhbnlbXSkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlzTGFzdE5vZGUpO1xyXG5cdH1cclxuXHRidWlsZENoYXJ0Q29uZmlnKGNvbHVtbnMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRjb2x1bW5zXHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdHNob3c6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblx0Ly8gVE9ETzogaW1wbGVtZW50IGludGVyZmFjZSBvZiBjMyBjb25maWdcclxuXHRjaGFydHMgPSB7fTtcclxuXHRnZW5lcmF0ZURpYWdyYW0oY29uZmlnOiBhbnksIGlkOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcsIHN5bmM6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcblx0XHR0aGlzLmNoYXJ0c1tpZF0gPSBjMy5nZW5lcmF0ZSh7XHJcblx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHtpZH1gXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKHt9IGFzIFNvdXJjZU1vZGVsLCBuZXcgU3ViamVjdDx2b2lkPigpLCBzeW5jKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5jaGFydHNbaWRdLmxvYWQoe1xyXG5cdFx0XHRcdGNvbHVtbnM6IHRoaXMuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIGNvbmZpZy5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0Rmxvb3JUaW1lKHByZWNpc2lvbiA9IDYwICogMTAwMCwgdGltZTogbnVtYmVyID0gMCkge1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKHRpbWUgfHwgRGF0ZS5ub3coKSkgLyBwcmVjaXNpb24pO1xyXG5cdH1cclxufVxyXG4iXX0=