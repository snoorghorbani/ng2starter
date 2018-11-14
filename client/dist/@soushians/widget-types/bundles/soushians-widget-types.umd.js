(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ngrx/store'), require('@soushians/widget'), require('@soushians/frontend-authentication'), require('@angular/common'), require('@angular/router'), require('@angular/material'), require('angular-froala-wysiwyg'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/widget-types', ['exports', '@angular/core', '@angular/forms', '@ngrx/store', '@soushians/widget', '@soushians/frontend-authentication', '@angular/common', '@angular/router', '@angular/material', 'angular-froala-wysiwyg', '@angular/flex-layout'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians['widget-types'] = {}),global.ng.core,global.ng.forms,null,null,null,global.ng.common,global.ng.router,global.ng.material,null,global.ng['flex-layout']));
}(this, (function (exports,core,forms,store,widget,frontendAuthentication,common,router,material,angularFroalaWysiwyg,flexLayout) { 'use strict';

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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ArticleUpsertComponent = /** @class */ (function () {
        function ArticleUpsertComponent(store$$1) {
            this.store = store$$1;
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
                var widget$$1 = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
                this.store.dispatch(new widget.UpsertWidgetStartAction(widget$$1));
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
                        template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n      <mat-icon>gradient</mat-icon>\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\n    </mat-card-title>\n    <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <span>\n        \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n      </span>\n    </mat-card-subtitle> -->\n  </mat-card-header>\n  <mat-card-content>\n    <h3>\u0646\u0627\u0645 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n      </mat-form-field>\n    </div>\n    <mat-divider></mat-divider>\n    <h3>\u0645\u062A\u0646 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\n    <div [formGroup]=\"configFormGroup\">\n      <div [froalaEditor] formControlName=\"content\"></div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button color=\"primary\" (click)=\"upsert()\">Add</button>\n  </mat-card-actions>\n</mat-card>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ArticleUpsertComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        ArticleUpsertComponent.propDecorators = {
            widget: [{ type: core.Input }]
        };
        return ArticleUpsertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ArticleViewComponent = /** @class */ (function () {
        function ArticleViewComponent(store$$1) {
            this.store = store$$1;
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
                        template: "<div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center start\">\n  <button mat-mini-fab color=\"accent\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/article', (widget)?._id]\">\n    <mat-icon>edit</mat-icon>\n  </button>\n\n  <div fxFlex=\"90\" [froalaView]=\"(widget)?.Config.content\" align=\"right\" class=\"article\"></div>\n</div>",
                        styles: [":host{position:relative;display:block}.mat-mini-fab{position:absolute;top:-20px;right:-20px}.article{direction:rtl;text-align:right;padding-top:25px}"]
                    },] },
        ];
        /** @nocollapse */
        ArticleViewComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return ArticleViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LinksUpsertComponent = /** @class */ (function () {
        function LinksUpsertComponent(store$$1) {
            this.store = store$$1;
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
                var widget$$1 = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
                this.store.dispatch(new widget.UpsertWidgetStartAction(widget$$1));
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
                ( /** @type {?} */(this.configFormGroup.get("links"))).push(this._get_new_empty_link_item());
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
                var data = /** @type {?} */ (this.configFormGroup.get("links"));
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
                ( /** @type {?} */(this.configFormGroup.get("links"))).reset();
                links.forEach(function (link) {
                    /** @type {?} */
                    var _link = _this._get_new_empty_link_item();
                    _link.patchValue(link);
                    ( /** @type {?} */(_this.configFormGroup.get("links"))).push(_link);
                });
            };
        LinksUpsertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-links-upsert",
                        template: "<mat-card fxFlex>\n  <mat-card-header>\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n      <mat-icon>gradient</mat-icon>\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\n    </mat-card-title>\n    <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <span>\n        \u0646\u0627\u0645 \u0644\u06CC\u0646\u06A9 \u0645\u0648\u0631\u062F\u0646\u0638\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0631\u0627 \u06A9\u0627\u0645\u0644 \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n      </span>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <h3>\u0646\u0627\u0645 \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n      </mat-form-field>\n    </div>\n    <mat-divider></mat-divider>\n    <br>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n      <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addlink()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n    <div [formGroup]=\"configFormGroup\">\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('links')).controls; let idx = index\"\n        [formGroup]=\"ctrl\">\n        <div [formGroup]=\"ctrl\" fxLayout=\"row\" fxLayoutGap=\"25px\">\n          <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelink(idx)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <mat-form-field fxFlex>\n            <input type=\"text\" matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"url\">\n          </mat-form-field>\n          <mat-form-field fxFlex>\n            <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"label\">\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\n  </mat-card-actions>\n</mat-card>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        LinksUpsertComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        LinksUpsertComponent.propDecorators = {
            widget: [{ type: core.Input }]
        };
        return LinksUpsertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LinksViewComponent = /** @class */ (function () {
        function LinksViewComponent(store$$1) {
            this.store = store$$1;
        }
        Object.defineProperty(LinksViewComponent.prototype, "widget", {
            get: /**
             * @return {?}
             */ function () {
                return this._widget;
            },
            set: /**
             * @param {?} widget
             * @return {?}
             */ function (widget$$1) {
                debugger;
                widget$$1.Config.links.forEach(function (item) { return item.url = item.url.startsWith("www.") ? item.url = "http://" + item.url : item.url; });
                widget$$1.Config.links.forEach(function (item) { return item.isExternal = item.url.startsWith("http"); });
                this._widget = widget$$1;
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
                        template: "<div fxLayout=\"column\">\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <h3>\n      {{widget.name}}\n    </h3>\n  </div>\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let link of (widget)?.Config.links\" fxFlex=\"100\">\n      <mat-icon mat-list-icon>link</mat-icon>\n      <a fxLayout=\"row\" *ngIf=\"!link.isExternal\" fxFlex=\"grow\" [routerLink]=\"[link.url]\">\n        {{link.label}}\n      </a>\n      <a fxLayout=\"row\" *ngIf=\"link.isExternal\" target=\"_blank\" fxFlex=\"grow\" [href]=\"link.url\">\n        {{link.label}}\n      </a>\n    </mat-list-item>\n  </mat-list>\n</div>",
                        styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}"]
                    },] },
        ];
        /** @nocollapse */
        LinksViewComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return LinksViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ListViewComponent = /** @class */ (function () {
        function ListViewComponent(store$$1) {
            this.store = store$$1;
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
                        template: "<div fxLayout=\"column\">\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <h3>\n      {{widget.name}}\n    </h3>\n  </div>\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let item of (widget)?.Config.list\" fxFlex=\"100\">\n      <mat-icon class=\"large-icon\" mat-list-icon>account_box</mat-icon>\n      <h4 mat-line> {{item.title}}</h4>\n      <p mat-line> {{item.subtitle}} </p>\n      <p mat-line> {{item.description}} </p>\n    </mat-list-item>\n  </mat-list>\n</div>",
                        styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}.large-icon{font-size:50px!important;width:50px!important;height:50px!important;color:#999}mat-list{direction:rtl}"]
                    },] },
        ];
        /** @nocollapse */
        ListViewComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return ListViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ListUpsertComponent = /** @class */ (function () {
        function ListUpsertComponent(store$$1) {
            this.store = store$$1;
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
                var widget$$1 = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
                this.store.dispatch(new widget.UpsertWidgetStartAction(widget$$1));
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
                ( /** @type {?} */(this.configFormGroup.get("list"))).push(this._get_new_empty_list_item());
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
                var data = /** @type {?} */ (this.configFormGroup.get("list"));
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
                ( /** @type {?} */(this.configFormGroup.get("list"))).reset();
                list.forEach(function (item) {
                    /** @type {?} */
                    var _list = _this._get_new_empty_list_item();
                    _list.patchValue(item);
                    ( /** @type {?} */(_this.configFormGroup.get("list"))).push(_list);
                });
            };
        ListUpsertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-list-upsert",
                        template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n      <mat-icon>gradient</mat-icon>\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\n    </mat-card-title>\n    <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <span>\n        \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n      </span>\n    </mat-card-subtitle> -->\n  </mat-card-header>\n  <mat-card-content>\n    <h3>\u0646\u0627\u0645 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n      </mat-form-field>\n    </div>\n    <mat-divider></mat-divider>\n    <h3>\u0645\u062A\u0646 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\n    <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addItem()\">\n      <mat-icon>add</mat-icon>\n    </button>\n    <div [formGroup]=\"configFormGroup\">\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('list')).controls; let idx = index\" [formGroup]=\"ctrl\">\n        <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelist(idx)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n        <mat-form-field fxFlex>\n          <input type=\"text\" matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n        </mat-form-field>\n        <mat-form-field fxFlex>\n          <input type=\"text\" matInput placeholder=\"\u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646\" formControlName=\"subtitle\">\n        </mat-form-field>\n        <mat-form-field fxFlex>\n          <input type=\"text\" matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\u0627\u062A\" formControlName=\"description\">\n        </mat-form-field>\n      </div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\n  </mat-card-actions>\n</mat-card>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ListUpsertComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        ListUpsertComponent.propDecorators = {
            widget: [{ type: core.Input }]
        };
        return ListUpsertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgsWidgetTypesModule = /** @class */ (function () {
        function NgsWidgetTypesModule() {
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
                    },] },
        ];
        return NgsWidgetTypesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ArticleUpsertComponent = ArticleUpsertComponent;
    exports.ArticleViewComponent = ArticleViewComponent;
    exports.LinksUpsertComponent = LinksUpsertComponent;
    exports.LinksViewComponent = LinksViewComponent;
    exports.ListViewComponent = ListViewComponent;
    exports.ListUpsertComponent = ListUpsertComponent;
    exports.NgsWidgetTypesModule = NgsWidgetTypesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC10eXBlcy51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvbGlua3MvbGlua3Mtdmlldy9saW5rcy12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2xpc3QvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzL2xpYi9saXN0L2xpc3QtdXBzZXJ0L2xpc3QtdXBzZXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL3dpZGdldC10eXBlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiwgV2lkZ2V0TW9kZWwsIElXaWRnZXRVcHNlcnQgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuXHJcbmltcG9ydCB7IEFydGljbGVXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9hcnRpY2xlLXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1hcnRpY2xlLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICA8bWF0LWljb24+Z3JhZGllbnQ8L21hdC1pY29uPlxyXG4gICAgICA8c3Bhbj7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmMKnw5nCgcOYwrLDmcKIw5nChsOZwofDosKAwow8L3NwYW4+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPCEtLSA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHw6LCgMKMIMOZwoXDmcKIw5jCscOYwq8gw5nChsOYwrjDmMKxIMOYwrHDmMKnIMOYwqjDmMKxw5jCp8OYwrPDmMKnw5jCsyDDmcKGw5nCiMOYwrkgw5jCosOZwoYgw5jCp8ObwozDmMKsw5jCp8OYwq8gw5nChsOZwoXDmMKnw5vCjMObwozDmMKvIC4uLlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L21hdC1jYXJkLXN1YnRpdGxlPiAtLT5cclxuICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxoMz7DmcKGw5jCp8OZwoUgw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHPC9oMz5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ3aWRnZXRGb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICAgIDxoMz7DmcKFw5jCqsOZwoYgw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHPC9oMz5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXBcIj5cclxuICAgICAgPGRpdiBbZnJvYWxhRWRpdG9yXSBmb3JtQ29udHJvbE5hbWU9XCJjb250ZW50XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInVwc2VydCgpXCI+QWRkPC9idXR0b24+XHJcbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VXBzZXJ0PEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdEBJbnB1dCgpIHdpZGdldDogV2lkZ2V0TW9kZWw8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPjtcclxuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4oeyB0eXBlOiBcImFydGljbGVcIiB9KTtcclxuXHR9XHJcblxyXG5cdHVwc2VydCgpIHtcclxuXHRcdGNvbnN0IHdpZGdldCA9IHtcclxuXHRcdFx0Li4udGhpcy53aWRnZXQsXHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0Rm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRDb25maWc6IHRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24od2lkZ2V0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMud2lkZ2V0ICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLndpZGdldEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0KTtcclxuXHRcdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldC5Db25maWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0X2NyZWF0ZUZvcm1Hcm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGNvbnRlbnQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsLCBJV2lkZ2V0VmlldyB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgQXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2FydGljbGUtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWFydGljbGUtdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgc3RhcnRcIj5cclxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cImFjY2VudFwiICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBbcm91dGVyTGlua109XCJbJy93aWRnZXQvdXBzZXJ0L2FydGljbGUnLCAod2lkZ2V0KT8uX2lkXVwiPlxyXG4gICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG5cclxuICA8ZGl2IGZ4RmxleD1cIjkwXCIgW2Zyb2FsYVZpZXddPVwiKHdpZGdldCk/LkNvbmZpZy5jb250ZW50XCIgYWxpZ249XCJyaWdodFwiIGNsYXNzPVwiYXJ0aWNsZVwiPjwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrfS5tYXQtbWluaS1mYWJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yMHB4O3JpZ2h0Oi0yMHB4fS5hcnRpY2xle2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXRvcDoyNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPjtcclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rc1dpZGdldENvbmZpZ01vZGVsLCBMaW5rSXRlbSB9IGZyb20gXCIuLi9saW5rcy13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlua3MtdXBzZXJ0XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgZnhGbGV4PlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICA8bWF0LWljb24+Z3JhZGllbnQ8L21hdC1pY29uPlxyXG4gICAgICA8c3Bhbj7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmMKnw5nCgcOYwrLDmcKIw5nChsOZwofDosKAwow8L3NwYW4+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIMOZwobDmMKnw5nChSDDmcKEw5vCjMOZwobDmsKpIMOZwoXDmcKIw5jCscOYwq/DmcKGw5jCuMOYwrEgw5jCscOYwqcgw5nCiMOYwqfDmMKxw5jCryDDmsKpw5jCscOYwq/DmcKHIMOZwoggw5jCp8OYwrfDmcKEw5jCp8OYwrnDmMKnw5jCqiDDmMKxw5jCpyDDmsKpw5jCp8OZwoXDmcKEIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCryAuLi5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxoMz7DmcKGw5jCp8OZwoUgw5nCiMObwozDmMKsw5jCqjwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2lkZ2V0Rm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICA8YnI+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgIDxoMz7DmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqIMOZwojDm8KMw5jCrMOYwqo8L2gzPlxyXG4gICAgICA8YnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1mYWIgZnhGbGV4QWxpZ249XCJlbmRcIiAoY2xpY2spPVwiYWRkbGluaygpXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgKm5nRm9yPVwibGV0IGN0cmwgb2YgJGFueShjb25maWdGb3JtR3JvdXAuZ2V0KCdsaW5rcycpKS5jb250cm9sczsgbGV0IGlkeCA9IGluZGV4XCJcclxuICAgICAgICBbZm9ybUdyb3VwXT1cImN0cmxcIj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY3RybFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiAoY2xpY2spPVwicmVtb3ZlbGluayhpZHgpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqLDmMKvw5jCscOYwrNcIiBmb3JtQ29udHJvbE5hbWU9XCJ1cmxcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChVwiIGZvcm1Db250cm9sTmFtZT1cImxhYmVsXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtzVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VXBzZXJ0PExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHRASW5wdXQoKSB3aWRnZXQ6IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHdpZGdldEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NyZWF0ZUZvcm1Hcm91cCgpO1xyXG5cdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD4oeyB0eXBlOiBcImxpbmtzXCIgfSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoKSB7XHJcblx0XHRjb25zdCB3aWRnZXQgPSB7XHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0LFxyXG5cdFx0XHQuLi50aGlzLndpZGdldEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Q29uZmlnOiB0aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uKHdpZGdldCkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLndpZGdldCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldCk7XHJcblx0XHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQuQ29uZmlnKTtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZV9saW5rcyh0aGlzLndpZGdldC5Db25maWcubGlua3MpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogdmlldyBtZXRob2RzXHJcblx0ICovXHJcblx0YWRkbGluaygpIHtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2godGhpcy5fZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKSk7XHJcblx0fVxyXG5cdHJlbW92ZWxpbmsobGluaykge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5O1xyXG5cdFx0aWYgKGRhdGEuY29udHJvbHMubGVuZ3RoID4gLTEpIHtcclxuXHRcdFx0ZGF0YS5yZW1vdmVBdChsaW5rKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHJcblx0X2NyZWF0ZUZvcm1Hcm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGxpbmtzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHVybDogbmV3IEZvcm1Db250cm9sKFwiL1wiKSxcclxuXHRcdFx0bGFiZWw6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF91cGRhdGVfbGlua3MobGlua3M6IExpbmtJdGVtW10pIHtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnJlc2V0KCk7XHJcblx0XHRsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcblx0XHRcdGNvbnN0IF9saW5rID0gdGhpcy5fZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKTtcclxuXHRcdFx0X2xpbmsucGF0Y2hWYWx1ZShsaW5rKTtcclxuXHRcdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChfbGluayk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCwgSVdpZGdldFZpZXcgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IExpbmtzV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiIGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmRcIj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBbcm91dGVyTGlua109XCJbJy93aWRnZXQvdXBzZXJ0L2xpbmtzJywgKHdpZGdldCk/Ll9pZF1cIj5cclxuICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8aDM+XHJcbiAgICAgIHt7d2lkZ2V0Lm5hbWV9fVxyXG4gICAgPC9oMz5cclxuICA8L2Rpdj5cclxuICA8bWF0LWxpc3QgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgIDxtYXQtbGlzdC1pdGVtIGZ4TGF5b3V0PVwiY29sdW1uXCIgKm5nRm9yPVwibGV0IGxpbmsgb2YgKHdpZGdldCk/LkNvbmZpZy5saW5rc1wiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5saW5rPC9tYXQtaWNvbj5cclxuICAgICAgPGEgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cIiFsaW5rLmlzRXh0ZXJuYWxcIiBmeEZsZXg9XCJncm93XCIgW3JvdXRlckxpbmtdPVwiW2xpbmsudXJsXVwiPlxyXG4gICAgICAgIHt7bGluay5sYWJlbH19XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cImxpbmsuaXNFeHRlcm5hbFwiIHRhcmdldD1cIl9ibGFua1wiIGZ4RmxleD1cImdyb3dcIiBbaHJlZl09XCJsaW5rLnVybFwiPlxyXG4gICAgICAgIHt7bGluay5sYWJlbH19XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICA8L21hdC1saXN0PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmJsb2NrfTpob3N0OmhvdmVyIC5hY3Rpb25ze29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9bWF0LWxpc3QgYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWN0aW9uc3t0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbn0uYWN0aW9ucyBtYXQtaWNvbntjb2xvcjojMTIxMjEyfWgze3BhZGRpbmctcmlnaHQ6MjBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua3NWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VmlldzxMaW5rc1dpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG5cdF93aWRnZXQ6IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHNldCB3aWRnZXQod2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPikge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR3aWRnZXQuQ29uZmlnLmxpbmtzLmZvckVhY2goaXRlbSA9PiBpdGVtLnVybCA9IGl0ZW0udXJsLnN0YXJ0c1dpdGgoXCJ3d3cuXCIpID8gaXRlbS51cmwgPSBcImh0dHA6Ly9cIiArIGl0ZW0udXJsIDogaXRlbS51cmwpO1xyXG5cdFx0d2lkZ2V0LkNvbmZpZy5saW5rcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5pc0V4dGVybmFsID0gaXRlbS51cmwuc3RhcnRzV2l0aChcImh0dHBcIikpO1xyXG5cdFx0dGhpcy5fd2lkZ2V0ID0gd2lkZ2V0O1xyXG5cdH1cclxuXHRnZXQgd2lkZ2V0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldDtcclxuXHR9XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCwgSVdpZGdldFZpZXcgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IExpc3RXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9saXN0LXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1saXN0LXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiIGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmRcIj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBbcm91dGVyTGlua109XCJbJy93aWRnZXQvdXBzZXJ0L2xpbmtzJywgKHdpZGdldCk/Ll9pZF1cIj5cclxuICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8aDM+XHJcbiAgICAgIHt7d2lkZ2V0Lm5hbWV9fVxyXG4gICAgPC9oMz5cclxuICA8L2Rpdj5cclxuICA8bWF0LWxpc3QgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgIDxtYXQtbGlzdC1pdGVtIGZ4TGF5b3V0PVwiY29sdW1uXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHdpZGdldCk/LkNvbmZpZy5saXN0XCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImxhcmdlLWljb25cIiBtYXQtbGlzdC1pY29uPmFjY291bnRfYm94PC9tYXQtaWNvbj5cclxuICAgICAgPGg0IG1hdC1saW5lPiB7e2l0ZW0udGl0bGV9fTwvaDQ+XHJcbiAgICAgIDxwIG1hdC1saW5lPiB7e2l0ZW0uc3VidGl0bGV9fSA8L3A+XHJcbiAgICAgIDxwIG1hdC1saW5lPiB7e2l0ZW0uZGVzY3JpcHRpb259fSA8L3A+XHJcbiAgICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgPC9tYXQtbGlzdD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpibG9ja306aG9zdDpob3ZlciAuYWN0aW9uc3tvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlfW1hdC1saXN0IGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmFjdGlvbnN7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlLWluLW91dDtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW59LmFjdGlvbnMgbWF0LWljb257Y29sb3I6IzEyMTIxMn1oM3twYWRkaW5nLXJpZ2h0OjIwcHh9LmxhcmdlLWljb257Zm9udC1zaXplOjUwcHghaW1wb3J0YW50O3dpZHRoOjUwcHghaW1wb3J0YW50O2hlaWdodDo1MHB4IWltcG9ydGFudDtjb2xvcjojOTk5fW1hdC1saXN0e2RpcmVjdGlvbjpydGx9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VmlldzxMaXN0V2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPExpc3RXaWRnZXRDb25maWdNb2RlbD47XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiwgV2lkZ2V0TW9kZWwsIElXaWRnZXRVcHNlcnQgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuXHJcbmltcG9ydCB7IExpc3RXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9saXN0LXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vbGlzdC13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlzdC11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgPG1hdC1pY29uPmdyYWRpZW50PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHw6LCgMKMPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwhLS0gPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIMOYwqfDmcKBw5jCssOZwojDmcKGw5nCh8OiwoDCjCDDmcKFw5nCiMOYwrHDmMKvIMOZwobDmMK4w5jCsSDDmMKxw5jCpyDDmMKow5jCscOYwqfDmMKzw5jCp8OYwrMgw5nChsOZwojDmMK5IMOYwqLDmcKGIMOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCryAuLi5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT4gLS0+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8aDM+w5nChsOYwqfDmcKFIMOYwqfDmcKBw5jCssOZwojDmcKGw5nChzwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2lkZ2V0Rm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICA8aDM+w5nChcOYwqrDmcKGIMOYwqfDmcKBw5jCssOZwojDmcKGw5nChzwvaDM+XHJcbiAgICA8YnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1mYWIgZnhGbGV4QWxpZ249XCJlbmRcIiAoY2xpY2spPVwiYWRkSXRlbSgpXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgKm5nRm9yPVwibGV0IGN0cmwgb2YgJGFueShjb25maWdGb3JtR3JvdXAuZ2V0KCdsaXN0JykpLmNvbnRyb2xzOyBsZXQgaWR4ID0gaW5kZXhcIiBbZm9ybUdyb3VwXT1cImN0cmxcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiAoY2xpY2spPVwicmVtb3ZlbGlzdChpZHgpXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKyw5vCjMOYwrHDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRVcHNlcnQ8TGlzdFdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaXN0V2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHdpZGdldEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NyZWF0ZUZvcm1Hcm91cCgpO1xyXG5cdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWw8TGlzdFdpZGdldENvbmZpZ01vZGVsPih7IHR5cGU6IFwibGlzdFwiIH0pO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZV9saXN0KHRoaXMud2lkZ2V0LkNvbmZpZy5saXN0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXkpLnB1c2godGhpcy5fZ2V0X25ld19lbXB0eV9saXN0X2l0ZW0oKSk7XHJcblx0fVxyXG5cdHJlbW92ZWxpc3QobGlzdCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXk7XHJcblx0XHRpZiAoZGF0YS5jb250cm9scy5sZW5ndGggPiAtMSkge1xyXG5cdFx0XHRkYXRhLnJlbW92ZUF0KGxpc3QpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9XHJcblx0fVxyXG5cdF9jcmVhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRsaXN0OiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X2dldF9uZXdfZW1wdHlfbGlzdF9pdGVtKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRzdWJ0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF91cGRhdGVfbGlzdChsaXN0OiBMaXN0SXRlbVtdKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXkpLnJlc2V0KCk7XHJcblx0XHRsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0Y29uc3QgX2xpc3QgPSB0aGlzLl9nZXRfbmV3X2VtcHR5X2xpc3RfaXRlbSgpO1xyXG5cdFx0XHRfbGlzdC5wYXRjaFZhbHVlKGl0ZW0pO1xyXG5cdFx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXkpLnB1c2goX2xpc3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGcm9hbGFFZGl0b3JNb2R1bGUsIEZyb2FsYVZpZXdNb2R1bGUgfSBmcm9tIFwiYW5ndWxhci1mcm9hbGEtd3lzaXd5Z1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcblxyXG4vKipcclxuICogYXJ0aWNsZVxyXG4gKi9cclxuaW1wb3J0IHsgQXJ0aWNsZVVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFydGljbGVWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudFwiO1xyXG4vKipcclxuICogbGlua3NcclxuICovXHJcbmltcG9ydCB7IExpbmtzVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlua3MvbGlua3MtdXBzZXJ0L2xpbmtzLXVwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGlua3NWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlua3MvbGlua3Mtdmlldy9saW5rcy12aWV3LmNvbXBvbmVudFwiO1xyXG4vKipcclxuICogbGlzdHNcclxuICovXHJcbmltcG9ydCB7IExpc3RVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3QtdXBzZXJ0L2xpc3QtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2xpc3QvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdEZyb2FsYUVkaXRvck1vZHVsZS5mb3JSb290KCksXHJcblx0XHRGcm9hbGFWaWV3TW9kdWxlLmZvclJvb3QoKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBcnRpY2xlVXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0QXJ0aWNsZVZpZXdDb21wb25lbnQsXHJcblx0XHRMaW5rc1Vwc2VydENvbXBvbmVudCxcclxuXHRcdExpbmtzVmlld0NvbXBvbmVudCxcclxuXHRcdExpc3RVcHNlcnRDb21wb25lbnQsXHJcblx0XHRMaXN0Vmlld0NvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRBcnRpY2xlVXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0QXJ0aWNsZVZpZXdDb21wb25lbnQsXHJcblx0XHRMaW5rc1Vwc2VydENvbXBvbmVudCxcclxuXHRcdExpbmtzVmlld0NvbXBvbmVudCxcclxuXHRcdExpc3RVcHNlcnRDb21wb25lbnQsXHJcblx0XHRMaXN0Vmlld0NvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW0FydGljbGVWaWV3Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzV2lkZ2V0VHlwZXNNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJzdG9yZSIsIldpZGdldE1vZGVsIiwid2lkZ2V0IiwiVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24iLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIkNvbXBvbmVudCIsIlN0b3JlIiwiSW5wdXQiLCJnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUiLCJGb3JtQXJyYXkiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdERpdmlkZXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJNYXRTbGlkZVRvZ2dsZU1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIkZyb2FsYUVkaXRvck1vZHVsZSIsIkZyb2FsYVZpZXdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMs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