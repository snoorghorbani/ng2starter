/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { EditConfigApiModel } from "../models";
import { GetConfigAction } from "../actions";
import { ConfigurationService } from "./configuration.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./configuration.service";
var ConfigService = /** @class */ (function () {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    function ConfigService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.configsEndpoint = this.configurationService.config.env.production
            ? this.configurationService.config.prod_api_host
            : this.configurationService.config.dev_api_host;
        setTimeout(function () {
            _this.store.dispatch(new GetConfigAction());
        }, 999);
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.getConfigs = function () {
        var _this = this;
        return (this.http
            .get(this.configsEndpoint + "/api/config")
            .take(1)
            .map(function (response) {
            if (_this.configurationService.config.env.production) {
                var /** @type {?} */ dev_api_host = _this.configurationService.config.dev_api_host;
                var /** @type {?} */ prod_api_host = _this.configurationService.config.prod_api_host;
                return JSON.parse(JSON.stringify(response).replace(new RegExp(dev_api_host, "g"), prod_api_host)).Result;
            }
            else {
                return response.Result;
            }
        })
            .catch(function (err) {
            return Observable.throw(err);
        }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ConfigService.prototype.getConfigByName = function (name) {
        return this.http.get(this.configsEndpoint + "/api/config/" + name).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    ConfigService.prototype.editConfig = function (body) {
        var /** @type {?} */ model = new EditConfigApiModel.Request(body);
        return this.http
            .put(this.configsEndpoint + "/api/config/" + model.Name, model.getRequestBody())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getLayoutConfigs = function () {
        return this.http
            .get(this.configsEndpoint + "/api/layout-config")
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    return ConfigService;
}());
export { ConfigService };
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
ConfigService.ctorParameters = function () { return [
    { type: HttpClient },
    { type: Store },
    { type: ConfigurationService }
]; };
/** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.ConfigurationService)); }, token: ConfigService, providedIn: "root" });
function ConfigService_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigService.prototype.responseCache;
    /** @type {?} */
    ConfigService.prototype.configsEndpoint;
    /** @type {?} */
    ConfigService.prototype.http;
    /** @type {?} */
    ConfigService.prototype.store;
    /** @type {?} */
    ConfigService.prototype.configurationService;
}
//# sourceMappingURL=config.service.js.map
