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
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ArticleUpsertComponent = (function () {
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
                var /** @type {?} */ widget$$1 = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
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
                        template: "<mat-card>\n  <mat-card-content>\n      <h3>\u0645\u0634\u062E\u0635\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"name\">\n      </mat-form-field>\n  </div>\n  <mat-divider></mat-divider>\n  <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"configFormGroup\">\n        <div [froalaEditor] formControlName=\"content\"></div>\n    </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"primary\" (click)=\"upsert()\">Add</button>\n    </mat-card-actions>\n  </mat-card>",
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
     * @suppress {checkTypes} checked by tsc
     */
    var ArticleViewComponent = (function () {
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
                        template: "<button mat-mini-fab color=\"accent\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/article', (widget)?._id]\">\n  <mat-icon>edit</mat-icon>\n</button>\n\n<div [froalaView]=\"(widget)?.Config.content\"></div>\n",
                        styles: [":host{position:relative;display:block}.mat-mini-fab{position:absolute;top:-20px;right:-20px}"]
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
     * @suppress {checkTypes} checked by tsc
     */
    var LinksUpsertComponent = (function () {
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
                var /** @type {?} */ widget$$1 = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
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
                ((this.configFormGroup.get("links"))).push(this._get_new_empty_link_item());
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
                ((this.configFormGroup.get("links"))).reset();
                links.forEach(function (link) {
                    var /** @type {?} */ _link = _this._get_new_empty_link_item();
                    _link.patchValue(link);
                    ((_this.configFormGroup.get("links"))).push(_link);
                });
            };
        LinksUpsertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-links-upsert",
                        template: "<mat-card fxFlex fxLayout=\"column\">\n  <mat-card-content>\n      <h3>\u0645\u0634\u062E\u0635\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"name\">\n      </mat-form-field>\n  </div>\n  <mat-divider></mat-divider>\n  <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"configFormGroup\">\n      <button color=\"primary\" mat-raised-button (click)=\"addlink()\">\n        \u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u0644\u06CC\u0646\u06A9\n      </button>\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('links')).controls\" [formGroup]=\"ctrl\">\n        <div [formGroup]=\"ctrl\" fxLayout=\"row\" fxLayoutGap=\"25px\">\n          <button mat-icon-button fxFlex=\"nogrow\">\n              <mat-icon>delete</mat-icon>\n          </button>\n        <mat-form-field fxFlex>\n          <input type=\"text\" matInput placeholder=\"\u0622\u062F\u0631\u0633\"  formControlName=\"url\">\n        </mat-form-field>          \n        <mat-form-field fxFlex >\n          <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"label\">\n        </mat-form-field>          \n    </div>\n    </div>\n    </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\n    </mat-card-actions>\n  </mat-card>",
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
     * @suppress {checkTypes} checked by tsc
     */
    var LinksViewComponent = (function () {
        function LinksViewComponent(store$$1) {
            this.store = store$$1;
        }
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
                        template: "<div fxLayout=\"column\">\n    <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n      <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\n        <mat-icon>edit</mat-icon>\n      </button>\n    </div>\n    <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <h3>\n        {{widget.name}}\n    </h3>\n    </div>\n    <mat-list fxLayout=\"column\" fxFlex=\"100\" >\n        <mat-list-item fxLayout=\"column\" *ngFor=\"let link of (widget)?.Config.links\" fxFlex=\"100\">\n          <mat-icon mat-list-icon>link</mat-icon>\n          <a fxLayout=\"row\" fxFlex=\"grow\" [routerLink]=\"[link.url]\">\n            {{link.label}}\n          </a>\n        </mat-list-item>\n    </mat-list>\n</div>",
                        styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}"]
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
     * @suppress {checkTypes} checked by tsc
     */
    var NgsWidgetTypesModule = (function () {
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
                            // EditorModule
                            angularFroalaWysiwyg.FroalaEditorModule.forRoot(),
                            angularFroalaWysiwyg.FroalaViewModule.forRoot()
                        ],
                        declarations: [ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent],
                        entryComponents: [ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent],
                        exports: [ArticleViewComponent]
                    },] },
        ];
        return NgsWidgetTypesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ArticleUpsertComponent = ArticleUpsertComponent;
    exports.ArticleViewComponent = ArticleViewComponent;
    exports.LinksUpsertComponent = LinksUpsertComponent;
    exports.LinksViewComponent = LinksViewComponent;
    exports.NgsWidgetTypesModule = NgsWidgetTypesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC10eXBlcy51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvbGlua3MvbGlua3Mtdmlldy9saW5rcy12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL3dpZGdldC10eXBlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiwgV2lkZ2V0TW9kZWwsIElXaWRnZXRVcHNlcnQgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuXHJcbmltcG9ydCB7IEFydGljbGVXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9hcnRpY2xlLXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1hcnRpY2xlLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8aDM+w5nChcOYwrTDmMKuw5jCtcOYwqfDmMKqIMOZwojDm8KMw5jCrMOYwqo8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIndpZGdldEZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiAgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZGl2PlxyXG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gIDxoMz7DmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqIMOZwojDm8KMw5jCrMOYwqo8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxkaXYgW2Zyb2FsYUVkaXRvcl0gZm9ybUNvbnRyb2xOYW1lPVwiY29udGVudFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJ1cHNlcnQoKVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFydGljbGVVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRVcHNlcnQ8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHdpZGdldEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NyZWF0ZUZvcm1Hcm91cCgpO1xyXG5cdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWw8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPih7IHR5cGU6IFwiYXJ0aWNsZVwiIH0pO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfY3JlYXRlRm9ybUdyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Y29udGVudDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vYXJ0aWNsZS13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtYXJ0aWNsZS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cImFjY2VudFwiICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBbcm91dGVyTGlua109XCJbJy93aWRnZXQvdXBzZXJ0L2FydGljbGUnLCAod2lkZ2V0KT8uX2lkXVwiPlxyXG4gIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuPC9idXR0b24+XHJcblxyXG48ZGl2IFtmcm9hbGFWaWV3XT1cIih3aWRnZXQpPy5Db25maWcuY29udGVudFwiPjwvZGl2PlxyXG5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrfS5tYXQtbWluaS1mYWJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yMHB4O3JpZ2h0Oi0yMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPjtcclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rc1dpZGdldENvbmZpZ01vZGVsLCBMaW5rSXRlbSB9IGZyb20gXCIuLi9saW5rcy13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlua3MtdXBzZXJ0XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgZnhGbGV4IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxoMz7DmcKFw5jCtMOYwq7DmMK1w5jCp8OYwqogw5nCiMObwozDmMKsw5jCqjwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2lkZ2V0Rm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChVwiICBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgPGgzPsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqogw5nCiMObwozDmMKsw5jCqjwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgIDxidXR0b24gY29sb3I9XCJwcmltYXJ5XCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImFkZGxpbmsoKVwiPlxyXG4gICAgICAgIMOYwqfDmMK2w5jCp8OZwoHDmcKHIMOawqnDmMKxw5jCr8OZwoYgw5nChMObwozDmcKGw5rCqVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiAqbmdGb3I9XCJsZXQgY3RybCBvZiAkYW55KGNvbmZpZ0Zvcm1Hcm91cC5nZXQoJ2xpbmtzJykpLmNvbnRyb2xzXCIgW2Zvcm1Hcm91cF09XCJjdHJsXCI+XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImN0cmxcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKiw5jCr8OYwrHDmMKzXCIgIGZvcm1Db250cm9sTmFtZT1cInVybFwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+ICAgICAgICAgIFxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXggPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiAgZm9ybUNvbnRyb2xOYW1lPVwibGFiZWxcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPiAgICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInVwc2VydCgpXCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua3NVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRVcHNlcnQ8TGlua3NXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdEBJbnB1dCgpIHdpZGdldDogV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD47XHJcblx0d2lkZ2V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY3JlYXRlRm9ybUdyb3VwKCk7XHJcblx0XHR0aGlzLndpZGdldCA9IG5ldyBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPih7IHR5cGU6IFwibGlua3NcIiB9KTtcclxuXHR9XHJcblxyXG5cdHVwc2VydCgpIHtcclxuXHRcdGNvbnN0IHdpZGdldCA9IHtcclxuXHRcdFx0Li4udGhpcy53aWRnZXQsXHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0Rm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRDb25maWc6IHRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24od2lkZ2V0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMud2lkZ2V0ICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLndpZGdldEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0KTtcclxuXHRcdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldC5Db25maWcpO1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5fdXBkYXRlX2xpbmtzKHRoaXMud2lkZ2V0LkNvbmZpZy5saW5rcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiB2aWV3IG1ldGhvZHNcclxuXHQgKi9cclxuXHRhZGRsaW5rKCkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaCh0aGlzLl9nZXRfbmV3X2VtcHR5X2xpbmtfaXRlbSgpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cclxuXHRfY3JlYXRlRm9ybUdyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bGlua3M6IG5ldyBGb3JtQXJyYXkoW10pXHJcblx0XHR9KTtcclxuXHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9nZXRfbmV3X2VtcHR5X2xpbmtfaXRlbSgpIHtcclxuXHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0dXJsOiBuZXcgRm9ybUNvbnRyb2woXCIvXCIpLFxyXG5cdFx0XHRsYWJlbDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3VwZGF0ZV9saW5rcyhsaW5rczogTGlua0l0ZW1bXSkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucmVzZXQoKTtcclxuXHRcdGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuXHRcdFx0Y29uc3QgX2xpbmsgPSB0aGlzLl9nZXRfbmV3X2VtcHR5X2xpbmtfaXRlbSgpO1xyXG5cdFx0XHRfbGluay5wYXRjaFZhbHVlKGxpbmspO1xyXG5cdFx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKF9saW5rKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsLCBJV2lkZ2V0VmlldyB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgTGlua3NXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9saW5rcy13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlua3Mtdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBbcm91dGVyTGlua109XCJbJy93aWRnZXQvdXBzZXJ0L2xpbmtzJywgKHdpZGdldCk/Ll9pZF1cIj5cclxuICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmRcIj5cclxuICAgIDxoMz5cclxuICAgICAgICB7e3dpZGdldC5uYW1lfX1cclxuICAgIDwvaDM+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxtYXQtbGlzdCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjEwMFwiID5cclxuICAgICAgICA8bWF0LWxpc3QtaXRlbSBmeExheW91dD1cImNvbHVtblwiICpuZ0Zvcj1cImxldCBsaW5rIG9mICh3aWRnZXQpPy5Db25maWcubGlua3NcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPmxpbms8L21hdC1pY29uPlxyXG4gICAgICAgICAgPGEgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXg9XCJncm93XCIgW3JvdXRlckxpbmtdPVwiW2xpbmsudXJsXVwiPlxyXG4gICAgICAgICAgICB7e2xpbmsubGFiZWx9fVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICAgIDwvbWF0LWxpc3Q+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlO2Rpc3BsYXk6YmxvY2t9Omhvc3Q6aG92ZXIgLmFjdGlvbnN7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZX1tYXQtbGlzdCBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5hY3Rpb25ze3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufS5hY3Rpb25zIG1hdC1pY29ue2NvbG9yOiMxMjEyMTJ9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtzVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8TGlua3NXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZyb2FsYUVkaXRvck1vZHVsZSwgRnJvYWxhVmlld01vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWZyb2FsYS13eXNpd3lnXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuXHJcbi8qKlxyXG4gKiBhcnRpY2xlXHJcbiAqL1xyXG5pbXBvcnQgeyBBcnRpY2xlVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vYXJ0aWNsZS9hcnRpY2xlLXVwc2VydC9hcnRpY2xlLXVwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9hcnRpY2xlL2FydGljbGUtdmlldy9hcnRpY2xlLXZpZXcuY29tcG9uZW50XCI7XHJcbi8qKlxyXG4gKiBsaW5rc1xyXG4gKi9cclxuaW1wb3J0IHsgTGlua3NVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi9saW5rcy9saW5rcy11cHNlcnQvbGlua3MtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaW5rc1ZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9saW5rcy9saW5rcy12aWV3L2xpbmtzLXZpZXcuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHQvLyBFZGl0b3JNb2R1bGVcclxuXHRcdEZyb2FsYUVkaXRvck1vZHVsZS5mb3JSb290KCksXHJcblx0XHRGcm9hbGFWaWV3TW9kdWxlLmZvclJvb3QoKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIEFydGljbGVVcHNlcnRDb21wb25lbnQsIEFydGljbGVWaWV3Q29tcG9uZW50LCBMaW5rc1Vwc2VydENvbXBvbmVudCwgTGlua3NWaWV3Q29tcG9uZW50IF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIEFydGljbGVVcHNlcnRDb21wb25lbnQsIEFydGljbGVWaWV3Q29tcG9uZW50LCBMaW5rc1Vwc2VydENvbXBvbmVudCwgTGlua3NWaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBBcnRpY2xlVmlld0NvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRUeXBlc01vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsic3RvcmUiLCJXaWRnZXRNb2RlbCIsIndpZGdldCIsIlVwc2VydFdpZGdldFN0YXJ0QWN0aW9uIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJDb21wb25lbnQiLCJTdG9yZSIsIklucHV0IiwiZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIiwiRm9ybUFycmF5IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJNYXREaXZpZGVyTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdFRhYmxlTW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJGcm9h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