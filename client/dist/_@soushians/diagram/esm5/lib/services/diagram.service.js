/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DiagramService = /** @class */ (function () {
    function DiagramService(http, store, configurationService) {
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
    DiagramService.prototype.getDiagrams = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.config.env.frontend_server + "/api/diagram")
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    DiagramService.prototype.getSources = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.config.env.frontend_server + "/api/source")
            .map(function (response) { return ((/** @type {?} */ (response))).Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    DiagramService.prototype.getGroups = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.config.env.frontend_server + "/api/diagram/groups")
            .map(function (response) { return ((/** @type {?} */ (response))).Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.getDiagram = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (!id)
            debugger;
        return this.http
            .get(this.config.env.frontend_server + ("/api/diagram/" + id))
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.addDiagram = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var model = new AddDiagramApiModel.Request(data);
        return this.http
            .post(this.config.env.frontend_server + "/api/diagram", model.getRequestBody())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    DiagramService.prototype.updateDiagram = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        return this.http
            .put(this.config.env.frontend_server + "/api/diagram", body)
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.deleteDiagram = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.http
            .delete(this.config.env.frontend_server + "/api/diagram/" + id)
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} source
     * @param {?} unsubscribe
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    DiagramService.prototype.getData = /**
     * @param {?} source
     * @param {?} unsubscribe
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    function (source, unsubscribe, time, once) {
        var _this = this;
        if (time === void 0) { time = 0; }
        if (once === void 0) { once = false; }
        if (once && time !== 0) {
            return this.http
                .get(this.config.env.frontend_server + "/api/data", {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map(function (res) { return res.Result; });
        }
        else if (source.Interval == 0) {
            return this.http
                .get(this.config.env.frontend_server + "/api/data", {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map(function (res) { return res.Result; });
        }
        else {
            time = time || Date.now();
            return Observable.timer(0, source.Interval).pipe(takeUntil(unsubscribe), switchMap(function (i) {
                return _this.http
                    .get(_this.config.env.frontend_server + "/api/data", {
                    params: {
                        sourceId: source._id,
                        time: _this.getFloorTime(source.Interval, time).toString()
                    }
                }).pipe(map(function (res) { return res.Result; }));
            }));
        }
    };
    /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    DiagramService.prototype.extract_columns_from_data = /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    function (data, columnsMappings) {
        /** @type {?} */
        var res = [];
        columnsMappings.forEach(function (item) {
            /** @type {?} */
            var ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            /** @type {?} */
            var NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map(function (_item, i) { return [_item].concat(ValueData[i]); })));
            }
            else {
                return res.push([NameData].concat(ValueData));
            }
        });
        return res;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.get_data_report = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return _.report(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.get_last_node_of_data = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return ((/** @type {?} */ (_.report(data)))).filter(function (item) { return item.isLastNode; });
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    DiagramService.prototype.buildChartConfig = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return {
            data: {
                columns: columns
            },
            legend: {
                show: true
            }
        };
    };
    /**
     * @param {?} config
     * @param {?} id
     * @param {?} route
     * @param {?} sync
     * @return {?}
     */
    DiagramService.prototype.generateDiagram = /**
     * @param {?} config
     * @param {?} id
     * @param {?} route
     * @param {?} sync
     * @return {?}
     */
    function (config, id, route, sync) {
        var _this = this;
        this.charts[id] = c3.generate(tslib_1.__assign({}, config, { bindto: "#diagram_" + id }));
        return this.getData((/** @type {?} */ ({})), new Subject(), sync).subscribe(function (data) {
            _this.charts[id].load({
                columns: _this.extract_columns_from_data(data.Data, config.ColumnMappings)
            });
        });
    };
    /**
     * @param {?=} precision
     * @param {?=} time
     * @return {?}
     */
    DiagramService.prototype.getFloorTime = /**
     * @param {?=} precision
     * @param {?=} time
     * @return {?}
     */
    function (precision, time) {
        if (precision === void 0) { precision = 60 * 1000; }
        if (time === void 0) { time = 0; }
        return Math.floor((time || Date.now()) / precision);
    };
    DiagramService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    DiagramService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: DiagramConfigurationService }
    ]; };
    /** @nocollapse */ DiagramService.ngInjectableDef = i0.defineInjectable({ factory: function DiagramService_Factory() { return new DiagramService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.DiagramConfigurationService)); }, token: DiagramService, providedIn: "root" });
    return DiagramService;
}());
export { DiagramService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQWdCLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUdwQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUk5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRDtJQUtDLHdCQUNTLElBQWdCLEVBQ2hCLEtBQTBCLEVBQzFCLG9CQUFpRDtRQUZqRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7O1FBd0kxRCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBdElYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBK0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQzthQUNuRixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLEVBQVIsQ0FBUSxDQUFDO2FBQzNCLEtBQUssQ0FB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YmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdXJjZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL2RpYWdyYW0uY29uZmlnXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVNlcnZpY2Uge1xyXG5cdGNvbmZpZzogRGlhZ3JhbU1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWc7XHJcblx0fVxyXG5cclxuXHRnZXREaWFncmFtcygpOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPih0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL2RpYWdyYW1cIilcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRTb3VyY2VzKCk6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvc291cmNlXCIpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldEdyb3VwcygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIFwiL2FwaS9kaWFncmFtL2dyb3Vwc1wiKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlIGFzIGFueSkuUmVzdWx0KVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXREaWFncmFtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKCFpZCkgZGVidWdnZXI7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGAvYXBpL2RpYWdyYW0vJHtpZH1gKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGFkZERpYWdyYW0oZGF0YTogYW55KTogT2JzZXJ2YWJsZTxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdDxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvZGlhZ3JhbVwiLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdHVwZGF0ZURpYWdyYW0oYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL2RpYWdyYW1cIiwgYm9keSlcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRkZWxldGVEaWFncmFtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZGVsZXRlKGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kaWFncmFtLyR7aWR9YClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXREYXRhKHNvdXJjZTogU291cmNlTW9kZWwsIHVuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+LCB0aW1lOiBudW1iZXIgPSAwLCBvbmNlOiBCb29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKG9uY2UgJiYgdGltZSAhPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0XHR9IGVsc2UgaWYgKHNvdXJjZS5JbnRlcnZhbCA9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHR0aW1lOiBudWxsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aW1lID0gdGltZSB8fCBEYXRlLm5vdygpO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aW1lcigwLCBzb3VyY2UuSW50ZXJ2YWwpLnBpcGUoXHJcblx0XHRcdFx0dGFrZVVudGlsKHVuc3Vic2NyaWJlKSxcclxuXHRcdFx0XHRzd2l0Y2hNYXAoKGkpID0+XHJcblx0XHRcdFx0XHR0aGlzLmh0dHBcclxuXHRcdFx0XHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KS5waXBlKFxyXG5cdFx0XHRcdFx0XHRcdG1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHQpXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YTogYW55LCBjb2x1bW5zTWFwcGluZ3MpIHtcclxuXHRcdGxldCByZXMgPSBbXTtcclxuXHJcblx0XHRjb2x1bW5zTWFwcGluZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRjb25zdCBWYWx1ZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uVmFsdWVQYXRoKTtcclxuXHJcblx0XHRcdGlmICghaXRlbS5OYW1lUGF0aCkge1xyXG5cdFx0XHRcdHJldHVybiByZXMucHVzaChbaXRlbS5WYWx1ZVBhdGguc3BsaXQoXCIuXCIpLnBvcCgpXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgTmFtZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uTmFtZVBhdGgpO1xyXG5cclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkoTmFtZURhdGEpKSB7XHJcblx0XHRcdFx0cmV0dXJuIChyZXMgPSByZXMuY29uY2F0KE5hbWVEYXRhLm1hcCgoX2l0ZW0sIGkpID0+IFtfaXRlbV0uY29uY2F0KFZhbHVlRGF0YVtpXSkpKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5wdXNoKFtOYW1lRGF0YV0uY29uY2F0KFZhbHVlRGF0YSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdGdldF9kYXRhX3JlcG9ydChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBfLnJlcG9ydChkYXRhKTtcclxuXHR9XHJcblx0Z2V0X2xhc3Rfbm9kZV9vZl9kYXRhKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIChfLnJlcG9ydChkYXRhKSBhcyBhbnlbXSkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlzTGFzdE5vZGUpO1xyXG5cdH1cclxuXHRidWlsZENoYXJ0Q29uZmlnKGNvbHVtbnMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRjb2x1bW5zXHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdHNob3c6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblx0Ly8gVE9ETzogaW1wbGVtZW50IGludGVyZmFjZSBvZiBjMyBjb25maWdcclxuXHRjaGFydHMgPSB7fTtcclxuXHRnZW5lcmF0ZURpYWdyYW0oY29uZmlnOiBhbnksIGlkOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcsIHN5bmM6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcblx0XHR0aGlzLmNoYXJ0c1tpZF0gPSBjMy5nZW5lcmF0ZSh7XHJcblx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHtpZH1gXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKHt9IGFzIFNvdXJjZU1vZGVsLCBuZXcgU3ViamVjdDx2b2lkPigpLCBzeW5jKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5jaGFydHNbaWRdLmxvYWQoe1xyXG5cdFx0XHRcdGNvbHVtbnM6IHRoaXMuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIGNvbmZpZy5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0Rmxvb3JUaW1lKHByZWNpc2lvbiA9IDYwICogMTAwMCwgdGltZTogbnVtYmVyID0gMCkge1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKHRpbWUgfHwgRGF0ZS5ub3coKSkgLyBwcmVjaXNpb24pO1xyXG5cdH1cclxufVxyXG4iXX0=