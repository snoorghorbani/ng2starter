(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store'), require('@ngrx/effects'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/material'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@soushians/shared'), require('rxjs/Rx'), require('rxjs/Observable'), require('rxjs/observable/of'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@soushians/source', ['exports', '@angular/core', '@ngrx/store', '@ngrx/effects', '@angular/common', '@angular/router', '@angular/forms', '@angular/common/http', '@angular/flex-layout', '@angular/material', '@angular/platform-browser', '@angular/platform-browser/animations', '@soushians/shared', 'rxjs/Rx', 'rxjs/Observable', 'rxjs/observable/of', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.source = {}), global.ng.core, global.store, global.effects, global.ng.common, global.ng.router, global.ng.forms, global.ng.common.http, global.ng['flex-layout'], global.ng.material, global.ng.platformBrowser, global.ng.platformBrowser.animations, global.shared, global.rxjs.Rx, global.rxjs.Observable, global.rxjs['observable/of'], global.rxjs.operators));
}(this, function (exports, core, store, effects, common, router, forms, http, flexLayout, material, platformBrowser, animations, shared, Rx, Observable, of, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SourceActionTypes = {
        SOURCE_SUBMIT: "[SOURCE] source submit",
        SOURCE_SUBMIT_SUCCEED: "[SOURCE] source submit succeed",
        SOURCE_SUBMIT_FAILED: "[SOURCE] source submit failed",
    };
    var SourceSubmit = /** @class */ (function () {
        function SourceSubmit(payload) {
            this.payload = payload;
            this.type = SourceActionTypes.SOURCE_SUBMIT;
        }
        return SourceSubmit;
    }());
    if (false) {
        /** @type {?} */
        SourceSubmit.prototype.type;
        /** @type {?} */
        SourceSubmit.prototype.payload;
    }
    var SourceSubmitSucceed = /** @class */ (function () {
        function SourceSubmitSucceed() {
            this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
        }
        return SourceSubmitSucceed;
    }());
    if (false) {
        /** @type {?} */
        SourceSubmitSucceed.prototype.type;
    }
    var SourceSubmitFailed = /** @class */ (function () {
        function SourceSubmitFailed() {
            this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
        }
        return SourceSubmitFailed;
    }());
    if (false) {
        /** @type {?} */
        SourceSubmitFailed.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function State() { }
    if (false) {
        /** @type {?} */
        State.prototype.data;
    }
    var ɵ0 = [];
    /** @type {?} */
    var initialState = {
        data: ɵ0
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function Reducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case SourceActionTypes.SOURCE_SUBMIT:
                return __assign({}, state);
            case SourceActionTypes.SOURCE_SUBMIT_SUCCEED:
                return __assign({}, state);
            case SourceActionTypes.SOURCE_SUBMIT_FAILED:
                return __assign({}, state);
            default:
                return state;
        }
    }
    /** @type {?} */
    var getSourceListData = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.data; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SourceState() { }
    if (false) {
        /** @type {?} */
        SourceState.prototype.list;
    }
    /** @type {?} */
    var SourceReducers = {
        sources: Reducer
    };
    /**
     * @record
     */
    function FeatureState() { }
    if (false) {
        /** @type {?} */
        FeatureState.prototype.sources;
    }
    //#region selectors
    /** @type {?} */
    var selectSourceState = store.createFeatureSelector("source");
    //#endregion
    var ɵ0$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.list; };
    /** @type {?} */
    var getSourceList = store.createSelector(selectSourceState, (ɵ0$1));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceModel = /** @class */ (function () {
        function SourceModel(initValue) {
            var _this = this;
            if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this[key] = initValue[key]; }));
        }
        return SourceModel;
    }());
    if (false) {
        /** @type {?} */
        SourceModel.prototype._id;
        /** @type {?} */
        SourceModel.prototype.Endpoint;
        /** @type {?} */
        SourceModel.prototype.Interval;
        /** @type {?} */
        SourceModel.prototype.IsActive;
        /** @type {?} */
        SourceModel.prototype.Thresholds;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetSourcesApiModel;
    (function (GetSourcesApiModel) {
        // export class Request implements HttpRequestBaseModel<Request> {
        var 
        // export class Request implements HttpRequestBaseModel<Request> {
        Request = /** @class */ (function () {
            function Request(initValue) {
                var _this = this;
                if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
                Object.keys(initValue).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (_this[key] = initValue[key]); }));
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
            function () {
                return {};
            };
            return Request;
        }());
        GetSourcesApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        GetSourcesApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(GetSourcesApiModel || (GetSourcesApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertSourceApiModel;
    (function (UpsertSourceApiModel) {
        // export class Request implements HttpRequestBaseModel<Request> {
        var 
        // export class Request implements HttpRequestBaseModel<Request> {
        Request = /** @class */ (function () {
            function Request(initValue) {
                var _this = this;
                if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
                Object.keys(initValue).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (_this[key] = initValue[key]); }));
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
            function () {
                return {
                    _id: this._id,
                    Endpoint: this.Endpoint,
                    Interval: this.Interval,
                    IsActive: this.IsActive,
                    Thresholds: this.Thresholds
                };
            };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", [forms.Validators.required]),
                        Endpoint: new forms.FormControl("", [forms.Validators.required]),
                        Interval: new forms.FormControl("", [forms.Validators.required]),
                        IsActive: new forms.FormControl("false", [forms.Validators.required]),
                        Thresholds: new forms.FormArray([])
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        UpsertSourceApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype._id;
            /** @type {?} */
            Request.prototype.Endpoint;
            /** @type {?} */
            Request.prototype.Interval;
            /** @type {?} */
            Request.prototype.IsActive;
            /** @type {?} */
            Request.prototype.Thresholds;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertSourceApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(UpsertSourceApiModel || (UpsertSourceApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceService = /** @class */ (function () {
        function SourceService(http) {
            this.http = http;
        }
        /**
         * @return {?}
         */
        SourceService.prototype.getSources = /**
         * @return {?}
         */
        function () {
            return this.http
                .get("http://localhost:3000/api/source")
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                return response;
            }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                return Rx.Observable.throw(err);
            }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        SourceService.prototype.getSourceById = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return this.http
                .get("http://localhost:3000/api/source/" + id)
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                return Rx.Observable.throw(err);
            }));
        };
        /**
         * @param {?} body
         * @return {?}
         */
        SourceService.prototype.upsertSource = /**
         * @param {?} body
         * @return {?}
         */
        function (body) {
            /** @type {?} */
            var model = new UpsertSourceApiModel.Request(body);
            return this.http
                .put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response; }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                return Rx.Observable.throw(err);
            }));
        };
        /**
         * @param {?} source
         * @param {?=} time
         * @return {?}
         */
        SourceService.prototype.getData = /**
         * @param {?} source
         * @param {?=} time
         * @return {?}
         */
        function (source, time) {
            if (time === void 0) { time = 0; }
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res.Result; }));
        };
        SourceService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        SourceService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ SourceService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SourceService_Factory() { return new SourceService(core.ɵɵinject(http.HttpClient)); }, token: SourceService, providedIn: "root" });
        return SourceService;
    }());
    if (false) {
        /** @type {?} */
        SourceService.prototype.responseCache;
        /**
         * @type {?}
         * @private
         */
        SourceService.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceModuleContainerComponent = /** @class */ (function () {
        function SourceModuleContainerComponent(service) {
            this.service = service;
        }
        /**
         * @return {?}
         */
        SourceModuleContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        SourceModuleContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "source-module-container",
                        template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"
                    }] }
        ];
        /** @nocollapse */
        SourceModuleContainerComponent.ctorParameters = function () { return [
            { type: SourceService }
        ]; };
        return SourceModuleContainerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SourceModuleContainerComponent.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { SourceUpsertAction } from 'app/actions';
    var SourceListComponent = /** @class */ (function () {
        function SourceListComponent(sourceService // private store: Store<FeatureReducer.FeatureState>
        ) {
            this.sourceService = sourceService;
            this.sources = this.sourceService.getSources();
            // this.sources.subscribe(data => { debugger})
            //this.configs.subscribe(data => {
            //        debugger;
            //        this.store.dispatch(new ConfigLoaded(data.Result));
            //});
        }
        /**
         * @return {?}
         */
        SourceListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        SourceListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "source-list",
                        template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">\r\n  <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">\r\n      <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">\r\n        \r\n        <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">\r\n          <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>\r\n        </a>\r\n        <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>\r\n      </mat-card-title>\r\n    \r\n  </mat-card>\r\n\r\n  <div fxLayoutAlign='end center'>\r\n    <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n",
                        styles: [":host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
                    }] }
        ];
        /** @nocollapse */
        SourceListComponent.ctorParameters = function () { return [
            { type: SourceService }
        ]; };
        return SourceListComponent;
    }());
    if (false) {
        /** @type {?} */
        SourceListComponent.prototype.sources;
        /**
         * @type {?}
         * @private
         */
        SourceListComponent.prototype.sourceService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceUpsertComponent = /** @class */ (function () {
        function SourceUpsertComponent(sourceService, formBuilder, route, store) {
            var _this = this;
            this.sourceService = sourceService;
            this.formBuilder = formBuilder;
            this.route = route;
            this.store = store;
            //configInforamation;
            this.formGroup = UpsertSourceApiModel.Request.formGroup;
            this.types = ["critical", "goal"];
            // this.sources = this.sourceService.getSources();
            this.thresholds = ((/** @type {?} */ (this.formGroup.controls.Thresholds))).controls;
            this.route.params.subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                /** @type {?} */
                var sourceId = params["id"];
                sourceId &&
                    _this.sourceService.getSourceById(sourceId).subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        _this.formGroup.patchValue({
                            _id: data._id,
                            Endpoint: data.Endpoint,
                            Interval: data.Interval,
                            IsActive: data.IsActive || false,
                            Thresholds: data.Thresholds
                        });
                        data.Thresholds.forEach((/**
                         * @param {?} mapping
                         * @return {?}
                         */
                        function (mapping) {
                            return _this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type);
                        }));
                    }));
            }));
        }
        /**
         * @return {?}
         */
        SourceUpsertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?=} Name
         * @param {?=} Formula
         * @param {?=} Message
         * @param {?=} Type
         * @return {?}
         */
        SourceUpsertComponent.prototype.addItem = /**
         * @param {?=} Name
         * @param {?=} Formula
         * @param {?=} Message
         * @param {?=} Type
         * @return {?}
         */
        function (Name, Formula, Message, Type) {
            if (Name === void 0) { Name = ""; }
            if (Formula === void 0) { Formula = ""; }
            if (Message === void 0) { Message = ""; }
            if (Type === void 0) { Type = "critical"; }
            /** @type {?} */
            var control = (/** @type {?} */ (this.formGroup.controls["Thresholds"]));
            control.push(new forms.FormGroup({
                Name: new forms.FormControl(Name, [forms.Validators.required]),
                Formula: new forms.FormControl(Formula, [forms.Validators.required]),
                Message: new forms.FormControl(Message, [forms.Validators.required]),
                Type: new forms.FormControl(Type, [forms.Validators.required])
            }));
            //    control.push(this.formBuilder.group({
            //      Name: [Name],
            //      Formula: [Formula],
            //      Message: [Message]
            //    }));
        };
        /**
         * @param {?} i
         * @return {?}
         */
        SourceUpsertComponent.prototype.removeItem = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            /** @type {?} */
            var control = (/** @type {?} */ (this.formGroup.controls["Thresholds"]));
            control.removeAt(i);
        };
        /**
         * @return {?}
         */
        SourceUpsertComponent.prototype.getData = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var o$ = this.sourceService.getData(this.formGroup.value);
            o$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.data = data.Data;
            }));
            return o$;
        };
        /**
         * @param {?} data
         * @return {?}
         */
        SourceUpsertComponent.prototype.add = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            //if (!this.formGroup.valid) return;
            this.store.dispatch(new SourceSubmit(this.formGroup.value));
        };
        SourceUpsertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "source-source-upsert",
                        template: "<div fxLayout=\"column\">\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayout=\"column\" fxFlex=\"50\">\r\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n\r\n        <mat-card-header>\r\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n          </div>\r\n        </mat-card-content>\r\n      </form>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"20\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div>\r\n          <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <!-- TODO: -->\r\n          <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"30\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n          <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">\r\n            <div fxLayout=\"column\">\r\n              <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">\r\n                </mat-form-field>\r\n                <mat-radio-group formControlName=\"Type\" fxFlexFill>\r\n                  <label>\u0646\u0648\u0639 :</label>\r\n                  <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">\r\n                    {{item}}\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n\r\n                <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\r\n              </div>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\r\n      <mat-card-content>\r\n        <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>\r\n        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n",
                        styles: ["mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}"]
                    }] }
        ];
        /** @nocollapse */
        SourceUpsertComponent.ctorParameters = function () { return [
            { type: SourceService },
            { type: forms.FormBuilder },
            { type: router.ActivatedRoute },
            { type: store.Store }
        ]; };
        return SourceUpsertComponent;
    }());
    if (false) {
        /** @type {?} */
        SourceUpsertComponent.prototype.formGroup;
        /** @type {?} */
        SourceUpsertComponent.prototype.sources;
        /** @type {?} */
        SourceUpsertComponent.prototype.thresholds;
        /** @type {?} */
        SourceUpsertComponent.prototype.data;
        /** @type {?} */
        SourceUpsertComponent.prototype.types;
        /**
         * @type {?}
         * @private
         */
        SourceUpsertComponent.prototype.sourceService;
        /**
         * @type {?}
         * @private
         */
        SourceUpsertComponent.prototype.formBuilder;
        /**
         * @type {?}
         * @private
         */
        SourceUpsertComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        SourceUpsertComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "source",
            component: SourceModuleContainerComponent,
            children: [
                {
                    path: "",
                    component: SourceListComponent
                },
                {
                    path: "edit/:id",
                    component: SourceUpsertComponent
                },
                {
                    path: "add",
                    component: SourceUpsertComponent
                }
            ]
        }
    ];
    /** @type {?} */
    var RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceEffects = /** @class */ (function () {
        function SourceEffects(actions$, router, sourceService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.sourceService = sourceService;
            this.afterSubmitSource$ = this.actions$.pipe(effects.ofType(SourceActionTypes.SOURCE_SUBMIT), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return _this.sourceService
                    .upsertSource(data)
                    .pipe(operators.map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return new SourceSubmitSucceed(); })), operators.catchError((/**
                 * @return {?}
                 */
                function () { return of.of(new SourceSubmitFailed()); })));
            })));
            this.SigninSucceed$ = this.actions$.pipe(effects.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED), operators.switchMap((/**
             * @return {?}
             */
            function () {
                _this.router.navigate(["source"]);
                return Observable.Observable.empty();
            })));
        }
        SourceEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SourceEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: SourceService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], SourceEffects.prototype, "afterSubmitSource$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], SourceEffects.prototype, "SigninSucceed$", void 0);
        return SourceEffects;
    }());
    if (false) {
        /** @type {?} */
        SourceEffects.prototype.afterSubmitSource$;
        /** @type {?} */
        SourceEffects.prototype.SigninSucceed$;
        /**
         * @type {?}
         * @private
         */
        SourceEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        SourceEffects.prototype.router;
        /**
         * @type {?}
         * @private
         */
        SourceEffects.prototype.sourceService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceModule = /** @class */ (function () {
        function SourceModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.source = "8.0.10";
        }
        SourceModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            http.HttpClientModule,
                            flexLayout.FlexLayoutModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSnackBarModule,
                            material.MatSidenavModule,
                            material.MatExpansionModule,
                            material.MatSelectModule,
                            material.MatFormFieldModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatCheckboxModule,
                            material.MatRadioModule,
                            material.MatInputModule,
                            material.MatToolbarModule,
                            material.MatDatepickerModule,
                            material.MatProgressBarModule,
                            platformBrowser.BrowserModule,
                            store.StoreModule.forFeature("source", SourceReducers),
                            animations.BrowserAnimationsModule,
                            RoutingModule,
                            effects.EffectsModule.forFeature([SourceEffects]),
                            shared.SharedModule
                        ],
                        declarations: [SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent],
                        exports: []
                    },] }
        ];
        /** @nocollapse */
        SourceModule.ctorParameters = function () { return []; };
        return SourceModule;
    }());

    exports.SourceModule = SourceModule;
    exports.ɵa = SourceReducers;
    exports.ɵb = Reducer;
    exports.ɵc = RoutingModule;
    exports.ɵd = SourceModuleContainerComponent;
    exports.ɵe = SourceService;
    exports.ɵf = SourceListComponent;
    exports.ɵg = SourceUpsertComponent;
    exports.ɵi = SourceEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-source.umd.js.map
