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
        debugger;
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
        debugger;
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
        debugger;
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
//# sourceMappingURL=diagram.service.js.map
