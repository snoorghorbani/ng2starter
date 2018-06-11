/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./diagram-configuration.service";
import { AddDiagramApiModel } from "../models";
import { DiagramConfigurationService } from "./diagram-configuration.service";
export class DiagramService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} userConfigurationService
     */
    constructor(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        // TODO: implement interface of c3 config
        this.charts = {};
    }
    /**
     * @return {?}
     */
    getDiagrams() {
        return this.http
            .get("http://localhost:3000/api/diagram")
            .map(response => response)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @return {?}
     */
    getSources() {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(response => (/** @type {?} */ (response)).Result)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @return {?}
     */
    getGroups() {
        return this.http
            .get("http://localhost:3000/api/diagram/groups")
            .map(response => (/** @type {?} */ (response)).Result)
            .catch(err => {
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
        return this.http.get(`http://localhost:3000/api/diagram/${id}`).map(response => response).catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    addDiagram(data) {
        var /** @type {?} */ model = new AddDiagramApiModel.Request(data);
        return this.http
            .post("http://localhost:3000/api/diagram", model.getRequestBody())
            .map(response => response)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateDiagram(body) {
        return this.http.put("http://localhost:3000/api/diagram", body).map(response => response).catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteDiagram(id) {
        return this.http.delete(`http://localhost:3000/api/diagram/${id}`).map(response => response).catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} source
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    getData(source, time = 0, once = false) {
        if (once && time !== 0) {
            return this.http
                .get(`http://localhost:3000/api/data`, {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map((res) => res.Result);
        }
        else if (source.Interval == 0) {
            return this.http
                .get(`http://localhost:3000/api/data`, {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map((res) => res.Result);
        }
        else {
            time = time || Date.now();
            return Observable.timer(0, source.Interval).switchMap(i => this.http
                .get(`http://localhost:3000/api/data`, {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map((res) => res.Result));
        }
    }
    /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    extract_columns_from_data(data, columnsMappings) {
        let /** @type {?} */ res = [];
        columnsMappings.forEach(item => {
            var /** @type {?} */ ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            var /** @type {?} */ NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map((item, i) => [item].concat(ValueData[i]))));
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
        return (/** @type {?} */ (_.report(data))).filter(item => item.isLastNode);
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
        return this.getData(/** @type {?} */ ({}), sync).subscribe(data => {
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
function DiagramService_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramService.prototype.charts;
    /** @type {?} */
    DiagramService.prototype.http;
    /** @type {?} */
    DiagramService.prototype.store;
    /** @type {?} */
    DiagramService.prototype.userConfigurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9kaWFncmFtLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxTQUFTLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7QUFHcEMsT0FBTyxFQUFFLGtCQUFrQixFQUFrRCxNQUFNLFdBQVcsQ0FBQztBQUMvRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVE5RSxNQUFNOzs7Ozs7SUFDTCxZQUNTLE1BQ0EsT0FDQTtRQUZBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCw2QkFBd0IsR0FBeEIsd0JBQXdCOztzQkF5SHhCLEVBQUU7S0F4SFA7Ozs7SUFFSixXQUFXO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUErQixtQ0FBbUMsQ0FBQzthQUN0RSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1osTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFDRCxVQUFVO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUFDLGtDQUFrQyxDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG1CQUFDLFFBQWUsRUFBQyxDQUFDLE1BQU0sQ0FBQzthQUN6QyxLQUFL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bmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsLCBHZXREaWFncmFtc0FwaU1vZGVsLCBEaWFncmFtTW9kZWwsIFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9kaWFncmFtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgdXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdGdldERpYWdyYW1zKCk6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtXCIpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRTb3VyY2VzKCk6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zb3VyY2VcIilcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRHcm91cHMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtL2dyb3Vwc1wiKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IChyZXNwb25zZSBhcyBhbnkpLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldERpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRpZiAoIWlkKSBkZWJ1Z2dlcjtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RpYWdyYW0vJHtpZH1gKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0YWRkRGlhZ3JhbShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdDxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtXCIsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHR1cGRhdGVEaWFncmFtKGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGlhZ3JhbVwiLCBib2R5KS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZGVsZXRlRGlhZ3JhbShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RpYWdyYW0vJHtpZH1gKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0RGF0YShzb3VyY2U6IFNvdXJjZU1vZGVsLCB0aW1lOiBudW1iZXIgPSAwLCBvbmNlOiBCb29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKG9uY2UgJiYgdGltZSAhPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHR0aW1lOiB0aGlzLmdldEZsb29yVGltZShzb3VyY2UuSW50ZXJ2YWwsIHRpbWUpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KTtcclxuXHRcdH0gZWxzZSBpZiAoc291cmNlLkludGVydmFsID09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0dGltZTogbnVsbFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGltZSA9IHRpbWUgfHwgRGF0ZS5ub3coKTtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGltZXIoMCwgc291cmNlLkludGVydmFsKS5zd2l0Y2hNYXAoaSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0XHR0aW1lOiB0aGlzLmdldEZsb29yVGltZShzb3VyY2UuSW50ZXJ2YWwsIHRpbWUpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGE6IGFueSwgY29sdW1uc01hcHBpbmdzKSB7XHJcblx0XHRsZXQgcmVzID0gW107XHJcblxyXG5cdFx0Y29sdW1uc01hcHBpbmdzLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdHZhciBWYWx1ZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uVmFsdWVQYXRoKTtcclxuXHJcblx0XHRcdGlmICghaXRlbS5OYW1lUGF0aCkge1xyXG5cdFx0XHRcdHJldHVybiByZXMucHVzaChbIGl0ZW0uVmFsdWVQYXRoLnNwbGl0KFwiLlwiKS5wb3AoKSBdLmNvbmNhdChWYWx1ZURhdGEpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgTmFtZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uTmFtZVBhdGgpO1xyXG5cclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkoTmFtZURhdGEpKSB7XHJcblx0XHRcdFx0cmV0dXJuIChyZXMgPSByZXMuY29uY2F0KE5hbWVEYXRhLm1hcCgoaXRlbSwgaSkgPT4gWyBpdGVtIF0uY29uY2F0KFZhbHVlRGF0YVtpXSkpKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5wdXNoKFsgTmFtZURhdGEgXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Z2V0X2RhdGFfcmVwb3J0KGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIF8ucmVwb3J0KGRhdGEpO1xyXG5cdH1cclxuXHRnZXRfbGFzdF9ub2RlX29mX2RhdGEoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gKF8ucmVwb3J0KGRhdGEpIGFzIGFueVtdKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlzTGFzdE5vZGUpO1xyXG5cdH1cclxuXHRidWlsZENoYXJ0Q29uZmlnKGNvbHVtbnMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRjb2x1bW5zXHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdHNob3c6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblx0Ly8gVE9ETzogaW1wbGVtZW50IGludGVyZmFjZSBvZiBjMyBjb25maWdcclxuXHRjaGFydHMgPSB7fTtcclxuXHRnZW5lcmF0ZURpYWdyYW0oY29uZmlnOiBhbnksIGlkOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcsIHN5bmM6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcblx0XHR0aGlzLmNoYXJ0c1tpZF0gPSBjMy5nZW5lcmF0ZSh7XHJcblx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHtpZH1gXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKHt9IGFzIFNvdXJjZU1vZGVsLCBzeW5jKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuY2hhcnRzW2lkXS5sb2FkKHtcclxuXHRcdFx0XHRjb2x1bW5zOiB0aGlzLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCBjb25maWcuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldEZsb29yVGltZShwcmVjaXNpb24gPSA2MCAqIDEwMDAsIHRpbWU6IG51bWJlciA9IDApIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKCh0aW1lIHx8IERhdGUubm93KCkpIC8gcHJlY2lzaW9uKTtcclxuXHR9XHJcbn1cclxuIl19