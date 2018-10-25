import { __assign } from 'tslib';
import { Component, Input, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UpsertWidgetStartAction, WidgetModel } from '@soushians/widget';
import { getFrontendAuthenticationState } from '@soushians/frontend-authentication';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatListModule } from '@angular/material';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ArticleUpsertComponent = /** @class */ (function () {
    function ArticleUpsertComponent(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "article" });
    }
    /**
     * @return {?}
     */
    ArticleUpsertComponent.prototype.upsert = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widget = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
        this.store.dispatch(new UpsertWidgetStartAction(widget));
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
        this.configFormGroup = new FormGroup({
            content: new FormControl("")
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    };
    ArticleUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-article-upsert",
                    template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n      <mat-icon>gradient</mat-icon>\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\n    </mat-card-title>\n    <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <span>\n        \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n      </span>\n    </mat-card-subtitle> -->\n  </mat-card-header>\n  <mat-card-content>\n    <h3>\u0646\u0627\u0645 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n      </mat-form-field>\n    </div>\n    <mat-divider></mat-divider>\n    <h3>\u0645\u062A\u0646 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\n    <div [formGroup]=\"configFormGroup\">\n      <div [froalaEditor] formControlName=\"content\"></div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button color=\"primary\" (click)=\"upsert()\">Add</button>\n  </mat-card-actions>\n</mat-card>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ArticleUpsertComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    ArticleUpsertComponent.propDecorators = {
        widget: [{ type: Input }]
    };
    return ArticleUpsertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    };
    ArticleViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-article-view",
                    template: "<div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center start\">\n  <button mat-mini-fab color=\"accent\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/article', (widget)?._id]\">\n    <mat-icon>edit</mat-icon>\n  </button>\n\n  <div fxFlex=\"90\" [froalaView]=\"(widget)?.Config.content\" align=\"right\" class=\"article\"></div>\n</div>",
                    styles: [":host{position:relative;display:block}.mat-mini-fab{position:absolute;top:-20px;right:-20px}.article{direction:rtl;text-align:right;padding-top:25px}"]
                },] },
    ];
    /** @nocollapse */
    ArticleViewComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ArticleViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LinksUpsertComponent = /** @class */ (function () {
    function LinksUpsertComponent(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "links" });
    }
    /**
     * @return {?}
     */
    LinksUpsertComponent.prototype.upsert = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widget = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
        this.store.dispatch(new UpsertWidgetStartAction(widget));
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
        (/** @type {?} */ (this.configFormGroup.get("links"))).push(this._get_new_empty_link_item());
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
        this.configFormGroup = new FormGroup({
            links: new FormArray([])
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    };
    /**
     * @return {?}
     */
    LinksUpsertComponent.prototype._get_new_empty_link_item = /**
     * @return {?}
     */
    function () {
        return new FormGroup({
            url: new FormControl("/"),
            label: new FormControl("")
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
        (/** @type {?} */ (this.configFormGroup.get("links"))).reset();
        links.forEach(function (link) {
            /** @type {?} */
            var _link = _this._get_new_empty_link_item();
            _link.patchValue(link);
            (/** @type {?} */ (_this.configFormGroup.get("links"))).push(_link);
        });
    };
    LinksUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-links-upsert",
                    template: "<mat-card fxFlex>\n  <mat-card-header>\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n      <mat-icon>gradient</mat-icon>\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\n    </mat-card-title>\n    <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <span>\n        \u0646\u0627\u0645 \u0644\u06CC\u0646\u06A9 \u0645\u0648\u0631\u062F\u0646\u0638\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0631\u0627 \u06A9\u0627\u0645\u0644 \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n      </span>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <h3>\u0646\u0627\u0645 \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n      </mat-form-field>\n    </div>\n    <mat-divider></mat-divider>\n    <br>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n      <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addlink()\">\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n    <div [formGroup]=\"configFormGroup\">\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('links')).controls; let idx = index\"\n        [formGroup]=\"ctrl\">\n        <div [formGroup]=\"ctrl\" fxLayout=\"row\" fxLayoutGap=\"25px\">\n          <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelink(idx)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <mat-form-field fxFlex>\n            <input type=\"text\" matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"url\">\n          </mat-form-field>\n          <mat-form-field fxFlex>\n            <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"label\">\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\n  </mat-card-actions>\n</mat-card>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    LinksUpsertComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    LinksUpsertComponent.propDecorators = {
        widget: [{ type: Input }]
    };
    return LinksUpsertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            widget.Config.links.forEach(function (item) { return item.url = item.url.startsWith("www.") ? item.url = "http://" + item.url : item.url; });
            widget.Config.links.forEach(function (item) { return item.isExternal = item.url.startsWith("http"); });
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
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    };
    LinksViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-links-view",
                    template: "<div fxLayout=\"column\">\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <h3>\n      {{widget.name}}\n    </h3>\n  </div>\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let link of (widget)?.Config.links\" fxFlex=\"100\">\n      <mat-icon mat-list-icon>link</mat-icon>\n      <a fxLayout=\"row\" *ngIf=\"!link.isExternal\" fxFlex=\"grow\" [routerLink]=\"[link.url]\">\n        {{link.label}}\n      </a>\n      <a fxLayout=\"row\" *ngIf=\"link.isExternal\" target=\"_blank\" fxFlex=\"grow\" [href]=\"link.url\">\n        {{link.label}}\n      </a>\n    </mat-list-item>\n  </mat-list>\n</div>",
                    styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}"]
                },] },
    ];
    /** @nocollapse */
    LinksViewComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return LinksViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    };
    ListViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-list-view",
                    template: "<div fxLayout=\"column\">\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <h3>\n      {{widget.name}}\n    </h3>\n  </div>\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let item of (widget)?.Config.list\" fxFlex=\"100\">\n      <mat-icon class=\"large-icon\" mat-list-icon>account_box</mat-icon>\n      <h4 mat-line> {{item.title}}</h4>\n      <p mat-line> {{item.subtitle}} </p>\n      <p mat-line> {{item.description}} </p>\n    </mat-list-item>\n  </mat-list>\n</div>",
                    styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}.large-icon{font-size:50px!important;width:50px!important;height:50px!important;color:#999}mat-list{direction:rtl}"]
                },] },
    ];
    /** @nocollapse */
    ListViewComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ListViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ListUpsertComponent = /** @class */ (function () {
    function ListUpsertComponent(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "list" });
    }
    /**
     * @return {?}
     */
    ListUpsertComponent.prototype.upsert = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widget = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
        this.store.dispatch(new UpsertWidgetStartAction(widget));
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
        (/** @type {?} */ (this.configFormGroup.get("list"))).push(this._get_new_empty_list_item());
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
        this.configFormGroup = new FormGroup({
            list: new FormArray([])
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    };
    /**
     * @return {?}
     */
    ListUpsertComponent.prototype._get_new_empty_list_item = /**
     * @return {?}
     */
    function () {
        return new FormGroup({
            title: new FormControl(""),
            subtitle: new FormControl(""),
            description: new FormControl("")
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
        (/** @type {?} */ (this.configFormGroup.get("list"))).reset();
        list.forEach(function (item) {
            /** @type {?} */
            var _list = _this._get_new_empty_list_item();
            _list.patchValue(item);
            (/** @type {?} */ (_this.configFormGroup.get("list"))).push(_list);
        });
    };
    ListUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-list-upsert",
                    template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n      <mat-icon>gradient</mat-icon>\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\n    </mat-card-title>\n    <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <span>\n        \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n      </span>\n    </mat-card-subtitle> -->\n  </mat-card-header>\n  <mat-card-content>\n    <h3>\u0646\u0627\u0645 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n      </mat-form-field>\n    </div>\n    <mat-divider></mat-divider>\n    <h3>\u0645\u062A\u0646 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\n    <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addItem()\">\n      <mat-icon>add</mat-icon>\n    </button>\n    <div [formGroup]=\"configFormGroup\">\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('list')).controls; let idx = index\" [formGroup]=\"ctrl\">\n        <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelist(idx)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n        <mat-form-field fxFlex>\n          <input type=\"text\" matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n        </mat-form-field>\n        <mat-form-field fxFlex>\n          <input type=\"text\" matInput placeholder=\"\u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646\" formControlName=\"subtitle\">\n        </mat-form-field>\n        <mat-form-field fxFlex>\n          <input type=\"text\" matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\u0627\u062A\" formControlName=\"description\">\n        </mat-form-field>\n      </div>\n    </div>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\n  </mat-card-actions>\n</mat-card>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ListUpsertComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    ListUpsertComponent.propDecorators = {
        widget: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        MatExpansionModule,
                        MatSnackBarModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatSelectModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatTabsModule,
                        MatRadioModule,
                        MatDividerModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatSlideToggleModule,
                        MatDividerModule,
                        MatCheckboxModule,
                        MatTableModule,
                        MatListModule,
                        FlexLayoutModule,
                        FroalaEditorModule.forRoot(),
                        FroalaViewModule.forRoot()
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

export { ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent, ListViewComponent, ListUpsertComponent, NgsWidgetTypesModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC10eXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvbGlua3MvbGlua3Mtdmlldy9saW5rcy12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2xpc3QvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzL2xpYi9saXN0L2xpc3QtdXBzZXJ0L2xpc3QtdXBzZXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL3dpZGdldC10eXBlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vYXJ0aWNsZS13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtYXJ0aWNsZS11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgPG1hdC1pY29uPmdyYWRpZW50PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHw6LCgMKMPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwhLS0gPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIMOYwqfDmcKBw5jCssOZwojDmcKGw5nCh8OiwoDCjCDDmcKFw5nCiMOYwrHDmMKvIMOZwobDmMK4w5jCsSDDmMKxw5jCpyDDmMKow5jCscOYwqfDmMKzw5jCp8OYwrMgw5nChsOZwojDmMK5IMOYwqLDmcKGIMOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCryAuLi5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT4gLS0+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8aDM+w5nChsOYwqfDmcKFIMOYwqfDmcKBw5jCssOZwojDmcKGw5nChzwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2lkZ2V0Rm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICA8aDM+w5nChcOYwqrDmcKGIMOYwqfDmcKBw5jCssOZwojDmcKGw5nChzwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgIDxkaXYgW2Zyb2FsYUVkaXRvcl0gZm9ybUNvbnRyb2xOYW1lPVwiY29udGVudFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJ1cHNlcnQoKVwiPkFkZDwvYnV0dG9uPlxyXG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFVwc2VydDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHRASW5wdXQoKSB3aWRnZXQ6IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD47XHJcblx0d2lkZ2V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY3JlYXRlRm9ybUdyb3VwKCk7XHJcblx0XHR0aGlzLndpZGdldCA9IG5ldyBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+KHsgdHlwZTogXCJhcnRpY2xlXCIgfSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoKSB7XHJcblx0XHRjb25zdCB3aWRnZXQgPSB7XHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0LFxyXG5cdFx0XHQuLi50aGlzLndpZGdldEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Q29uZmlnOiB0aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uKHdpZGdldCkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLndpZGdldCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldCk7XHJcblx0XHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQuQ29uZmlnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdF9jcmVhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRjb250ZW50OiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCwgSVdpZGdldFZpZXcgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEFydGljbGVXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9hcnRpY2xlLXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1hcnRpY2xlLXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dEFsaWduPVwiY2VudGVyIHN0YXJ0XCI+XHJcbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJhY2NlbnRcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9hcnRpY2xlJywgKHdpZGdldCk/Ll9pZF1cIj5cclxuICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPGRpdiBmeEZsZXg9XCI5MFwiIFtmcm9hbGFWaWV3XT1cIih3aWRnZXQpPy5Db25maWcuY29udGVudFwiIGFsaWduPVwicmlnaHRcIiBjbGFzcz1cImFydGljbGVcIj48L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30ubWF0LW1pbmktZmFie3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjBweDtyaWdodDotMjBweH0uYXJ0aWNsZXtkaXJlY3Rpb246cnRsO3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy10b3A6MjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD47XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uLCBXaWRnZXRNb2RlbCwgSVdpZGdldFVwc2VydCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgTGlua3NXaWRnZXRDb25maWdNb2RlbCwgTGlua0l0ZW0gfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4RmxleD5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgPG1hdC1pY29uPmdyYWRpZW50PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHw6LCgMKMPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICDDmcKGw5jCp8OZwoUgw5nChMObwozDmcKGw5rCqSDDmcKFw5nCiMOYwrHDmMKvw5nChsOYwrjDmMKxIMOYwrHDmMKnIMOZwojDmMKnw5jCscOYwq8gw5rCqcOYwrHDmMKvw5nChyDDmcKIIMOYwqfDmMK3w5nChMOYwqfDmMK5w5jCp8OYwqogw5jCscOYwqcgw5rCqcOYwqfDmcKFw5nChCDDmcKGw5nChcOYwqfDm8KMw5vCjMOYwq8gLi4uXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8aDM+w5nChsOYwqfDmcKFIMOZwojDm8KMw5jCrMOYwqo8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIndpZGdldEZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gICAgPGJyPlxyXG4gICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICA8aDM+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmcKIw5vCjMOYwqzDmMKqPC9oMz5cclxuICAgICAgPGJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXQtZmFiIGZ4RmxleEFsaWduPVwiZW5kXCIgKGNsaWNrKT1cImFkZGxpbmsoKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiICpuZ0Zvcj1cImxldCBjdHJsIG9mICRhbnkoY29uZmlnRm9ybUdyb3VwLmdldCgnbGlua3MnKSkuY29udHJvbHM7IGxldCBpZHggPSBpbmRleFwiXHJcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJjdHJsXCI+XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImN0cmxcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCIgKGNsaWNrKT1cInJlbW92ZWxpbmsoaWR4KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKiw5jCr8OYwrHDmMKzXCIgZm9ybUNvbnRyb2xOYW1lPVwidXJsXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInVwc2VydCgpXCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rc1Vwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFVwc2VydDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+KHsgdHlwZTogXCJsaW5rc1wiIH0pO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLl91cGRhdGVfbGlua3ModGhpcy53aWRnZXQuQ29uZmlnLmxpbmtzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdGFkZGxpbmsoKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKHRoaXMuX2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCkpO1xyXG5cdH1cclxuXHRyZW1vdmVsaW5rKGxpbmspIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheTtcclxuXHRcdGlmIChkYXRhLmNvbnRyb2xzLmxlbmd0aCA+IC0xKSB7XHJcblx0XHRcdGRhdGEucmVtb3ZlQXQobGluayk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH1cclxuXHR9XHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblxyXG5cdF9jcmVhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRsaW5rczogbmV3IEZvcm1BcnJheShbXSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHR1cmw6IG5ldyBGb3JtQ29udHJvbChcIi9cIiksXHJcblx0XHRcdGxhYmVsOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfdXBkYXRlX2xpbmtzKGxpbmtzOiBMaW5rSXRlbVtdKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5yZXNldCgpO1xyXG5cdFx0bGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG5cdFx0XHRjb25zdCBfbGluayA9IHRoaXMuX2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCk7XHJcblx0XHRcdF9saW5rLnBhdGNoVmFsdWUobGluayk7XHJcblx0XHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2goX2xpbmspO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rc1dpZGdldENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xpbmtzLXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1saW5rcy12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9saW5rcycsICh3aWRnZXQpPy5faWRdXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgPGgzPlxyXG4gICAgICB7e3dpZGdldC5uYW1lfX1cclxuICAgIDwvaDM+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1saXN0IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWxpc3QtaXRlbSBmeExheW91dD1cImNvbHVtblwiICpuZ0Zvcj1cImxldCBsaW5rIG9mICh3aWRnZXQpPy5Db25maWcubGlua3NcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+bGluazwvbWF0LWljb24+XHJcbiAgICAgIDxhIGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCIhbGluay5pc0V4dGVybmFsXCIgZnhGbGV4PVwiZ3Jvd1wiIFtyb3V0ZXJMaW5rXT1cIltsaW5rLnVybF1cIj5cclxuICAgICAgICB7e2xpbmsubGFiZWx9fVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCJsaW5rLmlzRXh0ZXJuYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiBmeEZsZXg9XCJncm93XCIgW2hyZWZdPVwibGluay51cmxcIj5cclxuICAgICAgICB7e2xpbmsubGFiZWx9fVxyXG4gICAgICA8L2E+XHJcbiAgICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgPC9tYXQtbGlzdD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpibG9ja306aG9zdDpob3ZlciAuYWN0aW9uc3tvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlfW1hdC1saXN0IGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmFjdGlvbnN7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlLWluLW91dDtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW59LmFjdGlvbnMgbWF0LWljb257Y29sb3I6IzEyMTIxMn1oM3twYWRkaW5nLXJpZ2h0OjIwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtzVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8TGlua3NXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHRfd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHRzZXQgd2lkZ2V0KHdpZGdldDogV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0d2lkZ2V0LkNvbmZpZy5saW5rcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS51cmwgPSBpdGVtLnVybC5zdGFydHNXaXRoKFwid3d3LlwiKSA/IGl0ZW0udXJsID0gXCJodHRwOi8vXCIgKyBpdGVtLnVybCA6IGl0ZW0udXJsKTtcclxuXHRcdHdpZGdldC5Db25maWcubGlua3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uaXNFeHRlcm5hbCA9IGl0ZW0udXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpKTtcclxuXHRcdHRoaXMuX3dpZGdldCA9IHdpZGdldDtcclxuXHR9XHJcblx0Z2V0IHdpZGdldCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl93aWRnZXQ7XHJcblx0fVxyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBMaXN0V2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlzdC13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlzdC12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9saW5rcycsICh3aWRnZXQpPy5faWRdXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgPGgzPlxyXG4gICAgICB7e3dpZGdldC5uYW1lfX1cclxuICAgIDwvaDM+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1saXN0IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWxpc3QtaXRlbSBmeExheW91dD1cImNvbHVtblwiICpuZ0Zvcj1cImxldCBpdGVtIG9mICh3aWRnZXQpPy5Db25maWcubGlzdFwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJsYXJnZS1pY29uXCIgbWF0LWxpc3QtaWNvbj5hY2NvdW50X2JveDwvbWF0LWljb24+XHJcbiAgICAgIDxoNCBtYXQtbGluZT4ge3tpdGVtLnRpdGxlfX08L2g0PlxyXG4gICAgICA8cCBtYXQtbGluZT4ge3tpdGVtLnN1YnRpdGxlfX0gPC9wPlxyXG4gICAgICA8cCBtYXQtbGluZT4ge3tpdGVtLmRlc2NyaXB0aW9ufX0gPC9wPlxyXG4gICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gIDwvbWF0LWxpc3Q+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlO2Rpc3BsYXk6YmxvY2t9Omhvc3Q6aG92ZXIgLmFjdGlvbnN7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZX1tYXQtbGlzdCBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5hY3Rpb25ze3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufS5hY3Rpb25zIG1hdC1pY29ue2NvbG9yOiMxMjEyMTJ9aDN7cGFkZGluZy1yaWdodDoyMHB4fS5sYXJnZS1pY29ue2ZvbnQtc2l6ZTo1MHB4IWltcG9ydGFudDt3aWR0aDo1MHB4IWltcG9ydGFudDtoZWlnaHQ6NTBweCFpbXBvcnRhbnQ7Y29sb3I6Izk5OX1tYXQtbGlzdHtkaXJlY3Rpb246cnRsfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8TGlzdFdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxMaXN0V2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBMaXN0V2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlzdC13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4uL2xpc3Qtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpc3QtdXBzZXJ0XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQ+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgIDxtYXQtaWNvbj5ncmFkaWVudDwvbWF0LWljb24+XHJcbiAgICAgIDxzcGFuPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOYwqfDmcKBw5jCssOZwojDmcKGw5nCh8OiwoDCjDwvc3Bhbj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8IS0tIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICDDmMKnw5nCgcOYwrLDmcKIw5nChsOZwofDosKAwowgw5nChcOZwojDmMKxw5jCryDDmcKGw5jCuMOYwrEgw5jCscOYwqcgw5jCqMOYwrHDmMKnw5jCs8OYwqfDmMKzIMOZwobDmcKIw5jCuSDDmMKiw5nChiDDmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKGw5nChcOYwqfDm8KMw5vCjMOYwq8gLi4uXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+IC0tPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGgzPsOZwobDmMKnw5nChSDDmMKnw5nCgcOYwrLDmcKIw5nChsOZwoc8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIndpZGdldEZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gICAgPGgzPsOZwoXDmMKqw5nChiDDmMKnw5nCgcOYwrLDmcKIw5nChsOZwoc8L2gzPlxyXG4gICAgPGJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXQtZmFiIGZ4RmxleEFsaWduPVwiZW5kXCIgKGNsaWNrKT1cImFkZEl0ZW0oKVwiPlxyXG4gICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiICpuZ0Zvcj1cImxldCBjdHJsIG9mICRhbnkoY29uZmlnRm9ybUdyb3VwLmdldCgnbGlzdCcpKS5jb250cm9sczsgbGV0IGlkeCA9IGluZGV4XCIgW2Zvcm1Hcm91cF09XCJjdHJsXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCIgKGNsaWNrKT1cInJlbW92ZWxpc3QoaWR4KVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCssObwozDmMKxw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqlwiIGZvcm1Db250cm9sTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInVwc2VydCgpXCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0VXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VXBzZXJ0PExpc3RXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdEBJbnB1dCgpIHdpZGdldDogV2lkZ2V0TW9kZWw8TGlzdFdpZGdldENvbmZpZ01vZGVsPjtcclxuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsPExpc3RXaWRnZXRDb25maWdNb2RlbD4oeyB0eXBlOiBcImxpc3RcIiB9KTtcclxuXHR9XHJcblxyXG5cdHVwc2VydCgpIHtcclxuXHRcdGNvbnN0IHdpZGdldCA9IHtcclxuXHRcdFx0Li4udGhpcy53aWRnZXQsXHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0Rm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRDb25maWc6IHRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24od2lkZ2V0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMud2lkZ2V0ICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLndpZGdldEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0KTtcclxuXHRcdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldC5Db25maWcpO1xyXG5cdFx0XHR0aGlzLl91cGRhdGVfbGlzdCh0aGlzLndpZGdldC5Db25maWcubGlzdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKCkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpc3RcIikgYXMgRm9ybUFycmF5KS5wdXNoKHRoaXMuX2dldF9uZXdfZW1wdHlfbGlzdF9pdGVtKCkpO1xyXG5cdH1cclxuXHRyZW1vdmVsaXN0KGxpc3QpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpc3RcIikgYXMgRm9ybUFycmF5O1xyXG5cdFx0aWYgKGRhdGEuY29udHJvbHMubGVuZ3RoID4gLTEpIHtcclxuXHRcdFx0ZGF0YS5yZW1vdmVBdChsaXN0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRfY3JlYXRlRm9ybUdyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bGlzdDogbmV3IEZvcm1BcnJheShbXSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9nZXRfbmV3X2VtcHR5X2xpc3RfaXRlbSgpIHtcclxuXHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0c3VidGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0ZGVzY3JpcHRpb246IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfdXBkYXRlX2xpc3QobGlzdDogTGlzdEl0ZW1bXSkge1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpc3RcIikgYXMgRm9ybUFycmF5KS5yZXNldCgpO1xyXG5cdFx0bGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdGNvbnN0IF9saXN0ID0gdGhpcy5fZ2V0X25ld19lbXB0eV9saXN0X2l0ZW0oKTtcclxuXHRcdFx0X2xpc3QucGF0Y2hWYWx1ZShpdGVtKTtcclxuXHRcdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpc3RcIikgYXMgRm9ybUFycmF5KS5wdXNoKF9saXN0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRnJvYWxhRWRpdG9yTW9kdWxlLCBGcm9hbGFWaWV3TW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItZnJvYWxhLXd5c2l3eWdcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5cclxuLyoqXHJcbiAqIGFydGljbGVcclxuICovXHJcbmltcG9ydCB7IEFydGljbGVVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi9hcnRpY2xlL2FydGljbGUtdXBzZXJ0L2FydGljbGUtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2FydGljbGUvYXJ0aWNsZS12aWV3L2FydGljbGUtdmlldy5jb21wb25lbnRcIjtcclxuLyoqXHJcbiAqIGxpbmtzXHJcbiAqL1xyXG5pbXBvcnQgeyBMaW5rc1Vwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpbmtzVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2xpbmtzL2xpbmtzLXZpZXcvbGlua3Mtdmlldy5jb21wb25lbnRcIjtcclxuLyoqXHJcbiAqIGxpc3RzXHJcbiAqL1xyXG5pbXBvcnQgeyBMaXN0VXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9saXN0LXVwc2VydC9saXN0LXVwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGcm9hbGFFZGl0b3JNb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0RnJvYWxhVmlld01vZHVsZS5mb3JSb290KClcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0QXJ0aWNsZVVwc2VydENvbXBvbmVudCxcclxuXHRcdEFydGljbGVWaWV3Q29tcG9uZW50LFxyXG5cdFx0TGlua3NVcHNlcnRDb21wb25lbnQsXHJcblx0XHRMaW5rc1ZpZXdDb21wb25lbnQsXHJcblx0XHRMaXN0VXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0TGlzdFZpZXdDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0QXJ0aWNsZVVwc2VydENvbXBvbmVudCxcclxuXHRcdEFydGljbGVWaWV3Q29tcG9uZW50LFxyXG5cdFx0TGlua3NVcHNlcnRDb21wb25lbnQsXHJcblx0XHRMaW5rc1ZpZXdDb21wb25lbnQsXHJcblx0XHRMaXN0VXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0TGlzdFZpZXdDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtBcnRpY2xlVmlld0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldFR5cGVzTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2Q0MsZ0NBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBMkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUM3RTs7OztJQUVELHVDQUFNOzs7SUFBTjs7UUFDQyxJQUFNLE1BQU0sZ0JBQ1IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssSUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUNqQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFB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