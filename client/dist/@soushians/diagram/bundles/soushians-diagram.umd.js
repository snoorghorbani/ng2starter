(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/material'), require('@ngrx/store'), require('@ngrx/effects'), require('rxjs'), require('rxjs/BehaviorSubject'), require('rxjs/Rx'), require('rxjs/operators'), require('rxjs/Observable'), require('rxjs/observable/of')) :
    typeof define === 'function' && define.amd ? define('@soushians/diagram', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/forms', '@angular/common/http', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/material', '@ngrx/store', '@ngrx/effects', 'rxjs', 'rxjs/BehaviorSubject', 'rxjs/Rx', 'rxjs/operators', 'rxjs/Observable', 'rxjs/observable/of'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.diagram = {}), global.ng.core, global.ng.common, global.ng.router, global.ng.forms, global.ng.common.http, global.ng['flex-layout'], global.ng.platformBrowser.animations, global.ng.material, global.store, global.effects, global.rxjs, global.rxjs.BehaviorSubject, global.rxjs.Rx, global.rxjs.operators, global.rxjs.Observable, global.rxjs['observable/of']));
}(this, function (exports, core, common, router, forms, http, flexLayout, animations, material, store, effects, rxjs, BehaviorSubject, Rx, operators, Observable, of) { 'use strict';

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
    /**
     * @record
     */
    function DiagramModuleConfig() { }
    if (false) {
        /** @type {?|undefined} */
        DiagramModuleConfig.prototype.endpoints;
        /** @type {?|undefined} */
        DiagramModuleConfig.prototype.env;
    }
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        endpoints: {},
        env: {
            production: false,
            frontend_server: "frontend/server/did/not/set"
        }
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("DiagramModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetDiagramsApiModel;
    (function (GetDiagramsApiModel) {
        var Request = /** @class */ (function () {
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
        GetDiagramsApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.diagram;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        GetDiagramsApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(GetDiagramsApiModel || (GetDiagramsApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DiagramsActionTypes = {
        GET_DIAGRAM: "[DIAGRAM] GET_DIAGRAM",
        GET_DIAGRAM_START: "[DIAGRAM] GET_DIAGRAM_START",
        GET_DIAGRAM_SUCCEED: "[DIAGRAM] GET_DIAGRAM_SUCCEED",
        GET_DIAGRAM_FAILED: "[DIAGRAM] GET_DIAGRAM_FAILED",
    };
    var GetDiagrams = /** @class */ (function () {
        function GetDiagrams() {
            this.type = DiagramsActionTypes.GET_DIAGRAM;
        }
        return GetDiagrams;
    }());
    if (false) {
        /** @type {?} */
        GetDiagrams.prototype.type;
    }
    var GetDiagramsStart = /** @class */ (function () {
        function GetDiagramsStart() {
            this.type = DiagramsActionTypes.GET_DIAGRAM_START;
        }
        return GetDiagramsStart;
    }());
    if (false) {
        /** @type {?} */
        GetDiagramsStart.prototype.type;
    }
    var GetDiagramsSucceed = /** @class */ (function () {
        function GetDiagramsSucceed(payload) {
            this.payload = payload;
            this.type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
        }
        return GetDiagramsSucceed;
    }());
    if (false) {
        /** @type {?} */
        GetDiagramsSucceed.prototype.type;
        /** @type {?} */
        GetDiagramsSucceed.prototype.payload;
    }
    var GetDiagramsFailed = /** @class */ (function () {
        function GetDiagramsFailed() {
            this.type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
        }
        return GetDiagramsFailed;
    }());
    if (false) {
        /** @type {?} */
        GetDiagramsFailed.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    console.log(GetDiagramsApiModel);
    /**
     * @record
     */
    function State() { }
    if (false) {
        /** @type {?} */
        State.prototype.loaded;
        /** @type {?} */
        State.prototype.diagram;
    }
    /** @type {?} */
    var initialState = {
        loaded: false,
        diagram: {
            Result: []
        }
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function diagramReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case DiagramsActionTypes.GET_DIAGRAM: {
                return __assign({}, state, { loaded: true });
            }
            case DiagramsActionTypes.GET_DIAGRAM_START: {
                return __assign({}, state, { loaded: true });
            }
            default: {
                return state;
            }
        }
    }
    /** @type {?} */
    var DiagramInfo = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.diagram; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditDiagramApiModel;
    (function (EditDiagramApiModel) {
        var Request = /** @class */ (function () {
            function Request(params) {
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestQueryParams = /**
             * @return {?}
             */
            function () {
                return {};
            };
            Object.defineProperty(Request, "formGroup", {
                // TODO:
                get: 
                // TODO:
                /**
                 * @return {?}
                 */
                function () {
                    return new forms.FormGroup({
                        Name: new forms.FormControl("", [forms.Validators.required]),
                        IsActive: new forms.FormControl("true", [forms.Validators.required]),
                        Route: new forms.FormControl("", [forms.Validators.required])
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        EditDiagramApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        EditDiagramApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(EditDiagramApiModel || (EditDiagramApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var EditDiagramActionTypes = {
        EDIT_DIAGRAM: "[DIAGRAM][EDIT] EDIT_DIAGRAM",
        EDIT_DIAGRAM_START: "[DIAGRAM][EDIT] EDIT_DIAGRAM_START",
        EDIT_DIAGRAM_SUCCEED: "[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED",
        EDIT_DIAGRAM_FAILED: "[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED",
    };
    var EditDiagramAction = /** @class */ (function () {
        function EditDiagramAction(payload) {
            this.payload = payload;
            this.type = EditDiagramActionTypes.EDIT_DIAGRAM;
        }
        return EditDiagramAction;
    }());
    if (false) {
        /** @type {?} */
        EditDiagramAction.prototype.type;
        /** @type {?} */
        EditDiagramAction.prototype.payload;
    }
    var EditDiagramActionStart = /** @class */ (function () {
        function EditDiagramActionStart(payload) {
            this.payload = payload;
            this.type = EditDiagramActionTypes.EDIT_DIAGRAM_START;
        }
        return EditDiagramActionStart;
    }());
    if (false) {
        /** @type {?} */
        EditDiagramActionStart.prototype.type;
        /** @type {?} */
        EditDiagramActionStart.prototype.payload;
    }
    var EditDiagramActionSucceed = /** @class */ (function () {
        function EditDiagramActionSucceed(payload) {
            this.payload = payload;
            this.type = EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED;
        }
        return EditDiagramActionSucceed;
    }());
    if (false) {
        /** @type {?} */
        EditDiagramActionSucceed.prototype.type;
        /** @type {?} */
        EditDiagramActionSucceed.prototype.payload;
    }
    var EditDiagramActionFailed = /** @class */ (function () {
        function EditDiagramActionFailed() {
            this.type = EditDiagramActionTypes.EDIT_DIAGRAM_FAILED;
        }
        return EditDiagramActionFailed;
    }());
    if (false) {
        /** @type {?} */
        EditDiagramActionFailed.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    console.log(EditDiagramApiModel);
    /**
     * @record
     */
    function State$1() { }
    if (false) {
        /** @type {?} */
        State$1.prototype.status;
        /** @type {?} */
        State$1.prototype.data;
    }
    var ɵ0 = ({ Result: {} });
    /** @type {?} */
    var initialState$1 = {
        status: "pristine",
        data: (/** @type {?} */ (ɵ0))
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function Reducer(state, action) {
        if (state === void 0) { state = initialState$1; }
        switch (action.type) {
            case EditDiagramActionTypes.EDIT_DIAGRAM: {
                return __assign({}, state, { status: "dirty", data: new EditDiagramApiModel.Response() });
            }
            case EditDiagramActionTypes.EDIT_DIAGRAM_START: {
                return __assign({}, state, { status: "pending", data: new EditDiagramApiModel.Response() });
            }
            case EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED: {
                return __assign({}, state, { status: "succeed" });
            }
            case EditDiagramActionTypes.EDIT_DIAGRAM_FAILED: {
                return __assign({}, state, { status: "failed" });
            }
            default: {
                return state;
            }
        }
    }
    /** @type {?} */
    var EditDiagramInfo = (/**
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
    function State$2() { }
    if (false) {
        /** @type {?} */
        State$2.prototype.route;
        /** @type {?} */
        State$2.prototype.result;
    }
    /** @type {?} */
    var initialState$2 = {
        route: "",
        result: false
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function ParentGuardReducer(state, action) {
        if (state === void 0) { state = initialState$2; }
        switch (action.type) {
            default: {
                return state;
            }
        }
    }
    /** @type {?} */
    var getParentRoutingGuard = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DiagramState() { }
    if (false) {
        /** @type {?} */
        DiagramState.prototype.diagrams;
        /** @type {?} */
        DiagramState.prototype.editDiagram;
        /** @type {?} */
        DiagramState.prototype.parentGuard;
    }
    /** @type {?} */
    var DiagramReducers = {
        diagrams: diagramReducer,
        editDiagram: Reducer,
        parentGuard: ParentGuardReducer
    };
    /**
     * @record
     */
    function FeatureState() { }
    if (false) {
        /** @type {?} */
        FeatureState.prototype.diagram;
    }
    //#region selectors
    /** @type {?} */
    var selectFeatureState = store.createFeatureSelector("diagram");
    // export const getDiagramInformationStatus = createSelector(
    //   selectFeatureState,
    //   (state: DiagramState) => state.diagram
    // );
    //#region edit diagram
    var ɵ0$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.editDiagram; };
    /** @type {?} */
    var selectEditDiagramState = store.createSelector(selectFeatureState, (ɵ0$1));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServerStatusDiagramComponent = /** @class */ (function () {
        function ServerStatusDiagramComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new rxjs.BehaviorSubject(false);
            this.data = this.injector.get("data");
        }
        Object.defineProperty(ServerStatusDiagramComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                this._data = data;
                this.dataLoaded.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} e
         * @return {?}
         */
        ServerStatusDiagramComponent.prototype.timeChange = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // this.dataSubscribtion.unsubscribe();
            // this.dataSubscribtion = this.diagramService.getData(this.data.Source._id, this.data.Source.Interval)
            //   .subscribe(data => {
            //     debugger
            //     this.chart.load({
            //       columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
            //     });
            //   })
        };
        /**
         * @return {?}
         */
        ServerStatusDiagramComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        ServerStatusDiagramComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagram-server-status",
                        template: "<div *ngIf=\"dataLoaded | async\">\r\n  <!-- <mat-icon [ngClass]=\"dataStatus$ ? 'connected' : 'disconnected'\">\r\n    fiber_manual_record\r\n  </mat-icon> -->\r\n  <!-- <span *ngIf=\"dataStatus$\">{{data.Widget.booleano.SuccessMessage}}</span>\r\n  <span *ngIf=\"!dataStatus$\">{{data.Widget.booleano.FailureMessage}}</span> -->\r\n</div>",
                        styles: [".disconnected{color:#ba3030}.connected{color:#30ae1c}.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
                    }] }
        ];
        /** @nocollapse */
        ServerStatusDiagramComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        ServerStatusDiagramComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return ServerStatusDiagramComponent;
    }());
    if (false) {
        /** @type {?} */
        ServerStatusDiagramComponent.prototype.dataSubscribtion;
        /** @type {?} */
        ServerStatusDiagramComponent.prototype.dataLoaded;
        /** @type {?} */
        ServerStatusDiagramComponent.prototype._data;
        /**
         * @type {?}
         * @private
         */
        ServerStatusDiagramComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DiagramPartialConfigEditComponent = /** @class */ (function () {
        function DiagramPartialConfigEditComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
        }
        Object.defineProperty(DiagramPartialConfigEditComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                this._data = data;
                this.dataLoaded.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DiagramPartialConfigEditComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
            //   .subscribe(data => {
            //     debugger;
            //   });
        };
        /**
         * @return {?}
         */
        DiagramPartialConfigEditComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion.unsubscribe();
        };
        /**
         * @return {?}
         */
        DiagramPartialConfigEditComponent.prototype.configChanged = /**
         * @return {?}
         */
        function () { };
        DiagramPartialConfigEditComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagram-partial-config-edit",
                        template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\r\n  </div>\r\n</form>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    }] }
        ];
        /** @nocollapse */
        DiagramPartialConfigEditComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        DiagramPartialConfigEditComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return DiagramPartialConfigEditComponent;
    }());
    if (false) {
        /** @type {?} */
        DiagramPartialConfigEditComponent.prototype.dataSubscribtion;
        /** @type {?} */
        DiagramPartialConfigEditComponent.prototype.dataLoaded;
        /** @type {?} */
        DiagramPartialConfigEditComponent.prototype._data;
        /** @type {?} */
        DiagramPartialConfigEditComponent.prototype.diagramService;
        /** @type {?} */
        DiagramPartialConfigEditComponent.prototype.formGroup;
        /**
         * @type {?}
         * @private
         */
        DiagramPartialConfigEditComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PieDiagramPartialConfigComponent = /** @class */ (function () {
        function PieDiagramPartialConfigComponent(injector) {
            this.injector = injector;
            this.ConfigChanged = new core.EventEmitter();
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
            this.donutFormGroup = (/** @type {?} */ (this.formGroup.controls.donut));
        }
        Object.defineProperty(PieDiagramPartialConfigComponent.prototype, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dataLoaded;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (!data)
                    return;
                this._dataLoaded = data;
                this.dataLoaded.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        PieDiagramPartialConfigComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
            //   .subscribe(data => {
            //     debugger;
            //   });
        };
        /**
         * @return {?}
         */
        PieDiagramPartialConfigComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion.unsubscribe();
        };
        /**
         * @return {?}
         */
        PieDiagramPartialConfigComponent.prototype.configChanged = /**
         * @return {?}
         */
        function () {
            this.ConfigChanged.emit();
        };
        PieDiagramPartialConfigComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "pie-diagram-partial-config",
                        template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n    <div>\r\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\r\n    </div>\r\n    <div>\r\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n    </div>\r\n    <div>\r\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\r\n    </div>\r\n    <div>\r\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n    </div>\r\n  </form>\r\n  <form [formGroup]=\"donutFormGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    }] }
        ];
        /** @nocollapse */
        PieDiagramPartialConfigComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        PieDiagramPartialConfigComponent.propDecorators = {
            ConfigChanged: [{ type: core.Output }],
            formGroup: [{ type: core.Input }]
        };
        return PieDiagramPartialConfigComponent;
    }());
    if (false) {
        /** @type {?} */
        PieDiagramPartialConfigComponent.prototype.ConfigChanged;
        /** @type {?} */
        PieDiagramPartialConfigComponent.prototype.dataSubscribtion;
        /** @type {?} */
        PieDiagramPartialConfigComponent.prototype.dataLoaded;
        /** @type {?} */
        PieDiagramPartialConfigComponent.prototype._dataLoaded;
        /** @type {?} */
        PieDiagramPartialConfigComponent.prototype.donutFormGroup;
        /** @type {?} */
        PieDiagramPartialConfigComponent.prototype.diagramService;
        /**
         * @type {?}
         * @private
         */
        PieDiagramPartialConfigComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BooleanoWidgetPartialConfigComponent = /** @class */ (function () {
        function BooleanoWidgetPartialConfigComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
            this.booleanoFormGroup = (/** @type {?} */ (this.formGroup.controls.booleano));
        }
        Object.defineProperty(BooleanoWidgetPartialConfigComponent.prototype, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dataLoaded;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (!data)
                    return;
                this._dataLoaded = data;
                this.dataLoaded.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BooleanoWidgetPartialConfigComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
            //   .subscribe(data => {
            //     debugger;
            //   });
        };
        /**
         * @return {?}
         */
        BooleanoWidgetPartialConfigComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion.unsubscribe();
        };
        BooleanoWidgetPartialConfigComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "booleano-widget-partial-config",
                        template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <form [formGroup]=\"booleanoFormGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"SuccessMessage\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"FailureMessage\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    }] }
        ];
        /** @nocollapse */
        BooleanoWidgetPartialConfigComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        BooleanoWidgetPartialConfigComponent.propDecorators = {
            formGroup: [{ type: core.Input }]
        };
        return BooleanoWidgetPartialConfigComponent;
    }());
    if (false) {
        /** @type {?} */
        BooleanoWidgetPartialConfigComponent.prototype.dataSubscribtion;
        /** @type {?} */
        BooleanoWidgetPartialConfigComponent.prototype.dataLoaded;
        /** @type {?} */
        BooleanoWidgetPartialConfigComponent.prototype._dataLoaded;
        /** @type {?} */
        BooleanoWidgetPartialConfigComponent.prototype.booleanoFormGroup;
        /** @type {?} */
        BooleanoWidgetPartialConfigComponent.prototype.diagramService;
        /**
         * @type {?}
         * @private
         */
        BooleanoWidgetPartialConfigComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NumericWidgetPartialConfigComponent = /** @class */ (function () {
        function NumericWidgetPartialConfigComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
            this.donutFormGroup = (/** @type {?} */ (this.formGroup.controls.donut));
        }
        Object.defineProperty(NumericWidgetPartialConfigComponent.prototype, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return this._dataLoaded;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (!data)
                    return;
                this._dataLoaded = data;
                this.dataLoaded.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NumericWidgetPartialConfigComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
            //   .subscribe(data => {
            //     debugger;
            //   });
        };
        /**
         * @return {?}
         */
        NumericWidgetPartialConfigComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion.unsubscribe();
        };
        NumericWidgetPartialConfigComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "numeric-widget-partial-config",
                        template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <form [formGroup]=\"donutFormGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    }] }
        ];
        /** @nocollapse */
        NumericWidgetPartialConfigComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        NumericWidgetPartialConfigComponent.propDecorators = {
            formGroup: [{ type: core.Input }]
        };
        return NumericWidgetPartialConfigComponent;
    }());
    if (false) {
        /** @type {?} */
        NumericWidgetPartialConfigComponent.prototype.dataSubscribtion;
        /** @type {?} */
        NumericWidgetPartialConfigComponent.prototype.dataLoaded;
        /** @type {?} */
        NumericWidgetPartialConfigComponent.prototype._dataLoaded;
        /** @type {?} */
        NumericWidgetPartialConfigComponent.prototype.donutFormGroup;
        /** @type {?} */
        NumericWidgetPartialConfigComponent.prototype.diagramService;
        /**
         * @type {?}
         * @private
         */
        NumericWidgetPartialConfigComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinearDiagramPartialConfigComponent = /** @class */ (function () {
        function LinearDiagramPartialConfigComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.ConfigChanged = new core.EventEmitter();
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
        }
        Object.defineProperty(LinearDiagramPartialConfigComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                this._data = data;
                this.dataLoaded.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LinearDiagramPartialConfigComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
            //   .subscribe(data => {
            //     debugger;
            //   });
        };
        /**
         * @return {?}
         */
        LinearDiagramPartialConfigComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion.unsubscribe();
        };
        /**
         * @return {?}
         */
        LinearDiagramPartialConfigComponent.prototype.configChanged = /**
         * @return {?}
         */
        function () {
            this.ConfigChanged.emit();
        };
        LinearDiagramPartialConfigComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "linear-diagram-partial-config",
                        template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Flow\" fxFlexFill>Flow</mat-checkbox>\r\n  </div>\r\n</form>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    }] }
        ];
        /** @nocollapse */
        LinearDiagramPartialConfigComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        LinearDiagramPartialConfigComponent.propDecorators = {
            data: [{ type: core.Input }],
            ConfigChanged: [{ type: core.Output }]
        };
        return LinearDiagramPartialConfigComponent;
    }());
    if (false) {
        /** @type {?} */
        LinearDiagramPartialConfigComponent.prototype.dataSubscribtion;
        /** @type {?} */
        LinearDiagramPartialConfigComponent.prototype.dataLoaded;
        /** @type {?} */
        LinearDiagramPartialConfigComponent.prototype._data;
        /** @type {?} */
        LinearDiagramPartialConfigComponent.prototype.ConfigChanged;
        /** @type {?} */
        LinearDiagramPartialConfigComponent.prototype.diagramService;
        /** @type {?} */
        LinearDiagramPartialConfigComponent.prototype.formGroup;
        /**
         * @type {?}
         * @private
         */
        LinearDiagramPartialConfigComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServerConnectingTimeDiagramComponent = /** @class */ (function () {
        function ServerConnectingTimeDiagramComponent(injector) {
            var _this = this;
            this.injector = injector;
            this.time = 0;
            this.dataLoaded = new rxjs.BehaviorSubject(false);
            this.data = this.injector.get("data");
            setInterval((/**
             * @return {?}
             */
            function () {
                _this.time = _this.time + 1;
            }), 1000);
        }
        Object.defineProperty(ServerConnectingTimeDiagramComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                this._data = data;
                this.dataLoaded.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ServerConnectingTimeDiagramComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} e
         * @return {?}
         */
        ServerConnectingTimeDiagramComponent.prototype.timeChange = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // this.dataSubscribtion.unsubscribe();
            // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route, this.data.Source.Sync)
            //         .subscribe(data => {
            //                 this.chart.load({
            //                         columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
            //                 });
            //         })
        };
        ServerConnectingTimeDiagramComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagram-server-connecting-time",
                        template: "<div *ngIf=\"dataLoaded | async\">\r\n  <div fxLayoutAlign=\"center center\" class=\"numeric title\">{{data.Description}}</div>\r\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{time | timeCounter}}</div> -->\r\n  <div [id]=\"'diagram_' + data._id\"></div>\r\n</div>",
                        styles: [".numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
                    }] }
        ];
        /** @nocollapse */
        ServerConnectingTimeDiagramComponent.ctorParameters = function () { return [
            { type: core.Injector }
        ]; };
        ServerConnectingTimeDiagramComponent.propDecorators = {
            time: [{ type: core.Input }],
            data: [{ type: core.Input }]
        };
        return ServerConnectingTimeDiagramComponent;
    }());
    if (false) {
        /** @type {?} */
        ServerConnectingTimeDiagramComponent.prototype.time;
        /** @type {?} */
        ServerConnectingTimeDiagramComponent.prototype.dataLoaded;
        /** @type {?} */
        ServerConnectingTimeDiagramComponent.prototype._data;
        /**
         * @type {?}
         * @private
         */
        ServerConnectingTimeDiagramComponent.prototype.injector;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DiagramConfigurationService = /** @class */ (function () {
        function DiagramConfigurationService(config) {
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
        }
        Object.defineProperty(DiagramConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        DiagramConfigurationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        DiagramConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] }
        ]; };
        /** @nocollapse */ DiagramConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DiagramConfigurationService_Factory() { return new DiagramConfigurationService(core.ɵɵinject(MODULE_CONFIG_TOKEN)); }, token: DiagramConfigurationService, providedIn: "root" });
        return DiagramConfigurationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DiagramConfigurationService.prototype._config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddDiagramApiModel;
    (function (AddDiagramApiModel) {
        var Request = /** @class */ (function () {
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
                    Name: this.Name,
                    IsActive: this.IsActive,
                    Source: this.Source,
                    Type: this.Type,
                    Groups: this.Groups,
                    Widget: {
                        booleano: this.booleano
                    },
                    Chart: {
                        data: {
                            type: this.Type,
                            columns: this.columns,
                            colors: this.Colors,
                            types: this.Types
                        },
                        ColumnMappings: this.ColumnMappings,
                        Flow: this.Flow,
                        legend: {
                            show: this.Legend
                        },
                        subchart: {
                            show: this.Subchart
                        },
                        zoom: {
                            enabled: this.Zoom
                        },
                        tooltip: {
                            grouped: this.Tooltip
                        }
                    },
                    Box: {
                        Cols: this.Cols,
                        Rows: this.Rows,
                        TextColor: this.TextColor,
                        BackgroundColor: this.BackgroundColor
                    }
                };
            };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", []),
                        Name: new forms.FormControl("", [forms.Validators.required]),
                        Sync: new forms.FormControl(0, [forms.Validators.required]),
                        IsActive: new forms.FormControl("true", [forms.Validators.required]),
                        Type: new forms.FormControl("pie", [forms.Validators.required]),
                        Groups: new forms.FormControl("", [forms.Validators.required]),
                        Legend: new forms.FormControl("true", [forms.Validators.required]),
                        Subchart: new forms.FormControl("false", [forms.Validators.required]),
                        Zoom: new forms.FormControl("false", [forms.Validators.required]),
                        Tooltip: new forms.FormControl("false", [forms.Validators.required]),
                        Route: new forms.FormControl("", [forms.Validators.required]),
                        Source: new forms.FormControl({}, [forms.Validators.required]),
                        columns: new forms.FormControl("", [forms.Validators.required]),
                        Cols: new forms.FormControl(1, [forms.Validators.required]),
                        Rows: new forms.FormControl(1, [forms.Validators.required]),
                        TextColor: new forms.FormControl("#000000", [forms.Validators.required]),
                        BackgroundColor: new forms.FormControl("#ffffff", [forms.Validators.required]),
                        Colors: new forms.FormGroup({}),
                        Types: new forms.FormGroup({}),
                        ColumnMappings: new forms.FormArray([]),
                        Flow: new forms.FormControl(true),
                        donut: new forms.FormGroup({
                            title: new forms.FormControl("Default Title")
                        }),
                        booleano: new forms.FormGroup({
                            SuccessMessage: new forms.FormControl("SuccessMessage"),
                            FailureMessage: new forms.FormControl("FailureMessage")
                        })
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        AddDiagramApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype._id;
            /** @type {?} */
            Request.prototype.Name;
            /** @type {?} */
            Request.prototype.IsActive;
            /** @type {?} */
            Request.prototype.Type;
            /** @type {?} */
            Request.prototype.Types;
            /** @type {?} */
            Request.prototype.Legend;
            /** @type {?} */
            Request.prototype.Subchart;
            /** @type {?} */
            Request.prototype.Zoom;
            /** @type {?} */
            Request.prototype.Tooltip;
            /** @type {?} */
            Request.prototype.Route;
            /** @type {?} */
            Request.prototype.Sync;
            /** @type {?} */
            Request.prototype.Colors;
            /** @type {?} */
            Request.prototype.ColumnMappings;
            /** @type {?} */
            Request.prototype.Flow;
            /** @type {?} */
            Request.prototype.columns;
            /** @type {?} */
            Request.prototype.Cols;
            /** @type {?} */
            Request.prototype.Rows;
            /** @type {?} */
            Request.prototype.TextColor;
            /** @type {?} */
            Request.prototype.BackgroundColor;
            /** @type {?} */
            Request.prototype.booleano;
            /** @type {?} */
            Request.prototype.Source;
            /** @type {?} */
            Request.prototype.Groups;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        AddDiagramApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(AddDiagramApiModel || (AddDiagramApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
         * @return {?}
         */
        DiagramService.prototype.getSources = /**
         * @return {?}
         */
        function () {
            return this.http
                .get(this.config.env.frontend_server + "/api/source")
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return ((/** @type {?} */ (response))).Result; }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                return Rx.Observable.throw(err);
            }));
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
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return ((/** @type {?} */ (response))).Result; }))
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
        DiagramService.prototype.getDiagram = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (!id)
                debugger;
            return this.http
                .get(this.config.env.frontend_server + ("/api/diagram/" + id))
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
                    .map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return res.Result; }));
            }
            else if (source.Interval == 0) {
                return this.http
                    .get(this.config.env.frontend_server + "/api/data", {
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
            }
            else {
                time = time || Date.now();
                return Rx.Observable.timer(0, source.Interval).pipe(operators.takeUntil(unsubscribe), operators.switchMap((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) {
                    return _this.http
                        .get(_this.config.env.frontend_server + "/api/data", {
                        params: {
                            sourceId: source._id,
                            time: _this.getFloorTime(source.Interval, time).toString()
                        }
                    }).pipe(operators.map((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) { return res.Result; })));
                })));
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
            columnsMappings.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var ValueData = _.getValue(data, item.ValuePath);
                if (!item.NamePath) {
                    return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
                }
                /** @type {?} */
                var NameData = _.getValue(data, item.NamePath);
                if (_.is.array(NameData)) {
                    return (res = res.concat(NameData.map((/**
                     * @param {?} _item
                     * @param {?} i
                     * @return {?}
                     */
                    function (_item, i) { return [_item].concat(ValueData[i]); }))));
                }
                else {
                    return res.push([NameData].concat(ValueData));
                }
            }));
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
            return ((/** @type {?} */ (_.report(data)))).filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.isLastNode; }));
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
            this.charts[id] = c3.generate(__assign({}, config, { bindto: "#diagram_" + id }));
            return this.getData((/** @type {?} */ ({})), new Rx.Subject(), sync).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.charts[id].load({
                    columns: _this.extract_columns_from_data(data.Data, config.ColumnMappings)
                });
            }));
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
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        DiagramService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: DiagramConfigurationService }
        ]; };
        /** @nocollapse */ DiagramService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DiagramService_Factory() { return new DiagramService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(store.Store), core.ɵɵinject(DiagramConfigurationService)); }, token: DiagramService, providedIn: "root" });
        return DiagramService;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NumericEditDiagramComponent = /** @class */ (function () {
        function NumericEditDiagramComponent(injector, diagramService) {
            this.injector = injector;
            this.diagramService = diagramService;
            this.unsubscribe = new rxjs.Subject();
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.data = this.injector.get("data");
        }
        Object.defineProperty(NumericEditDiagramComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                this._data = data;
                this.dataLoaded.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NumericEditDiagramComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
            this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(operators.filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data != undefined; })), operators.takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                debugger;
            }));
        };
        /**
         * @return {?}
         */
        NumericEditDiagramComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion.unsubscribe();
            debugger;
            this.unsubscribe.next();
            this.unsubscribe.complete();
        };
        NumericEditDiagramComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "numeric-edit-diagram",
                        template: "<mat-card *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <mat-card-header>\r\n    <mat-card-title fxLayoutAlign=\"space-between center\">\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n  </mat-card-content>\r\n</mat-card>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    }] }
        ];
        /** @nocollapse */
        NumericEditDiagramComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: DiagramService }
        ]; };
        NumericEditDiagramComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return NumericEditDiagramComponent;
    }());
    if (false) {
        /** @type {?} */
        NumericEditDiagramComponent.prototype.unsubscribe;
        /** @type {?} */
        NumericEditDiagramComponent.prototype.dataLoaded;
        /** @type {?} */
        NumericEditDiagramComponent.prototype._data;
        /**
         * @type {?}
         * @private
         */
        NumericEditDiagramComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        NumericEditDiagramComponent.prototype.diagramService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NumericDiagramComponent = /** @class */ (function () {
        function NumericDiagramComponent(injector, diagramService) {
            this.injector = injector;
            this.diagramService = diagramService;
            this.unsubscribe = new rxjs.Subject();
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.data = this.injector.get("data");
            this.counter = 0;
        }
        Object.defineProperty(NumericDiagramComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                this._data = data;
                this.dataLoaded.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NumericDiagramComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.dataSubscribtion = this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(operators.takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var counter = _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings);
                _this.counter = counter[0][1];
            }));
        };
        /**
         * @return {?}
         */
        NumericDiagramComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.dataSubscribtion.unsubscribe();
            this.unsubscribe.next();
            this.unsubscribe.complete();
        };
        NumericDiagramComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagram-numeric",
                        template: "<div *ngIf=\"dataLoaded | async\">\r\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{data.Source.Data | json}}</div> -->\r\n  <div fxLayoutAlign=\"center center\" class=\"numeric\">{{counter}}</div>\r\n  <div [id]=\"'diagram_' + data._id\"></div>\r\n</div>",
                        styles: [":host{width:100%}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}.mat-card{padding:0}"]
                    }] }
        ];
        /** @nocollapse */
        NumericDiagramComponent.ctorParameters = function () { return [
            { type: core.Injector },
            { type: DiagramService }
        ]; };
        NumericDiagramComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return NumericDiagramComponent;
    }());
    if (false) {
        /** @type {?} */
        NumericDiagramComponent.prototype.unsubscribe;
        /** @type {?} */
        NumericDiagramComponent.prototype.dataLoaded;
        /** @type {?} */
        NumericDiagramComponent.prototype._data;
        /** @type {?} */
        NumericDiagramComponent.prototype.counter;
        /** @type {?} */
        NumericDiagramComponent.prototype.dataSubscribtion;
        /**
         * @type {?}
         * @private
         */
        NumericDiagramComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        NumericDiagramComponent.prototype.diagramService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import * as appReducer from 'app/reducers';
    var DiagramModuleContainerComponent = /** @class */ (function () {
        function DiagramModuleContainerComponent(service) {
            this.service = service;
        }
        /**
         * @return {?}
         */
        DiagramModuleContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        DiagramModuleContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagram-module-container",
                        template: "<div fxflex=\"100\" fxLayout=\"column\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"
                    }] }
        ];
        /** @nocollapse */
        DiagramModuleContainerComponent.ctorParameters = function () { return [
            { type: DiagramService }
        ]; };
        return DiagramModuleContainerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DiagramModuleContainerComponent.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataMapperComponent = /** @class */ (function () {
        function DataMapperComponent(diagramService, store) {
            this.diagramService = diagramService;
            this.store = store;
            this.dataReport = [];
        }
        Object.defineProperty(DataMapperComponent.prototype, "data", {
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (!data)
                    return;
                this.dataReport = _.report(data);
                this._data = data;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DataMapperComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        DataMapperComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "data-mapper",
                        template: "<div fxLayout=\"row\">\r\n    <div fxFlex=\"grow\">\r\n        <b>\r\n            Key\r\n        </b>\r\n    </div>\r\n    <div fxFlex=\"nogrow\">\r\n        <b>\r\n            Type\r\n        </b>\r\n    </div>\r\n</div>\r\n<div *ngFor=\"let item of dataReport\" [class]=\"'depts_' + item.depts\" fxLayout=\"row\">\r\n    <div fxFlex=\"grow\">\r\n        {{item.name}}\r\n    </div>\r\n    <div fxFlex=\"nogrow\">\r\n        {{item.type}}\r\n    </div>\r\n</div>\r\n",
                        styles: ["mat-radio-button{width:100%;display:block}div.depts_2{margin-right:25px}div.depts_3{margin-right:50px}"]
                    }] }
        ];
        /** @nocollapse */
        DataMapperComponent.ctorParameters = function () { return [
            { type: DiagramService },
            { type: store.Store }
        ]; };
        DataMapperComponent.propDecorators = {
            destination: [{ type: core.Input }],
            data: [{ type: core.Input }]
        };
        return DataMapperComponent;
    }());
    if (false) {
        /** @type {?} */
        DataMapperComponent.prototype.destination;
        /** @type {?} */
        DataMapperComponent.prototype._data;
        /** @type {?} */
        DataMapperComponent.prototype.dataReport;
        /**
         * @type {?}
         * @private
         */
        DataMapperComponent.prototype.diagramService;
        /**
         * @type {?}
         * @private
         */
        DataMapperComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DiagramModel = /** @class */ (function () {
        function DiagramModel() {
        }
        return DiagramModel;
    }());
    if (false) {
        /** @type {?} */
        DiagramModel.prototype._id;
        /** @type {?} */
        DiagramModel.prototype.Name;
        /** @type {?} */
        DiagramModel.prototype.IsActive;
        /** @type {?} */
        DiagramModel.prototype.Description;
        /** @type {?} */
        DiagramModel.prototype.Groups;
        /** @type {?} */
        DiagramModel.prototype.Box;
        /** @type {?} */
        DiagramModel.prototype.Source;
        /** @type {?} */
        DiagramModel.prototype.Widget;
        /** @type {?} */
        DiagramModel.prototype.Chart;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var AddDiagramActionTypes = {
        ADD_DIAGRAM: "[DIAGRAM][ADD] ADD_DIAGRAM",
        ADD_DIAGRAM_START: "[DIAGRAM][ADD] ADD_DIAGRAM_START",
        ADD_DIAGRAM_SUCCEED: "[DIAGRAM][ADD] ADD_DIAGRAM_SUCCEED",
        DIAGRAM_CONFIG_CHANGED: "[DIAGRAM][ADD] DIAGRAM_CONFIG_CHANGED",
        ADD_DIAGRAM_FAILED: "[DIAGRAM][ADD] ADD_DIAGRAM_FAILED",
        STRUCTURE_DEFINITION_START: "[DIAGRAM][ADD] STRUCTURE_DEFINITION_START",
        HAVE_ENDPOINT: "[DIAGRAM][ADD] HAVE_STRUCTURE",
        DATA_LOADED: "[DIAGRAM][ADD] DATA_LOADED",
        STRUCTURE_DEFINITION_END: "[DIAGRAM][ADD] STRUCTURE_DEFINITION_END",
        COLUMNS_MAPPING_CHANGED: "[DIAGRAM][ADD] COLUMNS_MAPPING_CHANGED",
        DATA_CALCULATED: "[DIAGRAM][ADD] DATA_CALCULATED",
        COLUMN_ADDED: "[DIAGRAM][ADD] COLUMN_ADDED",
        GENERATE_DIAGRAM: "[DIAGRAM][ADD] GENERATE_DIAGRAM",
    };
    var AddDiagramAction = /** @class */ (function () {
        function AddDiagramAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.ADD_DIAGRAM;
        }
        return AddDiagramAction;
    }());
    if (false) {
        /** @type {?} */
        AddDiagramAction.prototype.type;
        /** @type {?} */
        AddDiagramAction.prototype.payload;
    }
    var AddDiagramActionStart = /** @class */ (function () {
        function AddDiagramActionStart(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.ADD_DIAGRAM_START;
        }
        return AddDiagramActionStart;
    }());
    if (false) {
        /** @type {?} */
        AddDiagramActionStart.prototype.type;
        /** @type {?} */
        AddDiagramActionStart.prototype.payload;
    }
    var AddDiagramActionSucceed = /** @class */ (function () {
        function AddDiagramActionSucceed(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED;
        }
        return AddDiagramActionSucceed;
    }());
    if (false) {
        /** @type {?} */
        AddDiagramActionSucceed.prototype.type;
        /** @type {?} */
        AddDiagramActionSucceed.prototype.payload;
    }
    var AddDiagramActionFailed = /** @class */ (function () {
        function AddDiagramActionFailed() {
            this.type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
        }
        return AddDiagramActionFailed;
    }());
    if (false) {
        /** @type {?} */
        AddDiagramActionFailed.prototype.type;
    }
    var DiagramConfigChangedAction = /** @class */ (function () {
        function DiagramConfigChangedAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
        }
        return DiagramConfigChangedAction;
    }());
    if (false) {
        /** @type {?} */
        DiagramConfigChangedAction.prototype.type;
        /** @type {?} */
        DiagramConfigChangedAction.prototype.payload;
    }
    var HaveEndpointAction = /** @class */ (function () {
        function HaveEndpointAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.HAVE_ENDPOINT;
        }
        return HaveEndpointAction;
    }());
    if (false) {
        /** @type {?} */
        HaveEndpointAction.prototype.type;
        /** @type {?} */
        HaveEndpointAction.prototype.payload;
    }
    var DataLoadedAction = /** @class */ (function () {
        function DataLoadedAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.DATA_LOADED;
        }
        return DataLoadedAction;
    }());
    if (false) {
        /** @type {?} */
        DataLoadedAction.prototype.type;
        /** @type {?} */
        DataLoadedAction.prototype.payload;
    }
    var StructureDefinitionStartAction = /** @class */ (function () {
        function StructureDefinitionStartAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
        }
        return StructureDefinitionStartAction;
    }());
    if (false) {
        /** @type {?} */
        StructureDefinitionStartAction.prototype.type;
        /** @type {?} */
        StructureDefinitionStartAction.prototype.payload;
    }
    var StructureDefinitionFinishedAction = /** @class */ (function () {
        function StructureDefinitionFinishedAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
        }
        return StructureDefinitionFinishedAction;
    }());
    if (false) {
        /** @type {?} */
        StructureDefinitionFinishedAction.prototype.type;
        /** @type {?} */
        StructureDefinitionFinishedAction.prototype.payload;
    }
    var ColumnsMappingChangedAction = /** @class */ (function () {
        function ColumnsMappingChangedAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
        }
        return ColumnsMappingChangedAction;
    }());
    if (false) {
        /** @type {?} */
        ColumnsMappingChangedAction.prototype.type;
        /** @type {?} */
        ColumnsMappingChangedAction.prototype.payload;
    }
    var DataCalculatedAction = /** @class */ (function () {
        function DataCalculatedAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.DATA_CALCULATED;
        }
        return DataCalculatedAction;
    }());
    if (false) {
        /** @type {?} */
        DataCalculatedAction.prototype.type;
        /** @type {?} */
        DataCalculatedAction.prototype.payload;
    }
    var GenerateDiagramAction = /** @class */ (function () {
        function GenerateDiagramAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.GENERATE_DIAGRAM;
        }
        return GenerateDiagramAction;
    }());
    if (false) {
        /** @type {?} */
        GenerateDiagramAction.prototype.type;
        /** @type {?} */
        GenerateDiagramAction.prototype.payload;
    }
    var ColumnAdded = /** @class */ (function () {
        function ColumnAdded() {
            this.type = AddDiagramActionTypes.COLUMN_ADDED;
        }
        return ColumnAdded;
    }());
    if (false) {
        /** @type {?} */
        ColumnAdded.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddDiagramComponent = /** @class */ (function () {
        function AddDiagramComponent(diagramService, formBuilder, store, route) {
            var _this = this;
            this.diagramService = diagramService;
            this.formBuilder = formBuilder;
            this.store = store;
            this.route = route;
            this.unsubscribe = new rxjs.Subject();
            this.formGroup = AddDiagramApiModel.Request.formGroup;
            this.sources = this.diagramService.getSources();
            this.groups = this.diagramService.getGroups();
            // this.diagramModel = new DiagramModel();
            this.columnsMappings = ((/** @type {?} */ (this.formGroup.controls.ColumnMappings))).controls;
            this.route.params.subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                /** @type {?} */
                var diagramId = params["id"];
                // tslint:disable-next-line:no-unused-expression
                diagramId &&
                    _this.diagramService.getDiagram(diagramId).subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        _this.formGroup.patchValue({
                            _id: data._id,
                            Name: data.Name,
                            IsActive: data.IsActive,
                            Groups: data.Groups,
                            Type: data.Chart.data.type,
                            Legend: data.Chart.legend.show,
                            Subchart: data.Chart.subchart.show,
                            Zoom: data.Chart.zoom.enabled,
                            Tooltip: data.Chart.tooltip.grouped,
                            Sync: data.Source.Interval,
                            Source: data.Source,
                            columns: data.Chart.data.columns,
                            ColumnMappings: data.Chart.ColumnMappings,
                            Cols: data.Box.Cols,
                            Flow: data.Chart.Flow,
                            Rows: data.Box.Rows,
                            BackgroundColor: data.Box.BackgroundColor,
                            TextColor: data.Box.TextColor
                        });
                        /** @type {?} */
                        var colorsControl = (/** @type {?} */ (_this.formGroup.controls["Colors"]));
                        Object.keys(data.Chart.data.colors || {}).forEach((/**
                         * @param {?} columnKey
                         * @return {?}
                         */
                        function (columnKey) {
                            if (!(columnKey in colorsControl.controls))
                                colorsControl.addControl(columnKey, new forms.FormControl(data.Chart.data.colors[columnKey]));
                        }));
                        /** @type {?} */
                        var typesControl = (/** @type {?} */ (_this.formGroup.controls["Types"]));
                        Object.keys(data.Chart.data.types || {}).forEach((/**
                         * @param {?} key
                         * @return {?}
                         */
                        function (key) {
                            if (!(key in typesControl.controls))
                                typesControl.addControl(key, new forms.FormControl(data.Chart.data.types[key]));
                        }));
                        data.Chart.ColumnMappings.forEach((/**
                         * @param {?} mapping
                         * @return {?}
                         */
                        function (mapping) { return _this.addColumn(mapping.NamePath, mapping.ValuePath); }));
                        _this.source = data.Source;
                        _this.store.dispatch(new HaveEndpointAction(_this));
                        _this.diagramPartialConfig = {
                            type: _this.formGroup.value.Type,
                            inputs: {
                                formGroup: _this.formGroup,
                                diagramService: _this.diagramService
                            }
                        };
                    }));
                _this.diagramPartialConfig = {
                    type: _this.formGroup.value.Type,
                    inputs: {
                        formGroup: _this.formGroup,
                        diagramService: _this.diagramService
                    }
                };
            }));
            this.diagramTypes = [
                "bar",
                "donut",
                "pie",
                "scatter",
                "line",
                "area",
                "area-spline",
                "numero",
                "booleano",
                "tempo"
            ];
        }
        /**
         * @return {?}
         */
        AddDiagramComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.formGroup.controls.ColumnMappings.statusChanges.subscribe((/**
             * @param {?} status
             * @return {?}
             */
            function (status) {
                if (status == "VALID" &&
                    ((/** @type {?} */ (_this.formGroup.controls.ColumnMappings))).controls.length > 0 &&
                    _this.data)
                    _this.store.dispatch(new ColumnsMappingChangedAction(_this));
            }));
        };
        /**
         * @return {?}
         */
        AddDiagramComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.dataSubscription)
                this.dataSubscription.unsubscribe();
            this.unsubscribe.next();
            this.unsubscribe.complete();
        };
        // getData() {
        //   const o$ = this.diagramService.getData(this.source);
        //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
        //   return o$;
        // }
        // getData() {
        //   const o$ = this.diagramService.getData(this.source);
        //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
        //   return o$;
        // }
        /**
         * @return {?}
         */
        AddDiagramComponent.prototype.getDataStructure = 
        // getData() {
        //   const o$ = this.diagramService.getData(this.source);
        //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
        //   return o$;
        // }
        /**
         * @return {?}
         */
        function () {
            var _this = this;
            debugger;
            /** @type {?} */
            var observer = this.diagramService.getData(__assign({}, this.source, { Interval: 0 }), this.unsubscribe, Date.now() - 10000);
            this.dataSubscription = observer.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.data = data.Data;
                _this.pathOptions = _this.diagramService.get_data_report(data.Data);
            }));
            return observer;
        };
        /**
         * @return {?}
         */
        AddDiagramComponent.prototype.configChanged = /**
         * @return {?}
         */
        function () {
            this.store.dispatch(new DiagramConfigChangedAction(this));
        };
        /**
         * @return {?}
         */
        AddDiagramComponent.prototype.typeChanged = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var typesFormGroup = ((/** @type {?} */ (this.formGroup.controls.Types))).controls;
            // tslint:disable-next-line:forin
            for (var cb in typesFormGroup) {
                typesFormGroup[cb].setValue(this.formGroup.value.Type);
            }
            this.diagramPartialConfig = {
                type: this.formGroup.value.Type,
                inputs: {
                    formGroup: this.formGroup,
                    diagramService: this.diagramService
                }
            };
            this.store.dispatch(new DiagramConfigChangedAction(this));
        };
        /**
         * @param {?=} NamePath
         * @param {?=} ValuePath
         * @return {?}
         */
        AddDiagramComponent.prototype.addColumn = /**
         * @param {?=} NamePath
         * @param {?=} ValuePath
         * @return {?}
         */
        function (NamePath, ValuePath) {
            if (NamePath === void 0) { NamePath = ""; }
            if (ValuePath === void 0) { ValuePath = ""; }
            /** @type {?} */
            var control = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"]));
            control.push(this.formBuilder.group({
                NamePath: [NamePath],
                ValuePath: [ValuePath, forms.Validators.required]
            }));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        AddDiagramComponent.prototype.routeEntered = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            debugger;
            this.source = event.value;
            this.formGroup.patchValue({ Source: event.value });
            this.store.dispatch(new HaveEndpointAction(this));
        };
        /**
         * @param {?} i
         * @return {?}
         */
        AddDiagramComponent.prototype.removeColumn = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            /** @type {?} */
            var control = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"]));
            control.removeAt(i);
        };
        /**
         * @return {?}
         */
        AddDiagramComponent.prototype.calculateColumns = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return Observable.Observable.create((/**
             * @param {?} obser
             * @return {?}
             */
            function (obser) {
                /** @type {?} */
                var columnsMApping = {
                // NameVAlue:  (this.formGroup.controls.ColumnMappings as FormArray).controls.values
                };
                /** @type {?} */
                var columns = _this.diagramService.extract_columns_from_data(_this.data, ((/** @type {?} */ (_this.formGroup.controls.ColumnMappings))).value);
                _this.formGroup.controls.columns.setValue(columns);
                // add new item to this.formGroup.controls.colors form control
                /** @type {?} */
                var colorsControl = (/** @type {?} */ (_this.formGroup.controls["Colors"]));
                columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    /** @type {?} */
                    var columnKey = column[0];
                    if (!(columnKey in colorsControl.controls))
                        colorsControl.addControl(columnKey, new forms.FormControl("#123456"));
                }));
                /** @type {?} */
                var typesControl = (/** @type {?} */ (_this.formGroup.controls["Types"]));
                columns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
                    /** @type {?} */
                    var key = column[0];
                    if (!(key in typesControl.controls))
                        typesControl.addControl(key, new forms.FormControl(_this.formGroup.value.Type));
                }));
                obser.next();
            }));
        };
        /**
         * @return {?}
         */
        AddDiagramComponent.prototype.generateDiagram = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var temp = new DiagramModel();
            temp._id = "template_id";
            temp.Name = this.formGroup.value.Name;
            debugger;
            temp.Source = this.source;
            temp.Box = {
                NumberOfColumns: 1,
                Order: 1,
                BackgroundColor: this.formGroup.value.BackgroundColor
            };
            temp.Widget = {
                booleano: this.formGroup.value.booleano
            };
            temp.Chart = {
                ColumnMappings: this.formGroup.value.ColumnMappings,
                data: {
                    columns: this.formGroup.controls.columns.value,
                    type: this.formGroup.value.Type,
                    types: this.formGroup.value.Types,
                    colors: this.formGroup.controls.Colors.value
                },
                Flow: this.formGroup.value.Flow,
                legend: {
                    show: this.formGroup.value.Legend
                },
                subchart: {
                    show: this.formGroup.value.Subchart
                },
                zoom: {
                    enabled: this.formGroup.value.Zoom
                },
                tooltip: {
                    grouped: this.formGroup.value.Tooltip
                }
                // tooltip: {
                //         format: {
                //                 value: function (value) {
                //                         return value + "%";
                //                 }
                //         }
                // },
                // color: {
                //         pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000'],
                //         threshold: {
                //                 //  unit: 'value', // percentage is default
                //                 values: [30, 60, 90, 100]
                //         }
                // },
            };
            // this.componentModel = {
            //   component: this.typeMapToDiagram[temp.Chart.data.type],
            //   inputs: { data: temp }
            // }
            this.diagramModel = temp;
            return Observable.Observable.empty();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        AddDiagramComponent.prototype.add = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.store.dispatch(new AddDiagramAction(this.formGroup.value));
        };
        AddDiagramComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagram-add",
                        template: "<div fxLayout=\"column\" fxFlex=\"100\">\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n    <mat-card fxFlex=\"60\">\r\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n        <mat-card-header>\r\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\r\n          </mat-form-field>\r\n          <mat-form-field fxFlexFill>\r\n            <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (selectionChange)=\"routeEntered($event)\">\r\n              <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">\r\n                {{item.Endpoint}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"sync time\" formControlName=\"Sync\">\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>\r\n              <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>\r\n              <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">\r\n                {{item}}\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>\r\n              <mat-select-trigger>\r\n                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}\r\n                <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">\r\n                  (+{{formGroup.controls.Groups.value.length - 1}} others)\r\n                </span>\r\n              </mat-select-trigger>\r\n              <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n          </div>\r\n          <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>\r\n        </mat-card-content>\r\n      </form>\r\n    </mat-card>\r\n    <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n    <mat-card fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"item-margin\">\r\n          <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n          <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">\r\n            <div fxLayout=\"column\">\r\n              <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\r\n                  <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\r\n                      <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\r\n                      {{item.path}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\r\n                  <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">\r\n                    <mat-option>--</mat-option>\r\n                    <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\r\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\r\n                      {{item.path}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <button (click)=\"removeColumn(i)\" fxFlex mat-icon-button>\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"item-margin\">\r\n          <div class=\"list-item\" fxLayout=\"row\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\"\r\n            fxLayoutAlign=\"space-between center\">\r\n            <span fxFlex=\"40\">{{item[0]}} : {{item[1]}}</span>\r\n            <span fxFlex [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">\r\n              <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">\r\n            </span>\r\n            <mat-form-field fxFlex=\"30\" [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">\r\n              <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->\r\n              <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">\r\n                <mat-option>--</mat-option>\r\n                <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">\r\n                  {{item}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content [formGroup]=\"formGroup\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">\r\n        </mat-form-field>\r\n        <div fxLayout=\"row\">\r\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>\r\n          <span>\r\n            <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">\r\n          </span>\r\n        </div>\r\n        <div fxLayout=\"row\">\r\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>\r\n          <span>\r\n            <input formControlName=\"BackgroundColor\" type=\"color\">\r\n          </span>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div>\r\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\r\n      <mat-card-content>\r\n        <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\r\n        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>",
                        styles: ["#chart{width:300px;direction:ltr}.form-element-margin{margin:5px 10px}.item-margin{margin:10px 0;display:block}mat-option.depth_2{padding-right:30px}mat-option.depth_3{padding-right:50px}mat-option.depth_4{padding-right:70px}.mat-card{margin:12.5px}"]
                    }] }
        ];
        /** @nocollapse */
        AddDiagramComponent.ctorParameters = function () { return [
            { type: DiagramService },
            { type: forms.FormBuilder },
            { type: store.Store },
            { type: router.ActivatedRoute }
        ]; };
        return AddDiagramComponent;
    }());
    if (false) {
        /** @type {?} */
        AddDiagramComponent.prototype.unsubscribe;
        /** @type {?} */
        AddDiagramComponent.prototype.formGroup;
        /** @type {?} */
        AddDiagramComponent.prototype.data;
        /** @type {?} */
        AddDiagramComponent.prototype.columns;
        /** @type {?} */
        AddDiagramComponent.prototype.chart;
        /** @type {?} */
        AddDiagramComponent.prototype.diagramTypes;
        /** @type {?} */
        AddDiagramComponent.prototype.pathOptions;
        /** @type {?} */
        AddDiagramComponent.prototype.columnsMappings;
        /** @type {?} */
        AddDiagramComponent.prototype.dataSubscription;
        /** @type {?} */
        AddDiagramComponent.prototype.diagramModel;
        /** @type {?} */
        AddDiagramComponent.prototype.componentModel;
        /** @type {?} */
        AddDiagramComponent.prototype.typeMapToDiagram;
        /** @type {?} */
        AddDiagramComponent.prototype.diagramPartialConfig;
        /** @type {?} */
        AddDiagramComponent.prototype.sources;
        /** @type {?} */
        AddDiagramComponent.prototype.groups;
        /** @type {?} */
        AddDiagramComponent.prototype.source;
        /**
         * @type {?}
         * @private
         */
        AddDiagramComponent.prototype.diagramService;
        /**
         * @type {?}
         * @private
         */
        AddDiagramComponent.prototype.formBuilder;
        /**
         * @type {?}
         * @private
         */
        AddDiagramComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        AddDiagramComponent.prototype.route;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var diagramViewComponent = /** @class */ (function () {
        function diagramViewComponent(diagramService) {
            this.diagramService = diagramService;
            this.width = 100;
            this.diagrams = this.diagramService.getDiagrams();
        }
        /**
         * @return {?}
         */
        diagramViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
        };
        diagramViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagram-view",
                        template: "<div *ngIf=\"diagramData$ | async\" [style.color]=\"(diagramData$ | async)?.Box.Color\">\r\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"(diagramData$ | async)\"></dynamic-component-selector>\r\n</div>",
                        styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}"]
                    }] }
        ];
        /** @nocollapse */
        diagramViewComponent.ctorParameters = function () { return [
            { type: DiagramService }
        ]; };
        diagramViewComponent.propDecorators = {
            diagramId: [{ type: core.Input, args: ["id",] }]
        };
        return diagramViewComponent;
    }());
    if (false) {
        /** @type {?} */
        diagramViewComponent.prototype.diagrams;
        /** @type {?} */
        diagramViewComponent.prototype.width;
        /** @type {?} */
        diagramViewComponent.prototype.diagramData$;
        /** @type {?} */
        diagramViewComponent.prototype.diagramId;
        /**
         * @type {?}
         * @private
         */
        diagramViewComponent.prototype.diagramService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DiagramsComponent = /** @class */ (function () {
        function DiagramsComponent(diagramService) {
            this.diagramService = diagramService;
            this.width = 100;
            this.diagrams = this.diagramService.getDiagrams();
            // this.diagrams
            //         .delay(100)
            //         .subscribe(diagrams =>
            //                 diagrams.Result.forEach(diagram =>
            //                         this.diagramService.generateDiagram(diagram.Chart, diagram._id, diagram.Source.Route, diagram.Source.Sync)));
        }
        /**
         * @return {?}
         */
        DiagramsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.socketService.initSocket();
            // this.socketService.send("add-message");
            // this.socketService.onMessage().subscribe(msg=>{
            //         debugger
            // });
        };
        DiagramsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagrams",
                        template: "<mat-grid-list cols=\"12\" rowHeight=\"100px\">\r\n  <mat-grid-tile *ngFor=\"let diagram of (diagrams | async)?.Result\" \r\n  [colspan]=\"diagram.Box.Cols\" \r\n  [rowspan]=\"diagram.Box.Rows\" \r\n  [style.color]=\"diagram.Box.Color\">\r\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"diagram\"></dynamic-component-selector>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n<br />\r\n<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\r\n</div>\r\n<div fxLayoutAlign='end center'>\r\n  <button mat-fab routerLink=\"../diagrams/add\" class=\"add-btn\">\r\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n  </button>\r\n</div>\r\n",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
                    }] }
        ];
        /** @nocollapse */
        DiagramsComponent.ctorParameters = function () { return [
            { type: DiagramService }
        ]; };
        return DiagramsComponent;
    }());
    if (false) {
        /** @type {?} */
        DiagramsComponent.prototype.diagrams;
        /** @type {?} */
        DiagramsComponent.prototype.width;
        /**
         * @type {?}
         * @private
         */
        DiagramsComponent.prototype.diagramService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditDiagramComponent = /** @class */ (function () {
        function EditDiagramComponent(diagramService, route, store) {
            var _this = this;
            this.diagramService = diagramService;
            this.route = route;
            this.store = store;
            this.formGroup = EditDiagramApiModel.Request.formGroup;
            /** @type {?} */
            var Route = this.route.params.subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                /** @type {?} */
                var diagramId = params["id"];
                _this.diagramService.getDiagram(diagramId).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return _this.formGroup.patchValue(data); }));
            }));
        }
        /**
         * @return {?}
         */
        EditDiagramComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} event
         * @return {?}
         */
        EditDiagramComponent.prototype.add = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.store.dispatch(new EditDiagramAction(this.formGroup.value));
        };
        EditDiagramComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagram-edit",
                        template: "<mat-card fxLayout=\"column\" fxFlex=\"400px\">\r\n    <form [formGroup]=\"formGroup\" fxLayout='column' (ngSubmit)=\"add($event)\">\r\n\r\n        <mat-card-header>\r\n            <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <mat-form-field fxFlexFill>\r\n                <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlexFill>\r\n                <input matInput placeholder=\"\u0622\u062F\u0631\u0633 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Route\">\r\n            </mat-form-field>\r\n\r\n            <mat-checkbox formControlName=\"IsActive\">\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\r\n            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n        </mat-card-actions>\r\n    </form>\r\n</mat-card>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        EditDiagramComponent.ctorParameters = function () { return [
            { type: DiagramService },
            { type: router.ActivatedRoute },
            { type: store.Store }
        ]; };
        return EditDiagramComponent;
    }());
    if (false) {
        /** @type {?} */
        EditDiagramComponent.prototype.formGroup;
        /**
         * @type {?}
         * @private
         */
        EditDiagramComponent.prototype.diagramService;
        /**
         * @type {?}
         * @private
         */
        EditDiagramComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        EditDiagramComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DiagramComponent = /** @class */ (function () {
        function DiagramComponent(store, diagramService, http, injector, route) {
            var _this = this;
            this.store = store;
            this.diagramService = diagramService;
            this.http = http;
            this.injector = injector;
            this.route = route;
            this.unsubscribe = new rxjs.Subject();
            this.modelIsCorrect = new BehaviorSubject.BehaviorSubject(false);
            this.now = Date.now();
            debugger;
            this.data = this.injector.get("data");
            this.route.params.subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                /** @type {?} */
                var diagramId = params["id"];
                // tslint:disable-next-line:no-unused-expression
                diagramId &&
                    _this.diagramService.getDiagram(diagramId).subscribe((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) {
                        console.log(data);
                    }));
            }));
        }
        Object.defineProperty(DiagramComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._model;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (!(value.Chart && value._id))
                    return;
                this._model = value;
                this.modelIsCorrect.next(true);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DiagramComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // this.dataSubscribtion = IntervalObservable
            //         // .create(this.model.Source.Sync)
            //         .create(999)
            //         .switchMap(i =>
            //                 this.http.get(`http://localhost:3000/api/data`, {
            //                         params: {
            //                                 route: this.model.Source.Route,
            //                                 time: '0'
            //                         }
            //                 })
            //         )
            //         // .switchMap((res: any) => of(res.Result.Data))
            //         .map((res: any) => res.Result.Data)
            this.modelIsCorrect.delay(300).filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data; })).subscribe((/**
             * @param {?} state
             * @return {?}
             */
            function (state) {
                _this.chart = c3.generate(__assign({}, _this.data.Chart, { bindto: "#diagram_" + _this.data._id }));
                _this.dataSubscribtion = _this.diagramService
                    .getData(_this.data.Source, _this.unsubscribe)
                    .pipe(operators.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return data != undefined; })), operators.takeUntil(_this.unsubscribe))
                    .subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.now = Date.now();
                    _this.time = data.Time;
                    if (_this.data.Chart.Flow) {
                        _this.chart.flow({
                            columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings),
                            duration: 1500
                        });
                    }
                    else {
                        _this.chart.load({
                            columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings)
                        });
                    }
                }));
            }));
            // this.dataSubscribtion = this.diagramService.generateDiagram(
            //         this.model.Chart,
            //         this.model._id,
            //         this.model.Source.Route,
            //         this.model.Source.Sync
            // );
        };
        /**
         * @return {?}
         */
        DiagramComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            // this.dataSubscribtion.unsubscribe();
            debugger;
            this.unsubscribe.next();
            this.unsubscribe.complete();
        };
        /**
         * @param {?} e
         * @return {?}
         */
        DiagramComponent.prototype.timeChange = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var _this = this;
            this.dataSubscribtion.unsubscribe();
            // this.diagramService.getData(this.data.Source, Date.now() - ((1000 - e.value) * this.data.Source.Interval), true)
            this.dataSubscribtion = this.diagramService
                .getData(this.data.Source, this.unsubscribe, Date.now() - (1000 - e.value) * this.data.Source.Interval, true)
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.time = data.Time;
                _this.now = Date.now();
                // const columns = this.diagramService
                //         .extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
                //         .map(column => {
                //                 debugger;
                //                 column[0] += '_historic';
                //                 return column;
                //         });
                _this.chart.load({
                    columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings)
                });
            }));
        };
        DiagramComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "diagram",
                        template: "<div class=\"over\" fxlayout=\"row\" fxLayoutAlign=\"space-between\">\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"start\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"center\" class=\"data-time\">{{time | date : 'y/M/d h:m:s'}}</div>\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"end\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\r\n</div>\r\n<div *ngIf=\"modelIsCorrect | async\" class=\"diagram widget\" [id]=\"'diagram_' + data._id\"></div>",
                        styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
                    }] }
        ];
        /** @nocollapse */
        DiagramComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: DiagramService },
            { type: http.HttpClient },
            { type: core.Injector },
            { type: router.ActivatedRoute }
        ]; };
        DiagramComponent.propDecorators = {
            data: [{ type: core.Input }]
        };
        return DiagramComponent;
    }());
    if (false) {
        /** @type {?} */
        DiagramComponent.prototype.unsubscribe;
        /** @type {?} */
        DiagramComponent.prototype.modelIsCorrect;
        /** @type {?} */
        DiagramComponent.prototype._model;
        /** @type {?} */
        DiagramComponent.prototype.dataSubscribtion;
        /** @type {?} */
        DiagramComponent.prototype.chart;
        /** @type {?} */
        DiagramComponent.prototype.time;
        /** @type {?} */
        DiagramComponent.prototype.now;
        /**
         * @type {?}
         * @private
         */
        DiagramComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        DiagramComponent.prototype.diagramService;
        /**
         * @type {?}
         * @private
         */
        DiagramComponent.prototype.http;
        /**
         * @type {?}
         * @private
         */
        DiagramComponent.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        DiagramComponent.prototype.route;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicComponentSelectorComponent = /** @class */ (function () {
        function DynamicComponentSelectorComponent(resolver) {
            this.resolver = resolver;
            this.typeMapToDiagram = {
                bar: DiagramComponent,
                donut: DiagramComponent,
                pie: DiagramComponent,
                scatter: DiagramComponent,
                line: DiagramComponent,
                area: DiagramComponent,
                "area-spline": DiagramComponent,
                numero: NumericDiagramComponent,
                tempo: ServerConnectingTimeDiagramComponent,
                booleano: ServerStatusDiagramComponent
            };
            this.currentComponent = null;
            this.backgroundColor = "";
        }
        Object.defineProperty(DynamicComponentSelectorComponent.prototype, "data", {
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (!data || Object.keys(data).length == 0)
                    return;
                this.backgroundColor = data.Box.BackgroundColor;
                this._data = data;
                /** @type {?} */
                var raw = { data: data };
                /** @type {?} */
                var _component = this.typeMapToDiagram[data.Chart.data.type];
                /** @type {?} */
                var inputProviders = Object.keys(raw).map((/**
                 * @param {?} inputName
                 * @return {?}
                 */
                function (inputName) {
                    return { provide: inputName, useValue: raw[inputName] };
                }));
                /** @type {?} */
                var resolvedInputs = core.ReflectiveInjector.resolve(inputProviders);
                /** @type {?} */
                var injector = core.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
                /** @type {?} */
                var factory = this.resolver.resolveComponentFactory(_component);
                /** @type {?} */
                var component = factory.create(injector);
                this.dynamicComponentContainer.insert(component.hostView);
                if (this.currentComponent) {
                    this.currentComponent.destroy();
                }
                this.currentComponent = component;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicComponentSelectorComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} e
         * @return {?}
         */
        DynamicComponentSelectorComponent.prototype.timeChange = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.currentComponent._component.timeChange(e);
        };
        DynamicComponentSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-component-selector",
                        template: "<mat-card class=\"diagram-box\" [style.background]=\"backgroundColor\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\r\n    <div fxFlex=\"0 0 auto\" *ngIf=\"_data\" fxLayoutAlign=\"space-between center\">\r\n        <span fxLayoutAlign=\"start center\" class=\"widget-title\">\r\n            {{_data.Name}}\r\n        </span>\r\n        <a [routerLink]=\"['../diagrams/edit' ,  _data._id]\" fxLayoutAlign=\"center center\" mat-icon-button color=\"primary\">\r\n            <mat-icon aria-label=\"edit diagram\">edit</mat-icon>\r\n        </a>\r\n    </div>\r\n    <!-- <mat-card-content> -->\r\n    <!-- <mat-slider invert [(ngModel)]=\"time\" (change)=\"timeChange($event)\"></mat-slider> -->\r\n    <mat-slider class=\"over\" fxFlex=\"0 0 auto\" invert min='1' max='1000' value=\"1000\" (change)=\"timeChange($event)\"></mat-slider>\r\n    <div fxFlex=\"1 1 auto\" class=\"widget-container\">\r\n        <div #dynamicComponentContainer></div>\r\n    </div>\r\n    <!-- </mat-card-content> -->\r\n</mat-card>",
                        entryComponents: [
                            NumericDiagramComponent,
                            ServerConnectingTimeDiagramComponent,
                            ServerStatusDiagramComponent,
                            DiagramComponent
                        ],
                        styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}.over{visibility:hidden;opacity:0;position:absolute;top:60px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
                    }] }
        ];
        /** @nocollapse */
        DynamicComponentSelectorComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver }
        ]; };
        DynamicComponentSelectorComponent.propDecorators = {
            dynamicComponentContainer: [{ type: core.ViewChild, args: ["dynamicComponentContainer", { read: core.ViewContainerRef, static: false },] }],
            widgetComponent: [{ type: core.ViewChild, args: [DiagramComponent, { static: false },] }],
            data: [{ type: core.Input }]
        };
        return DynamicComponentSelectorComponent;
    }());
    if (false) {
        /** @type {?} */
        DynamicComponentSelectorComponent.prototype.typeMapToDiagram;
        /** @type {?} */
        DynamicComponentSelectorComponent.prototype.dynamicComponentContainer;
        /** @type {?} */
        DynamicComponentSelectorComponent.prototype.widgetComponent;
        /** @type {?} */
        DynamicComponentSelectorComponent.prototype.currentComponent;
        /** @type {?} */
        DynamicComponentSelectorComponent.prototype._data;
        /** @type {?} */
        DynamicComponentSelectorComponent.prototype.backgroundColor;
        /**
         * @type {?}
         * @private
         */
        DynamicComponentSelectorComponent.prototype.resolver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
        function DynamicConfigComponentSelectorComponent(resolver) {
            this.resolver = resolver;
            this.typeMapToDiagram = {
                bar: DiagramPartialConfigEditComponent,
                area: LinearDiagramPartialConfigComponent,
                "area-spline": LinearDiagramPartialConfigComponent,
                donut: DiagramPartialConfigEditComponent,
                pie: PieDiagramPartialConfigComponent,
                scatter: DiagramPartialConfigEditComponent,
                line: LinearDiagramPartialConfigComponent,
                booleano: BooleanoWidgetPartialConfigComponent
            };
            this.ConfigChanged = new core.EventEmitter();
            this.currentComponent = null;
        }
        Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
            set: /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                var _this = this;
                if (!data || Object.keys(data).length == 0)
                    return;
                if (!(data.type in this.typeMapToDiagram)) {
                    if (this.currentComponent)
                        this.currentComponent.destroy();
                    return;
                }
                /** @type {?} */
                var _component = this.typeMapToDiagram[data.type];
                /** @type {?} */
                var inputProviders = Object.keys(data.inputs).map((/**
                 * @param {?} inputName
                 * @return {?}
                 */
                function (inputName) {
                    return { provide: inputName, useValue: data.inputs[inputName] };
                }));
                /** @type {?} */
                var resolvedInputs = core.ReflectiveInjector.resolve(inputProviders);
                /** @type {?} */
                var injector = core.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
                /** @type {?} */
                var factory = this.resolver.resolveComponentFactory(_component);
                /** @type {?} */
                var component = factory.create(injector);
                if (((/** @type {?} */ (component.instance))).ConfigChanged)
                    ((/** @type {?} */ (component.instance))).ConfigChanged.subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.ConfigChanged.emit();
                    }));
                this.dynamicComponentContainer.insert(component.hostView);
                if (this.currentComponent) {
                    this.currentComponent.destroy();
                }
                this.currentComponent = component;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () { };
        DynamicConfigComponentSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "dynamic-config-component-selector",
                        template: "<div #dynamicComponentContainer></div>",
                        entryComponents: [
                            DiagramPartialConfigEditComponent,
                            PieDiagramPartialConfigComponent,
                            LinearDiagramPartialConfigComponent,
                            BooleanoWidgetPartialConfigComponent
                        ],
                        styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"]
                    }] }
        ];
        /** @nocollapse */
        DynamicConfigComponentSelectorComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver }
        ]; };
        DynamicConfigComponentSelectorComponent.propDecorators = {
            dynamicComponentContainer: [{ type: core.ViewChild, args: ["dynamicComponentContainer", { read: core.ViewContainerRef, static: false },] }],
            ConfigChanged: [{ type: core.Output }],
            data: [{ type: core.Input }]
        };
        return DynamicConfigComponentSelectorComponent;
    }());
    if (false) {
        /** @type {?} */
        DynamicConfigComponentSelectorComponent.prototype.typeMapToDiagram;
        /** @type {?} */
        DynamicConfigComponentSelectorComponent.prototype.dynamicComponentContainer;
        /** @type {?} */
        DynamicConfigComponentSelectorComponent.prototype.ConfigChanged;
        /** @type {?} */
        DynamicConfigComponentSelectorComponent.prototype.currentComponent;
        /**
         * @type {?}
         * @private
         */
        DynamicConfigComponentSelectorComponent.prototype.resolver;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DiagramEffects = /** @class */ (function () {
        function DiagramEffects(actions$, router, diagramService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.diagramService = diagramService;
            this.DiagramRequest$ = this.actions$.pipe(effects.ofType(), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new GetDiagramsStart(); })));
            this.getDiagram$ = this.actions$.pipe(effects.ofType(), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return _this.diagramService
                    .getDiagrams()
                    .pipe(operators.map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return new GetDiagramsSucceed(res); })), operators.catchError((/**
                 * @return {?}
                 */
                function () { return rxjs.of(new GetDiagramsFailed()); })));
            })));
        }
        DiagramEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DiagramEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: DiagramService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DiagramEffects.prototype, "DiagramRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DiagramEffects.prototype, "getDiagram$", void 0);
        return DiagramEffects;
    }());
    if (false) {
        /** @type {?} */
        DiagramEffects.prototype.DiagramRequest$;
        /** @type {?} */
        DiagramEffects.prototype.getDiagram$;
        /**
         * @type {?}
         * @private
         */
        DiagramEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DiagramEffects.prototype.router;
        /**
         * @type {?}
         * @private
         */
        DiagramEffects.prototype.diagramService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddDiagramEffects = /** @class */ (function () {
        function AddDiagramEffects(actions$, router, diagramService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.diagramService = diagramService;
            this.addDiagramRequest$ = this.actions$.pipe(effects.ofType(AddDiagramActionTypes.ADD_DIAGRAM), operators.pluck("payload"), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new AddDiagramActionStart(data); })));
            this.addDiagram$ = this.actions$.pipe(effects.ofType(AddDiagramActionTypes.ADD_DIAGRAM_START), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return _this.diagramService
                    .addDiagram(data)
                    .pipe(operators.map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return new AddDiagramActionSucceed(res); })), operators.catchError((/**
                 * @return {?}
                 */
                function () { return of.of(new AddDiagramActionFailed()); })));
            })));
            this.ADD_DIAGRAM_SUCCEED$ = this.actions$.pipe(effects.ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED), operators.pluck("payload"), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.router.navigate(["diagrams"]);
                return Observable.Observable.empty();
            })));
            this.HAVE_ENDPOINT$ = this.actions$.pipe(effects.ofType(AddDiagramActionTypes.HAVE_ENDPOINT), operators.pluck("payload"), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new DataLoadedAction(data); })));
            this.DATA_LOADED$ = this.actions$.pipe(effects.ofType(AddDiagramActionTypes.DATA_LOADED), operators.pluck("payload"), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new StructureDefinitionStartAction(data); })));
            this.DIAGRAM_CONFIG_CHANGED$ = this.actions$.pipe(effects.ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED), operators.pluck("payload"), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new GenerateDiagramAction(data); })));
            this.STRUCTURE_DEFINITION_START$ = this.actions$.pipe(effects.ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.getDataStructure().map((/**
             * @return {?}
             */
            function () { return new StructureDefinitionFinishedAction(data); })); })));
            this.COLUMNS_MAPPING_CHANGED$ = this.actions$.pipe(effects.ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.calculateColumns().map((/**
             * @return {?}
             */
            function () { return new StructureDefinitionFinishedAction(data); })); })));
            this.STRUCTURE_DEFINITION_END$ = this.actions$
                // .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
                .pipe(effects.ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.calculateColumns().map((/**
             * @return {?}
             */
            function () { return new GenerateDiagramAction(data); })); })));
            this.GenerateDiagram$ = this.actions$.pipe(effects.ofType(AddDiagramActionTypes.GENERATE_DIAGRAM), operators.pluck("payload"), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.generateDiagram(); })));
        }
        AddDiagramEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AddDiagramEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: DiagramService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "addDiagramRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "addDiagram$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "ADD_DIAGRAM_SUCCEED$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "HAVE_ENDPOINT$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "DATA_LOADED$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "DIAGRAM_CONFIG_CHANGED$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_START$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "COLUMNS_MAPPING_CHANGED$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_END$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "GenerateDiagram$", void 0);
        return AddDiagramEffects;
    }());
    if (false) {
        /** @type {?} */
        AddDiagramEffects.prototype.addDiagramRequest$;
        /** @type {?} */
        AddDiagramEffects.prototype.addDiagram$;
        /** @type {?} */
        AddDiagramEffects.prototype.ADD_DIAGRAM_SUCCEED$;
        /** @type {?} */
        AddDiagramEffects.prototype.HAVE_ENDPOINT$;
        /** @type {?} */
        AddDiagramEffects.prototype.DATA_LOADED$;
        /** @type {?} */
        AddDiagramEffects.prototype.DIAGRAM_CONFIG_CHANGED$;
        /** @type {?} */
        AddDiagramEffects.prototype.STRUCTURE_DEFINITION_START$;
        /** @type {?} */
        AddDiagramEffects.prototype.COLUMNS_MAPPING_CHANGED$;
        /** @type {?} */
        AddDiagramEffects.prototype.STRUCTURE_DEFINITION_END$;
        /** @type {?} */
        AddDiagramEffects.prototype.GenerateDiagram$;
        /**
         * @type {?}
         * @private
         */
        AddDiagramEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        AddDiagramEffects.prototype.router;
        /**
         * @type {?}
         * @private
         */
        AddDiagramEffects.prototype.diagramService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "diagrams",
            component: DiagramModuleContainerComponent,
            children: [
                {
                    path: "",
                    component: DiagramsComponent
                },
                {
                    path: "add",
                    component: AddDiagramComponent
                },
                {
                    path: "edit/:id",
                    component: AddDiagramComponent
                },
                {
                    path: "numero",
                    component: NumericDiagramComponent
                },
                {
                    path: "tempo",
                    component: ServerConnectingTimeDiagramComponent
                },
                {
                    path: "booleano",
                    component: ServerStatusDiagramComponent
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
    var DiagramSelectorComponent = /** @class */ (function () {
        function DiagramSelectorComponent(diagramService) {
            this.diagramService = diagramService;
            this.diagrams$ = this.diagramService.getDiagrams().pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res.Result; })));
        }
        Object.defineProperty(DiagramSelectorComponent.prototype, "valid", {
            get: /**
             * @return {?}
             */
            function () {
                return this.config.diagramId != undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DiagramSelectorComponent.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return {
                    diagramId: this.selectedDiagramId
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DiagramSelectorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        DiagramSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n<h4>\u0644\u06CC\u0633\u062A \u0646\u0645\u0648\u062F\u0627\u0631\u0647\u0627</h4>\r\n      <mat-form-field fxFlex=\"100\">\r\n  <mat-select placeholder=\"\u0646\u0645\u0648\u062F\u0627\u0631 \u0647\u0627\" [(ngModel)]=\"selectedDiagramId\" name=\"selectedDiagramId\">\r\n  <mat-option *ngFor=\"let item of (diagrams$ | async)\" [value]=\"item._id\">\r\n    {{item.Name}}\r\n  </mat-option>\r\n</mat-select>\r\n</mat-form-field>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DiagramSelectorComponent.ctorParameters = function () { return [
            { type: DiagramService }
        ]; };
        return DiagramSelectorComponent;
    }());
    if (false) {
        /** @type {?} */
        DiagramSelectorComponent.prototype.diagrams$;
        /** @type {?} */
        DiagramSelectorComponent.prototype.selectedDiagramId;
        /**
         * @type {?}
         * @private
         */
        DiagramSelectorComponent.prototype.diagramService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgsDiagramModule = /** @class */ (function () {
        function NgsDiagramModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsDiagramModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: RootNgsDiagramModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
            };
        };
        NgsDiagramModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            http.HttpClientModule,
                            forms.FormsModule,
                            router.RouterModule,
                            common.CommonModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSelectModule,
                            material.MatSliderModule,
                            material.MatInputModule,
                            material.MatCheckboxModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            flexLayout.FlexLayoutModule,
                            material.MatRadioModule,
                            material.MatTooltipModule,
                            material.MatGridListModule,
                            material.MatAutocompleteModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule
                        ],
                        declarations: [
                            AddDiagramComponent,
                            DiagramsComponent,
                            diagramViewComponent,
                            EditDiagramComponent,
                            DynamicConfigComponentSelectorComponent,
                            DiagramComponent,
                            DynamicComponentSelectorComponent,
                            DiagramModuleContainerComponent,
                            DataMapperComponent,
                            NumericDiagramComponent,
                            ServerStatusDiagramComponent,
                            DiagramPartialConfigEditComponent,
                            PieDiagramPartialConfigComponent,
                            BooleanoWidgetPartialConfigComponent,
                            NumericWidgetPartialConfigComponent,
                            ServerConnectingTimeDiagramComponent,
                            NumericEditDiagramComponent,
                            LinearDiagramPartialConfigComponent,
                            DiagramSelectorComponent
                        ],
                        entryComponents: [DiagramSelectorComponent, diagramViewComponent],
                        exports: [DiagramSelectorComponent],
                        providers: []
                    },] }
        ];
        return NgsDiagramModule;
    }());
    var RootNgsDiagramModule = /** @class */ (function () {
        function RootNgsDiagramModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.diagram = "8.0.10";
        }
        RootNgsDiagramModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            NgsDiagramModule,
                            store.StoreModule.forFeature("diagram", DiagramReducers),
                            effects.EffectsModule.forFeature([DiagramEffects, AddDiagramEffects]),
                            RoutingModule
                        ],
                        exports: [NgsDiagramModule]
                    },] }
        ];
        /** @nocollapse */
        RootNgsDiagramModule.ctorParameters = function () { return []; };
        return RootNgsDiagramModule;
    }());

    exports.DiagramSelectorComponent = DiagramSelectorComponent;
    exports.NgsDiagramModule = NgsDiagramModule;
    exports.diagramViewComponent = diagramViewComponent;
    exports.ɵa = RootNgsDiagramModule;
    exports.ɵb = MODULE_CONFIG_TOKEN;
    exports.ɵba = DiagramEffects;
    exports.ɵbb = AddDiagramEffects;
    exports.ɵbc = RoutingModule;
    exports.ɵc = AddDiagramComponent;
    exports.ɵd = DiagramService;
    exports.ɵf = DiagramConfigurationService;
    exports.ɵg = DiagramsComponent;
    exports.ɵh = EditDiagramComponent;
    exports.ɵi = DynamicConfigComponentSelectorComponent;
    exports.ɵj = DiagramPartialConfigEditComponent;
    exports.ɵk = PieDiagramPartialConfigComponent;
    exports.ɵl = LinearDiagramPartialConfigComponent;
    exports.ɵm = BooleanoWidgetPartialConfigComponent;
    exports.ɵn = DiagramComponent;
    exports.ɵo = DynamicComponentSelectorComponent;
    exports.ɵp = NumericDiagramComponent;
    exports.ɵq = ServerConnectingTimeDiagramComponent;
    exports.ɵr = ServerStatusDiagramComponent;
    exports.ɵs = DiagramModuleContainerComponent;
    exports.ɵt = DataMapperComponent;
    exports.ɵu = NumericWidgetPartialConfigComponent;
    exports.ɵv = NumericEditDiagramComponent;
    exports.ɵw = DiagramReducers;
    exports.ɵx = diagramReducer;
    exports.ɵy = Reducer;
    exports.ɵz = ParentGuardReducer;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-diagram.umd.js.map
