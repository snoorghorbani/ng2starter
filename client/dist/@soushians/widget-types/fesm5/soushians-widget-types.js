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
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ widget = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
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
                    template: "<mat-card>\n  <mat-card-content>\n      <h3>\u0645\u0634\u062E\u0635\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"name\">\n      </mat-form-field>\n  </div>\n  <mat-divider></mat-divider>\n  <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"configFormGroup\">\n        <div [froalaEditor] formControlName=\"content\"></div>\n    </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"primary\" (click)=\"upsert()\">Add</button>\n    </mat-card-actions>\n  </mat-card>",
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
 * @suppress {checkTypes} checked by tsc
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
                    template: "<button mat-mini-fab color=\"accent\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/article', (widget)?._id]\">\n  <mat-icon>edit</mat-icon>\n</button>\n\n<div [froalaView]=\"(widget)?.Config.content\"></div>\n",
                    styles: [":host{position:relative;display:block}.mat-mini-fab{position:absolute;top:-20px;right:-20px}"]
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
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ widget = __assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
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
            var /** @type {?} */ _link = _this._get_new_empty_link_item();
            _link.patchValue(link);
            (/** @type {?} */ (_this.configFormGroup.get("links"))).push(_link);
        });
    };
    LinksUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-links-upsert",
                    template: "<mat-card fxFlex fxLayout=\"column\">\n  <mat-card-content>\n      <h3>\u0645\u0634\u062E\u0635\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"name\">\n      </mat-form-field>\n  </div>\n  <mat-divider></mat-divider>\n  <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"configFormGroup\">\n      <button color=\"primary\" mat-raised-button (click)=\"addlink()\">\n        \u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u0644\u06CC\u0646\u06A9\n      </button>\n      <div fxFlex=\"nogrow\" *ngFor=\"let ctrl of $any(configFormGroup.get('links')).controls\" [formGroup]=\"ctrl\">\n        <div [formGroup]=\"ctrl\" fxLayout=\"row\" fxLayoutGap=\"25px\">\n          <button mat-icon-button fxFlex=\"nogrow\">\n              <mat-icon>delete</mat-icon>\n          </button>\n        <mat-form-field fxFlex>\n          <input type=\"text\" matInput placeholder=\"\u0622\u062F\u0631\u0633\"  formControlName=\"url\">\n        </mat-form-field>          \n        <mat-form-field fxFlex >\n          <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"label\">\n        </mat-form-field>          \n    </div>\n    </div>\n    </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\n    </mat-card-actions>\n  </mat-card>",
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
 * @suppress {checkTypes} checked by tsc
 */
