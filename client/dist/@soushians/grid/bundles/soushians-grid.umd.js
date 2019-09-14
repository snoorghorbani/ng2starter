(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ngrx/store'), require('@angular/router'), require('@angular/forms'), require('@angular/material'), require('@ngrx/effects'), require('@angular/flex-layout'), require('angular-gridster2'), require('rxjs/operators'), require('rxjs'), require('@angular/common/http'), require('@soushians/frontend-authentication'), require('@soushians/user'), require('@soushians/shared')) :
    typeof define === 'function' && define.amd ? define('@soushians/grid', ['exports', '@angular/core', '@angular/common', '@ngrx/store', '@angular/router', '@angular/forms', '@angular/material', '@ngrx/effects', '@angular/flex-layout', 'angular-gridster2', 'rxjs/operators', 'rxjs', '@angular/common/http', '@soushians/frontend-authentication', '@soushians/user', '@soushians/shared'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.grid = {}), global.ng.core, global.ng.common, global.store, global.ng.router, global.ng.forms, global.ng.material, global.effects, global.ng['flex-layout'], global.angularGridster2, global.rxjs.operators, global.rxjs, global.ng.common.http, global.frontendAuthentication, global.user, global.shared));
}(this, function (exports, core, common, store, router, forms, material, effects, flexLayout, angularGridster2, operators, rxjs, http, frontendAuthentication, user, shared) { 'use strict';

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
    function IGridType() { }
    if (false) {
        /** @type {?|undefined} */
        IGridType.prototype.upsertComponet;
        /** @type {?|undefined} */
        IGridType.prototype.configComponent;
        /** @type {?|undefined} */
        IGridType.prototype.type;
        /** @type {?} */
        IGridType.prototype.viewComponent;
    }
    /**
     * @record
     */
    function GridModuleConfig() { }
    if (false) {
        /** @type {?|undefined} */
        GridModuleConfig.prototype.env;
        /** @type {?|undefined} */
        GridModuleConfig.prototype.endpoints;
        /** @type {?|undefined} */
        GridModuleConfig.prototype.types;
    }
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: ""
        },
        endpoints: {
            upsert: "/api/grid",
            find: "/api/grid",
            get: "/api/grid/${model._id}",
            update_item: "/api/grid/item",
            update_item_access: "/api/grid/item/access"
        },
        types: {}
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("GridModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RootComponent = /** @class */ (function () {
        function RootComponent() {
        }
        RootComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-grid-root",
                        template: "<router-outlet></router-outlet>"
                    }] }
        ];
        return RootComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "grid",
            component: RootComponent,
            children: []
        }
    ];
    /** @type {?} */
    var GridRoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridModel = /** @class */ (function () {
        function GridModel(_a) {
            var _b = _a === void 0 ? {
                config: {},
                items: []
            } : _a, _id = _b._id, oid = _b.oid, name = _b.name, type = _b.type, config = _b.config, items = _b.items;
            this._id = _id;
            this.oid = oid;
            this.name = name;
            this.type = type;
            this.config = config;
            this.items = items;
        }
        return GridModel;
    }());
    if (false) {
        /** @type {?} */
        GridModel.prototype._id;
        /** @type {?} */
        GridModel.prototype.oid;
        /** @type {?} */
        GridModel.prototype.name;
        /** @type {?} */
        GridModel.prototype.type;
        /** @type {?} */
        GridModel.prototype.owner;
        /** @type {?} */
        GridModel.prototype.config;
        /** @type {?} */
        GridModel.prototype.items;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertGridApiModel;
    (function (UpsertGridApiModel) {
        var Request = /** @class */ (function () {
            function Request(grid) {
                if (grid === void 0) { grid = {}; }
                debugger;
                this.grid = new GridModel(grid);
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
            function () {
                return this.grid;
            };
            return Request;
        }());
        UpsertGridApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.grid;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertGridApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(UpsertGridApiModel || (UpsertGridApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridConfigurationService = /** @class */ (function () {
        function GridConfigurationService(configFile, store) {
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            // this.store.select(getGridModuleConfig).subscribe((gridConfig) => {
            // 	if (!gridConfig) {
            // 		return;
            // 	}
            // 	this._config = Object.assign({}, this._config, gridConfig.Config);
            // 	this.config$.next(this._config);
            // });
        }
        Object.defineProperty(GridConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        GridConfigurationService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ]; };
        return GridConfigurationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        GridConfigurationService.prototype._config;
        /** @type {?} */
        GridConfigurationService.prototype.config$;
        /**
         * @type {?}
         * @private
         */
        GridConfigurationService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GET_GRID_ACTION_TYPES = {
        START: "[GRID][API][GetGrid] start",
        SUCCEED: "[GRID][API][GetGrid] succeed",
        FAILED: "[GRID][API][GetGrid] failed",
    };
    var GetGridStartAction = /** @class */ (function () {
        function GetGridStartAction(payload) {
            this.payload = payload;
            this.type = "[GRID][API][GetGrid] start" /* START */;
        }
        return GetGridStartAction;
    }());
    if (false) {
        /** @type {?} */
        GetGridStartAction.prototype.type;
        /** @type {?} */
        GetGridStartAction.prototype.payload;
    }
    var GetGridSucceedAction = /** @class */ (function () {
        function GetGridSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GRID][API][GetGrid] succeed" /* SUCCEED */;
        }
        return GetGridSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        GetGridSucceedAction.prototype.type;
        /** @type {?} */
        GetGridSucceedAction.prototype.payload;
    }
    var GetGridFailedAction = /** @class */ (function () {
        function GetGridFailedAction(payload) {
            this.payload = payload;
            this.type = "[GRID][API][GetGrid] failed" /* FAILED */;
        }
        return GetGridFailedAction;
    }());
    if (false) {
        /** @type {?} */
        GetGridFailedAction.prototype.type;
        /** @type {?} */
        GetGridFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridService = /** @class */ (function () {
        function GridService(http, store, userFacadeService, configurationService) {
            this.http = http;
            this.store = store;
            this.userFacadeService = userFacadeService;
            this.configurationService = configurationService;
        }
        /**
         * @param {?} _id
         * @return {?}
         */
        GridService.prototype.get = /**
         * @param {?} _id
         * @return {?}
         */
        function (_id) {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.get !== ""; })), operators.take(1), operators.skipUntil(this.store.select(frontendAuthentication.getFrontendUser)), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http
                    .get(shared.stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }), {})
                    .pipe(operators.map((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return response.Result; })));
            })));
        };
        /**
         * @return {?}
         */
        GridService.prototype.getGrids = /**
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
         * @param {?} item
         * @return {?}
         */
        GridService.prototype.update_item = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.update_item != ""; })), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return _this.http.patch(config.env.frontend_server + config.endpoints.update_item, item); })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridService.prototype.update_item_access = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.update_item_access != ""; })), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.patch(config.env.frontend_server + config.endpoints.update_item_access, item);
            })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        /**
         * @param {?} grid
         * @return {?}
         */
        GridService.prototype.upsert = /**
         * @param {?} grid
         * @return {?}
         */
        function (grid) {
            var _this = this;
            /** @type {?} */
            var model = new UpsertGridApiModel.Request(grid);
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.upsert != ""; })), operators.take(1), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {});
            })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        // delete(_id: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        // delete(_id: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        /**
         * @param {?} _id
         * @return {?}
         */
        GridService.prototype.selectById = 
        // delete(_id: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        /**
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
            function (state) { return state.grids.db.data; }))
                .pipe(operators.filter((/**
             * @param {?} grids
             * @return {?}
             */
            function (grids) { return grids != null; })), operators.map((/**
             * @param {?} grids
             * @return {?}
             */
            function (grids) { return grids.find((/**
             * @param {?} grid
             * @return {?}
             */
            function (grid) { return grid._id == _id; })); })), operators.tap((/**
             * @param {?} grid
             * @return {?}
             */
            function (grid) {
                if (grid == null) {
                    _this.store.dispatch(new GetGridStartAction(_id));
                }
            })))
                .subscribe((/**
             * @param {?} FormSchemaModel
             * @return {?}
             */
            function (FormSchemaModel) { return subject.next(FormSchemaModel); }));
            return subject.asObservable();
        };
        /**
         * @param {?} _id
         * @return {?}
         */
        GridService.prototype.selectByOid = /**
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
            function (state) { return state.grids.db.data; }))
                .pipe(operators.filter((/**
             * @param {?} grids
             * @return {?}
             */
            function (grids) { return grids != null; })), operators.map((/**
             * @param {?} grids
             * @return {?}
             */
            function (grids) { return grids.find((/**
             * @param {?} grid
             * @return {?}
             */
            function (grid) { return grid._id == _id; })); })), operators.tap((/**
             * @param {?} grid
             * @return {?}
             */
            function (grid) {
                if (grid == null) {
                    _this.store.dispatch(new GetGridStartAction(_id));
                }
            })))
                .subscribe((/**
             * @param {?} FormSchemaModel
             * @return {?}
             */
            function (FormSchemaModel) { return subject.next(FormSchemaModel); }));
            return subject.asObservable();
        };
        GridService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        GridService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: user.UserFacadeService },
            { type: GridConfigurationService }
        ]; };
        /** @nocollapse */ GridService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GridService_Factory() { return new GridService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(store.Store), core.ɵɵinject(user.UserFacadeService), core.ɵɵinject(GridConfigurationService)); }, token: GridService, providedIn: "root" });
        return GridService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        GridService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        GridService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        GridService.prototype.userFacadeService;
        /**
         * @type {?}
         * @private
         */
        GridService.prototype.configurationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetGridApiEffects = /** @class */ (function () {
        function GetGridApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[GRID][API][GetGrid] start" /* START */), operators.map((/**
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
            function (res) { return new GetGridSucceedAction(res); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.of(new GetGridFailedAction(err)); })));
        }
        GetGridApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GetGridApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: GridService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetGridApiEffects.prototype, "start$", void 0);
        return GetGridApiEffects;
    }());
    if (false) {
        /** @type {?} */
        GetGridApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        GetGridApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        GetGridApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var UPSERT_GRID_ACTION_TYPES = {
        START: "[UPSERT_GRID][API][UpsertGrid] start",
        SUCCEED: "[UPSERT_GRID][API][UpsertGrid] succeed",
        FAILED: "[UPSERT_GRID][API][UpsertGrid] failed",
    };
    var UpsertGridStartAction = /** @class */ (function () {
        function UpsertGridStartAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_GRID][API][UpsertGrid] start" /* START */;
        }
        return UpsertGridStartAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertGridStartAction.prototype.type;
        /** @type {?} */
        UpsertGridStartAction.prototype.payload;
    }
    var UpsertGridSucceedAction = /** @class */ (function () {
        function UpsertGridSucceedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */;
        }
        return UpsertGridSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertGridSucceedAction.prototype.type;
        /** @type {?} */
        UpsertGridSucceedAction.prototype.payload;
    }
    var UpsertGridFailedAction = /** @class */ (function () {
        function UpsertGridFailedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_GRID][API][UpsertGrid] failed" /* FAILED */;
        }
        return UpsertGridFailedAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertGridFailedAction.prototype.type;
        /** @type {?} */
        UpsertGridFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertGridApiEffects = /** @class */ (function () {
        function UpsertGridApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[UPSERT_GRID][API][UpsertGrid] start" /* START */), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) { return _this.service.upsert(payload); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new UpsertGridSucceedAction(res); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.of(new UpsertGridFailedAction(err)); })));
        }
        UpsertGridApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UpsertGridApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: GridService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UpsertGridApiEffects.prototype, "start$", void 0);
        return UpsertGridApiEffects;
    }());
    if (false) {
        /** @type {?} */
        UpsertGridApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        UpsertGridApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        UpsertGridApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GET_GRIDS_ACTION_TYPES = {
        START: "[GET_GRIDS][API][GetGrids] start",
        SUCCEED: "[GET_GRIDS][API][GetGrids] succeed",
        FAILED: "[GET_GRIDS][API][GetGrids] failed",
    };
    var GetGridsStartAction = /** @class */ (function () {
        function GetGridsStartAction() {
            this.type = "[GET_GRIDS][API][GetGrids] start" /* START */;
        }
        return GetGridsStartAction;
    }());
    if (false) {
        /** @type {?} */
        GetGridsStartAction.prototype.type;
    }
    var GetGridsSucceedAction = /** @class */ (function () {
        function GetGridsSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */;
        }
        return GetGridsSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        GetGridsSucceedAction.prototype.type;
        /** @type {?} */
        GetGridsSucceedAction.prototype.payload;
    }
    var GetGridsFailedAction = /** @class */ (function () {
        function GetGridsFailedAction(payload) {
            this.payload = payload;
            this.type = "[GET_GRIDS][API][GetGrids] failed" /* FAILED */;
        }
        return GetGridsFailedAction;
    }());
    if (false) {
        /** @type {?} */
        GetGridsFailedAction.prototype.type;
        /** @type {?} */
        GetGridsFailedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetGridsApiEffects = /** @class */ (function () {
        function GetGridsApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[GET_GRIDS][API][GetGrids] start" /* START */), operators.switchMap((/**
             * @return {?}
             */
            function () {
                return _this.service
                    .getGrids()
                    .pipe(operators.map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return new GetGridsSucceedAction(res); })), operators.catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return rxjs.of(new GetGridsFailedAction(err)); })));
            })));
        }
        GetGridsApiEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GetGridsApiEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: GridService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetGridsApiEffects.prototype, "start$", void 0);
        return GetGridsApiEffects;
    }());
    if (false) {
        /** @type {?} */
        GetGridsApiEffects.prototype.start$;
        /**
         * @type {?}
         * @private
         */
        GetGridsApiEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        GetGridsApiEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GridsActionTypes = {
        UPSERT: "[GRID][DB] UPSERT",
        DELETE: "[GRID][DB] DELETE",
    };
    var UpsertGridAction = /** @class */ (function () {
        function UpsertGridAction(payload) {
            this.payload = payload;
            this.type = GridsActionTypes.UPSERT;
        }
        return UpsertGridAction;
    }());
    if (false) {
        /** @type {?} */
        UpsertGridAction.prototype.type;
        /** @type {?} */
        UpsertGridAction.prototype.payload;
    }
    var DeleteGridAction = /** @class */ (function () {
        function DeleteGridAction(payload) {
            this.payload = payload;
            this.type = GridsActionTypes.DELETE;
        }
        return DeleteGridAction;
    }());
    if (false) {
        /** @type {?} */
        DeleteGridAction.prototype.type;
        /** @type {?} */
        DeleteGridAction.prototype.payload;
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
            case GridsActionTypes.UPSERT:
                _data = state.data.concat();
                /** @type {?} */
                var newGrids = action.payload;
                newGrids.forEach((/**
                 * @param {?} newGrid
                 * @return {?}
                 */
                function (newGrid) {
                    /** @type {?} */
                    var existedGridIndex = _data.findIndex((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return w._id == newGrid._id; }));
                    if (existedGridIndex > -1) {
                        _data.splice(existedGridIndex, 1, newGrid);
                    }
                    else {
                        _data.push(newGrid);
                    }
                }));
                return __assign({}, state, { data: _data });
            case GridsActionTypes.DELETE:
                _data = Object.assign({}, state.data);
                /** @type {?} */
                var gridIndex = state.data.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w._id == action.payload._id; }));
                _data.splice(gridIndex, 1);
                return __assign({}, state, { data: _data });
            default:
                return state;
        }
    }
    /** @type {?} */
    var getGrids = (/**
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
    function GridState() { }
    if (false) {
        /** @type {?} */
        GridState.prototype.db;
    }
    /** @type {?} */
    var GridReducer = {
        db: Reducer
    };
    /**
     * @record
     */
    function AppState() { }
    if (false) {
        /** @type {?} */
        AppState.prototype.grids;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridDbEffects = /** @class */ (function () {
        function GridDbEffects(actions$) {
            this.actions$ = actions$;
            this.Upsert$ = this.actions$.pipe(effects.ofType("[GRID][API][GetGrid] succeed" /* SUCCEED */, "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map((/**
             * @param {?} grid
             * @return {?}
             */
            function (grid) { return new UpsertGridAction([grid]); })));
            this.UpsertMany$ = this.actions$.pipe(effects.ofType("[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map((/**
             * @param {?} grids
             * @return {?}
             */
            function (grids) { return new UpsertGridAction(grids); })));
        }
        GridDbEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridDbEffects.ctorParameters = function () { return [
            { type: effects.Actions }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GridDbEffects.prototype, "Upsert$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GridDbEffects.prototype, "UpsertMany$", void 0);
        return GridDbEffects;
    }());
    if (false) {
        /** @type {?} */
        GridDbEffects.prototype.Upsert$;
        /** @type {?} */
        GridDbEffects.prototype.UpsertMany$;
        /**
         * @type {?}
         * @private
         */
        GridDbEffects.prototype.actions$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicGridItremConfigDirective = /** @class */ (function () {
        function DynamicGridItremConfigDirective(configurationService, resolver, container) {
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this.mapTypeToComponent = this.configurationService.config$.getValue().types;
        }
        Object.defineProperty(DynamicGridItremConfigDirective.prototype, "type", {
            set: /**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                if (!type)
                    return;
                this._resolve_correct_component_base_on_widget_type(type);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicGridItremConfigDirective.prototype, "valid", {
            get: /**
             * @return {?}
             */
            function () {
                return this.component.instance.valid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicGridItremConfigDirective.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this.component.instance.config;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicGridItremConfigDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} type
         * @return {?}
         */
        DynamicGridItremConfigDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            if (!this.mapTypeToComponent[type]) {
                /** @type {?} */
                var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                throw new Error("Trying to use an unsupported type (" + type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
            }
            /** @type {?} */
            var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].configComponent);
            this.component = this.container.createComponent(component);
            // this.widget$.subscribe((w) => (this.component.instance.widget = w));
        };
        DynamicGridItremConfigDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[ngsDynamicGridItemConfig]"
                    },] }
        ];
        /** @nocollapse */
        DynamicGridItremConfigDirective.ctorParameters = function () { return [
            { type: GridConfigurationService },
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef }
        ]; };
        DynamicGridItremConfigDirective.propDecorators = {
            type: [{ type: core.Input }]
        };
        return DynamicGridItremConfigDirective;
    }());
    if (false) {
        /** @type {?} */
        DynamicGridItremConfigDirective.prototype.component;
        /** @type {?} */
        DynamicGridItremConfigDirective.prototype.mapTypeToComponent;
        /**
         * @type {?}
         * @private
         */
        DynamicGridItremConfigDirective.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        DynamicGridItremConfigDirective.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        DynamicGridItremConfigDirective.prototype.container;
    }
    var DynamicGridItemConfigComponent = /** @class */ (function () {
        function DynamicGridItemConfigComponent(data) {
            this.data = data;
        }
        Object.defineProperty(DynamicGridItemConfigComponent.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this.DynamicWidgetRef.config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicGridItemConfigComponent.prototype, "valid", {
            get: /**
             * @return {?}
             */
            function () {
                return this.DynamicWidgetRef.valid;
            },
            enumerable: true,
            configurable: true
        });
        DynamicGridItemConfigComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n\t<div ngsDynamicGridItemConfig [type]=\"data.type\"></div>\n\t"
                    }] }
        ];
        /** @nocollapse */
        DynamicGridItemConfigComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_BOTTOM_SHEET_DATA,] }] }
        ]; };
        DynamicGridItemConfigComponent.propDecorators = {
            DynamicWidgetRef: [{ type: core.ViewChild, args: [DynamicGridItremConfigDirective, { static: false },] }]
        };
        return DynamicGridItemConfigComponent;
    }());
    if (false) {
        /** @type {?} */
        DynamicGridItemConfigComponent.prototype.DynamicWidgetRef;
        /** @type {?} */
        DynamicGridItemConfigComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridConfigComponent = /** @class */ (function () {
        function GridConfigComponent(store, data) {
            this.store = store;
            this.data = data;
            this.grid = this.data.grid;
            this.oid = this.data.oid;
            this._init_properties();
            this._init_form_group();
        }
        /**
         * @return {?}
         */
        GridConfigComponent.prototype.save = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var grid = __assign({}, this.grid, this.gridFormGroup.value, { config: __assign({}, this.configFormGroup.value) });
            this.store.dispatch(new UpsertGridStartAction(grid));
        };
        /**
         * @return {?}
         */
        GridConfigComponent.prototype._init_form_group = /**
         * @return {?}
         */
        function () {
            this.configFormGroup = new forms.FormGroup({
                gridType: new forms.FormControl("fit"),
                compactType: new forms.FormControl("none"),
                displayGrid: new forms.FormControl("onDrag&Resize"),
                // empty cell
                enableEmptyCellDrag: new forms.FormControl(true),
                enableEmptyCellClick: new forms.FormControl(false),
                enableEmptyCellContextMenu: new forms.FormControl(false),
                //
                scrollToNewItems: new forms.FormControl(true),
                // margins
                margin: new forms.FormControl(10),
                outerMargin: new forms.FormControl(true),
                outerMarginTop: new forms.FormControl(10),
                outerMarginRight: new forms.FormControl(10),
                outerMarginBottom: new forms.FormControl(10),
                outerMarginLeft: new forms.FormControl(10),
                // grid size
                minCols: new forms.FormControl(3),
                maxCols: new forms.FormControl(3),
                //
                draggable: new forms.FormGroup({
                    enabled: new forms.FormControl(),
                    delayStart: new forms.FormControl(333)
                    // ignoreContent: new FormControl("false")
                }),
                resizable: new forms.FormGroup({
                    enabled: new forms.FormControl()
                })
            });
            this.gridFormGroup = new forms.FormGroup({
                oid: new forms.FormControl(this.oid),
                name: new forms.FormControl("")
            });
            this.gridFormGroup.patchValue(this.grid);
            this.configFormGroup.patchValue(this.grid.config);
        };
        /**
         * @return {?}
         */
        GridConfigComponent.prototype._init_properties = /**
         * @return {?}
         */
        function () {
            this.gridTypes = ["fit", "scrollVertical", "scrollHorizontal", "fixed", "verticalFixed", "horizontalFixed"];
            this.compactType = ["none", "compactUp", "compactLeft", "compactUp&Left", "compactLeft&Up"];
            this.displayGridTypes = ["always", "onDrag&Resize", "none"];
        };
        GridConfigComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<h4> \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F</h4>\r\n<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n    <div fxFlex=\"100\" fxLayout=\"row wrap\" [formGroup]=\"gridFormGroup\">\r\n        <mat-form-field fxFlex=\"20\">\r\n            <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"column wrap\" fxLayoutGap=\"15px\"  fxFlex=\"100\" [formGroup]=\"configFormGroup\">\r\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0642\u0631\u0627\u0631\u06AF\u06CC\u0631\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"gridType\">\r\n                    <mat-option *ngFor=\"let item of gridTypes\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0641\u0634\u0631\u062F\u0647 \u0634\u062F\u0646 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"compactType\">\r\n                    <mat-option *ngFor=\"let item of compactType\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0646 \u0633\u0644\u0648\u0644\u200C\u0647\u0627\u06CC \u06AF\u0631\u06CC\u062F\" formControlName=\"displayGrid\">\r\n                    <mat-option *ngFor=\"let item of displayGridTypes\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <div fxFlex=\"20\">\r\n                <mat-checkbox formControlName=\"enableEmptyCellDrag\">\u0627\u06CC\u062C\u0627\u062F \u06AF\u0631\u06CC\u062F \u0628\u0627 \u062F\u0631\u06AF \u06A9\u0631\u062F\u0646</mat-checkbox>\r\n                <!-- <mat-checkbox formControlName=\"enableEmptyCellClick\">enableEmptyCellClick</mat-checkbox> -->\r\n            </div>\r\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('draggable')\">\r\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('resizable')\">\r\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062A\u063A\u06CC\u06CC\u0631 \u0633\u0627\u06CC\u0632 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <!-- Margins -->\r\n        <div fxFlex=\"100\" fxLayout=\"column wrap\" fxLayoutGap=\"25px\">\r\n            <h4 fxFlex=\"100\">\u062D\u0627\u0634\u06CC\u0647:</h4>\r\n            <div fxFlex fxLayout=\"column\" fxLayoutGap=\"25px\">\r\n                <mat-checkbox fxFlex formControlName=\"outerMargin\">\u0627\u0645\u06A9\u0627\u0646 \u062A\u0646\u0638\u06CC\u0645 \u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n            <div fxFlex=\"100\"  fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0647\u0645\" formControlName=\"margin\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0631 \u0628\u0627\u0644\u0627 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginTop\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0631\u0627\u0633\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginRight\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginBottom\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0686\u067E \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginLeft\" />\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <!-- Grid Size -->\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <h4 fxFlex=\"100\">\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\u200C\u0647\u0627:</h4>\r\n            <mat-form-field fxFlex=\"18\">\r\n                <input matInput type=\"number\" placeholder=\"\u06A9\u0645\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"minCols\" />\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"18\">\r\n                <input matInput type=\"number\" placeholder=\"\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"maxCols\" />\r\n            </mat-form-field>\r\n        </div> \r\n        <div fxFlex=\"20\" fxLayoutAlign=\"flex-end center\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n         <button color=\"primary\" mat-raised-button (click)=\"save()\">\u0630\u062E\u06CC\u0631\u0647</button>\r\n    </div>\r\n</div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        GridConfigComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_BOTTOM_SHEET_DATA,] }] }
        ]; };
        return GridConfigComponent;
    }());
    if (false) {
        /** @type {?} */
        GridConfigComponent.prototype.gridTypes;
        /** @type {?} */
        GridConfigComponent.prototype.compactType;
        /** @type {?} */
        GridConfigComponent.prototype.displayGridTypes;
        /** @type {?} */
        GridConfigComponent.prototype.grid;
        /** @type {?} */
        GridConfigComponent.prototype.oid;
        /** @type {?} */
        GridConfigComponent.prototype.configFormGroup;
        /** @type {?} */
        GridConfigComponent.prototype.gridFormGroup;
        /**
         * @type {?}
         * @private
         */
        GridConfigComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        GridConfigComponent.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridComponent = /** @class */ (function () {
        function GridComponent(store, service, userFacadeService, configurationService, bottomSheet) {
            var _this = this;
            this.store = store;
            this.service = service;
            this.userFacadeService = userFacadeService;
            this.configurationService = configurationService;
            this.bottomSheet = bottomSheet;
            this.itemValidateCallback = new core.EventEmitter();
            this.itemRemovedCallback = new core.EventEmitter();
            this.itemInitCallback = new core.EventEmitter();
            this.itemResizeCallback = new core.EventEmitter();
            this.itemChangeCallback = new core.EventEmitter();
            this.gridSizeChangedCallback = new core.EventEmitter();
            this.destroyCallback = new core.EventEmitter();
            this.initCallback = new core.EventEmitter();
            this.ready = false;
            this.options = {};
            this.userFacadeService
                .getInfo()
                .pipe(operators.filter((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return user.CurrentSession != undefined; })), operators.map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return user.CurrentSession.Username; })))
                .subscribe((/**
             * @param {?} username
             * @return {?}
             */
            function (username) {
                _this.username = username;
            }));
            this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
            this.havePermission$ = this.store.select(user.getAccountInfo).pipe(operators.map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                /** @type {?} */
                var criteria = [user, user._id, _this.grid, _this.grid.owner];
                if (criteria.some((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) { return !i; })))
                    return false;
                return user._id == _this.grid.owner;
            })));
        }
        /**
         * @param {?} item
         * @param {?} itemComponent
         * @return {?}
         */
        GridComponent.itemChange = /**
         * @param {?} item
         * @param {?} itemComponent
         * @return {?}
         */
        function (item, itemComponent) {
            console.log("itemChanged", item, itemComponent);
        };
        /**
         * @param {?} item
         * @param {?} itemComponent
         * @return {?}
         */
        GridComponent.itemResize = /**
         * @param {?} item
         * @param {?} itemComponent
         * @return {?}
         */
        function (item, itemComponent) {
            console.log("itemResized", item, itemComponent);
        };
        /**
         * @return {?}
         */
        GridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this.items = [ { cols: 2, rows: 1, y: 0, x: 0 }, { cols: 2, rows: 2, y: 0, x: 2 } ];
            this.grid = new GridModel({
                oid: this.oid,
                config: {}
            });
            this._get_grid_by_oid_and_update_component();
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype._initCallback = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.initCallback.emit(item);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype.removeItem = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.grid.items.splice(this.grid.items.indexOf(item), 1);
        };
        /**
         * @param {?} item
         * @param {?} event
         * @return {?}
         */
        GridComponent.prototype.make_public = /**
         * @param {?} item
         * @param {?} event
         * @return {?}
         */
        function (item, event) {
            debugger;
            item.access = event.checked ? "public" : "private";
            this.service.update_item_access(item).subscribe((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                debugger;
            }));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridComponent.prototype.addItem = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            debugger;
            e.stopPropagation();
            this.grid.items.push((/** @type {?} */ ({})));
        };
        /**
         * @param {?} event
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype.emptyCellClick = /**
         * @param {?} event
         * @param {?} item
         * @return {?}
         */
        function (event, item) {
            console.log("empty cell click", event, item);
            this.grid.items.push((/** @type {?} */ (item)));
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridComponent.prototype.openConfig = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            debugger;
            e.stopPropagation();
            e.preventDefault();
            this.bottomSheet.open(GridConfigComponent, {
                data: {
                    grid: this.grid
                }
            });
        };
        /**
         * @param {?} e
         * @return {?}
         */
        GridComponent.prototype.saveConfig = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            debugger;
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            /**
             * TODO:
             * احزار هویت در سمت نود اتحام شود
            * کانفیگ برای گرفتن شناسه کاربر
             */
            this.store.dispatch(new UpsertGridStartAction(this.grid));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype.gridItemTypeChanged = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
                data: {
                    type: item.type
                }
            });
            bs.afterDismissed().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                item.config = bs.instance.config;
                item.valid = bs.instance.valid;
            }));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype.showConfig = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
                data: {
                    type: item.type
                }
            });
            bs.afterDismissed().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                item.config = bs.instance.config;
                item.valid = bs.instance.valid;
            }));
        };
        // tslint:disable-next-line:member-ordering
        // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
        // tslint:disable-next-line:member-ordering
        // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
        /**
         * @return {?}
         */
        GridComponent.prototype.goToEdit = 
        // tslint:disable-next-line:member-ordering
        // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
        /**
         * @return {?}
         */
        function () {
            debugger;
            // tslint:disable-next-line:no-unused-expression
            // this._ngsDynamicGridItemView;
        };
        /**
         * private methods
         */
        /**
         * private methods
         * @return {?}
         */
        GridComponent.prototype._get_grid_by_oid_and_update_component = /**
         * private methods
         * @return {?}
         */
        function () {
            var _this = this;
            this.service.selectById(this.oid).pipe(operators.filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data != undefined; }))).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.grid = data;
                debugger;
                data.config.outerMarginBottom = +data.config.outerMarginBottom;
                data.config.outerMarginRight = +data.config.outerMarginRight;
                _this.options = __assign({}, _this.options, data.config);
                // this.options.draggable = {
                // 	enabled: true
                // };
                // this.options.emptyCellContextMenuCallback = this.emptyCellClick.bind(this);
                // this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
                if (_this.options.enableEmptyCellDrag)
                    _this.options.emptyCellDragCallback = _this.emptyCellClick.bind(_this);
                // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
                _this.ready = true;
                // this.options.api.optionsChanged();
            }));
        };
        GridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-grid",
                        template: "<gridster [options]=\"options\">\r\n    <div class=\"actions\" >\r\n        <button mat-mini-fab (click)=\"addItem($event)\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\r\n            <mat-icon>dashboard</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\r\n            <mat-icon>done</mat-icon>\r\n        </button>\r\n    </div>\r\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\r\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\" class=\"rtl\">\r\n                    <mat-checkbox *ngIf=\"grid.owner == username\" labelPosition=\"before\" [checked]=\"item.access=='public'\"\r\n                        (change)=\"make_public(item,$event)\">\u0639\u0645\u0648\u0645\u06CC</mat-checkbox>\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"goToEdit()\">\r\n                        <mat-icon>edit</mat-icon>\r\n                        <span>\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0641\u0632\u0648\u0646\u0647</span>\r\n                    </button>\r\n                    <!-- <button mat-menu-item class=\"rtl\" (click)=\"showConfig(item)\">\r\n                        <mat-icon>settings</mat-icon>\r\n                        <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>\r\n                    </button> -->\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"removeItem(item)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>\u062D\u0630\u0641</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n        </div>\r\n        <div class=\"widget-content\">\r\n            <div *ngIf=\"!item.valid\" fxFlex=\"100\" class=\"form-container\">\r\n                <h4>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</h4>\r\n                <mat-form-field fxFlex=\"grow\">\r\n                    <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\r\n                        <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\r\n                            {{item}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            <div *ngIf=\"item.valid\" #test [ngsDynamicGridItemView]=\"item\"></div>\r\n        </div>\r\n    </gridster-item>\r\n</gridster>",
                        styles: [":host{width:100%;min-height:calc(100vh - 205px);display:-ms-grid;display:grid;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%}[dir=rtl] .form-container{direction:rtl}.form-container mat-form-field{width:100%}.rtl{direction:rtl}"]
                    }] }
        ];
        /** @nocollapse */
        GridComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: GridService },
            { type: user.UserFacadeService },
            { type: GridConfigurationService },
            { type: material.MatBottomSheet }
        ]; };
        GridComponent.propDecorators = {
            itemValidateCallback: [{ type: core.Output }],
            itemRemovedCallback: [{ type: core.Output }],
            itemInitCallback: [{ type: core.Output }],
            itemResizeCallback: [{ type: core.Output }],
            itemChangeCallback: [{ type: core.Output }],
            gridSizeChangedCallback: [{ type: core.Output }],
            destroyCallback: [{ type: core.Output }],
            initCallback: [{ type: core.Output }],
            oid: [{ type: core.Input }]
        };
        return GridComponent;
    }());
    if (false) {
        /** @type {?} */
        GridComponent.prototype.itemValidateCallback;
        /** @type {?} */
        GridComponent.prototype.itemRemovedCallback;
        /** @type {?} */
        GridComponent.prototype.itemInitCallback;
        /** @type {?} */
        GridComponent.prototype.itemResizeCallback;
        /** @type {?} */
        GridComponent.prototype.itemChangeCallback;
        /** @type {?} */
        GridComponent.prototype.gridSizeChangedCallback;
        /** @type {?} */
        GridComponent.prototype.destroyCallback;
        /** @type {?} */
        GridComponent.prototype.initCallback;
        /** @type {?} */
        GridComponent.prototype.oid;
        /** @type {?} */
        GridComponent.prototype.havePermission$;
        /** @type {?} */
        GridComponent.prototype.username;
        /** @type {?} */
        GridComponent.prototype.options;
        /** @type {?} */
        GridComponent.prototype.grid;
        /** @type {?} */
        GridComponent.prototype.ready;
        /** @type {?} */
        GridComponent.prototype.gridItemTypes;
        /**
         * @type {?}
         * @private
         */
        GridComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        GridComponent.prototype.service;
        /**
         * @type {?}
         * @private
         */
        GridComponent.prototype.userFacadeService;
        /**
         * @type {?}
         * @private
         */
        GridComponent.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        GridComponent.prototype.bottomSheet;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DynamicGridItemViewDirective = /** @class */ (function () {
        function DynamicGridItemViewDirective(configurationService, resolver, container) {
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this.mapTypeToComponent = this.configurationService.config$.getValue().types;
        }
        Object.defineProperty(DynamicGridItemViewDirective.prototype, "item", {
            set: /**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (!item)
                    return;
                if (!item.valid)
                    return;
                this._resolve_correct_component_base_on_widget_type(item);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicGridItemViewDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} item
         * @return {?}
         */
        DynamicGridItemViewDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            debugger;
            if (!this.mapTypeToComponent[item.type]) {
                /** @type {?} */
                var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                throw new Error("Trying to use an unsupported type (" + item.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
            }
            /** @type {?} */
            var componentFactory = this.resolver.resolveComponentFactory(this.mapTypeToComponent[item.type].viewComponent);
            this.component = this.container.createComponent(componentFactory);
            Object.keys(item.config || {}).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.component.instance[key] = item.config[key];
            }));
        };
        DynamicGridItemViewDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[ngsDynamicGridItemView]"
                    },] }
        ];
        /** @nocollapse */
        DynamicGridItemViewDirective.ctorParameters = function () { return [
            { type: GridConfigurationService },
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef }
        ]; };
        DynamicGridItemViewDirective.propDecorators = {
            item: [{ type: core.Input, args: ["ngsDynamicGridItemView",] }]
        };
        return DynamicGridItemViewDirective;
    }());
    if (false) {
        /** @type {?} */
        DynamicGridItemViewDirective.prototype.component;
        /** @type {?} */
        DynamicGridItemViewDirective.prototype.mapTypeToComponent;
        /**
         * @type {?}
         * @private
         */
        DynamicGridItemViewDirective.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        DynamicGridItemViewDirective.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        DynamicGridItemViewDirective.prototype.container;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgsGridModule = /** @class */ (function () {
        function NgsGridModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsGridModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: NgsGridRootModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, GridConfigurationService, GridService]
            };
        };
        NgsGridModule.decorators = [
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
                            material.MatBottomSheetModule,
                            material.MatRadioModule,
                            flexLayout.FlexLayoutModule,
                            material.MatMenuModule,
                            material.MatToolbarModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatSlideToggleModule,
                            material.MatDividerModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            angularGridster2.GridsterModule
                        ],
                        declarations: [
                            RootComponent,
                            GridComponent,
                            GridConfigComponent,
                            DynamicGridItremConfigDirective,
                            DynamicGridItemConfigComponent,
                            DynamicGridItemViewDirective
                        ],
                        entryComponents: [GridConfigComponent, DynamicGridItemConfigComponent],
                        exports: [GridComponent]
                    },] }
        ];
        return NgsGridModule;
    }());
    var NgsGridRootModule = /** @class */ (function () {
        function NgsGridRootModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.grid = "8.0.10";
        }
        NgsGridRootModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            NgsGridModule,
                            GridRoutingModule,
                            store.StoreModule.forFeature("grids", GridReducer),
                            effects.EffectsModule.forFeature([GridDbEffects, GetGridApiEffects, GetGridsApiEffects, UpsertGridApiEffects])
                        ],
                        exports: [NgsGridModule]
                    },] }
        ];
        /** @nocollapse */
        NgsGridRootModule.ctorParameters = function () { return []; };
        return NgsGridRootModule;
    }());

    exports.GridModel = GridModel;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.NgsGridModule = NgsGridModule;
    exports.NgsGridRootModule = NgsGridRootModule;
    exports.ɵa = RootComponent;
    exports.ɵb = GridComponent;
    exports.ɵc = GridReducer;
    exports.ɵe = GridService;
    exports.ɵf = GridConfigurationService;
    exports.ɵg = GridConfigComponent;
    exports.ɵh = DynamicGridItremConfigDirective;
    exports.ɵi = DynamicGridItemConfigComponent;
    exports.ɵj = DynamicGridItemViewDirective;
    exports.ɵk = GridRoutingModule;
    exports.ɵl = Reducer;
    exports.ɵm = GridDbEffects;
    exports.ɵn = GetGridApiEffects;
    exports.ɵp = GetGridsApiEffects;
    exports.ɵr = UpsertGridApiEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-grid.umd.js.map
