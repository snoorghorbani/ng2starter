(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store'), require('rxjs/operators'), require('rxjs'), require('@angular/common/http'), require('@soushians/shared'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@angular/material'), require('@ngrx/effects'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/widget', ['exports', '@angular/core', '@ngrx/store', 'rxjs/operators', 'rxjs', '@angular/common/http', '@soushians/shared', '@angular/common', '@angular/router', '@angular/forms', '@angular/material', '@ngrx/effects', '@angular/flex-layout'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.widget = {}), global.ng.core, global.store, global.rxjs.operators, global.rxjs, global.ng.common.http, global.shared, global.ng.common, global.ng.router, global.ng.forms, global.ng.material, global.effects, global.ng['flex-layout']));
}(this, function (exports, core, store, operators, rxjs, http, shared, common, router, forms, material, effects, flexLayout) { 'use strict';

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
    var UPSERT_WIDGET_ACTION_TYPES = {
        START: "[UPSERT_WIDGET][API][UpsertWidget] start",
        SUCCEED: "[UPSERT_WIDGET][API][UpsertWidget] succeed",
        FAILED: "[UPSERT_WIDGET][API][UpsertWidget] failed",
    };
    var UpsertWidgetStartAction = /** @class */ (function () {
        function UpsertWidgetStartAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_WIDGET][API][UpsertWidget] start" /* START */;
        }
        return UpsertWidgetStartAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertWidgetStartAction.prototype.type;
        /** @type {?} */
        UpsertWidgetStartAction.prototype.payload;
    }
    var UpsertWidgetSucceedAction = /** @class */ (function () {
        function UpsertWidgetSucceedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_WIDGET][API][UpsertWidget] succeed" /* SUCCEED */;
        }
        return UpsertWidgetSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertWidgetSucceedAction.prototype.type;
        /** @type {?} */
        UpsertWidgetSucceedAction.prototype.payload;
    }
    var UpsertWidgetFailedAction = /** @class */ (function () {
        function UpsertWidgetFailedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_WIDGET][API][UpsertWidget] failed" /* FAILED */;
        }
        return UpsertWidgetFailedAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertWidgetFailedAction.prototype.type;
        /** @type {?} */
        UpsertWidgetFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function WidgetModuleConfig() { }
    if (false) {
        /** @type {?|undefined} */
        WidgetModuleConfig.prototype.development_uri;
        /** @type {?|undefined} */
        WidgetModuleConfig.prototype.production_uri;
        /** @type {?|undefined} */
        WidgetModuleConfig.prototype.env;
        /** @type {?|undefined} */
        WidgetModuleConfig.prototype.endpoints;
        /** @type {?|undefined} */
        WidgetModuleConfig.prototype.types;
    }
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "frontend_server/did/not/set"
        },
        endpoints: {
            upsert: "/api/uiwidget",
            find: "/api/uiwidget",
            get: "/api/uiwidget/${model._id}",
            deleteItem: "/api/uiwidget/${model.widgetId}"
        },
        types: {}
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("WidgetModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetConfigurationService = /** @class */ (function () {
        function WidgetConfigurationService(configFile, store) {
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            // this.store.select(getWidgetModuleConfig).subscribe((widgetConfig) => {
            // 	if (!widgetConfig) {
            // 		return;
            // 	}
            // 	this._config = Object.assign({}, this._config, widgetConfig.Config);
            // 	this.config$.next(this._config);
            // });
        }
        Object.defineProperty(WidgetConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        WidgetConfigurationService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        WidgetConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ]; };
        return WidgetConfigurationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        WidgetConfigurationService.prototype._config;
        /** @type {?} */
        WidgetConfigurationService.prototype.config$;
        /**
         * @type {?}
         * @private
         */
        WidgetConfigurationService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetWidgetsApiModel;
    (function (GetWidgetsApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                var _this = this;
                if (initValue === void 0) { initValue = {}; }
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
        GetWidgetsApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        GetWidgetsApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(GetWidgetsApiModel || (GetWidgetsApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GET_WIDGETS_ACTION_TYPES = {
        START: "[GET_WIDGETS][API][GetWidgets] start",
        SUCCEED: "[GET_WIDGETS][API][GetWidgets] succeed",
        FAILED: "[GET_WIDGETS][API][GetWidgets] failed",
    };
    var GetWidgetsStartAction = /** @class */ (function () {
        function GetWidgetsStartAction() {
            this.type = "[GET_WIDGETS][API][GetWidgets] start" /* START */;
        }
        return GetWidgetsStartAction;
    }());
    if (false) {
        /** @type {?} */
        GetWidgetsStartAction.prototype.type;
    }
    var GetWidgetsSucceedAction = /** @class */ (function () {
        function GetWidgetsSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */;
        }
        return GetWidgetsSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        GetWidgetsSucceedAction.prototype.type;
        /** @type {?} */
        GetWidgetsSucceedAction.prototype.payload;
    }
    var GetWidgetsFailedAction = /** @class */ (function () {
        function GetWidgetsFailedAction(payload) {
            this.payload = payload;
            this.type = "[GET_WIDGETS][API][GetWidgets] failed" /* FAILED */;
        }
        return GetWidgetsFailedAction;
    }());
    if (false) {
        /** @type {?} */
        GetWidgetsFailedAction.prototype.type;
        /** @type {?} */
        GetWidgetsFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetWidgetApiModel;
    (function (GetWidgetApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                var _this = this;
                if (initValue === void 0) { initValue = {}; }
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
        GetWidgetApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype._id;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        GetWidgetApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(GetWidgetApiModel || (GetWidgetApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GET_WIDGET_ACTION_TYPES = {
        START: "[WIDGET][API][GetWidget] start",
        SUCCEED: "[WIDGET][API][GetWidget] succeed",
        FAILED: "[WIDGET][API][GetWidget] failed",
    };
    var GetWidgetStartAction = /** @class */ (function () {
        function GetWidgetStartAction(payload) {
            this.payload = payload;
            this.type = "[WIDGET][API][GetWidget] start" /* START */;
        }
        return GetWidgetStartAction;
    }());
    if (false) {
        /** @type {?} */
        GetWidgetStartAction.prototype.type;
        /** @type {?} */
        GetWidgetStartAction.prototype.payload;
    }
    var GetWidgetSucceedAction = /** @class */ (function () {
        function GetWidgetSucceedAction(payload) {
            this.payload = payload;
            this.type = "[WIDGET][API][GetWidget] succeed" /* SUCCEED */;
        }
        return GetWidgetSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        GetWidgetSucceedAction.prototype.type;
        /** @type {?} */
        GetWidgetSucceedAction.prototype.payload;
    }
    var GetWidgetFailedAction = /** @class */ (function () {
        function GetWidgetFailedAction(payload) {
            this.payload = payload;
            this.type = "[WIDGET][API][GetWidget] failed" /* FAILED */;
        }
        return GetWidgetFailedAction;
    }());
    if (false) {
        /** @type {?} */
        GetWidgetFailedAction.prototype.type;
        /** @type {?} */
        GetWidgetFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    WidgetModel = /** @class */ (function () {
        function WidgetModel(_a) {
            var _b = _a === void 0 ? {} : _a, _id = _b._id, name = _b.name, type = _b.type, Config = _b.Config;
            this._id = _id;
            this.name = name || "";
            this.type = type;
            this.Config = Config || ((/** @type {?} */ ({})));
        }
        return WidgetModel;
    }());
    if (false) {
        /** @type {?} */
        WidgetModel.prototype._id;
        /** @type {?} */
        WidgetModel.prototype.name;
        /** @type {?} */
        WidgetModel.prototype.type;
        /** @type {?} */
        WidgetModel.prototype.Config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertWidgetApiModel;
    (function (UpsertWidgetApiModel) {
        var Request = /** @class */ (function () {
            function Request(widget) {
                if (widget === void 0) { widget = {}; }
                debugger;
                this.widget = new WidgetModel(widget);
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
            function () {
                return this.widget;
            };
            return Request;
        }());
        UpsertWidgetApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.widget;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertWidgetApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(UpsertWidgetApiModel || (UpsertWidgetApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeleteWidgetApiModel;
    (function (DeleteWidgetApiModel) {
        var Request = /** @class */ (function () {
            function Request(widget) {
                if (widget === void 0) { widget = {}; }
                debugger;
                this.widget = new WidgetModel(widget);
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
            function () {
                return this.widget;
            };
            return Request;
        }());
        DeleteWidgetApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.widget;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        DeleteWidgetApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(DeleteWidgetApiModel || (DeleteWidgetApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DELETE_WIDGET_ACTION_TYPES = {
        START: "[DELETE_WIDGET][API][DeleteWidget] start",
        SUCCEED: "[DELETE_WIDGET][API][DeleteWidget] succeed",
        FAILED: "[DELETE_WIDGET][API][DeleteWidget] failed",
    };
    var DeleteWidgetStartAction = /** @class */ (function () {
        function DeleteWidgetStartAction(payload) {
            this.payload = payload;
            this.type = "[DELETE_WIDGET][API][DeleteWidget] start" /* START */;
        }
        return DeleteWidgetStartAction;
    }());
    if (false) {
        /** @type {?} */
        DeleteWidgetStartAction.prototype.type;
        /** @type {?} */
        DeleteWidgetStartAction.prototype.payload;
    }
    var DeleteWidgetSucceedAction = /** @class */ (function () {
        function DeleteWidgetSucceedAction(payload) {
            this.payload = payload;
            this.type = "[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */;
        }
        return DeleteWidgetSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        DeleteWidgetSucceedAction.prototype.type;
        /** @type {?} */
        DeleteWidgetSucceedAction.prototype.payload;
    }
    var DeleteWidgetFailedAction = /** @class */ (function () {
        function DeleteWidgetFailedAction(payload) {
            this.payload = payload;
            this.type = "[DELETE_WIDGET][API][DeleteWidget] failed" /* FAILED */;
        }
        return DeleteWidgetFailedAction;
    }());
    if (false) {
        /** @type {?} */
        DeleteWidgetFailedAction.prototype.type;
        /** @type {?} */
        DeleteWidgetFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetService = /** @class */ (function () {
        function WidgetService(http, store, configurationService, _location) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
            this._location = _location;
        }
        /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
        WidgetService.prototype.get = /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
        function (_id) {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.get !== ""; })), operators.take(1), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.get(shared.stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }));
            })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        /**
         * @return {?}
         */
        WidgetService.prototype.getWidgets = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.find != ""; })), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        /**
         * @template T
         * @param {?} widget
         * @return {?}
         */
        WidgetService.prototype.upsert = /**
         * @template T
         * @param {?} widget
         * @return {?}
         */
        function (widget) {
            var _this = this;
            /** @type {?} */
            var model = new UpsertWidgetApiModel.Request(widget);
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.upsert != ""; })), operators.take(1), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
            })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })), operators.tap((/**
             * @return {?}
             */
            function () { return _this._location.back(); })));
        };
        /**
         * @param {?} widget
         * @return {?}
         */
        WidgetService.prototype.delete = /**
         * @param {?} widget
         * @return {?}
         */
        function (widget) {
            var _this = this;
            debugger;
            /** @type {?} */
            var widgetId = widget._id;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.deleteItem != ""; })), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return _this.http.delete(shared.stringTemplate(config.env.frontend_server + config.endpoints.deleteItem, { widgetId: widgetId })).pipe(operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; }))); })));
        };
        /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
        WidgetService.prototype.selectById = /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
        function (_id) {
            var _this = this;
            /** @type {?} */
            var subject = new rxjs.BehaviorSubject(undefined);
            this.store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.widgets.db.data; }))
                .pipe(operators.filter((/**
             * @param {?} widgets
             * @return {?}
             */
            function (widgets) { return widgets != null; })), operators.map((/**
             * @param {?} widgets
             * @return {?}
             */
            function (widgets) { return widgets.find((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) { return widget._id == _id; })); })), operators.tap((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) {
                if (widget == null) {
                    _this.store.dispatch(new GetWidgetStartAction(_id));
                }
            })))
                .subscribe((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) { return subject.next(widget); }));
            return subject.asObservable();
        };
        WidgetService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        WidgetService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: WidgetConfigurationService },
            { type: common.Location }
        ]; };
        return WidgetService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        WidgetService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        WidgetService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        WidgetService.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        WidgetService.prototype._location;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicWidgetViewComponent = /** @class */ (function () {
        function DynamicWidgetViewComponent(store, service, configurationService, resolver, container) {
            this.store = store;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this._fill_component_map();
        }
        Object.defineProperty(DynamicWidgetViewComponent.prototype, "oid", {
            set: /**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                this._selectWidget(id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.widget$.pipe(operators.filter((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) { return widget != undefined; }))).subscribe((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) {
                _this._resolve_correct_component_base_on_widget_type(widget);
            }));
        };
        /**
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype._fill_component_map = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.configurationService.config$.pipe(operators.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.types; })), operators.startWith({})).subscribe((/**
             * @param {?} types
             * @return {?}
             */
            function (types) {
                debugger;
                _this.mapTypeToComponent = types;
            }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype._selectWidget = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.widget$ = this.service.selectById(id);
        };
        /**
         * @param {?} widget
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} widget
         * @return {?}
         */
        function (widget) {
            var _this = this;
            if (!this.mapTypeToComponent[widget.type]) {
                debugger;
                /** @type {?} */
                var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
            }
            /** @type {?} */
            var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
            this.component = this.container.createComponent(component);
            this.widget$.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return (_this.component.instance.widget = w); }));
        };
        DynamicWidgetViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget",
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        DynamicWidgetViewComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: WidgetService },
            { type: WidgetConfigurationService },
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef }
        ]; };
        DynamicWidgetViewComponent.propDecorators = {
            oid: [{ type: core.Input }]
        };
        return DynamicWidgetViewComponent;
    }());
    if (false) {
        /** @type {?} */
        DynamicWidgetViewComponent.prototype.widget$;
        /** @type {?} */
        DynamicWidgetViewComponent.prototype.component;
        /** @type {?} */
        DynamicWidgetViewComponent.prototype.mapTypeToComponent;
        /** @type {?} */
        DynamicWidgetViewComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetViewComponent.prototype.service;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetViewComponent.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetViewComponent.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetViewComponent.prototype.container;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetSelectorComponent = /** @class */ (function () {
        function WidgetSelectorComponent(store) {
            this.store = store;
            this.widgets$ = this.store.select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.widgets.db.data; }));
        }
        Object.defineProperty(WidgetSelectorComponent.prototype, "valid", {
            get: /**
             * @return {?}
             */
            function () {
                return this.config.oid != undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WidgetSelectorComponent.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return {
                    oid: this.selectedWidgetId
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        WidgetSelectorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.store.dispatch(new GetWidgetsStartAction());
        };
        WidgetSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n  <h4>\u0644\u06CC\u0633\u062A \u0648\u06CC\u062C\u062A\u200C\u0647\u0627</h4>\r\n        <mat-form-field fxFlex=\"100\">\r\n<mat-select placeholder=\"\u0646\u0648\u0639 \u0648\u06CC\u062C\u062A\" [(ngModel)]=\"selectedWidgetId\" name=\"selectedWidgetId\">\r\n  <mat-option *ngFor=\"let item of (widgets$ | async)\" [value]=\"item._id\">\r\n    {{item.type}} : <b>{{item.name}}</b>\r\n  </mat-option>\r\n</mat-select> \r\n</mat-form-field>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        WidgetSelectorComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return WidgetSelectorComponent;
    }());
    if (false) {
        /** @type {?} */
        WidgetSelectorComponent.prototype.widgets$;
        /** @type {?} */
        WidgetSelectorComponent.prototype.selectedWidgetId;
        /** @type {?} */
        WidgetSelectorComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RootComponent = /** @class */ (function () {
        function RootComponent() {
        }
        RootComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-root",
                        template: "<router-outlet></router-outlet>"
                    }] }
        ];
        return RootComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetsManagementComponent = /** @class */ (function () {
        function WidgetsManagementComponent(store) {
            this.store = store;
            this.widgets$ = this.store.select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.widgets.db.data; }));
            this._fill_anghazi();
        }
        /**
         * @return {?}
         */
        WidgetsManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.store.dispatch(new GetWidgetsStartAction());
        };
        /**
         * @param {?} item
         * @return {?}
         */
        WidgetsManagementComponent.prototype.remove = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            debugger;
            this.store.dispatch(new DeleteWidgetStartAction(item));
        };
        /**
         * @return {?}
         */
        WidgetsManagementComponent.prototype._fill_anghazi = /**
         * @return {?}
         */
        function () {
            this.anghazi = {
                article: {
                    color: "green",
                    icon: "description"
                },
                links: {
                    color: "orange",
                    icon: "link"
                },
                list: {
                    color: "blue",
                    icon: "list"
                }
            };
        };
        WidgetsManagementComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>widgets</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\r\n\r\n        <button mat-raised-button fxFlex.gt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"31.7\" fxFlex.sm=\"49\" fxFlex.xs=\"100\"\r\n          class='link' *ngFor=\"let item of (widgets$ | async)\">\r\n          <button mat-icon-button (click)=\"remove(item)\" class=\"remove-item\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n          <div class=\"link-button\" [routerLink]=\"['../upsert' ,  item.type,  item._id]\" fxLayout='column' fxLayoutAlign='space-between center'>\r\n            <mat-icon color='primary' [style.color]=\"anghazi[item.type].color\">{{anghazi[item.type].icon}}</mat-icon>\r\n            <div fxFlex=\"nogrow\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\" class=\"widget-type\">\r\n              {{item.type}}\r\n            </div>\r\n            <h4 class=\"title\">{{item.name}}</h4>\r\n          </div>\r\n        </button>\r\n      </div>\r\n\r\n    </mat-card>\r\n\r\n    <div fxLayout=\"column\" class=\"sticky-action\">\r\n      <a mat-mini-fab routerLink=\"../upsert/article\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.article.color\">{{anghazi.article.icon}}</mat-icon>\r\n      </a>\r\n      <a mat-mini-fab routerLink=\"../upsert/links\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.links.color\">{{anghazi.links.icon}}</mat-icon>\r\n      </a>\r\n      <a mat-mini-fab routerLink=\"../upsert/list\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.list.color\">{{anghazi.list.icon}}</mat-icon>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</div>",
                        styles: [".link{margin:.5%;box-sizing:border-box;position:relative;padding:0}button.link mat-icon{font-size:34px;width:34px;height:34px}.link h4{margin:0}.remove-item{position:absolute;top:0;left:0;z-index:100}.link-button{padding:25px 15px}button.link .remove-item mat-icon{font-size:initial;width:initial;height:initial;visibility:hidden;opacity:0;transition:opacity .3s ease-in-out}button.link:hover .remove-item mat-icon{visibility:visible;opacity:1}"]
                    }] }
        ];
        /** @nocollapse */
        WidgetsManagementComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return WidgetsManagementComponent;
    }());
    if (false) {
        /** @type {?} */
        WidgetsManagementComponent.prototype.anghazi;
        /** @type {?} */
        WidgetsManagementComponent.prototype.widgets$;
        /** @type {?} */
        WidgetsManagementComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertComponent = /** @class */ (function () {
        function UpsertComponent() {
        }
        UpsertComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n    <div fxFlex=\"50\">\r\n        <ng-container ngsDynamicWidgetConfig></ng-container>\r\n    </div>\r\n</div>"
                    }] }
        ];
        return UpsertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "widget",
            component: RootComponent,
            children: [
                {
                    path: "management",
                    component: WidgetsManagementComponent
                },
                {
                    path: "upsert/:type",
                    component: UpsertComponent
                },
                {
                    path: "upsert/:type/:_id",
                    component: UpsertComponent
                }
            ]
        }
    ];
    /** @type {?} */
    var WidgetRoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetWidgetApiEffects = /** @class */ (function () {
        function GetWidgetApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[WIDGET][API][GetWidget] start" /* START */), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) { return _this.service.get(payload); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new GetWidgetSucceedAction(res); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.of(new GetWidgetFailedAction(err)); })));
        }
        GetWidgetApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GetWidgetApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: WidgetService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetWidgetApiEffects.prototype, "start$", void 0);
        return GetWidgetApiEffects;
    }());
    if (false) {
        /** @type {?} */
        GetWidgetApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        GetWidgetApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        GetWidgetApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertWidgetApiEffects = /** @class */ (function () {
        function UpsertWidgetApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[UPSERT_WIDGET][API][UpsertWidget] start" /* START */), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) { return _this.service.upsert(payload); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new UpsertWidgetSucceedAction(res); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.of(new UpsertWidgetFailedAction(err)); })));
        }
        UpsertWidgetApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UpsertWidgetApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: WidgetService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UpsertWidgetApiEffects.prototype, "start$", void 0);
        return UpsertWidgetApiEffects;
    }());
    if (false) {
        /** @type {?} */
        UpsertWidgetApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        UpsertWidgetApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        UpsertWidgetApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetWidgetsApiEffects = /** @class */ (function () {
        function GetWidgetsApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[GET_WIDGETS][API][GetWidgets] start" /* START */), operators.switchMap((/**
             * @return {?}
             */
            function () {
                return _this.service
                    .getWidgets()
                    .pipe(operators.map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return new GetWidgetsSucceedAction(res); })), operators.catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return rxjs.of(new GetWidgetsFailedAction(err)); })));
            })));
        }
        GetWidgetsApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GetWidgetsApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: WidgetService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetWidgetsApiEffects.prototype, "start$", void 0);
        return GetWidgetsApiEffects;
    }());
    if (false) {
        /** @type {?} */
        GetWidgetsApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        GetWidgetsApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        GetWidgetsApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeleteWidgetApiEffects = /** @class */ (function () {
        function DeleteWidgetApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[DELETE_WIDGET][API][DeleteWidget] start" /* START */), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) {
                return _this.service
                    .delete(payload)
                    .pipe(operators.map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return new DeleteWidgetSucceedAction(res); })), operators.catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return rxjs.of(new DeleteWidgetFailedAction(err)); })));
            })));
        }
        DeleteWidgetApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DeleteWidgetApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: WidgetService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DeleteWidgetApiEffects.prototype, "start$", void 0);
        return DeleteWidgetApiEffects;
    }());
    if (false) {
        /** @type {?} */
        DeleteWidgetApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        DeleteWidgetApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DeleteWidgetApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var WidgetsActionTypes = {
        UPSERT: "[WIDGET][DB] UPSERT",
        DELETE: "[WIDGET][DB] DELETE",
    };
    var UpsertWidgetAction = /** @class */ (function () {
        function UpsertWidgetAction(payload) {
            this.payload = payload;
            this.type = WidgetsActionTypes.UPSERT;
        }
        return UpsertWidgetAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertWidgetAction.prototype.type;
        /** @type {?} */
        UpsertWidgetAction.prototype.payload;
    }
    var DeleteWidgetAction = /** @class */ (function () {
        function DeleteWidgetAction(payload) {
            this.payload = payload;
            this.type = WidgetsActionTypes.DELETE;
        }
        return DeleteWidgetAction;
    }());
    if (false) {
        /** @type {?} */
        DeleteWidgetAction.prototype.type;
        /** @type {?} */
        DeleteWidgetAction.prototype.payload;
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
        /** @type {?} */
        var _data;
        switch (action.type) {
            case WidgetsActionTypes.UPSERT:
                _data = state.data.concat();
                /** @type {?} */
                var newWidgets = action.payload;
                if (!(newWidgets instanceof Array)) {
                    newWidgets = [newWidgets];
                    console.error("'WidgetsActionTypes.UPSERT' does not get array payload");
                }
                newWidgets.forEach((/**
                 * @param {?} newWidget
                 * @return {?}
                 */
                function (newWidget) {
                    /** @type {?} */
                    var existedWidgetIndex = _data.findIndex((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return w._id == newWidget._id; }));
                    if (existedWidgetIndex > -1) {
                        _data.splice(existedWidgetIndex, 1, newWidget);
                    }
                    else {
                        _data.push(newWidget);
                    }
                }));
                return __assign({}, state, { data: _data });
            case WidgetsActionTypes.DELETE:
                debugger;
                _data = state.data.concat();
                /** @type {?} */
                var widgetIndex = state.data.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w._id == action.payload._id; }));
                if (widgetIndex > -1) {
                    _data.splice(widgetIndex, 1);
                }
                return __assign({}, state, { data: _data });
            default:
                return state;
        }
    }
    /** @type {?} */
    var getWidgets = (/**
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
    function WidgetState() { }
    if (false) {
        /** @type {?} */
        WidgetState.prototype.db;
    }
    /** @type {?} */
    var WidgetReducer = {
        db: Reducer
    };
    /**
     * @record
     */
    function AppState() { }
    if (false) {
        /** @type {?} */
        AppState.prototype.widgets;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetDbEffects = /** @class */ (function () {
        function WidgetDbEffects(actions$) {
            this.actions$ = actions$;
            this.Upsert$ = this.actions$.pipe(effects.ofType("[WIDGET][API][GetWidget] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) { return new UpsertWidgetAction([widget]); })));
            this.UpsertMany$ = this.actions$.pipe(effects.ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map((/**
             * @param {?} widgets
             * @return {?}
             */
            function (widgets) { return new UpsertWidgetAction(widgets); })));
            this.Delete$ = this.actions$.pipe(effects.ofType("[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) { return new DeleteWidgetAction(widget); })));
        }
        WidgetDbEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        WidgetDbEffects.ctorParameters = function () { return [
            { type: effects.Actions }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], WidgetDbEffects.prototype, "Upsert$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], WidgetDbEffects.prototype, "UpsertMany$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], WidgetDbEffects.prototype, "Delete$", void 0);
        return WidgetDbEffects;
    }());
    if (false) {
        /** @type {?} */
        WidgetDbEffects.prototype.Upsert$;
        /** @type {?} */
        WidgetDbEffects.prototype.UpsertMany$;
        /** @type {?} */
        WidgetDbEffects.prototype.Delete$;
        /**
         * @type {?}
         * @private
         */
        WidgetDbEffects.prototype.actions$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicWidgetConfigDirective = /** @class */ (function () {
        function DynamicWidgetConfigDirective(store, route, service, configurationService, resolver, container) {
            this.store = store;
            this.route = route;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this._fill_component_map();
        }
        /**
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._react_base_on_params();
        };
        /**
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype._fill_component_map = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.configurationService.config$.pipe(operators.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.types; })), operators.startWith({})).subscribe((/**
             * @param {?} types
             * @return {?}
             */
            function (types) {
                debugger;
                _this.mapTypeToComponent = types;
            }));
        };
        /**
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype._react_base_on_params = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.route.params.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, _id = _a._id;
                if (_id) {
                    _this.service.selectById(_id).subscribe((/**
                     * @param {?} widget
                     * @return {?}
                     */
                    function (widget) {
                        _this._resolve_correct_component_base_on_widget_type(type, widget);
                    }));
                }
                else {
                    _this._resolve_correct_component_base_on_widget_type(type);
                }
            }));
        };
        /**
         * @param {?} type
         * @param {?=} widget
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} type
         * @param {?=} widget
         * @return {?}
         */
        function (type, widget) {
            if (this.component) {
                this.component.destroy();
            }
            if (!this.mapTypeToComponent[type]) {
                /** @type {?} */
                var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                throw new Error("Trying to use an unsupported type (" + type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
            }
            /** @type {?} */
            var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].upsert);
            this.component = this.container.createComponent(component);
            // this.widget$.subscribe((w) => (this.component.instance.widget = w));
            if (widget)
                this.component.instance.widget = widget;
        };
        DynamicWidgetConfigDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[ngsDynamicWidgetConfig]"
                    },] }
        ];
        /** @nocollapse */
        DynamicWidgetConfigDirective.ctorParameters = function () { return [
            { type: store.Store },
            { type: router.ActivatedRoute },
            { type: WidgetService },
            { type: WidgetConfigurationService },
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef }
        ]; };
        return DynamicWidgetConfigDirective;
    }());
    if (false) {
        /** @type {?} */
        DynamicWidgetConfigDirective.prototype.component;
        /** @type {?} */
        DynamicWidgetConfigDirective.prototype.mapTypeToComponent;
        /** @type {?} */
        DynamicWidgetConfigDirective.prototype.store;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetConfigDirective.prototype.route;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetConfigDirective.prototype.service;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetConfigDirective.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetConfigDirective.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetConfigDirective.prototype.container;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicWidgetViewDirective = /** @class */ (function () {
        function DynamicWidgetViewDirective(store, route, service, configurationService, resolver, container) {
            this.store = store;
            this.route = route;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this._fill_component_map();
        }
        Object.defineProperty(DynamicWidgetViewDirective.prototype, "oid", {
            set: /**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                this._selectWidget(id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.widget$.pipe(operators.filter((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) { return widget != undefined; }))).subscribe((/**
             * @param {?} widget
             * @return {?}
             */
            function (widget) {
                _this._resolve_correct_component_base_on_widget_type(widget);
            }));
        };
        /**
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype._fill_component_map = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.configurationService.config$.pipe(operators.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.types; })), operators.startWith({})).subscribe((/**
             * @param {?} types
             * @return {?}
             */
            function (types) {
                debugger;
                _this.mapTypeToComponent = types;
            }));
        };
        /**
         * @param {?} id
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype._selectWidget = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.widget$ = this.service.selectById(id);
        };
        /**
         * @param {?} widget
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} widget
         * @return {?}
         */
        function (widget) {
            var _this = this;
            if (!this.mapTypeToComponent[widget.type]) {
                /** @type {?} */
                var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
            }
            /** @type {?} */
            var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
            this.component = this.container.createComponent(component);
            this.widget$.subscribe((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return (_this.component.instance.widget = w); }));
        };
        DynamicWidgetViewDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[ngsDynamicWidgetView]"
                    },] }
        ];
        /** @nocollapse */
        DynamicWidgetViewDirective.ctorParameters = function () { return [
            { type: store.Store },
            { type: router.ActivatedRoute },
            { type: WidgetService },
            { type: WidgetConfigurationService },
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef }
        ]; };
        DynamicWidgetViewDirective.propDecorators = {
            oid: [{ type: core.Input }]
        };
        return DynamicWidgetViewDirective;
    }());
    if (false) {
        /** @type {?} */
        DynamicWidgetViewDirective.prototype.widget$;
        /** @type {?} */
        DynamicWidgetViewDirective.prototype.component;
        /** @type {?} */
        DynamicWidgetViewDirective.prototype.mapTypeToComponent;
        /** @type {?} */
        DynamicWidgetViewDirective.prototype.store;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetViewDirective.prototype.route;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetViewDirective.prototype.service;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetViewDirective.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetViewDirective.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        DynamicWidgetViewDirective.prototype.container;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgsWidgetModule = /** @class */ (function () {
        function NgsWidgetModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsWidgetModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: NgsWidgetRootModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, WidgetConfigurationService, WidgetService]
            };
        };
        NgsWidgetModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSelectModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            material.MatRadioModule,
                            flexLayout.FlexLayoutModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatSlideToggleModule,
                            material.MatDividerModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            material.MatMenuModule
                        ],
                        declarations: [
                            RootComponent,
                            WidgetsManagementComponent,
                            UpsertComponent,
                            DynamicWidgetConfigDirective,
                            DynamicWidgetViewDirective,
                            WidgetSelectorComponent,
                            DynamicWidgetViewComponent
                        ],
                        entryComponents: [WidgetSelectorComponent, DynamicWidgetViewComponent],
                        exports: [DynamicWidgetViewDirective, WidgetSelectorComponent, DynamicWidgetViewComponent]
                    },] }
        ];
        return NgsWidgetModule;
    }());
    var NgsWidgetRootModule = /** @class */ (function () {
        function NgsWidgetRootModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.widget = "8.0.10";
        }
        NgsWidgetRootModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            NgsWidgetModule,
                            WidgetRoutingModule,
                            store.StoreModule.forFeature("widgets", WidgetReducer),
                            effects.EffectsModule.forFeature([
                                WidgetDbEffects,
                                GetWidgetApiEffects,
                                GetWidgetsApiEffects,
                                UpsertWidgetApiEffects,
                                DeleteWidgetApiEffects
                            ])
                        ],
                        exports: [NgsWidgetModule]
                    },] }
        ];
        /** @nocollapse */
        NgsWidgetRootModule.ctorParameters = function () { return []; };
        return NgsWidgetRootModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    IWidgetView = /** @class */ (function () {
        function IWidgetView() {
        }
        return IWidgetView;
    }());
    if (false) {
        /** @type {?} */
        IWidgetView.prototype.widget;
        /** @type {?} */
        IWidgetView.prototype.goToEdit;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    IWidgetUpsert = /** @class */ (function () {
        function IWidgetUpsert() {
        }
        return IWidgetUpsert;
    }());
    if (false) {
        /** @type {?} */
        IWidgetUpsert.prototype.widget;
    }

    exports.DynamicWidgetViewComponent = DynamicWidgetViewComponent;
    exports.IWidgetUpsert = IWidgetUpsert;
    exports.IWidgetView = IWidgetView;
    exports.NgsWidgetModule = NgsWidgetModule;
    exports.UpsertWidgetStartAction = UpsertWidgetStartAction;
    exports.WidgetModel = WidgetModel;
    exports.WidgetSelectorComponent = WidgetSelectorComponent;
    exports.ɵb = NgsWidgetRootModule;
    exports.ɵc = MODULE_CONFIG_TOKEN;
    exports.ɵd = WidgetReducer;
    exports.ɵf = WidgetService;
    exports.ɵg = WidgetConfigurationService;
    exports.ɵh = RootComponent;
    exports.ɵi = WidgetsManagementComponent;
    exports.ɵj = UpsertComponent;
    exports.ɵk = DynamicWidgetConfigDirective;
    exports.ɵl = DynamicWidgetViewDirective;
    exports.ɵm = WidgetRoutingModule;
    exports.ɵn = Reducer;
    exports.ɵo = WidgetDbEffects;
    exports.ɵp = GetWidgetApiEffects;
    exports.ɵr = GetWidgetsApiEffects;
    exports.ɵt = UpsertWidgetApiEffects;
    exports.ɵu = DeleteWidgetApiEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-widget.umd.js.map
