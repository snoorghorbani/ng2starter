(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ngrx/store'), require('@soushians/widget'), require('@soushians/frontend-authentication'), require('@angular/common'), require('@angular/router'), require('@angular/material'), require('angular-froala-wysiwyg'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/widget-types', ['exports', '@angular/core', '@angular/forms', '@ngrx/store', '@soushians/widget', '@soushians/frontend-authentication', '@angular/common', '@angular/router', '@angular/material', 'angular-froala-wysiwyg', '@angular/flex-layout'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians['widget-types'] = {}), global.ng.core, global.ng.forms, global.store, global.widget, global.frontendAuthentication, global.ng.common, global.ng.router, global.ng.material, global.angularFroalaWysiwyg, global.ng['flex-layout']));
}(this, function (exports, core, forms, store, widget, frontendAuthentication, common, router, material, angularFroalaWysiwyg, flexLayout) { 'use strict';

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
    var ArticleUpsertComponent = /** @class */ (function () {
        function ArticleUpsertComponent(store) {
            this.store = store;
            this._createFormGroup();
            this.widget = new widget.WidgetModel({ type: "article" });
        }
        /**
         * @return {?}
         */
        ArticleUpsertComponent.prototype.upsert = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var widget$1 = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
            this.store.dispatch(new widget.UpsertWidgetStartAction(widget$1));
        };
        /**
         * @return {?}
         */
        ArticleUpsertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.widget != undefined) {
                this.widgetFormGroup.patchValue(this.widget);
                this.configFormGroup.patchValue(this.widget.Config);
            }
        };
        /**
         * @return {?}
         */
        ArticleUpsertComponent.prototype._createFormGroup = /**
         * @return {?}
         */
        function () {
            this.configFormGroup = new forms.FormGroup({
                content: new forms.FormControl("")
            });
            this.widgetFormGroup = new forms.FormGroup({
                name: new forms.FormControl("")
            });
        };
        ArticleUpsertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-article-upsert",
                        template: "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n      <mat-icon>gradient</mat-icon>\r\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\r\n    </mat-card-title>\r\n    <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span>\r\n        \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n      </span>\r\n    </mat-card-subtitle> -->\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h3>\u0646\u0627\u0645 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <div [formGroup]=\"widgetFormGroup\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <h3>\u0645\u062A\u0646 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <div [formGroup]=\"configFormGroup\">\r\n      <div [froalaEditor] formControlName=\"content\"></div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button color=\"primary\" (click)=\"upsert()\">Add</button>\r\n  </mat-card-actions>\r\n</mat-card>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ArticleUpsertComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        ArticleUpsertComponent.propDecorators = {
            widget: [{ type: core.Input }]
        };
        return ArticleUpsertComponent;
    }());
    if (false) {
        /** @type {?} */
        ArticleUpsertComponent.prototype.widget;
        /** @type {?} */
        ArticleUpsertComponent.prototype.widgetFormGroup;
        /** @type {?} */
        ArticleUpsertComponent.prototype.configFormGroup;
        /**
         * @type {?}
         * @private
         */
        ArticleUpsertComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ArticleViewComponent = /** @class */ (function () {
        function ArticleViewComponent(store) {
            this.store = store;
        }
        /**
         * @return {?}
         */
        ArticleViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.havePermission$ = this.store.select(frontendAuthentication.getFrontendAuthenticationState);
        };
        ArticleViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-article-view",
                        template: "<div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center start\">\r\n  <button mat-mini-fab color=\"accent\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/article', (widget)?._id]\">\r\n    <mat-icon>edit</mat-icon>\r\n  </button>\r\n\r\n  <div fxFlex=\"90\" [froalaView]=\"(widget)?.Config.content\" align=\"right\" class=\"article\"></div>\r\n</div>",
                        styles: [":host{position:relative;display:block}.mat-mini-fab{position:absolute;top:-20px;right:-20px}.article{direction:rtl;text-align:right;padding-top:25px}"]
                    }] }
        ];
        /** @nocollapse */
        ArticleViewComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return ArticleViewComponent;
    }());
    if (false) {
        /** @type {?} */
        ArticleViewComponent.prototype.widget;
        /** @type {?} */
        ArticleViewComponent.prototype.havePermission$;
        /**
         * @type {?}
         * @private
         */
        ArticleViewComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinksUpsertComponent = /** @class */ (function () {
        function LinksUpsertComponent(store) {
            this.store = store;
            this._createFormGroup();
            this.widget = new widget.WidgetModel({ type: "links" });
        }
        /**
         * @return {?}
         */
        LinksUpsertComponent.prototype.upsert = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var widget$1 = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
            this.store.dispatch(new widget.UpsertWidgetStartAction(widget$1));
        };
        /**
         * @return {?}
         */
        LinksUpsertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.widget != undefined) {
                this.widgetFormGroup.patchValue(this.widget);
                this.configFormGroup.patchValue(this.widget.Config);
                debugger;
                this._update_links(this.widget.Config.links);
            }
        };
        /**
         * view methods
         */
        /**
         * view methods
         * @return {?}
         */
        LinksUpsertComponent.prototype.addlink = /**
         * view methods
         * @return {?}
         */
        function () {
            ((/** @type {?} */ (this.configFormGroup.get("links")))).push(this._get_new_empty_link_item());
        };
        /**
         * @param {?} link
         * @return {?}
         */
        LinksUpsertComponent.prototype.removelink = /**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            debugger;
            /** @type {?} */
            var data = (/** @type {?} */ (this.configFormGroup.get("links")));
            if (data.controls.length > -1) {
                data.removeAt(link);
            }
            else {
                return data;
            }
        };
        /**
         * private methods
         */
        /**
         * private methods
         * @return {?}
         */
        LinksUpsertComponent.prototype._createFormGroup = /**
         * private methods
         * @return {?}
         */
        function () {
            this.configFormGroup = new forms.FormGroup({
                links: new forms.FormArray([])
            });
            this.widgetFormGroup = new forms.FormGroup({
                name: new forms.FormControl("")
            });
        };
        /**
         * @return {?}
         */
        LinksUpsertComponent.prototype._get_new_empty_link_item = /**
         * @return {?}
         */
        function () {
            return new forms.FormGroup({
                url: new forms.FormControl("/"),
                label: new forms.FormControl("")
            });
        };
        /**
         * @param {?} links
         * @return {?}
         */
        LinksUpsertComponent.prototype._update_links = /**
         * @param {?} links
         * @return {?}
         */
        function (links) {
            var _this = this;
            ((/** @type {?} */ (this.configFormGroup.get("links")))).reset();
            links.forEach((/**
             * @param {?} link
             * @return {?}
             */
            function (link) {
                /** @type {?} */
                var _link = _this._get_new_empty_link_item();
                _link.patchValue(link);
                ((/** @type {?} */ (_this.configFormGroup.get("links")))).push(_link);
            }));
        };
        LinksUpsertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-links-upsert",
                        template: "<mat-card fxFlex>\r\n  <mat-card-header>\r\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n      <mat-icon>gradient</mat-icon>\r\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\r\n    </mat-card-title>\r\n    <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span>\r\n        \u0646\u0627\u0645 \u0644\u06CC\u0646\u06A9 \u0645\u0648\u0631\u062F\u0646\u0638\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0631\u0627 \u06A9\u0627\u0645\u0644 \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n      </span>\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h3>\u0646\u0627\u0645 \u0648\u06CC\u062C\u062A</h3>\r\n    <div [formGroup]=\"widgetFormGroup\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <br>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\r\n      <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addlink()\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div [formGroup]=\"configFormGroup\">\r\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('links')).controls; let idx = index\"\r\n        [formGroup]=\"ctrl\">\r\n        <div [formGroup]=\"ctrl\" fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n          <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelink(idx)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n          <mat-form-field fxFlex>\r\n            <input type=\"text\" matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"url\">\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex>\r\n            <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"label\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n  </mat-card-actions>\r\n</mat-card>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LinksUpsertComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        LinksUpsertComponent.propDecorators = {
            widget: [{ type: core.Input }]
        };
        return LinksUpsertComponent;
    }());
    if (false) {
        /** @type {?} */
        LinksUpsertComponent.prototype.widget;
        /** @type {?} */
        LinksUpsertComponent.prototype.widgetFormGroup;
        /** @type {?} */
        LinksUpsertComponent.prototype.configFormGroup;
        /**
         * @type {?}
         * @private
         */
        LinksUpsertComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LinksViewComponent = /** @class */ (function () {
        function LinksViewComponent(store) {
            this.store = store;
        }
        Object.defineProperty(LinksViewComponent.prototype, "widget", {
            get: /**
             * @return {?}
             */
            function () {
                return this._widget;
            },
            set: /**
             * @param {?} widget
             * @return {?}
             */
            function (widget) {
                debugger;
                widget.Config.links.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.url = item.url.startsWith("www.") ? item.url = "http://" + item.url : item.url; }));
                widget.Config.links.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.isExternal = item.url.startsWith("http"); }));
                this._widget = widget;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LinksViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.havePermission$ = this.store.select(frontendAuthentication.getFrontendAuthenticationState);
        };
        LinksViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-links-view",
                        template: "<div fxLayout=\"column\">\r\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\r\n      <mat-icon>edit</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <h3>\r\n      {{widget.name}}\r\n    </h3>\r\n  </div>\r\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\r\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let link of (widget)?.Config.links\" fxFlex=\"100\">\r\n      <mat-icon mat-list-icon>link</mat-icon>\r\n      <a fxLayout=\"row\" *ngIf=\"!link.isExternal\" fxFlex=\"grow\" [routerLink]=\"[link.url]\">\r\n        {{link.label}}\r\n      </a>\r\n      <a fxLayout=\"row\" *ngIf=\"link.isExternal\" target=\"_blank\" fxFlex=\"grow\" [href]=\"link.url\">\r\n        {{link.label}}\r\n      </a>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>",
                        styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}"]
                    }] }
        ];
        /** @nocollapse */
        LinksViewComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return LinksViewComponent;
    }());
    if (false) {
        /** @type {?} */
        LinksViewComponent.prototype._widget;
        /** @type {?} */
        LinksViewComponent.prototype.havePermission$;
        /**
         * @type {?}
         * @private
         */
        LinksViewComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListViewComponent = /** @class */ (function () {
        function ListViewComponent(store) {
            this.store = store;
        }
        /**
         * @return {?}
         */
        ListViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.havePermission$ = this.store.select(frontendAuthentication.getFrontendAuthenticationState);
        };
        ListViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-list-view",
                        template: "<div fxLayout=\"column\">\r\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\r\n      <mat-icon>edit</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <h3>\r\n      {{widget.name}}\r\n    </h3>\r\n  </div>\r\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\r\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let item of (widget)?.Config.list\" fxFlex=\"100\">\r\n      <mat-icon class=\"large-icon\" mat-list-icon>account_box</mat-icon>\r\n      <h4 mat-line> {{item.title}}</h4>\r\n      <p mat-line> {{item.subtitle}} </p>\r\n      <p mat-line> {{item.description}} </p>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>",
                        styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}.large-icon{font-size:50px!important;width:50px!important;height:50px!important;color:#999}mat-list{direction:rtl}"]
                    }] }
        ];
        /** @nocollapse */
        ListViewComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return ListViewComponent;
    }());
    if (false) {
        /** @type {?} */
        ListViewComponent.prototype.widget;
        /** @type {?} */
        ListViewComponent.prototype.havePermission$;
        /**
         * @type {?}
         * @private
         */
        ListViewComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListUpsertComponent = /** @class */ (function () {
        function ListUpsertComponent(store) {
            this.store = store;
            this._createFormGroup();
            this.widget = new widget.WidgetModel({ type: "list" });
        }
        /**
         * @return {?}
         */
        ListUpsertComponent.prototype.upsert = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var widget$1 = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
            this.store.dispatch(new widget.UpsertWidgetStartAction(widget$1));
        };
        /**
         * @return {?}
         */
        ListUpsertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (this.widget != undefined) {
                this.widgetFormGroup.patchValue(this.widget);
                this.configFormGroup.patchValue(this.widget.Config);
                this._update_list(this.widget.Config.list);
            }
        };
        /**
         * @return {?}
         */
        ListUpsertComponent.prototype.addItem = /**
         * @return {?}
         */
        function () {
            ((/** @type {?} */ (this.configFormGroup.get("list")))).push(this._get_new_empty_list_item());
        };
        /**
         * @param {?} list
         * @return {?}
         */
        ListUpsertComponent.prototype.removelist = /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            debugger;
            /** @type {?} */
            var data = (/** @type {?} */ (this.configFormGroup.get("list")));
            if (data.controls.length > -1) {
                data.removeAt(list);
            }
            else {
                return data;
            }
        };
        /**
         * @return {?}
         */
        ListUpsertComponent.prototype._createFormGroup = /**
         * @return {?}
         */
        function () {
            this.configFormGroup = new forms.FormGroup({
                list: new forms.FormArray([])
            });
            this.widgetFormGroup = new forms.FormGroup({
                name: new forms.FormControl("")
            });
        };
        /**
         * @return {?}
         */
        ListUpsertComponent.prototype._get_new_empty_list_item = /**
         * @return {?}
         */
        function () {
            return new forms.FormGroup({
                title: new forms.FormControl(""),
                subtitle: new forms.FormControl(""),
                description: new forms.FormControl("")
            });
        };
        /**
         * @param {?} list
         * @return {?}
         */
        ListUpsertComponent.prototype._update_list = /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            var _this = this;
            ((/** @type {?} */ (this.configFormGroup.get("list")))).reset();
            list.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var _list = _this._get_new_empty_list_item();
                _list.patchValue(item);
                ((/** @type {?} */ (_this.configFormGroup.get("list")))).push(_list);
            }));
        };
        ListUpsertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-list-upsert",
                        template: "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n      <mat-icon>gradient</mat-icon>\r\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\r\n    </mat-card-title>\r\n    <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span>\r\n        \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n      </span>\r\n    </mat-card-subtitle> -->\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h3>\u0646\u0627\u0645 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <div [formGroup]=\"widgetFormGroup\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <h3>\u0645\u062A\u0646 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addItem()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n    <div [formGroup]=\"configFormGroup\">\r\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('list')).controls; let idx = index\" [formGroup]=\"ctrl\">\r\n        <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelist(idx)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" matInput placeholder=\"\u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646\" formControlName=\"subtitle\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\u0627\u062A\" formControlName=\"description\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n  </mat-card-actions>\r\n</mat-card>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ListUpsertComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        ListUpsertComponent.propDecorators = {
            widget: [{ type: core.Input }]
        };
        return ListUpsertComponent;
    }());
    if (false) {
        /** @type {?} */
        ListUpsertComponent.prototype.widget;
        /** @type {?} */
        ListUpsertComponent.prototype.widgetFormGroup;
        /** @type {?} */
        ListUpsertComponent.prototype.configFormGroup;
        /**
         * @type {?}
         * @private
         */
        ListUpsertComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgsWidgetTypesModule = /** @class */ (function () {
        function NgsWidgetTypesModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.widget_types = "8.0.10";
        }
        NgsWidgetTypesModule.decorators = [
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
                            material.MatDividerModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatSlideToggleModule,
                            material.MatDividerModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            material.MatListModule,
                            flexLayout.FlexLayoutModule,
                            angularFroalaWysiwyg.FroalaEditorModule.forRoot(),
                            angularFroalaWysiwyg.FroalaViewModule.forRoot()
                        ],
                        declarations: [
                            ArticleUpsertComponent,
                            ArticleViewComponent,
                            LinksUpsertComponent,
                            LinksViewComponent,
                            ListUpsertComponent,
                            ListViewComponent
                        ],
                        entryComponents: [
                            ArticleUpsertComponent,
                            ArticleViewComponent,
                            LinksUpsertComponent,
                            LinksViewComponent,
                            ListUpsertComponent,
                            ListViewComponent
                        ],
                        exports: [ArticleViewComponent]
                    },] }
        ];
        /** @nocollapse */
        NgsWidgetTypesModule.ctorParameters = function () { return []; };
        return NgsWidgetTypesModule;
    }());

    exports.ArticleUpsertComponent = ArticleUpsertComponent;
    exports.ArticleViewComponent = ArticleViewComponent;
    exports.LinksUpsertComponent = LinksUpsertComponent;
    exports.LinksViewComponent = LinksViewComponent;
    exports.ListUpsertComponent = ListUpsertComponent;
    exports.ListViewComponent = ListViewComponent;
    exports.NgsWidgetTypesModule = NgsWidgetTypesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-widget-types.umd.js.map
