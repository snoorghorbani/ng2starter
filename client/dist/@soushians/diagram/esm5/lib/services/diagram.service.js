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
var DiagramService = /** @class */ (function () {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} userConfigurationService
     */
    function DiagramService(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        // TODO: implement interface of c3 config
        this.charts = {};
    }
    /**
     * @return {?}
     */
    DiagramService.prototype.getDiagrams = function () {
        return this.http
            .get("http://localhost:3000/api/diagram")
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    DiagramService.prototype.getSources = function () {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(function (response) { return ((response)).Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    DiagramService.prototype.getGroups = function () {
        return this.http
            .get("http://localhost:3000/api/diagram/groups")
            .map(function (response) { return ((response)).Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.getDiagram = function (id) {
        debugger;
        if (!id)
            debugger;
        return this.http.get("http://localhost:3000/api/diagram/" + id).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.addDiagram = function (data) {
        var /** @type {?} */ model = new AddDiagramApiModel.Request(data);
        debugger;
        return this.http
            .post("http://localhost:3000/api/diagram", model.getRequestBody())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    DiagramService.prototype.updateDiagram = function (body) {
        debugger;
        return this.http.put("http://localhost:3000/api/diagram", body).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.deleteDiagram = function (id) {
        return this.http.delete("http://localhost:3000/api/diagram/" + id).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} source
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    DiagramService.prototype.getData = function (source, time, once) {
        var _this = this;
        if (time === void 0) { time = 0; }
        if (once === void 0) { once = false; }
        if (once && time !== 0) {
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map(function (res) { return res.Result; });
        }
        else if (source.Interval == 0) {
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map(function (res) { return res.Result; });
        }
        else {
            time = time || Date.now();
            return Observable.timer(0, source.Interval).switchMap(function (i) { return _this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: _this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map(function (res) { return res.Result; }); });
        }
    };
    /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    DiagramService.prototype.extract_columns_from_data = function (data, columnsMappings) {
        var /** @type {?} */ res = [];
        columnsMappings.forEach(function (item) {
            var /** @type {?} */ ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            var /** @type {?} */ NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map(function (item, i) { return [item].concat(ValueData[i]); })));
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
    DiagramService.prototype.get_data_report = function (data) {
        return _.report(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.get_last_node_of_data = function (data) {
        return ((_.report(data))).filter(function (item) { return item.isLastNode; });
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    DiagramService.prototype.buildChartConfig = function (columns) {
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
    DiagramService.prototype.generateDiagram = function (config, id, route, sync) {
        var _this = this;
        this.charts[id] = c3.generate(Object.assign({}, config, { bindto: "#diagram_" + id }));
        return this.getData(/** @type {?} */ ({}), sync).subscribe(function (data) {
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
    DiagramService.prototype.getFloorTime = function (precision, time) {
        if (precision === void 0) { precision = 60 * 1000; }
        if (time === void 0) { time = 0; }
        return Math.floor((time || Date.now()) / precision);
    };
    return DiagramService;
}());
export { DiagramService };
DiagramService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
DiagramService.ctorParameters = function () { return [
    { type: HttpClient },
    { type: Store },
    { type: DiagramConfigurationService }
]; };
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
//# sourceMappingURL=diagram.service.js.map