var LinksViewComponent = /** @class */ (function () {
    function LinksViewComponent(store) {
        this.store = store;
    }
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
                    template: "<div fxLayout=\"column\">\n    <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n      <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\n        <mat-icon>edit</mat-icon>\n      </button>\n    </div>\n    <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <h3>\n        {{widget.name}}\n    </h3>\n    </div>\n    <mat-list fxLayout=\"column\" fxFlex=\"100\" >\n        <mat-list-item fxLayout=\"column\" *ngFor=\"let link of (widget)?.Config.links\" fxFlex=\"100\">\n          <mat-icon mat-list-icon>link</mat-icon>\n          <a fxLayout=\"row\" fxFlex=\"grow\" [routerLink]=\"[link.url]\">\n            {{link.label}}\n          </a>\n        </mat-list-item>\n    </mat-list>\n</div>",
                    styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}"]
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
 * @suppress {checkTypes} checked by tsc
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
                        // EditorModule
                        FroalaEditorModule.forRoot(),
                        FroalaViewModule.forRoot()
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

export { ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent, NgsWidgetTypesModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC10eXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvbGlua3MvbGlua3Mtdmlldy9saW5rcy12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL3dpZGdldC10eXBlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vYXJ0aWNsZS13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtYXJ0aWNsZS11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPGgzPsOZwoXDmMK0w5jCrsOYwrXDmMKnw5jCqiDDmcKIw5vCjMOYwqzDmMKqPC9oMz5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ3aWRnZXRGb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cclxuICA8aDM+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmcKIw5vCjMOYwqzDmMKqPC9oMz5cclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXBcIj5cclxuICAgICAgICA8ZGl2IFtmcm9hbGFFZGl0b3JdIGZvcm1Db250cm9sTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj5BZGQ8L2J1dHRvbj5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VXBzZXJ0PEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdEBJbnB1dCgpIHdpZGdldDogV2lkZ2V0TW9kZWw8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPjtcclxuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4oeyB0eXBlOiBcImFydGljbGVcIiB9KTtcclxuXHR9XHJcblxyXG5cdHVwc2VydCgpIHtcclxuXHRcdGNvbnN0IHdpZGdldCA9IHtcclxuXHRcdFx0Li4udGhpcy53aWRnZXQsXHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0Rm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRDb25maWc6IHRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24od2lkZ2V0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMud2lkZ2V0ICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLndpZGdldEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0KTtcclxuXHRcdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldC5Db25maWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0X2NyZWF0ZUZvcm1Hcm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGNvbnRlbnQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsLCBJV2lkZ2V0VmlldyB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgQXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2FydGljbGUtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWFydGljbGUtdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJhY2NlbnRcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9hcnRpY2xlJywgKHdpZGdldCk/Ll9pZF1cIj5cclxuICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbjwvYnV0dG9uPlxyXG5cclxuPGRpdiBbZnJvYWxhVmlld109XCIod2lkZ2V0KT8uQ29uZmlnLmNvbnRlbnRcIj48L2Rpdj5cclxuYCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30ubWF0LW1pbmktZmFie3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjBweDtyaWdodDotMjBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD47XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uLCBXaWRnZXRNb2RlbCwgSVdpZGdldFVwc2VydCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgTGlua3NXaWRnZXRDb25maWdNb2RlbCwgTGlua0l0ZW0gfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4RmxleCBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8aDM+w5nChcOYwrTDmMKuw5jCtcOYwqfDmMKqIMOZwojDm8KMw5jCrMOYwqo8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIndpZGdldEZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiAgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZGl2PlxyXG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gIDxoMz7DmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqIMOZwojDm8KMw5jCrMOYwqo8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICA8YnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJhZGRsaW5rKClcIj5cclxuICAgICAgICDDmMKnw5jCtsOYwqfDmcKBw5nChyDDmsKpw5jCscOYwq/DmcKGIMOZwoTDm8KMw5nChsOawqlcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgKm5nRm9yPVwibGV0IGN0cmwgb2YgJGFueShjb25maWdGb3JtR3JvdXAuZ2V0KCdsaW5rcycpKS5jb250cm9sc1wiIFtmb3JtR3JvdXBdPVwiY3RybFwiPlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjdHJsXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCosOYwq/DmMKxw5jCs1wiICBmb3JtQ29udHJvbE5hbWU9XCJ1cmxcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPiAgICAgICAgICBcclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4ID5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgIGZvcm1Db250cm9sTmFtZT1cImxhYmVsXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD4gICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJ1cHNlcnQoKVwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtzVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VXBzZXJ0PExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHRASW5wdXQoKSB3aWRnZXQ6IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHdpZGdldEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NyZWF0ZUZvcm1Hcm91cCgpO1xyXG5cdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD4oeyB0eXBlOiBcImxpbmtzXCIgfSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoKSB7XHJcblx0XHRjb25zdCB3aWRnZXQgPSB7XHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0LFxyXG5cdFx0XHQuLi50aGlzLndpZGdldEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Q29uZmlnOiB0aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uKHdpZGdldCkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLndpZGdldCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldCk7XHJcblx0XHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQuQ29uZmlnKTtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZV9saW5rcyh0aGlzLndpZGdldC5Db25maWcubGlua3MpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogdmlldyBtZXRob2RzXHJcblx0ICovXHJcblx0YWRkbGluaygpIHtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2godGhpcy5fZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHJcblx0X2NyZWF0ZUZvcm1Hcm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGxpbmtzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHVybDogbmV3IEZvcm1Db250cm9sKFwiL1wiKSxcclxuXHRcdFx0bGFiZWw6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF91cGRhdGVfbGlua3MobGlua3M6IExpbmtJdGVtW10pIHtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnJlc2V0KCk7XHJcblx0XHRsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcblx0XHRcdGNvbnN0IF9saW5rID0gdGhpcy5fZ2V0X25ld19lbXB0eV9saW5rX2l0ZW0oKTtcclxuXHRcdFx0X2xpbmsucGF0Y2hWYWx1ZShsaW5rKTtcclxuXHRcdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChfbGluayk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCwgSVdpZGdldFZpZXcgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IExpbmtzV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9saW5rcycsICh3aWRnZXQpPy5faWRdXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8aDM+XHJcbiAgICAgICAge3t3aWRnZXQubmFtZX19XHJcbiAgICA8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWF0LWxpc3QgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIxMDBcIiA+XHJcbiAgICAgICAgPG1hdC1saXN0LWl0ZW0gZnhMYXlvdXQ9XCJjb2x1bW5cIiAqbmdGb3I9XCJsZXQgbGluayBvZiAod2lkZ2V0KT8uQ29uZmlnLmxpbmtzXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5saW5rPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDxhIGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4PVwiZ3Jvd1wiIFtyb3V0ZXJMaW5rXT1cIltsaW5rLnVybF1cIj5cclxuICAgICAgICAgICAge3tsaW5rLmxhYmVsfX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgICA8L21hdC1saXN0PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmJsb2NrfTpob3N0OmhvdmVyIC5hY3Rpb25ze29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9bWF0LWxpc3QgYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWN0aW9uc3t0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbn0uYWN0aW9ucyBtYXQtaWNvbntjb2xvcjojMTIxMjEyfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rc1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGcm9hbGFFZGl0b3JNb2R1bGUsIEZyb2FsYVZpZXdNb2R1bGUgfSBmcm9tIFwiYW5ndWxhci1mcm9hbGEtd3lzaXd5Z1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcblxyXG4vKipcclxuICogYXJ0aWNsZVxyXG4gKi9cclxuaW1wb3J0IHsgQXJ0aWNsZVVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFydGljbGVWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudFwiO1xyXG4vKipcclxuICogbGlua3NcclxuICovXHJcbmltcG9ydCB7IExpbmtzVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlua3MvbGlua3MtdXBzZXJ0L2xpbmtzLXVwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGlua3NWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlua3MvbGlua3Mtdmlldy9saW5rcy12aWV3LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0Ly8gRWRpdG9yTW9kdWxlXHJcblx0XHRGcm9hbGFFZGl0b3JNb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0RnJvYWxhVmlld01vZHVsZS5mb3JSb290KClcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBBcnRpY2xlVXBzZXJ0Q29tcG9uZW50LCBBcnRpY2xlVmlld0NvbXBvbmVudCwgTGlua3NVcHNlcnRDb21wb25lbnQsIExpbmtzVmlld0NvbXBvbmVudCBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBBcnRpY2xlVXBzZXJ0Q29tcG9uZW50LCBBcnRpY2xlVmlld0NvbXBvbmVudCwgTGlua3NVcHNlcnRDb21wb25lbnQsIExpbmtzVmlld0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgQXJ0aWNsZVZpZXdDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzV2lkZ2V0VHlwZXNNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0NDLGdDQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQTJCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7S0FDN0U7Ozs7SUFFRCx1Q0FBTTs7O0lBQU47UUFDQyxxQkFBTSxNQUFNLGdCQUNSLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FDbEMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDs7OztJQUNELHlDQUFROzs7SUFBUjtRQUNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEQ7S0FDRDs7OztJQUVELGlEQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFB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