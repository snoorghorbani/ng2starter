import { __assign } from 'tslib';
import { Component, Input, NgModule } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { WidgetModel, UpsertWidgetStartAction } from '@soushians/widget';
import { getFrontendAuthenticationState } from '@soushians/frontend-authentication';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatDividerModule, MatSlideToggleModule, MatCheckboxModule, MatTableModule, MatListModule } from '@angular/material';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n      <mat-icon>gradient</mat-icon>\r\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\r\n    </mat-card-title>\r\n    <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span>\r\n        \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n      </span>\r\n    </mat-card-subtitle> -->\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h3>\u0646\u0627\u0645 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <div [formGroup]=\"widgetFormGroup\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <h3>\u0645\u062A\u0646 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <div [formGroup]=\"configFormGroup\">\r\n      <div [froalaEditor] formControlName=\"content\"></div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button color=\"primary\" (click)=\"upsert()\">Add</button>\r\n  </mat-card-actions>\r\n</mat-card>",
                    styles: [""]
                }] }
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
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    };
    ArticleViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-article-view",
                    template: "<div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center start\">\r\n  <button mat-mini-fab color=\"accent\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/article', (widget)?._id]\">\r\n    <mat-icon>edit</mat-icon>\r\n  </button>\r\n\r\n  <div fxFlex=\"90\" [froalaView]=\"(widget)?.Config.content\" align=\"right\" class=\"article\"></div>\r\n</div>",
                    styles: [":host{position:relative;display:block}.mat-mini-fab{position:absolute;top:-20px;right:-20px}.article{direction:rtl;text-align:right;padding-top:25px}"]
                }] }
    ];
    /** @nocollapse */
    ArticleViewComponent.ctorParameters = function () { return [
        { type: Store }
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
        { type: Component, args: [{
                    selector: "widget-links-upsert",
                    template: "<mat-card fxFlex>\r\n  <mat-card-header>\r\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n      <mat-icon>gradient</mat-icon>\r\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\r\n    </mat-card-title>\r\n    <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span>\r\n        \u0646\u0627\u0645 \u0644\u06CC\u0646\u06A9 \u0645\u0648\u0631\u062F\u0646\u0638\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0631\u0627 \u06A9\u0627\u0645\u0644 \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n      </span>\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h3>\u0646\u0627\u0645 \u0648\u06CC\u062C\u062A</h3>\r\n    <div [formGroup]=\"widgetFormGroup\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <br>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\r\n      <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addlink()\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div [formGroup]=\"configFormGroup\">\r\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('links')).controls; let idx = index\"\r\n        [formGroup]=\"ctrl\">\r\n        <div [formGroup]=\"ctrl\" fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n          <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelink(idx)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n          <mat-form-field fxFlex>\r\n            <input type=\"text\" matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"url\">\r\n          </mat-form-field>\r\n          <mat-form-field fxFlex>\r\n            <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"label\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n  </mat-card-actions>\r\n</mat-card>",
                    styles: [""]
                }] }
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
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    };
    LinksViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-links-view",
                    template: "<div fxLayout=\"column\">\r\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\r\n      <mat-icon>edit</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <h3>\r\n      {{widget.name}}\r\n    </h3>\r\n  </div>\r\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\r\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let link of (widget)?.Config.links\" fxFlex=\"100\">\r\n      <mat-icon mat-list-icon>link</mat-icon>\r\n      <a fxLayout=\"row\" *ngIf=\"!link.isExternal\" fxFlex=\"grow\" [routerLink]=\"[link.url]\">\r\n        {{link.label}}\r\n      </a>\r\n      <a fxLayout=\"row\" *ngIf=\"link.isExternal\" target=\"_blank\" fxFlex=\"grow\" [href]=\"link.url\">\r\n        {{link.label}}\r\n      </a>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>",
                    styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}"]
                }] }
    ];
    /** @nocollapse */
    LinksViewComponent.ctorParameters = function () { return [
        { type: Store }
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
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    };
    ListViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-list-view",
                    template: "<div fxLayout=\"column\">\r\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\r\n      <mat-icon>edit</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <h3>\r\n      {{widget.name}}\r\n    </h3>\r\n  </div>\r\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\r\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let item of (widget)?.Config.list\" fxFlex=\"100\">\r\n      <mat-icon class=\"large-icon\" mat-list-icon>account_box</mat-icon>\r\n      <h4 mat-line> {{item.title}}</h4>\r\n      <p mat-line> {{item.subtitle}} </p>\r\n      <p mat-line> {{item.description}} </p>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>",
                    styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}.large-icon{font-size:50px!important;width:50px!important;height:50px!important;color:#999}mat-list{direction:rtl}"]
                }] }
    ];
    /** @nocollapse */
    ListViewComponent.ctorParameters = function () { return [
        { type: Store }
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
        { type: Component, args: [{
                    selector: "widget-list-upsert",
                    template: "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n      <mat-icon>gradient</mat-icon>\r\n      <span>\u0627\u06CC\u062C\u0627\u062F \u0627\u0641\u0632\u0648\u0646\u0647\u200C</span>\r\n    </mat-card-title>\r\n    <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <span>\r\n        \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n      </span>\r\n    </mat-card-subtitle> -->\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h3>\u0646\u0627\u0645 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <div [formGroup]=\"widgetFormGroup\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <h3>\u0645\u062A\u0646 \u0627\u0641\u0632\u0648\u0646\u0647</h3>\r\n    <button color=\"primary\" mat-fab fxFlexAlign=\"end\" (click)=\"addItem()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n    <div [formGroup]=\"configFormGroup\">\r\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('list')).controls; let idx = index\" [formGroup]=\"ctrl\">\r\n        <button mat-icon-button fxFlex=\"nogrow\" (click)=\"removelist(idx)\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" matInput placeholder=\"\u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646\" formControlName=\"subtitle\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex>\r\n          <input type=\"text\" matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\u0627\u062A\" formControlName=\"description\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n  </mat-card-actions>\r\n</mat-card>",
                    styles: [""]
                }] }
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
                },] }
    ];
    /** @nocollapse */
    NgsWidgetTypesModule.ctorParameters = function () { return []; };
    return NgsWidgetTypesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent, ListUpsertComponent, ListViewComponent, NgsWidgetTypesModule };
//# sourceMappingURL=soushians-widget-types.js.map
