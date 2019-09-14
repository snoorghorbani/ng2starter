(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('rxjs/operators'), require('@soushians/shared'), require('@angular/forms'), require('rxjs'), require('@soushians/config'), require('@angular/material'), require('@angular/cdk/collections'), require('@angular/common'), require('@angular/router'), require('@angular/flex-layout'), require('@ngrx/effects'), require('rxjs/Observable'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/switchMap'), require('rxjs/observable/of')) :
    typeof define === 'function' && define.amd ? define('@soushians/form', ['exports', '@angular/core', '@angular/common/http', '@ngrx/store', 'rxjs/BehaviorSubject', 'rxjs/operators', '@soushians/shared', '@angular/forms', 'rxjs', '@soushians/config', '@angular/material', '@angular/cdk/collections', '@angular/common', '@angular/router', '@angular/flex-layout', '@ngrx/effects', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/switchMap', 'rxjs/observable/of'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.form = {}), global.ng.core, global.ng.common.http, global.store, global.rxjs.BehaviorSubject, global.rxjs.operators, global.shared, global.ng.forms, global.rxjs, global.config, global.ng.material, global.ng.cdk.collections, global.ng.common, global.ng.router, global.ng['flex-layout'], global.effects, global.rxjs.Observable, global.rxjs['add/operator/map'], global.rxjs['add/operator/mergeMap'], global.rxjs['add/operator/switchMap'], global.rxjs['observable/of']));
}(this, function (exports, core, http, store, BehaviorSubject, operators, shared, forms, rxjs, config, material, collections, common, router, flexLayout, effects, Observable, map, mergeMap, switchMap, of) { 'use strict';

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
    var AddFormApiModel;
    (function (AddFormApiModel) {
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
                    name: this.name,
                    form: this.form,
                    events: this.events
                };
            };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", [forms.Validators.required]),
                        name: new forms.FormControl("", [forms.Validators.required]),
                        title: new forms.FormControl("", [forms.Validators.required]),
                        form: new forms.FormControl({}),
                        events: new forms.FormGroup({
                            accept: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("ثبت")
                            }),
                            cancel: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("انصراف")
                            })
                        })
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        AddFormApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype._id;
            /** @type {?} */
            Request.prototype.name;
            /** @type {?} */
            Request.prototype.form;
            /** @type {?} */
            Request.prototype.events;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        AddFormApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(AddFormApiModel || (AddFormApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditFormApiModel;
    (function (EditFormApiModel) {
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
                    name: this.name,
                    form: this.form,
                    events: this.events
                };
            };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", [forms.Validators.required]),
                        name: new forms.FormControl("", [forms.Validators.required]),
                        form: new forms.FormControl({}),
                        events: new forms.FormGroup({
                            accept: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("ثبت")
                            }),
                            cancel: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("انصراف")
                            })
                        })
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        EditFormApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype._id;
            /** @type {?} */
            Request.prototype.name;
            /** @type {?} */
            Request.prototype.form;
            /** @type {?} */
            Request.prototype.events;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        EditFormApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(EditFormApiModel || (EditFormApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormListApiModel;
    (function (FormListApiModel) {
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
                    Name: this.Name,
                    Controls: this.Controls
                };
            };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return new forms.FormGroup({
                        Name: new forms.FormControl("", [forms.Validators.required]),
                        Controls: new forms.FormGroup({})
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        FormListApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.Name;
            /** @type {?} */
            Request.prototype.Controls;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        FormListApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(FormListApiModel || (FormListApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function validation() { }
    if (false) {
        /** @type {?} */
        validation.prototype.active;
        /** @type {?} */
        validation.prototype.message;
        /** @type {?|undefined} */
        validation.prototype.value;
    }
    var Validator = /** @class */ (function () {
        function Validator() {
            this.required = {
                active: false,
                message: "این فیلد الزامی است"
            };
            this.minlength = {
                active: false,
                message: "حداقل تعداد کارکترها",
                value: 5
            };
            this.email = {
                active: false,
                message: "لطفا ایمیل صحیح وارد نمایید"
            };
        }
        return Validator;
    }());
    if (false) {
        /** @type {?} */
        Validator.prototype.required;
        /** @type {?} */
        Validator.prototype.minlength;
        /** @type {?} */
        Validator.prototype.email;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FieldConfig = /** @class */ (function () {
        function FieldConfig(type) {
            this.type = type;
            if (type != "control")
                this.fields = [];
            this.width = 3;
            this.validator = new Validator();
        }
        return FieldConfig;
    }());
    if (false) {
        /** @type {?} */
        FieldConfig.prototype.id;
        /** @type {?} */
        FieldConfig.prototype.type;
        /** @type {?} */
        FieldConfig.prototype.name;
        /** @type {?} */
        FieldConfig.prototype.subtype;
        /** @type {?} */
        FieldConfig.prototype.disabled;
        /** @type {?} */
        FieldConfig.prototype.title;
        /** @type {?} */
        FieldConfig.prototype.parentType;
        /** @type {?} */
        FieldConfig.prototype.formGroupPath;
        /** @type {?} */
        FieldConfig.prototype.path;
        /** @type {?} */
        FieldConfig.prototype.inputType;
        /** @type {?} */
        FieldConfig.prototype.value;
        /** @type {?} */
        FieldConfig.prototype.order;
        /** @type {?} */
        FieldConfig.prototype.width;
        /** @type {?} */
        FieldConfig.prototype.options;
        /** @type {?} */
        FieldConfig.prototype.dataEndpoint;
        /** @type {?} */
        FieldConfig.prototype.optionsEndpoint;
        /** @type {?} */
        FieldConfig.prototype.fields;
        /** @type {?} */
        FieldConfig.prototype.validator;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormSchemaModel = /** @class */ (function () {
        function FormSchemaModel() {
            this.events = {
                accept: {
                    show: false,
                    text: "ثبت"
                },
                cancel: {
                    show: false,
                    text: "انصراف"
                }
            };
            this.form = new FieldConfig("group");
        }
        /**
         * @return {?}
         */
        FormSchemaModel.prototype.init = /**
         * @return {?}
         */
        function () {
            this._id = (Math.random() * 10).toString();
        };
        return FormSchemaModel;
    }());
    if (false) {
        /** @type {?} */
        FormSchemaModel.prototype._id;
        /** @type {?} */
        FormSchemaModel.prototype.name;
        /** @type {?} */
        FormSchemaModel.prototype.description;
        /** @type {?} */
        FormSchemaModel.prototype.form;
        /** @type {?} */
        FormSchemaModel.prototype.events;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function Field() { }
    if (false) {
        /** @type {?} */
        Field.prototype.config;
        /** @type {?} */
        Field.prototype.group;
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
     * @record
     */
    function FormModuleConfig() { }
    if (false) {
        /** @type {?|undefined} */
        FormModuleConfig.prototype.env;
        /** @type {?|undefined} */
        FormModuleConfig.prototype.endpoints;
    }
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "frontend/server/did/not/set",
            server: "server/did/not/set"
        },
        endpoints: {
            addForm: "",
            editForm: "",
            getForm: "",
            getList: "",
            deleteForm: "",
            captchaUrl: ""
        },
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("FormModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormConfigurationService = /** @class */ (function () {
        function FormConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getFormModuleConfig).subscribe((/**
             * @param {?} userConfig
             * @return {?}
             */
            function (userConfig) {
                if (!userConfig)
                    return;
                _this._config = Object.assign({}, _this._config, userConfig.Config);
                _this.config$.next(_this._config);
            }));
        }
        Object.defineProperty(FormConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        FormConfigurationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        FormConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ]; };
        /** @nocollapse */ FormConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FormConfigurationService_Factory() { return new FormConfigurationService(core.ɵɵinject(MODULE_CONFIG_TOKEN), core.ɵɵinject(store.Store)); }, token: FormConfigurationService, providedIn: "root" });
        return FormConfigurationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FormConfigurationService.prototype._config;
        /** @type {?} */
        FormConfigurationService.prototype.config$;
        /**
         * @type {?}
         * @private
         */
        FormConfigurationService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormService = /** @class */ (function () {
        function FormService(http, store, configurationService) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        FormService.prototype.add = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            /** @type {?} */
            var model = new AddFormApiModel.Request(data);
            return this.configurationService.config$
                .filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.addForm != ""; }))
                .take(1)
                .switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.post(config.env.frontend_server + config.endpoints.addForm, model.getRequestBody());
            }))
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; }));
        };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.get = /**
         * @param {?} _id
         * @return {?}
         */
        function (_id) {
            var _this = this;
            return this.configurationService.config$
                .filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.getForm != ""; }))
                .take(1)
                .switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.get(shared.stringTemplate(config.env.frontend_server + config.endpoints.getForm, { _id: _id }));
            }))
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; }));
        };
        /**
         * @return {?}
         */
        FormService.prototype.getList = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.configurationService.config$
                .filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.getList != ""; }))
                .switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.getList); }))
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; }));
        };
        /**
         * @param {?} data
         * @return {?}
         */
        FormService.prototype.update = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            /** @type {?} */
            var model = new EditFormApiModel.Request(data);
            return this.configurationService.config$
                .filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.editForm != ""; }))
                .take(1)
                .switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.put(config.env.frontend_server + config.endpoints.editForm, model.getRequestBody());
            }))
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; }));
        };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.delete = /**
         * @param {?} _id
         * @return {?}
         */
        function (_id) {
            var _this = this;
            return this.configurationService.config$
                .filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.deleteForm != ""; }))
                .switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.deleteForm); }));
        };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.selectFormById = /**
         * @param {?} _id
         * @return {?}
         */
        function (_id) {
            /** @type {?} */
            var subject = new BehaviorSubject.BehaviorSubject(undefined);
            this.store
                .select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.form.list.data; }))
                .pipe(operators.filter((/**
             * @param {?} forms
             * @return {?}
             */
            function (forms) { return forms != null; })), operators.map((/**
             * @param {?} forms
             * @return {?}
             */
            function (forms) { return forms.find((/**
             * @param {?} form
             * @return {?}
             */
            function (form) { return form._id == _id; })); })))
                .subscribe((/**
             * @param {?} formSchemaModel
             * @return {?}
             */
            function (formSchemaModel) { return subject.next(formSchemaModel); }));
            return subject.asObservable();
        };
        FormService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        FormService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: FormConfigurationService }
        ]; };
        /** @nocollapse */ FormService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FormService_Factory() { return new FormService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(store.Store), core.ɵɵinject(FormConfigurationService)); }, token: FormService, providedIn: "root" });
        return FormService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FormService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        FormService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        FormService.prototype.configurationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectComponent = /** @class */ (function () {
        function SelectComponent() {
        }
        SelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-control-select",
                        template: "<div  [formGroup]=\"group\">\r\n<mat-form-field>\r\n    <mat-select [formControlName]=\"config.name\" [placeholder]=\"config.title\">\r\n      <mat-option *ngFor=\"let option of config.options\" [value]=\"option.value\">{{option.key}}</mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return []; };
        return SelectComponent;
    }());
    if (false) {
        /** @type {?} */
        SelectComponent.prototype.config;
        /** @type {?} */
        SelectComponent.prototype.group;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
        }
        CheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-control-checkbox",
                        template: "<div [formGroup]=\"group\">\r\n    <mat-checkbox [formControlName]=\"config.name\">\r\n        {{config.title}}\r\n    </mat-checkbox>\r\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        return CheckboxComponent;
    }());
    if (false) {
        /** @type {?} */
        CheckboxComponent.prototype.config;
        /** @type {?} */
        CheckboxComponent.prototype.group;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EmailComponent = /** @class */ (function () {
        function EmailComponent() {
        }
        /**
         * @return {?}
         */
        EmailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        EmailComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-control-email",
                        template: "<div  [formGroup]=\"group\">\r\n<mat-form-field fxFlexFill>\r\n    <input matInput [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\r\n</mat-form-field>\r\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        EmailComponent.ctorParameters = function () { return []; };
        return EmailComponent;
    }());
    if (false) {
        /** @type {?} */
        EmailComponent.prototype.config;
        /** @type {?} */
        EmailComponent.prototype.group;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ColorComponent = /** @class */ (function () {
        function ColorComponent() {
        }
        /**
         * @return {?}
         */
        ColorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        ColorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-control-color",
                        template: "<div  [formGroup]=\"form\">\r\n<mat-form-field fxFlexFill>\r\n    <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\r\n</mat-form-field>\r\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        ColorComponent.ctorParameters = function () { return []; };
        ColorComponent.propDecorators = {
            form: [{ type: core.Input }],
            schema: [{ type: core.Input }]
        };
        return ColorComponent;
    }());
    if (false) {
        /** @type {?} */
        ColorComponent.prototype.config;
        /** @type {?} */
        ColorComponent.prototype.group;
        /** @type {?} */
        ColorComponent.prototype.form;
        /** @type {?} */
        ColorComponent.prototype.schema;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent(http) {
            this.http = http;
            this.selection = new collections.SelectionModel(true, []);
            this.ready = false;
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.http.get(this.schema.dataEndpoint).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.ready = true;
                _this.displayedColumns = data.displayedColumns;
                _this.filedDisplayedColumns = data.filedDisplayedColumns;
                _this.dataSource = new material.MatTableDataSource(data.dataSource);
            }));
        };
        /** Whether the number of selected elements matches the total number of rows. */
        /**
         * Whether the number of selected elements matches the total number of rows.
         * @return {?}
         */
        TableComponent.prototype.isAllSelected = /**
         * Whether the number of selected elements matches the total number of rows.
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var numSelected = this.selection.selected.length;
            this.form.patchValue((_a = {},
                _a[this.schema.name] = this.selection.selected,
                _a));
            /** @type {?} */
            var numRows = this.dataSource.data.length;
            return numSelected === numRows;
        };
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
        TableComponent.prototype.masterToggle = /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
        function () {
            var _this = this;
            this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return _this.selection.select(row); }));
        };
        TableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-control-table",
                        template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n  \r\n      <ng-container matColumnDef=\"select\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n            [checked]=\"selection.hasValue() && isAllSelected()\"\r\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n          </mat-checkbox>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n            (change)=\"$event ? selection.toggle(row) : null\"\r\n            [checked]=\"selection.isSelected(row)\">\r\n          </mat-checkbox>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <div *ngFor=\"let col of filedDisplayedColumns\">\r\n        <ng-container  [matColumnDef]=\"col\">\r\n          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\r\n        </ng-container>\r\n      </div>\r\n        \r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n        <mat-cell class='left-align' *matCellDef=\"let row\">\r\n          <button mat-icon-button>\r\n            <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n    \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\r\n\r\n    </mat-table>\r\n  </div>\r\n\r\n\r\n<!-- <mat-form-field fxFlexFill [formGroup]=\"form\">\r\n  \r\n  <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\r\n  \r\n  <mat-error *ngIf=\"form.get(schema.name).errors?.required\">\r\n    {{schema.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">\r\n    {{schema.validator.minlength.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">\r\n    {{schema.validator.email.message}}\r\n  </mat-error>\r\n</mat-form-field> -->\r\n  \r\n  <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        TableComponent.propDecorators = {
            form: [{ type: core.Input }],
            schema: [{ type: core.Input }]
        };
        return TableComponent;
    }());
    if (false) {
        /** @type {?} */
        TableComponent.prototype.config;
        /** @type {?} */
        TableComponent.prototype.group;
        /** @type {?} */
        TableComponent.prototype.form;
        /** @type {?} */
        TableComponent.prototype.schema;
        /** @type {?} */
        TableComponent.prototype.ready;
        /** @type {?} */
        TableComponent.prototype.displayedColumns;
        /** @type {?} */
        TableComponent.prototype.filedDisplayedColumns;
        /** @type {?} */
        TableComponent.prototype.dataSource;
        /** @type {?} */
        TableComponent.prototype.selection;
        /**
         * @type {?}
         * @private
         */
        TableComponent.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NumberComponent = /** @class */ (function () {
        function NumberComponent() {
        }
        /**
         * @return {?}
         */
        NumberComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        NumberComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-control-number",
                        template: "<div  [formGroup]=\"form\">\r\n    <mat-form-field fxFlexFill>\r\n        <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\r\n    </mat-form-field>\r\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        NumberComponent.ctorParameters = function () { return []; };
        NumberComponent.propDecorators = {
            form: [{ type: core.Input }],
            schema: [{ type: core.Input }]
        };
        return NumberComponent;
    }());
    if (false) {
        /** @type {?} */
        NumberComponent.prototype.form;
        /** @type {?} */
        NumberComponent.prototype.schema;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TextComponent = /** @class */ (function () {
        function TextComponent() {
        }
        TextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-control-text",
                        template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\r\n\r\n  <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\r\n\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\r\n    {{config.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\r\n    {{config.validator.minlength.message}}\r\n  </mat-error>\r\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\r\n    {{config.validator.email.message}}\r\n  </mat-error> -->\r\n\r\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->\r\n\r\n</mat-form-field>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        TextComponent.ctorParameters = function () { return []; };
        return TextComponent;
    }());
    if (false) {
        /** @type {?} */
        TextComponent.prototype.config;
        /** @type {?} */
        TextComponent.prototype.group;
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
    /** @enum {string} */
    var FormsListActionTypes = {
        FORMS_LIST: "[FORM][LIST] FORMS_LIST",
        FORMS_LIST_START: "[FORM][LIST] FORMS_LIST_START",
        FORMS_LIST_SUCCEED: "[FORM][LIST] FORMS_LIST_SUCCEED",
        FORMS_LIST_FAILED: "[FORM][LIST] FORMS_LIST_FAILED",
        ADD_FORM_SCHEMA: "[FORM][LIST] ADD_FORM_SCHEMA",
        FORM_SCHEMA_UPDATE: "[FORM][LIST] FORM_SCHEMA_UPDATE",
        GET_FORM_SCHEMA: "[FORM][LIST] GET_FORM_SCHEMA",
        FORM_SCHEMA_FETCHED: "[FORM][LIST] FORM_SCHEMA_FETCHED",
    };
    var FormsListAction = /** @class */ (function () {
        function FormsListAction() {
            this.type = FormsListActionTypes.FORMS_LIST;
        }
        return FormsListAction;
    }());
    if (false) {
        /** @type {?} */
        FormsListAction.prototype.type;
    }
    var FormsListStartAction = /** @class */ (function () {
        function FormsListStartAction() {
            this.type = FormsListActionTypes.FORMS_LIST_START;
        }
        return FormsListStartAction;
    }());
    if (false) {
        /** @type {?} */
        FormsListStartAction.prototype.type;
    }
    var FormsListSucceedAction = /** @class */ (function () {
        function FormsListSucceedAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
        }
        return FormsListSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        FormsListSucceedAction.prototype.type;
        /** @type {?} */
        FormsListSucceedAction.prototype.payload;
    }
    var FormsListFailedAction = /** @class */ (function () {
        function FormsListFailedAction() {
            this.type = FormsListActionTypes.FORMS_LIST_FAILED;
        }
        return FormsListFailedAction;
    }());
    if (false) {
        /** @type {?} */
        FormsListFailedAction.prototype.type;
    }
    var UpdateFormSchemaAction = /** @class */ (function () {
        function UpdateFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
        }
        return UpdateFormSchemaAction;
    }());
    if (false) {
        /** @type {?} */
        UpdateFormSchemaAction.prototype.type;
        /** @type {?} */
        UpdateFormSchemaAction.prototype.payload;
    }
    var AddFormSchemaAction = /** @class */ (function () {
        function AddFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
        }
        return AddFormSchemaAction;
    }());
    if (false) {
        /** @type {?} */
        AddFormSchemaAction.prototype.type;
        /** @type {?} */
        AddFormSchemaAction.prototype.payload;
    }
    var GetFormSchemaAction = /** @class */ (function () {
        function GetFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.GET_FORM_SCHEMA;
        }
        return GetFormSchemaAction;
    }());
    if (false) {
        /** @type {?} */
        GetFormSchemaAction.prototype.type;
        /** @type {?} */
        GetFormSchemaAction.prototype.payload;
    }
    var FormSchemaFechedAction = /** @class */ (function () {
        function FormSchemaFechedAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
        }
        return FormSchemaFechedAction;
    }());
    if (false) {
        /** @type {?} */
        FormSchemaFechedAction.prototype.type;
        /** @type {?} */
        FormSchemaFechedAction.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateFormInputControlComponent = /** @class */ (function () {
        function DateFormInputControlComponent() {
        }
        DateFormInputControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-control-date",
                        template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\r\n\r\n  <!-- <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\"> -->\r\n  <input matInput [id]=\"config.name\" [matDatepicker]=\"_datepicker\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\r\n  <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #_datepicker></mat-datepicker>\r\n\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\r\n    {{config.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\r\n    {{config.validator.minlength.message}}\r\n  </mat-error>\r\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\r\n    {{config.validator.email.message}}\r\n  </mat-error> -->\r\n\r\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->\r\n\r\n</mat-form-field>\r\n\r\n<!-- \r\n\r\n<div [formGroup]=\"formGroup\">\r\n    <div class=\"field-wrapper\">\r\n      <div [@filedAnimation]=\"mode\">\r\n        <mat-form-field class=\"fit\" [(ngClass)]=\"mode\">\r\n            <input matInput [matDatepicker]=\"_datepicker\" [placeholder]=\"placeholder\" [formControlName]=\"controlName\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #_datepicker></mat-datepicker>\r\n            \r\n          <mat-icon class=\"tooltip md-18\" *ngIf=\"tooltip\" [matTooltip]=\"tooltip\">help</mat-icon>\r\n        </mat-form-field>\r\n        <div class=\"value-box\"> \r\n          <span class=\"name\">\r\n            {{ placeholder }} :\r\n          </span>\r\n          <span class=\"value\">\r\n            {{(DisplayValue$ | async | persianDate)}} \r\n          </span>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div> -->",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        DateFormInputControlComponent.ctorParameters = function () { return []; };
        return DateFormInputControlComponent;
    }());
    if (false) {
        /** @type {?} */
        DateFormInputControlComponent.prototype.config;
        /** @type {?} */
        DateFormInputControlComponent.prototype.group;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FileFormInputControlComponent = /** @class */ (function () {
        function FileFormInputControlComponent() {
        }
        FileFormInputControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-control-file",
                        template: "<div fxFlexFill [formGroup]=\"group\">\r\n\r\n  <!-- <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\"> -->\r\n  <input [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\r\n\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\r\n    {{config.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\r\n    {{config.validator.minlength.message}}\r\n  </mat-error>\r\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\r\n    {{config.validator.email.message}}\r\n  </mat-error> -->\r\n\r\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->\r\n\r\n</div>\r\n\r\n<!-- \r\n\r\n<div [formGroup]=\"formGroup\">\r\n    <div class=\"field-wrapper\">\r\n      <div [@filedAnimation]=\"mode\">\r\n        <mat-form-field class=\"fit\" [(ngClass)]=\"mode\">\r\n            <input matInput [matDatepicker]=\"_datepicker\" [placeholder]=\"placeholder\" [formControlName]=\"controlName\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #_datepicker></mat-datepicker>\r\n            \r\n          <mat-icon class=\"tooltip md-18\" *ngIf=\"tooltip\" [matTooltip]=\"tooltip\">help</mat-icon>\r\n        </mat-form-field>\r\n        <div class=\"value-box\"> \r\n          <span class=\"name\">\r\n            {{ placeholder }} :\r\n          </span>\r\n          <span class=\"value\">\r\n            {{(DisplayValue$ | async | persianDate)}} \r\n          </span>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div> -->",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        FileFormInputControlComponent.ctorParameters = function () { return []; };
        return FileFormInputControlComponent;
    }());
    if (false) {
        /** @type {?} */
        FileFormInputControlComponent.prototype.config;
        /** @type {?} */
        FileFormInputControlComponent.prototype.group;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormCaptchaService = /** @class */ (function () {
        function FormCaptchaService(http, store, configurationService) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
        }
        /**
         * @return {?}
         */
        FormCaptchaService.prototype.getCaptcha = /**
         * @return {?}
         */
        function () {
            var _this = this;
            debugger;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} captcha
             * @return {?}
             */
            function (captcha) { return captcha.endpoints.captchaUrl != ""; })), operators.take(1), operators.switchMap((/**
             * @param {?} captcha
             * @return {?}
             */
            function (captcha) {
                return _this.http.get(captcha.env.server + captcha.endpoints.captchaUrl);
            })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        /**
         * @return {?}
         */
        FormCaptchaService.prototype.sendCaptcha = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.getList != ""; })), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return _this.http.get(config.env.server + config.endpoints.getList); })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response.Result; })));
        };
        FormCaptchaService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        FormCaptchaService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: FormConfigurationService }
        ]; };
        /** @nocollapse */ FormCaptchaService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FormCaptchaService_Factory() { return new FormCaptchaService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(store.Store), core.ɵɵinject(FormConfigurationService)); }, token: FormCaptchaService, providedIn: "root" });
        return FormCaptchaService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FormCaptchaService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        FormCaptchaService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        FormCaptchaService.prototype.configurationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CaptchaModel = /** @class */ (function () {
        function CaptchaModel(_a) {
            var _b = _a === void 0 ? {} : _a, captchaImg = _b.captchaImg, captchaCode = _b.captchaCode;
            this.captchaImg = captchaImg + "?" + Math.random();
            this.captchaCode = captchaCode || "";
        }
        return CaptchaModel;
    }());
    if (false) {
        /** @type {?} */
        CaptchaModel.prototype.captchaImg;
        /** @type {?} */
        CaptchaModel.prototype.captchaCode;
    }
    var UpsertCaptchaApiModel;
    (function (UpsertCaptchaApiModel) {
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
                return this.Captcha.captchaCode;
            };
            return Request;
        }());
        UpsertCaptchaApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.Captcha;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertCaptchaApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(UpsertCaptchaApiModel || (UpsertCaptchaApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormCaptchaComponent = /** @class */ (function () {
        function FormCaptchaComponent(service, store, configurationService) {
            // this.captcha = new CaptchaModel({
            // 	captchaImg: "http://172.22.34.28:8001/api/authentication/captcha"
            // });
            this.service = service;
            this.store = store;
            this.configurationService = configurationService;
            this._captcha_generate();
        }
        /**
         * @return {?}
         */
        FormCaptchaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            debugger;
        };
        /**
         * @return {?}
         */
        FormCaptchaComponent.prototype.refresh = /**
         * @return {?}
         */
        function () {
            this.captcha.captchaImg = this._captcha_generate() + ("?" + Math.random());
        };
        /**
         * @return {?}
         */
        FormCaptchaComponent.prototype._captcha_generate = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.configurationService.config$.pipe(operators.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.env.server + config.endpoints.captchaUrl; }))).subscribe((/**
             * @param {?} captcha
             * @return {?}
             */
            function (captcha) {
                _this.captcha = new CaptchaModel({
                    captchaImg: captcha
                });
            }));
        };
        FormCaptchaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "lib-form-captcha",
                        template: "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n  <img [src]=\"captcha.captchaImg\" />\r\n\r\n  <button mat-icon-button color=\"primary\" (click)=\"refresh()\">\r\n    <mat-icon>refresh</mat-icon>\r\n  </button>\r\n\r\n  <div [formGroup]=\"group\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput [id]=\"config.name\" [placeholder]=\"config.title\" [formControlName]=\"config.name\" />\r\n    </mat-form-field>\r\n  </div>\r\n</div>",
                        styles: ["img{border:1px solid #e4e4e4}"]
                    }] }
        ];
        /** @nocollapse */
        FormCaptchaComponent.ctorParameters = function () { return [
            { type: FormCaptchaService },
            { type: store.Store },
            { type: FormConfigurationService }
        ]; };
        return FormCaptchaComponent;
    }());
    if (false) {
        /** @type {?} */
        FormCaptchaComponent.prototype.config;
        /** @type {?} */
        FormCaptchaComponent.prototype.group;
        /** @type {?} */
        FormCaptchaComponent.prototype.captcha;
        /** @type {?} */
        FormCaptchaComponent.prototype.captchaSrc;
        /**
         * @type {?}
         * @private
         */
        FormCaptchaComponent.prototype.service;
        /**
         * @type {?}
         * @private
         */
        FormCaptchaComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        FormCaptchaComponent.prototype.configurationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormViewComponent = /** @class */ (function () {
        function FormViewComponent(service, compiler, resolver, store) {
            var _this = this;
            this.service = service;
            this.compiler = compiler;
            this.resolver = resolver;
            this.store = store;
            this.unsubscribe = new rxjs.Subject();
            this.accept = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
            this.card = false;
            this.formGroupCreated = false;
            this.schema$ = new BehaviorSubject.BehaviorSubject(undefined);
            this.schema$.pipe(operators.takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} schema
             * @return {?}
             */
            function (schema) {
                if (!schema)
                    return;
                _this.formGroup = (/** @type {?} */ (_this.createFrom(schema.form)));
                if (!schema.form.name)
                    return;
                _this.formGroupCreated = true;
            }));
        }
        Object.defineProperty(FormViewComponent.prototype, "id", {
            set: /**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                var _this = this;
                if (!this.local)
                    this.store.dispatch(new GetFormSchemaAction(id));
                this.service
                    .selectFormById(id)
                    .pipe(operators.takeUntil(this.unsubscribe))
                    .subscribe((/**
                 * @param {?} schema
                 * @return {?}
                 */
                function (schema) { return _this.schema$.next(schema); }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormViewComponent.prototype, "schema", {
            set: /**
             * @param {?} schema
             * @return {?}
             */
            function (schema) {
                this.schema$.next(schema);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormViewComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribe.next();
            this.unsubscribe.complete();
        };
        /**
         * @param {?} schema
         * @return {?}
         */
        FormViewComponent.prototype.generate = /**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            this.schema$.next(schema);
        };
        /**
         * @param {?} data
         * @param {?=} parentPath
         * @return {?}
         */
        FormViewComponent.prototype.createFrom = /**
         * @param {?} data
         * @param {?=} parentPath
         * @return {?}
         */
        function (data, parentPath) {
            var _this = this;
            if (parentPath === void 0) { parentPath = ""; }
            if (data.type == "control") {
                /** @type {?} */
                var formGroupPath = void 0;
                if (data.parentType == "array") {
                    // parentPath = `${parentPath}.controls[${(data as FieldConfig).name}]`;
                }
                else if (data.parentType == "group") {
                    formGroupPath = parentPath;
                    parentPath = parentPath + ".controls." + ((/** @type {?} */ (data))).name;
                }
                /** @type {?} */
                var validators = [];
                if (data.validator.required && data.validator.required.active) {
                    validators.push(forms.Validators.required);
                }
                if (data.validator.minlength && data.validator.minlength.active) {
                    validators.push(forms.Validators.minLength(data.validator.minlength.value));
                }
                if (data.validator.email && data.validator.email.active) {
                    validators.push(forms.Validators.email);
                }
                /** @type {?} */
                var ctr = new forms.FormControl(data.value, validators);
                ((/** @type {?} */ (ctr))).schema = data;
                ((/** @type {?} */ (ctr))).schema.path = parentPath;
                ((/** @type {?} */ (ctr))).schema.formGroupPath = formGroupPath;
                return ctr;
            }
            else if (data.type == "group") {
                /** @type {?} */
                var formGroup_1 = new forms.FormGroup({});
                if (data.parentType == undefined) {
                    parentPath = ((/** @type {?} */ (data))).name;
                }
                else if (data.parentType == "array") {
                    parentPath = parentPath + ".controls[" + ((/** @type {?} */ (data))).name + "]";
                }
                else if (data.parentType == "group") {
                    parentPath = parentPath + ".controls." + ((/** @type {?} */ (data))).name;
                }
                ((/** @type {?} */ (formGroup_1))).schema = data;
                ((/** @type {?} */ (formGroup_1))).schema.path = parentPath;
                data.fields.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    item.parentType = "group";
                    formGroup_1.addControl(item.name, _this.createFrom(item, parentPath));
                }));
                return formGroup_1;
            }
            else {
                /** @type {?} */
                var formArray_1 = new forms.FormArray([]);
                parentPath =
                    parentPath == "" ? ((/** @type {?} */ (data))).name : parentPath + ".controls." + ((/** @type {?} */ (data))).name;
                ((/** @type {?} */ (formArray_1))).schema = data;
                ((/** @type {?} */ (formArray_1))).schema.path = parentPath;
                data.fields.forEach((/**
                 * @param {?} item
                 * @param {?} idx
                 * @return {?}
                 */
                function (item, idx) {
                    item.parentType = "array";
                    item.name = idx.toString();
                    formArray_1.controls.push(_this.createFrom(item, parentPath));
                }));
                return formArray_1;
            }
        };
        /**
         * @return {?}
         */
        FormViewComponent.prototype.accepted = /**
         * @return {?}
         */
        function () {
            this.accept.emit(this.formGroup);
        };
        /**
         * @return {?}
         */
        FormViewComponent.prototype.canceled = /**
         * @return {?}
         */
        function () {
            this.cancel.emit(this.formGroup);
        };
        FormViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-view",
                        template: "<div fxFlex=\"nogrow\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n  <form *ngIf=\"formGroupCreated && card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        {{(schema$ | async)?.name}}\r\n      </mat-card-title>\r\n      <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\r\n          <ng-container *ngIf=\"field && field.inputType\" dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\r\n        </div>\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\r\n          | async)?.events.cancel.text}}</button>\r\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\r\n          | async)?.events.accept.text}}</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n  <form *ngIf=\"formGroupCreated && !card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\r\n    <div>\r\n      <h3>\r\n        {{(schema$ | async)?.name}}\r\n      </h3>\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"5px\">\r\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\r\n          <ng-container dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\r\n          | async)?.events.cancel.text}}</button>\r\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\r\n          | async)?.events.accept.text}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FormViewComponent.ctorParameters = function () { return [
            { type: FormService },
            { type: core.Compiler },
            { type: core.ComponentFactoryResolver },
            { type: store.Store }
        ]; };
        FormViewComponent.propDecorators = {
            accept: [{ type: core.Output }],
            cancel: [{ type: core.Output }],
            local: [{ type: core.Input }],
            card: [{ type: core.Input }],
            id: [{ type: core.Input }],
            schema: [{ type: core.Input }]
        };
        return FormViewComponent;
    }());
    if (false) {
        /** @type {?} */
        FormViewComponent.prototype.unsubscribe;
        /** @type {?} */
        FormViewComponent.prototype.accept;
        /** @type {?} */
        FormViewComponent.prototype.cancel;
        /** @type {?} */
        FormViewComponent.prototype.local;
        /** @type {?} */
        FormViewComponent.prototype.card;
        /** @type {?} */
        FormViewComponent.prototype._id;
        /** @type {?} */
        FormViewComponent.prototype.formGroup;
        /** @type {?} */
        FormViewComponent.prototype.formGroupCreated;
        /** @type {?} */
        FormViewComponent.prototype.schema$;
        /**
         * @type {?}
         * @private
         */
        FormViewComponent.prototype.service;
        /**
         * @type {?}
         * @private
         */
        FormViewComponent.prototype.compiler;
        /**
         * @type {?}
         * @private
         */
        FormViewComponent.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        FormViewComponent.prototype.store;
    }
    /** @type {?} */
    var components = {
        checkbox: CheckboxComponent,
        text: TextComponent,
        password: TextComponent,
        date: DateFormInputControlComponent,
        file: FileFormInputControlComponent,
        table: TableComponent,
        color: ColorComponent,
        email: EmailComponent,
        captcha: FormCaptchaComponent,
        select: SelectComponent
    };
    var DynamicFieldDirective = /** @class */ (function () {
        function DynamicFieldDirective(resolver, container) {
            this.resolver = resolver;
            this.container = container;
        }
        /**
         * @return {?}
         */
        DynamicFieldDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            debugger;
            if (this.component) {
                this.component.instance.config = this.config;
                this.component.instance.group = this.group;
            }
        };
        /**
         * @return {?}
         */
        DynamicFieldDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            debugger;
            if (this.config.inputType == undefined)
                return;
            if (!components[this.config.inputType]) {
                /** @type {?} */
                var supportedTypes = Object.keys(components).join(", ");
                throw new Error("Trying to use an unsupported type (" + this.config.inputType + ").\n\t\t  Supported types: " + supportedTypes);
            }
            /** @type {?} */
            var component = this.resolver.resolveComponentFactory(components[this.config.inputType]);
            this.component = this.container.createComponent(component);
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        };
        DynamicFieldDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[dynamicField]"
                    },] }
        ];
        /** @nocollapse */
        DynamicFieldDirective.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef }
        ]; };
        DynamicFieldDirective.propDecorators = {
            config: [{ type: core.Input }],
            group: [{ type: core.Input }]
        };
        return DynamicFieldDirective;
    }());
    if (false) {
        /** @type {?} */
        DynamicFieldDirective.prototype.config;
        /** @type {?} */
        DynamicFieldDirective.prototype.group;
        /** @type {?} */
        DynamicFieldDirective.prototype.component;
        /**
         * @type {?}
         * @private
         */
        DynamicFieldDirective.prototype.resolver;
        /**
         * @type {?}
         * @private
         */
        DynamicFieldDirective.prototype.container;
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
        State.prototype.status;
        /** @type {?} */
        State.prototype.data;
    }
    var ɵ0 = [];
    /** @type {?} */
    var initialState = {
        status: "pristine",
        data: ɵ0
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case FormsListActionTypes.FORMS_LIST: {
                return __assign({}, state, { status: "dirty" });
            }
            case FormsListActionTypes.FORMS_LIST_START: {
                return __assign({}, state, { status: "pending" });
            }
            case FormsListActionTypes.FORMS_LIST_SUCCEED: {
                return __assign({}, state, { data: action.payload, status: "succeed" });
            }
            case FormsListActionTypes.FORMS_LIST_FAILED: {
                return __assign({}, state, { status: "failed" });
            }
            case FormsListActionTypes.FORM_SCHEMA_UPDATE: {
                /** @type {?} */
                var data = state.data.concat();
                /** @type {?} */
                var entityIdx = state.data.findIndex((/**
                 * @param {?} form
                 * @return {?}
                 */
                function (form) { return form._id == action.payload._id; }));
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
                }
                else {
                    data.push(action.payload);
                }
                return __assign({}, state, { data: data });
            }
            case FormsListActionTypes.ADD_FORM_SCHEMA: {
                /** @type {?} */
                var data = state.data.concat();
                /** @type {?} */
                var entityIdx = state.data.findIndex((/**
                 * @param {?} form
                 * @return {?}
                 */
                function (form) { return form._id == action.payload._id; }));
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
                }
                else {
                    data.push(action.payload);
                }
                return __assign({}, state, { data: data });
            }
            case FormsListActionTypes.FORM_SCHEMA_FETCHED: {
                /** @type {?} */
                var data = state.data.concat();
                /** @type {?} */
                var entityIdx = state.data.findIndex((/**
                 * @param {?} form
                 * @return {?}
                 */
                function (form) { return form._id == action.payload._id; }));
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
                }
                else {
                    data.push(action.payload);
                }
                return __assign({}, state, { data: data });
            }
            default: {
                return state;
            }
        }
    }
    /** @type {?} */
    var getStatus = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.status; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function FormState() { }
    if (false) {
        /** @type {?} */
        FormState.prototype.list;
    }
    /** @type {?} */
    var FormReducers = {
        list: reducer
    };
    /**
     * @record
     */
    function MainContainerState() { }
    if (false) {
        /** @type {?} */
        MainContainerState.prototype.form;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormGroupComponent = /** @class */ (function () {
        function FormGroupComponent() {
            this.noHeader = false;
            this.changes = new core.EventEmitter();
            this.delete = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FormGroupComponent.prototype.changed = /**
         * @return {?}
         */
        function () {
            this.changes.emit();
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormGroup = /**
         * @param {?} root
         * @return {?}
         */
        function (root) {
            /** @type {?} */
            var group = new FieldConfig("group");
            group.fields = [];
            root.fields.push(group);
            this.schema.id = this.schema.id + 1;
            return group;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormArray = /**
         * @param {?} root
         * @return {?}
         */
        function (root) {
            /** @type {?} */
            var array = new FieldConfig("array");
            array.fields = [];
            root.fields.push(array);
            return array;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormControl = /**
         * @param {?} root
         * @return {?}
         */
        function (root) {
            /** @type {?} */
            var control = new FieldConfig("control");
            root.fields.push(control);
            return control;
        };
        /**
         * @param {?} idx
         * @return {?}
         */
        FormGroupComponent.prototype.deleteFormGroup = /**
         * @param {?} idx
         * @return {?}
         */
        function (idx) {
            this.schema.fields.splice(idx, 1);
        };
        FormGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-form-group",
                        template: "<div>\r\n\r\n  <mat-form-field *ngIf=\"!noHeader\">\r\n    <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field *ngIf=\"!noHeader\">\r\n    <input matInput [(ngModel)]=\"schema.title\" placeholder=\"\u0639\u0646\u0648\u0627\u0646\">\r\n  </mat-form-field>\r\n\r\n  <div class=\"button-row\">\r\n    <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\"> addFormGroup </button>\r\n    <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\"> addFormArray </button>\r\n    <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button>\r\n  </div>\r\n\r\n  <div *ngFor=\"let field of schema.fields;let i = index\">\r\n    <div [ngSwitch]=\"field.type\">\r\n      <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (change)=\"changed()\"></app-form-group>\r\n      <!-- <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (change)=\"changed()\"></app-form-array> -->\r\n      <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (changes)=\"changed()\" (delete)=\"deleteFormGroup(i)\"></app-form-control>\r\n    </div>\r\n  </div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        FormGroupComponent.ctorParameters = function () { return []; };
        FormGroupComponent.propDecorators = {
            schema: [{ type: core.Input }],
            noHeader: [{ type: core.Input }],
            changes: [{ type: core.Output }],
            delete: [{ type: core.Output }]
        };
        return FormGroupComponent;
    }());
    if (false) {
        /** @type {?} */
        FormGroupComponent.prototype.schema;
        /** @type {?} */
        FormGroupComponent.prototype.noHeader;
        /** @type {?} */
        FormGroupComponent.prototype.changes;
        /** @type {?} */
        FormGroupComponent.prototype.delete;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormArrayComponent = /** @class */ (function () {
        function FormArrayComponent() {
            this.changes = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FormArrayComponent.prototype.changed = /**
         * @return {?}
         */
        function () {
            this.changes.emit();
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormGroup = /**
         * @param {?} root
         * @return {?}
         */
        function (root) {
            /** @type {?} */
            var group = new FieldConfig("group");
            group.fields = [];
            root.fields.push(group);
            return group;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormArray = /**
         * @param {?} root
         * @return {?}
         */
        function (root) {
            /** @type {?} */
            var array = new FieldConfig("array");
            array.fields = [];
            root.fields.push(array);
            return array;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormControl = /**
         * @param {?} root
         * @return {?}
         */
        function (root) {
            /** @type {?} */
            var control = new FieldConfig("control");
            root.fields.push(control);
            return control;
        };
        FormArrayComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-form-array",
                        template: "<mat-card>\r\n  <mat-card-content>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\r\n    </mat-form-field>\r\n      \r\n    <div class=\"button-row\">\r\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">addFormGroup</button>\r\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">addFormArray</button>\r\n      <!-- <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button> -->\r\n    </div>\r\n    \r\n    <div *ngFor=\"let field of schema.fields\">\r\n      <div [ngSwitch]=\"field.type\">\r\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-group>\r\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-array>\r\n        <!-- <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (change)=\"changed($event)\"></app-form-control> -->\r\n      </div>\r\n    </div>\r\n    \r\n  </mat-card-content>\r\n</mat-card>"
                    }] }
        ];
        /** @nocollapse */
        FormArrayComponent.ctorParameters = function () { return []; };
        FormArrayComponent.propDecorators = {
            schema: [{ type: core.Input }],
            changes: [{ type: core.Output }]
        };
        return FormArrayComponent;
    }());
    if (false) {
        /** @type {?} */
        FormArrayComponent.prototype.schema;
        /** @type {?} */
        FormArrayComponent.prototype.changes;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormControlComponent = /** @class */ (function () {
        function FormControlComponent() {
            this.changes = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.width = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            this.options = new forms.FormArray([
                new forms.FormGroup({
                    key: new forms.FormControl(),
                    value: new forms.FormControl()
                })
            ]);
            this.tableOptions = new forms.FormGroup({
                dataEndpoint: new forms.FormControl("")
            });
        }
        /**
         * @return {?}
         */
        FormControlComponent.prototype.changed = /**
         * @return {?}
         */
        function () {
            if ([this.schema.name, this.schema.title, this.schema.inputType].some((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !item; })))
                return true;
            if (this.schema.inputType == "table") {
                this.schema.options = this.tableOptions.value;
            }
            else if (this.schema.inputType == "select") {
                this.schema.options = this.options.value;
            }
            this.changes.emit();
        };
        /**
         * @return {?}
         */
        FormControlComponent.prototype.addOption = /**
         * @return {?}
         */
        function () {
            this.options.push(new forms.FormGroup({
                key: new forms.FormControl(),
                value: new forms.FormControl()
            }));
        };
        /**
         * @param {?} i
         * @return {?}
         */
        FormControlComponent.prototype.removeOption = /**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            this.options.controls.splice(i, 1);
        };
        /**
         * @return {?}
         */
        FormControlComponent.prototype.insertOptions = /**
         * @return {?}
         */
        function () {
            this.schema.options = this.options.value;
        };
        FormControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-form-control",
                        template: "<mat-expansion-panel>\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <button mat-icon-button (click)=\"delete.emit()\">\r\n        <mat-icon aria-label=\"icon-button\">delete_forever</mat-icon>\r\n      </button>\r\n      <span>{{schema.name}}</span>\r\n\r\n    </mat-panel-title>\r\n  </mat-expansion-panel-header>\r\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field fxFlex>\r\n      <input matInput [(ngModel)]=\"schema.title\" (change)=\"changed()\" placeholder=\"Placeholder\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field fxFlex>\r\n      <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">\r\n        <mat-option value=\"table\">table</mat-option>\r\n        <mat-option value=\"select\">select</mat-option>\r\n        <mat-option value=\"text\">text</mat-option>\r\n        <mat-option value=\"number\">number</mat-option>\r\n        <mat-option value=\"email\">email</mat-option>\r\n        <mat-option value=\"color\">color</mat-option>\r\n        <mat-option value=\"radio\">radio</mat-option>\r\n        <mat-option value=\"checkbox\">checkbox</mat-option>\r\n        <mat-option value=\"checkbox\">captcha</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n    <mat-form-field fxFlex>\r\n      <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field fxFlex>\r\n      <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">\r\n        <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n    <div *ngIf=\"schema.inputType=='table'\" [formGroup]=\"tableOptions\">\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" formControlName=\"dataEndpoint\" placeholder=\"dataEndpoint\" />\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div *ngIf=\"schema.inputType=='select'\">\r\n      [options]\r\n      <button (click)=\"addOption()\">+</button>\r\n      <button (click)=\"insertOptions()\">insert</button>\r\n      <div *ngFor=\"let option of options.controls;index as i\">\r\n        {{i}}\r\n        <div [formGroup]=\"options.controls[i]\">\r\n          <mat-form-field>\r\n            <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\" />\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\" />\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <mat-card fxLayout=\"column\">\r\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.active\">\u0627\u062C\u0628\u0627\u0631\u06CC</mat-slide-toggle>\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\r\n      </mat-form-field>\r\n    </mat-card>\r\n    <mat-card fxLayout=\"column\">\r\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.active\">\u0627\u06CC\u0645\u06CC\u0644</mat-slide-toggle>\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\r\n      </mat-form-field>\r\n    </mat-card>\r\n    <mat-card fxLayout=\"column\">\r\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.active\">\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631</mat-slide-toggle>\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.value\" placeholder=\"\u062A\u0639\u062F\u0627\u062F \u062D\u062F\u0627\u0642\u0644 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631\" />\r\n      </mat-form-field>\r\n    </mat-card>\r\n  </div>\r\n</mat-expansion-panel>"
                    }] }
        ];
        /** @nocollapse */
        FormControlComponent.ctorParameters = function () { return []; };
        FormControlComponent.propDecorators = {
            schema: [{ type: core.Input }],
            changes: [{ type: core.Output }],
            delete: [{ type: core.Output }]
        };
        return FormControlComponent;
    }());
    if (false) {
        /** @type {?} */
        FormControlComponent.prototype.schema;
        /** @type {?} */
        FormControlComponent.prototype.changes;
        /** @type {?} */
        FormControlComponent.prototype.delete;
        /** @type {?} */
        FormControlComponent.prototype.width;
        /** @type {?} */
        FormControlComponent.prototype.options;
        /** @type {?} */
        FormControlComponent.prototype.tableOptions;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var EditFormActionTypes = {
        EDIT_FORM: "[FORM][EDIT] EDIT_FORM",
        EDIT_FORM_START: "[FORM][EDIT] EDIT_FORM_START",
        EDIT_FORM_SUCCEED: "[FORM][EDIT] EDIT_FORM_SUCCEED",
        EDIT_FORM_FAILED: "[FORM][EDIT] EDIT_FORM_FAILED",
    };
    var EditFormAction = /** @class */ (function () {
        function EditFormAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM;
        }
        return EditFormAction;
    }());
    if (false) {
        /** @type {?} */
        EditFormAction.prototype.type;
        /** @type {?} */
        EditFormAction.prototype.payload;
    }
    var EditFormStartAction = /** @class */ (function () {
        function EditFormStartAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM_START;
        }
        return EditFormStartAction;
    }());
    if (false) {
        /** @type {?} */
        EditFormStartAction.prototype.type;
        /** @type {?} */
        EditFormStartAction.prototype.payload;
    }
    var EditFormSucceedAction = /** @class */ (function () {
        function EditFormSucceedAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
        }
        return EditFormSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        EditFormSucceedAction.prototype.type;
        /** @type {?} */
        EditFormSucceedAction.prototype.payload;
    }
    var EditFormFailedAction = /** @class */ (function () {
        function EditFormFailedAction() {
            this.type = EditFormActionTypes.EDIT_FORM_FAILED;
        }
        return EditFormFailedAction;
    }());
    if (false) {
        /** @type {?} */
        EditFormFailedAction.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var AddFormActionTypes = {
        ADD_FORM: "[FORM][ADD] ADD_FORM_PROFILE",
        ADD_FORM_START: "[FORM][ADD] ADD_FORM_START",
        ADD_FORM_SUCCEED: "[FORM][ADD] ADD_FORM_SUCCEED",
        ADD_FORM_FAILED: "[FORM][ADD] ADD_FORM_FAILED",
    };
    var AddFormAction = /** @class */ (function () {
        function AddFormAction(payload) {
            this.payload = payload;
            this.type = AddFormActionTypes.ADD_FORM;
        }
        return AddFormAction;
    }());
    if (false) {
        /** @type {?} */
        AddFormAction.prototype.type;
        /** @type {?} */
        AddFormAction.prototype.payload;
    }
    var AddFormStartAction = /** @class */ (function () {
        function AddFormStartAction(payload) {
            this.payload = payload;
            this.type = AddFormActionTypes.ADD_FORM_START;
        }
        return AddFormStartAction;
    }());
    if (false) {
        /** @type {?} */
        AddFormStartAction.prototype.type;
        /** @type {?} */
        AddFormStartAction.prototype.payload;
    }
    var AddFormSucceedAction = /** @class */ (function () {
        function AddFormSucceedAction() {
            this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
        }
        return AddFormSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        AddFormSucceedAction.prototype.type;
    }
    var AddFormFailedAction = /** @class */ (function () {
        function AddFormFailedAction() {
            this.type = AddFormActionTypes.ADD_FORM_FAILED;
        }
        return AddFormFailedAction;
    }());
    if (false) {
        /** @type {?} */
        AddFormFailedAction.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddFormContainerComponent = /** @class */ (function () {
        function AddFormContainerComponent(store, service) {
            this.store = store;
            this.service = service;
        }
        /**
         * @return {?}
         */
        AddFormContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.schema = new FormSchemaModel();
            this.schema.init();
            this.store.dispatch(new AddFormSchemaAction(this.schema));
        };
        /**
         * @param {?} form
         * @return {?}
         */
        AddFormContainerComponent.prototype.add = /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this.store.dispatch(new AddFormAction(form));
        };
        /**
         * @param {?} form
         * @return {?}
         */
        AddFormContainerComponent.prototype.update_schema = /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            this.store.dispatch(new UpdateFormSchemaAction(form));
        };
        AddFormContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<ngs-form-add \n\t\t\t\t\t[schema]=\"schema\" \n\t\t\t\t\t(changes)=\"update_schema($event)\" \n\t\t\t\t\t(submited)=add($event)\n\t\t\t\t></ngs-form-add>"
                    }] }
        ];
        /** @nocollapse */
        AddFormContainerComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: FormService }
        ]; };
        return AddFormContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        AddFormContainerComponent.prototype.schema;
        /** @type {?} */
        AddFormContainerComponent.prototype.store;
        /** @type {?} */
        AddFormContainerComponent.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditFormContainerComponent = /** @class */ (function (_super) {
        __extends(EditFormContainerComponent, _super);
        function EditFormContainerComponent(service, route, store) {
            var _this = _super.call(this, store, service) || this;
            _this.service = service;
            _this.route = route;
            _this.store = store;
            _this.formGroup = EditFormApiModel.Request.formGroup;
            return _this;
        }
        /**
         * @return {?}
         */
        EditFormContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.route.params
                .map((/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return params["_id"]; }))
                .subscribe((/**
             * @param {?} id
             * @return {?}
             */
            function (id) { return _this.store.dispatch(new GetFormSchemaAction(id)); }));
            this.route.params
                .map((/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return params["_id"]; }))
                .switchMap((/**
             * @param {?} id
             * @return {?}
             */
            function (id) { return _this.service.selectFormById(id); }))
                .filter((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data != null; }))
                .take(1)
                .subscribe((/**
             * @param {?} formSchema
             * @return {?}
             */
            function (formSchema) {
                _this.schema = formSchema;
                _this.formGroup.patchValue(formSchema);
            }));
        };
        /**
         * @param {?} data
         * @return {?}
         */
        EditFormContainerComponent.prototype.update = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.store.dispatch(new EditFormAction(data));
        };
        EditFormContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<edit-form\n\t\t\t\t\t[formGroup]=\"formGroup\"\n\t\t\t\t\t[schema]=\"schema\"\n\t\t\t\t\t(changes)=\"update_schema($event)\"\n\t\t\t\t\t(submited)=\"update($event)\">\n\t\t\t\t</edit-form>"
                    }] }
        ];
        /** @nocollapse */
        EditFormContainerComponent.ctorParameters = function () { return [
            { type: FormService },
            { type: router.ActivatedRoute },
            { type: store.Store }
        ]; };
        return EditFormContainerComponent;
    }(AddFormContainerComponent));
    if (false) {
        /** @type {?} */
        EditFormContainerComponent.prototype.formGroup;
        /** @type {?} */
        EditFormContainerComponent.prototype.service;
        /**
         * @type {?}
         * @private
         */
        EditFormContainerComponent.prototype.route;
        /** @type {?} */
        EditFormContainerComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddFormComponent = /** @class */ (function () {
        function AddFormComponent() {
            this.formGroup = AddFormApiModel.Request.formGroup;
            this.submited = new core.EventEmitter();
            this.changes = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        AddFormComponent.prototype.emit = /**
         * @return {?}
         */
        function () {
            this.formGroup.patchValue({ form: this.schema.form });
            this.submited.emit(this.formGroup.value);
        };
        /**
         * @return {?}
         */
        AddFormComponent.prototype.changed = /**
         * @return {?}
         */
        function () {
            this.formGroup.patchValue({ form: this.schema.form });
            this.changes.emit(this.formGroup.value);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AddFormComponent.prototype.changeOrder = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) { };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormGroup = /**
         * @param {?} root
         * @return {?}
         */
        function (root) {
            /** @type {?} */
            var group = new FieldConfig("group");
            group.fields = [];
            root.fields.push(group);
            return group;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormArray = /**
         * @param {?} root
         * @return {?}
         */
        function (root) {
            /** @type {?} */
            var array = new FieldConfig("array");
            array.fields = [];
            root.fields.push(array);
            return array;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormControl = /**
         * @param {?} root
         * @return {?}
         */
        function (root) {
            /** @type {?} */
            var control = new FieldConfig("control");
            root.fields.push(control);
            return control;
        };
        AddFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-form-add",
                        template: "<div fxLayout=\"row\" *ngIf=\"schema\">\r\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\r\n    <form [formGroup]=\"formGroup\">\r\n      <mat-card>\r\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-form-field>\r\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\r\n          </mat-form-field>\r\n          <!-- <div class=\"button-row\">\r\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\r\n              </div> -->\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div [ngSwitch]=\"schema.form?.type\">\r\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\r\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\r\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\r\n        </mat-card-actions>\r\n\r\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\r\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\r\n          <mat-form-field>\r\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\r\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\r\n          <mat-form-field>\r\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </mat-card>\r\n    </form>\r\n  </div>\r\n  <div [fxFlex]=\"50\">\r\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\r\n  </div>\r\n</div>"
                    }] }
        ];
        AddFormComponent.propDecorators = {
            schema: [{ type: core.Input }],
            formGroup: [{ type: core.Input }],
            submited: [{ type: core.Output }],
            changes: [{ type: core.Output }]
        };
        return AddFormComponent;
    }());
    if (false) {
        /** @type {?} */
        AddFormComponent.prototype.schema;
        /** @type {?} */
        AddFormComponent.prototype.formGroup;
        /** @type {?} */
        AddFormComponent.prototype.submited;
        /** @type {?} */
        AddFormComponent.prototype.changes;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditFormComponent = /** @class */ (function (_super) {
        __extends(EditFormComponent, _super);
        function EditFormComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        EditFormComponent.prototype.emit = /**
         * @return {?}
         */
        function () {
            if (!this.formGroup.valid)
                return;
            return this.submited.emit(this.formGroup.value);
        };
        EditFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "edit-form",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\" class=\"with-sticky-action\">\r\n      <div fxLayout=\"row wrap\" *ngIf=\"schema\" fxFlex=\"100\" fxLayoutAlign=\"start start\" fxLayoutAlign.lt-md=\"center\">\r\n        <div fxFlex.gt-md=\"50\" fxFlex.lt-md=\"100\" *ngIf=\"formGroup\">\r\n          <form [formGroup]=\"formGroup\">\r\n            <mat-card>\r\n              <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n              <mat-card-content>\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\r\n                </mat-form-field>\r\n                <!-- <div class=\"button-row\">\r\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\r\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\r\n              </div> -->\r\n                <mat-divider></mat-divider>\r\n                <div [ngSwitch]=\"schema.form?.type\" class=\"schema-form\">\r\n                  <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\r\n                  <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\r\n                </div>\r\n\r\n                <mat-divider></mat-divider>\r\n                <div class=\"form-buttons\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\r\n\r\n                  <div fxLayout=\"column\" [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\r\n                    <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div fxLayout=\"column\" [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\r\n                    <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <mat-card-actions>\r\n                  <!-- <button mat-raised-button color=\"primary\" (click)=\"$any(form).generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\r\n                  <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\r\n                </mat-card-actions>\r\n\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </form>\r\n        </div>\r\n        <div fxFlex.gt-md=\"50\" fxFlex.lt-md=\"100\" fxLayoutAlign=\"center start\">\r\n          <ngs-form-view [local]='true' [id]=\" schema._id\">\r\n          </ngs-form-view>\r\n\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>",
                        styles: [".form-buttons,.schema-form{padding:25px 10px}"]
                    }] }
        ];
        EditFormComponent.propDecorators = {
            schema: [{ type: core.Input }]
        };
        return EditFormComponent;
    }(AddFormComponent));
    if (false) {
        /** @type {?} */
        EditFormComponent.prototype.schema;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormListContainerComponent = /** @class */ (function () {
        function FormListContainerComponent(store) {
            this.store = store;
            this.data$ = this.store.select((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.form.list.data; }));
        }
        /**
         * @return {?}
         */
        FormListContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.store.dispatch(new FormsListAction());
        };
        FormListContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<form-list\n\t\t\t\t\t[data]=\"data$\">\n\t\t\t\t</form-list>"
                    }] }
        ];
        /** @nocollapse */
        FormListContainerComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return FormListContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        FormListContainerComponent.prototype.data$;
        /** @type {?} */
        FormListContainerComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormListComponent = /** @class */ (function () {
        function FormListComponent() {
        }
        FormListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "form-list",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>assignment</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0631\u0645 \u0647\u0627</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\r\n\r\n        <button fxFlex.lt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"32\" fxFlex.sm=\"49\" fxFlex.xs=\"100\" class='link'\r\n          mat-raised-button [routerLink]=\"['edit' ,  item._id]\" *ngFor=\"let item of (data$ | async)\">\r\n          <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>settings</mat-icon>\r\n            <h3 class='title'>{{item.name}}</h3>\r\n          </div>\r\n        </button>\r\n\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>",
                        styles: ["button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
                    }] }
        ];
        FormListComponent.propDecorators = {
            data$: [{ type: core.Input, args: ["data",] }]
        };
        return FormListComponent;
    }());
    if (false) {
        /** @type {?} */
        FormListComponent.prototype.data$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainContainerComponent = /** @class */ (function () {
        function MainContainerComponent(route, store) {
            this.route = route;
            this.store = store;
        }
        MainContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<router-outlet></router-outlet>"
                    }] }
        ];
        /** @nocollapse */
        MainContainerComponent.ctorParameters = function () { return [
            { type: router.ActivatedRoute },
            { type: store.Store }
        ]; };
        return MainContainerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MainContainerComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        MainContainerComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddFormEffects = /** @class */ (function () {
        function AddFormEffects(actions$, router, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.service = service;
            this.AddForm$ = this.actions$.pipe(effects.ofType(AddFormActionTypes.ADD_FORM), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new AddFormStartAction(data); })));
            this.AddFormStart$ = this.actions$.pipe(effects.ofType(AddFormActionTypes.ADD_FORM_START), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.service.add(data); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new AddFormSucceedAction(); })), operators.catchError((/**
             * @return {?}
             */
            function () { return of.of(new AddFormFailedAction()); })));
        }
        AddFormEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AddFormEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: FormService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddFormEffects.prototype, "AddForm$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddFormEffects.prototype, "AddFormStart$", void 0);
        return AddFormEffects;
    }());
    if (false) {
        /** @type {?} */
        AddFormEffects.prototype.AddForm$;
        /** @type {?} */
        AddFormEffects.prototype.AddFormStart$;
        /**
         * @type {?}
         * @private
         */
        AddFormEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        AddFormEffects.prototype.router;
        /**
         * @type {?}
         * @private
         */
        AddFormEffects.prototype.service;
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
    var FormsListEffects = /** @class */ (function () {
        function FormsListEffects(actions$, router, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.service = service;
            this.EditProfileRequest$ = this.actions$.pipe(effects.ofType(FormsListActionTypes.FORMS_LIST), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new FormsListStartAction(); })));
            this.GetForm$ = this.actions$.pipe(effects.ofType(FormsListActionTypes.GET_FORM_SCHEMA), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.switchMap((/**
             * @param {?} id
             * @return {?}
             */
            function (id) { return _this.service.get(id); })), operators.map((/**
             * @param {?} formSchema
             * @return {?}
             */
            function (formSchema) { return new FormSchemaFechedAction(formSchema); })));
            this.get_forms_list$ = this.actions$.pipe(effects.ofType(FormsListActionTypes.FORMS_LIST_START), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.service.getList(); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new FormsListSucceedAction(res); })), operators.catchError((/**
             * @return {?}
             */
            function () { return of.of(new FormsListFailedAction()); })));
        }
        FormsListEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FormsListEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: FormService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FormsListEffects.prototype, "EditProfileRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FormsListEffects.prototype, "GetForm$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FormsListEffects.prototype, "get_forms_list$", void 0);
        return FormsListEffects;
    }());
    if (false) {
        /** @type {?} */
        FormsListEffects.prototype.EditProfileRequest$;
        /** @type {?} */
        FormsListEffects.prototype.GetForm$;
        /** @type {?} */
        FormsListEffects.prototype.get_forms_list$;
        /**
         * @type {?}
         * @private
         */
        FormsListEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        FormsListEffects.prototype.router;
        /**
         * @type {?}
         * @private
         */
        FormsListEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditFormEffects = /** @class */ (function () {
        function EditFormEffects(actions$, router, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.service = service;
            this.EditForm$ = this.actions$.pipe(effects.ofType(EditFormActionTypes.EDIT_FORM), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new EditFormStartAction(data); })));
            this.EditFormStart$ = this.actions$.pipe(effects.ofType(EditFormActionTypes.EDIT_FORM_START), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.service.update(data); })), operators.map((/**
             * @param {?} formSchema
             * @return {?}
             */
            function (formSchema) { return new EditFormSucceedAction(formSchema); })), operators.catchError((/**
             * @return {?}
             */
            function () { return of.of(new EditFormFailedAction()); })));
            this.UpdateFormsListStart$ = this.actions$.pipe(effects.ofType(EditFormActionTypes.EDIT_FORM_SUCCEED), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.map((/**
             * @param {?} formSchema
             * @return {?}
             */
            function (formSchema) { return new UpdateFormSchemaAction(formSchema); })));
        }
        EditFormEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        EditFormEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: FormService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditFormEffects.prototype, "EditForm$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditFormEffects.prototype, "EditFormStart$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditFormEffects.prototype, "UpdateFormsListStart$", void 0);
        return EditFormEffects;
    }());
    if (false) {
        /** @type {?} */
        EditFormEffects.prototype.EditForm$;
        /** @type {?} */
        EditFormEffects.prototype.EditFormStart$;
        /** @type {?} */
        EditFormEffects.prototype.UpdateFormsListStart$;
        /**
         * @type {?}
         * @private
         */
        EditFormEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        EditFormEffects.prototype.router;
        /**
         * @type {?}
         * @private
         */
        EditFormEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "form",
            component: MainContainerComponent,
            children: [
                {
                    path: "add",
                    component: AddFormContainerComponent
                },
                {
                    path: "edit/:_id",
                    component: EditFormContainerComponent
                },
                {
                    path: "",
                    component: FormListContainerComponent
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
    /** @enum {string} */
    var CaptchaActionTypes = {
        GET_CAPTCHA: "[CAPTCHA][GET] GET_CAPTCHA",
        GET_CAPTCHA_START: "[CAPTCHA][GET] GET_CAPTCHA_START",
        GET_CAPTCHA_SUCCEED: "[CAPTCHA][GET] GET_CAPTCHA_SUCCEED",
        GET_CAPTCHA_FAILED: "[CAPTCHA][GET] GET_CAPTCHA_FAILED",
    };
    var GetCaptchaAction = /** @class */ (function () {
        function GetCaptchaAction() {
            this.type = CaptchaActionTypes.GET_CAPTCHA;
            // constructor(public payload: CaptchaModel) { }
        }
        return GetCaptchaAction;
    }());
    if (false) {
        /** @type {?} */
        GetCaptchaAction.prototype.type;
    }
    var GetCaptchaStartAction = /** @class */ (function () {
        function GetCaptchaStartAction(payload) {
            this.payload = payload;
            this.type = CaptchaActionTypes.GET_CAPTCHA_START;
        }
        return GetCaptchaStartAction;
    }());
    if (false) {
        /** @type {?} */
        GetCaptchaStartAction.prototype.type;
        /** @type {?} */
        GetCaptchaStartAction.prototype.payload;
    }
    var GetCaptchaSucceedAction = /** @class */ (function () {
        function GetCaptchaSucceedAction() {
            this.type = CaptchaActionTypes.GET_CAPTCHA_SUCCEED;
        }
        return GetCaptchaSucceedAction;
    }());
    if (false) {
        /** @type {?} */
        GetCaptchaSucceedAction.prototype.type;
    }
    var GetCaptchaFailedAction = /** @class */ (function () {
        function GetCaptchaFailedAction() {
            this.type = CaptchaActionTypes.GET_CAPTCHA_FAILED;
        }
        return GetCaptchaFailedAction;
    }());
    if (false) {
        /** @type {?} */
        GetCaptchaFailedAction.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CaptchaEffects = /** @class */ (function () {
        function CaptchaEffects(actions$, router, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.service = service;
            this.GetCaptcha$ = this.actions$.pipe(effects.ofType(CaptchaActionTypes.GET_CAPTCHA), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new GetCaptchaStartAction(data); })));
            this.AddFormStart$ = this.actions$.pipe(effects.ofType(CaptchaActionTypes.GET_CAPTCHA_START), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.service.getCaptcha(); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new GetCaptchaSucceedAction(); })), operators.catchError((/**
             * @return {?}
             */
            function () { return of.of(new GetCaptchaFailedAction()); })));
        }
        CaptchaEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CaptchaEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: FormCaptchaService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], CaptchaEffects.prototype, "GetCaptcha$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], CaptchaEffects.prototype, "AddFormStart$", void 0);
        return CaptchaEffects;
    }());
    if (false) {
        /** @type {?} */
        CaptchaEffects.prototype.GetCaptcha$;
        /** @type {?} */
        CaptchaEffects.prototype.AddFormStart$;
        /**
         * @type {?}
         * @private
         */
        CaptchaEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        CaptchaEffects.prototype.router;
        /**
         * @type {?}
         * @private
         */
        CaptchaEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgsFormModule = /** @class */ (function () {
        function NgsFormModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsFormModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: RootNgsFormModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, FormConfigurationService]
            };
        };
        NgsFormModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            http.HttpClientModule,
                            forms.FormsModule,
                            router.RouterModule,
                            common.CommonModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatDatepickerModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            material.MatSelectModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            material.MatDividerModule,
                            flexLayout.FlexLayoutModule,
                            material.MatRadioModule,
                            material.MatSlideToggleModule,
                            forms.ReactiveFormsModule
                        ],
                        declarations: [
                            EditFormContainerComponent,
                            EditFormComponent,
                            FormListContainerComponent,
                            FormListComponent,
                            AddFormContainerComponent,
                            MainContainerComponent,
                            AddFormComponent,
                            FormGroupComponent,
                            FormArrayComponent,
                            FormControlComponent,
                            FormViewComponent,
                            DynamicFieldDirective,
                            SelectComponent,
                            CheckboxComponent,
                            EmailComponent,
                            ColorComponent,
                            DateFormInputControlComponent,
                            FileFormInputControlComponent,
                            TextComponent,
                            NumberComponent,
                            TableComponent,
                            FormCaptchaComponent
                            // NgsFormSelectorComponent
                        ],
                        entryComponents: [
                            SelectComponent,
                            CheckboxComponent,
                            EmailComponent,
                            ColorComponent,
                            DateFormInputControlComponent,
                            FileFormInputControlComponent,
                            TextComponent,
                            NumberComponent,
                            TableComponent,
                            FormCaptchaComponent
                        ],
                        exports: [FormViewComponent]
                        // exports: [ FormViewComponent, NgsFormSelectorComponent ]
                    },] }
        ];
        return NgsFormModule;
    }());
    var RootNgsFormModule = /** @class */ (function () {
        function RootNgsFormModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.form = "8.0.10";
        }
        RootNgsFormModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            NgsFormModule,
                            store.StoreModule.forFeature("form", FormReducers),
                            effects.EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects, CaptchaEffects]),
                            RoutingModule
                        ],
                        exports: [NgsFormModule]
                    },] }
        ];
        /** @nocollapse */
        RootNgsFormModule.ctorParameters = function () { return []; };
        return RootNgsFormModule;
    }());

    exports.DynamicFieldDirective = DynamicFieldDirective;
    exports.FormService = FormService;
    exports.FormViewComponent = FormViewComponent;
    exports.NgsFormModule = NgsFormModule;
    exports.RootNgsFormModule = RootNgsFormModule;
    exports.ɵa = MODULE_CONFIG_TOKEN;
    exports.ɵb = FormReducers;
    exports.ɵba = FormCaptchaComponent;
    exports.ɵbb = FormCaptchaService;
    exports.ɵbc = reducer;
    exports.ɵbd = AddFormEffects;
    exports.ɵbe = EditFormEffects;
    exports.ɵbf = FormsListEffects;
    exports.ɵbg = CaptchaEffects;
    exports.ɵbh = RoutingModule;
    exports.ɵd = FormConfigurationService;
    exports.ɵf = EditFormContainerComponent;
    exports.ɵg = AddFormContainerComponent;
    exports.ɵh = EditFormComponent;
    exports.ɵi = AddFormComponent;
    exports.ɵj = FormListContainerComponent;
    exports.ɵk = FormListComponent;
    exports.ɵl = AddFormContainerComponent;
    exports.ɵm = MainContainerComponent;
    exports.ɵn = AddFormComponent;
    exports.ɵo = FormGroupComponent;
    exports.ɵp = FormArrayComponent;
    exports.ɵq = FormControlComponent;
    exports.ɵr = SelectComponent;
    exports.ɵs = CheckboxComponent;
    exports.ɵt = EmailComponent;
    exports.ɵu = ColorComponent;
    exports.ɵv = DateFormInputControlComponent;
    exports.ɵw = FileFormInputControlComponent;
    exports.ɵx = TextComponent;
    exports.ɵy = NumberComponent;
    exports.ɵz = TableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-form.umd.js.map
