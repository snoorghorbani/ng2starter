(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material'), require('@angular/flex-layout'), require('@ngrx/store'), require('@angular/router'), require('@ngrx/effects'), require('@soushians/grid'), require('rxjs/operators'), require('rxjs'), require('@angular/common/http'), require('@soushians/user'), require('@soushians/shared'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@soushians/page', ['exports', '@angular/core', '@angular/common', '@angular/material', '@angular/flex-layout', '@ngrx/store', '@angular/router', '@ngrx/effects', '@soushians/grid', 'rxjs/operators', 'rxjs', '@angular/common/http', '@soushians/user', '@soushians/shared', '@angular/forms'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.page = {}), global.ng.core, global.ng.common, global.ng.material, global.ng['flex-layout'], global.store, global.ng.router, global.effects, global.grid, global.rxjs.operators, global.rxjs, global.ng.common.http, global.user, global.shared, global.ng.forms));
}(this, function (exports, core, common, material, flexLayout, store, router, effects, grid, operators, rxjs, http, user, shared, forms) { 'use strict';

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
    function PageModuleConfig() { }
    if (false) {
        /** @type {?|undefined} */
        PageModuleConfig.prototype.env;
        /** @type {?|undefined} */
        PageModuleConfig.prototype.endpoints;
    }
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "frontend_server/did/not/set"
        },
        endpoints: {
            upsert: "/api/page",
            delete: "/api/page/${model._id}",
            find: "/api/page",
            get: "/api/page/${model.name}"
        }
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("PageModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageConfigurationService = /** @class */ (function () {
        function PageConfigurationService(configFile, store) {
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            // this.store.select(getPageModuleConfig).subscribe((pageConfig) => {
            // 	if (!pageConfig) {
            // 		return;
            // 	}
            // 	this._config = Object.assign({}, this._config, pageConfig.Config);
            // 	this.config$.next(this._config);
            // });
        }
        Object.defineProperty(PageConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        PageConfigurationService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PageConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ]; };
        return PageConfigurationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PageConfigurationService.prototype._config;
        /** @type {?} */
        PageConfigurationService.prototype.config$;
        /**
         * @type {?}
         * @private
         */
        PageConfigurationService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetPagesApiModel;
    (function (GetPagesApiModel) {
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
        GetPagesApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        GetPagesApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(GetPagesApiModel || (GetPagesApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GET_PAGES_ACTION_TYPES = {
        START: "[GET_PAGES][API][GetPages] start",
        SUCCEED: "[GET_PAGES][API][GetPages] succeed",
        FAILED: "[GET_PAGES][API][GetPages] failed",
    };
    var GetPagesStartAction = /** @class */ (function () {
        function GetPagesStartAction() {
            this.type = "[GET_PAGES][API][GetPages] start" /* START */;
        }
        return GetPagesStartAction;
    }());
    if (false) {
        /** @type {?} */
        GetPagesStartAction.prototype.type;
    }
    var GetPagesSucceedAction = /** @class */ (function () {
        function GetPagesSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GET_PAGES][API][GetPages] succeed" /* SUCCEED */;
        }
        return GetPagesSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        GetPagesSucceedAction.prototype.type;
        /** @type {?} */
        GetPagesSucceedAction.prototype.payload;
    }
    var GetPagesFailedAction = /** @class */ (function () {
        function GetPagesFailedAction(payload) {
            this.payload = payload;
            this.type = "[GET_PAGES][API][GetPages] failed" /* FAILED */;
        }
        return GetPagesFailedAction;
    }());
    if (false) {
        /** @type {?} */
        GetPagesFailedAction.prototype.type;
        /** @type {?} */
        GetPagesFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetPageApiModel;
    (function (GetPageApiModel) {
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
        GetPageApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.name;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        GetPageApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(GetPageApiModel || (GetPageApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GET_PAGE_ACTION_TYPES = {
        START: "[PAGE][API][GetPage] start",
        SUCCEED: "[PAGE][API][GetPage] succeed",
        FAILED: "[PAGE][API][GetPage] failed",
    };
    var GetPageStartAction = /** @class */ (function () {
        function GetPageStartAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][GetPage] start" /* START */;
        }
        return GetPageStartAction;
    }());
    if (false) {
        /** @type {?} */
        GetPageStartAction.prototype.type;
        /** @type {?} */
        GetPageStartAction.prototype.payload;
    }
    var GetPageSucceedAction = /** @class */ (function () {
        function GetPageSucceedAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][GetPage] succeed" /* SUCCEED */;
        }
        return GetPageSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        GetPageSucceedAction.prototype.type;
        /** @type {?} */
        GetPageSucceedAction.prototype.payload;
    }
    var GetPageFailedAction = /** @class */ (function () {
        function GetPageFailedAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][GetPage] failed" /* FAILED */;
        }
        return GetPageFailedAction;
    }());
    if (false) {
        /** @type {?} */
        GetPageFailedAction.prototype.type;
        /** @type {?} */
        GetPageFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeletePageApiModel;
    (function (DeletePageApiModel) {
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
        DeletePageApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        DeletePageApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(DeletePageApiModel || (DeletePageApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DELETE_PAGE_ACTION_TYPES = {
        START: "[PAGE][API][DELETE] start",
        SUCCEED: "[PAGE][API][DELETE] succeed",
        FAILED: "[PAGE][API][DELETE] failed",
    };
    var DeletePageStartAction = /** @class */ (function () {
        function DeletePageStartAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][DELETE] start" /* START */;
        }
        return DeletePageStartAction;
    }());
    if (false) {
        /** @type {?} */
        DeletePageStartAction.prototype.type;
        /** @type {?} */
        DeletePageStartAction.prototype.payload;
    }
    var DeletePageSucceedAction = /** @class */ (function () {
        function DeletePageSucceedAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][DELETE] succeed" /* SUCCEED */;
        }
        return DeletePageSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        DeletePageSucceedAction.prototype.type;
        /** @type {?} */
        DeletePageSucceedAction.prototype.payload;
    }
    var DeletePageFailedAction = /** @class */ (function () {
        function DeletePageFailedAction(payload) {
            this.payload = payload;
            this.type = "[PAGE][API][DELETE] failed" /* FAILED */;
        }
        return DeletePageFailedAction;
    }());
    if (false) {
        /** @type {?} */
        DeletePageFailedAction.prototype.type;
        /** @type {?} */
        DeletePageFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageModel = /** @class */ (function () {
        function PageModel(_a) {
            var _b = _a === void 0 ? {} : _a, _id = _b._id, name = _b.name, grid = _b.grid;
            this._id = _id;
            this.name = name || "";
            this.grid = grid || "";
        }
        return PageModel;
    }());
    if (false) {
        /** @type {?} */
        PageModel.prototype._id;
        /** @type {?} */
        PageModel.prototype.name;
        /** @type {?} */
        PageModel.prototype.grid;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertPageApiModel;
    (function (UpsertPageApiModel) {
        var Request = /** @class */ (function () {
            function Request(page) {
                if (page === void 0) { page = {}; }
                debugger;
                this.page = new PageModel(page);
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
            function () {
                return this.page;
            };
            return Request;
        }());
        UpsertPageApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.page;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertPageApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(UpsertPageApiModel || (UpsertPageApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var UPSERT_PAGE_ACTION_TYPES = {
        START: "[UPSERT_PAGE][API][UpsertPage] start",
        SUCCEED: "[UPSERT_PAGE][API][UpsertPage] succeed",
        FAILED: "[UPSERT_PAGE][API][UpsertPage] failed",
    };
    var UpsertPageStartAction = /** @class */ (function () {
        function UpsertPageStartAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_PAGE][API][UpsertPage] start" /* START */;
        }
        return UpsertPageStartAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertPageStartAction.prototype.type;
        /** @type {?} */
        UpsertPageStartAction.prototype.payload;
    }
    var UpsertPageSucceedAction = /** @class */ (function () {
        function UpsertPageSucceedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_PAGE][API][UpsertPage] succeed" /* SUCCEED */;
        }
        return UpsertPageSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertPageSucceedAction.prototype.type;
        /** @type {?} */
        UpsertPageSucceedAction.prototype.payload;
    }
    var UpsertPageFailedAction = /** @class */ (function () {
        function UpsertPageFailedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_PAGE][API][UpsertPage] failed" /* FAILED */;
        }
        return UpsertPageFailedAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertPageFailedAction.prototype.type;
        /** @type {?} */
        UpsertPageFailedAction.prototype.payload;
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
    var PageService = /** @class */ (function () {
        function PageService(http, store, configurationService, _location, userFacadeService) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
            this._location = _location;
            this.userFacadeService = userFacadeService;
            this.userId$ = this.userFacadeService.getDisplayName().pipe(operators.filter((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i != undefined; })));
        }
        /**
         * @param {?} name
         * @return {?}
         */
        PageService.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.get !== ""; })), operators.take(1), operators.combineLatest(this.userId$), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), config = _b[0], userId = _b[1];
                return _this.http.get(shared.stringTemplate(config.env.frontend_server + config.endpoints.get, { name: name }));
            })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        /**
         * @param {?} _id
         * @return {?}
         */
        PageService.prototype.delete = /**
         * @param {?} _id
         * @return {?}
         */
        function (_id) {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.delete !== ""; })), operators.take(1), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.delete(shared.stringTemplate(config.env.frontend_server + config.endpoints.delete, { _id: _id }));
            })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        /**
         * @return {?}
         */
        PageService.prototype.getPages = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.find != ""; })), operators.combineLatest(this.userId$), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), config = _b[0], userId = _b[1];
                return _this.http.get(config.env.frontend_server + config.endpoints.find);
            })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        /**
         * @template T
         * @param {?} page
         * @return {?}
         */
        PageService.prototype.upsert = /**
         * @template T
         * @param {?} page
         * @return {?}
         */
        function (page) {
            var _this = this;
            /** @type {?} */
            var model = new UpsertPageApiModel.Request(page);
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.upsert != ""; })), operators.take(1), operators.combineLatest(this.userId$), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), config = _b[0], userId = _b[1];
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
        // delete(name: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        // delete(name: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        /**
         * @param {?} name
         * @return {?}
         */
        PageService.prototype.selectByName = 
        // delete(name: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            var _this = this;
            /** @type {?} */
            var subject = new rxjs.BehaviorSubject(undefined);
            this.store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.pages.db.data; }))
                .pipe(operators.filter((/**
             * @param {?} pages
             * @return {?}
             */
            function (pages) { return pages != null; })), operators.map((/**
             * @param {?} pages
             * @return {?}
             */
            function (pages) { return pages.find((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return page.name == name; })); })), operators.tap((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                if (page == null) {
                    debugger;
                    _this.store.dispatch(new GetPageStartAction(name));
                }
            })))
                .subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return subject.next(page); }));
            return subject.asObservable();
        };
        PageService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PageService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: PageConfigurationService },
            { type: common.Location },
            { type: user.UserFacadeService }
        ]; };
        return PageService;
    }());
    if (false) {
        /** @type {?} */
        PageService.prototype.userId$;
        /**
         * @type {?}
         * @private
         */
        PageService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        PageService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        PageService.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        PageService.prototype._location;
        /**
         * @type {?}
         * @private
         */
        PageService.prototype.userFacadeService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageViewComponent = /** @class */ (function () {
        function PageViewComponent(store, service, route, resolver, container) {
            this.store = store;
            this.service = service;
            this.route = route;
            this.resolver = resolver;
            this.container = container;
        }
        /**
         * @return {?}
         */
        PageViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._selectPage();
        };
        /**
         * @return {?}
         */
        PageViewComponent.prototype._selectPage = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.page$ = this.route.params.pipe(operators.pluck("name"), operators.switchMap((/**
             * @param {?} name
             * @return {?}
             */
            function (name) { return _this.service.selectByName(name); })), operators.filter((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return page != undefined; })));
        };
        PageViewComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div *ngIf=\"(page$ | async)?.grid\">\r\n    <ngs-grid [oid]=\"(page$ | async)?.grid\"></ngs-grid>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        PageViewComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: PageService },
            { type: router.ActivatedRoute },
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef }
        ]; };
        return PageViewComponent;
    }());
    if (false) {
        /** @type {?} */
        PageViewComponent.prototype.page$;
        /** @type {?} */
        PageViewComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        PageViewComponent.prototype.service;
        /**
         * @type {?}
         * @private
         */
        PageViewComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        PageViewComponent.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        PageViewComponent.prototype.container;
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
                        selector: "page-root",
                        template: "<router-outlet></router-outlet>"
                    }] }
        ];
        return RootComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertComponent = /** @class */ (function () {
        function UpsertComponent(store, route, service) {
            this.store = store;
            this.route = route;
            this.service = service;
            this._init_formgroup();
        }
        /**
         * view methods
         */
        /**
         * view methods
         * @return {?}
         */
        UpsertComponent.prototype.upsert = /**
         * view methods
         * @return {?}
         */
        function () {
            debugger;
            /** @type {?} */
            var page = __assign({}, this.formGroup.value);
            this.store.dispatch(new UpsertPageStartAction(page));
        };
        /**
         * @return {?}
         */
        UpsertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._select_page();
            this._update_formgroup_base_on_page();
        };
        /**
         * private methods
         */
        /**
         * private methods
         * @return {?}
         */
        UpsertComponent.prototype._init_formgroup = /**
         * private methods
         * @return {?}
         */
        function () {
            this.formGroup = new forms.FormGroup({
                _id: new forms.FormControl(""),
                name: new forms.FormControl(""),
                grid: new forms.FormControl("")
            });
        };
        /**
         * @return {?}
         */
        UpsertComponent.prototype._select_page = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.page$ = this.route.params.pipe(operators.pluck("name"), operators.filter((/**
             * @param {?} name
             * @return {?}
             */
            function (name) { return name != undefined; })), operators.switchMap((/**
             * @param {?} name
             * @return {?}
             */
            function (name) { return _this.service.selectByName(name); })), operators.filter((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return page != undefined; })));
        };
        /**
         * @return {?}
         */
        UpsertComponent.prototype._update_formgroup_base_on_page = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.page$.subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                _this.formGroup.patchValue(page);
            }));
        };
        UpsertComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n    <mat-card fxFlex=\"50\">\r\n        <mat-card-header>\r\n            <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                <mat-icon>receipt</mat-icon>\r\n                <span>\u0627\u06CC\u062C\u0627\u062F \u0635\u0641\u062D\u0647 \u062C\u062F\u06CC\u062F</span>\r\n            </mat-card-title>\r\n            <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <span>\r\n                    \u0646\u0627\u0645 \u0635\u0641\u062D\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F \u0648 \u0628\u0647 \u0645\u0631\u062D\u0644\u0647 \u0628\u0639\u062F \u0628\u0631\u0648\u06CC\u062F ...\r\n                </span>\r\n            </mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content [formGroup]=\"formGroup\">\r\n            <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        UpsertComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: router.ActivatedRoute },
            { type: PageService }
        ]; };
        return UpsertComponent;
    }());
    if (false) {
        /** @type {?} */
        UpsertComponent.prototype.formGroup;
        /** @type {?} */
        UpsertComponent.prototype.page$;
        /**
         * @type {?}
         * @private
         */
        UpsertComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        UpsertComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        UpsertComponent.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PagesManagementComponent = /** @class */ (function () {
        function PagesManagementComponent(store) {
            this.store = store;
            this.pages$ = this.store.select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.pages.db.data; }));
        }
        /**
         * @return {?}
         */
        PagesManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.store.dispatch(new GetPagesStartAction());
        };
        /**
         * view methods
         */
        /**
         * view methods
         * @param {?} page
         * @return {?}
         */
        PagesManagementComponent.prototype.delete = /**
         * view methods
         * @param {?} page
         * @return {?}
         */
        function (page) {
            this.store.dispatch(new DeletePageStartAction(page._id));
        };
        PagesManagementComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>list_alt</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u063A\u062D\u0627\u062A</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u062F\u0631 \u0627\u06CC\u0646 \u0642\u0633\u0645\u062A \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0635\u063A\u062D\u0627\u062A \u0628\u0627 \u06AF\u0631\u06CC\u062F\u0647\u0627\u06CC \u062F\u0644\u062E\u0648\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n          <mat-card fxFlex.gt-lg=\"24\" fxFlex.lg=\"32\" fxFlex.md=\"48\" fxFlex.sm=\"100\" fxFlex.xs=\"100\" class=\"link\" *ngFor=\"let item of (pages$ | async)\"\r\n            fxFlex=\"32\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex fxLayoutAlign=\"start center\">\r\n              <h3> {{item.name}}</h3>\r\n            </div>\r\n            <div fxFlex fxLayoutAlign=\"center center\">\r\n              {{item.type}}\r\n            </div>\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['../upsert' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">edit</mat-icon>\r\n                </a>\r\n              </div>\r\n\r\n              <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button (click)=\"delete(item)\">\r\n                  <mat-icon aria-label=\"delete page\">delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div fxFlex=\"nogrow\">\r\n                <a mat-icon-button [routerLink]=\"['/page' , item.name]\">\r\n                  <mat-icon aria-label=\"edit page\">remove_red_eye</mat-icon>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    <div fxLayout=\"column\" class=\"sticky-action\">\r\n      <a color=\"primary\" mat-mini-fab routerLink=\"../upsert\">\r\n        <mat-icon>add</mat-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["mat-card.link{padding:25px 15px;margin:.5%;box-sizing:border-box}"]
                    }] }
        ];
        /** @nocollapse */
        PagesManagementComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return PagesManagementComponent;
    }());
    if (false) {
        /** @type {?} */
        PagesManagementComponent.prototype.pages$;
        /** @type {?} */
        PagesManagementComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "pages",
            component: RootComponent,
            children: [
                {
                    path: "management",
                    component: PagesManagementComponent
                },
                {
                    path: "upsert",
                    component: UpsertComponent
                },
                {
                    path: "upsert/:name",
                    component: UpsertComponent
                }
            ]
        },
        {
            path: "page/:name",
            component: PageViewComponent
        }
    ];
    /** @type {?} */
    var RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var PagesActionTypes = {
        UPSERT: "[PAGE][DB] UPSERT",
        DELETE: "[PAGE][DB] DELETE",
    };
    var UpsertPageAction = /** @class */ (function () {
        function UpsertPageAction(payload) {
            this.payload = payload;
            this.type = PagesActionTypes.UPSERT;
        }
        return UpsertPageAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertPageAction.prototype.type;
        /** @type {?} */
        UpsertPageAction.prototype.payload;
    }
    var DeletePageAction = /** @class */ (function () {
        function DeletePageAction(payload) {
            this.payload = payload;
            this.type = PagesActionTypes.DELETE;
        }
        return DeletePageAction;
    }());
    if (false) {
        /** @type {?} */
        DeletePageAction.prototype.type;
        /** @type {?} */
        DeletePageAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PageDbEffects = /** @class */ (function () {
        function PageDbEffects(actions$) {
            this.actions$ = actions$;
            this.Upsert$ = this.actions$.pipe(effects.ofType("[PAGE][API][GetPage] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return new UpsertPageAction([page]); })));
            this.UpsertMany$ = this.actions$.pipe(effects.ofType("[GET_PAGES][API][GetPages] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map((/**
             * @param {?} pages
             * @return {?}
             */
            function (pages) { return new UpsertPageAction(pages); })));
            this.delete$ = this.actions$.pipe(effects.ofType("[PAGE][API][DELETE] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map((/**
             * @param {?} page
             * @return {?}
             */
            function (page) { return new DeletePageAction(page); })));
        }
        PageDbEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PageDbEffects.ctorParameters = function () { return [
            { type: effects.Actions }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], PageDbEffects.prototype, "Upsert$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], PageDbEffects.prototype, "UpsertMany$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], PageDbEffects.prototype, "delete$", void 0);
        return PageDbEffects;
    }());
    if (false) {
        /** @type {?} */
        PageDbEffects.prototype.Upsert$;
        /** @type {?} */
        PageDbEffects.prototype.UpsertMany$;
        /** @type {?} */
        PageDbEffects.prototype.delete$;
        /**
         * @type {?}
         * @private
         */
        PageDbEffects.prototype.actions$;
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
            case PagesActionTypes.UPSERT:
                debugger;
                _data = state.data.concat();
                /** @type {?} */
                var newPages = action.payload;
                if (!(newPages instanceof Array)) {
                    newPages = [newPages];
                    console.error("'PagesActionTypes.UPSERT' does not get array payload");
                }
                newPages.forEach((/**
                 * @param {?} newPage
                 * @return {?}
                 */
                function (newPage) {
                    /** @type {?} */
                    var existedPageIndex = _data.findIndex((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return w._id == newPage._id; }));
                    if (existedPageIndex > -1) {
                        _data.splice(existedPageIndex, 1, newPage);
                    }
                    else {
                        _data.push(newPage);
                    }
                }));
                return __assign({}, state, { data: _data });
            case PagesActionTypes.DELETE:
                debugger;
                _data = state.data.concat();
                /** @type {?} */
                var pageIndex = state.data.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w._id == action.payload._id; }));
                _data.splice(pageIndex, 1);
                return __assign({}, state, { data: _data });
            default:
                return state;
        }
    }
    /** @type {?} */
    var getPages = (/**
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
    function PageState() { }
    if (false) {
        /** @type {?} */
        PageState.prototype.db;
    }
    /** @type {?} */
    var PageReducer = {
        db: Reducer
    };
    /**
     * @record
     */
    function AppState() { }
    if (false) {
        /** @type {?} */
        AppState.prototype.pages;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetPageApiEffects = /** @class */ (function () {
        function GetPageApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[PAGE][API][GetPage] start" /* START */), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) { return _this.service.get(payload); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new GetPageSucceedAction(res); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.of(new GetPageFailedAction(err)); })));
        }
        GetPageApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GetPageApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: PageService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetPageApiEffects.prototype, "start$", void 0);
        return GetPageApiEffects;
    }());
    if (false) {
        /** @type {?} */
        GetPageApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        GetPageApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        GetPageApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetPagesApiEffects = /** @class */ (function () {
        function GetPagesApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[GET_PAGES][API][GetPages] start" /* START */), operators.switchMap((/**
             * @return {?}
             */
            function () {
                return _this.service
                    .getPages()
                    .pipe(operators.map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return new GetPagesSucceedAction(res); })), operators.catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return rxjs.of(new GetPagesFailedAction(err)); })));
            })));
        }
        GetPagesApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GetPagesApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: PageService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetPagesApiEffects.prototype, "start$", void 0);
        return GetPagesApiEffects;
    }());
    if (false) {
        /** @type {?} */
        GetPagesApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        GetPagesApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        GetPagesApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertPageApiEffects = /** @class */ (function () {
        function UpsertPageApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[UPSERT_PAGE][API][UpsertPage] start" /* START */), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) { return _this.service.upsert(payload); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new UpsertPageSucceedAction(res); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.of(new UpsertPageFailedAction(err)); })));
        }
        UpsertPageApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UpsertPageApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: PageService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UpsertPageApiEffects.prototype, "start$", void 0);
        return UpsertPageApiEffects;
    }());
    if (false) {
        /** @type {?} */
        UpsertPageApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        UpsertPageApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        UpsertPageApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeletePageApiEffects = /** @class */ (function () {
        function DeletePageApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[PAGE][API][DELETE] start" /* START */), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) { return _this.service.delete(payload); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new DeletePageSucceedAction(res); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.of(new DeletePageFailedAction(err)); })));
        }
        DeletePageApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DeletePageApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: PageService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DeletePageApiEffects.prototype, "start$", void 0);
        return DeletePageApiEffects;
    }());
    if (false) {
        /** @type {?} */
        DeletePageApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        DeletePageApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        DeletePageApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgsPageModule = /** @class */ (function () {
        function NgsPageModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsPageModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: NgsPageRootModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, PageConfigurationService, PageService]
            };
        };
        NgsPageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatCardModule,
                            material.MatButtonModule,
                            material.MatIconModule,
                            material.MatDividerModule,
                            flexLayout.FlexLayoutModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            grid.NgsGridModule
                        ],
                        declarations: [PageViewComponent, PagesManagementComponent, RootComponent, UpsertComponent],
                        exports: []
                    },] }
        ];
        return NgsPageModule;
    }());
    var NgsPageRootModule = /** @class */ (function () {
        function NgsPageRootModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.page = "8.0.10";
        }
        NgsPageRootModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            NgsPageModule,
                            RoutingModule,
                            store.StoreModule.forFeature("pages", PageReducer),
                            effects.EffectsModule.forFeature([
                                PageDbEffects,
                                GetPageApiEffects,
                                GetPagesApiEffects,
                                UpsertPageApiEffects,
                                DeletePageApiEffects
                            ])
                        ],
                        exports: [NgsPageModule]
                    },] }
        ];
        /** @nocollapse */
        NgsPageRootModule.ctorParameters = function () { return []; };
        return NgsPageRootModule;
    }());

    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.NgsPageModule = NgsPageModule;
    exports.NgsPageRootModule = NgsPageRootModule;
    exports.ɵa = PageViewComponent;
    exports.ɵb = PageReducer;
    exports.ɵd = PageService;
    exports.ɵe = PageConfigurationService;
    exports.ɵf = PagesManagementComponent;
    exports.ɵg = RootComponent;
    exports.ɵh = UpsertComponent;
    exports.ɵi = RoutingModule;
    exports.ɵj = Reducer;
    exports.ɵk = PageDbEffects;
    exports.ɵl = GetPageApiEffects;
    exports.ɵn = GetPagesApiEffects;
    exports.ɵp = UpsertPageApiEffects;
    exports.ɵr = DeletePageApiEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-page.umd.js.map
