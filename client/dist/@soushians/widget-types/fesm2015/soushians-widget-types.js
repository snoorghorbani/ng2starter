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
class ArticleUpsertComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "article" });
    }
    /**
     * @return {?}
     */
    upsert() {
        /** @type {?} */
        const widget = Object.assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
        this.store.dispatch(new UpsertWidgetStartAction(widget));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.widget != undefined) {
            this.widgetFormGroup.patchValue(this.widget);
            this.configFormGroup.patchValue(this.widget.Config);
        }
    }
    /**
     * @return {?}
     */
    _createFormGroup() {
        this.configFormGroup = new FormGroup({
            content: new FormControl("")
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    }
}
ArticleUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-article-upsert",
                template: `<mat-card>
  <mat-card-header>
    <mat-card-title fxLayout="row" fxLayoutGap="5px">
      <mat-icon>gradient</mat-icon>
      <span>ایجاد افزونه‌</span>
    </mat-card-title>
    <!-- <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
      <span>
        افزونه‌ مورد نظر را براساس نوع آن ایجاد نمایید ...
      </span>
    </mat-card-subtitle> -->
  </mat-card-header>
  <mat-card-content>
    <h3>نام افزونه</h3>
    <div [formGroup]="widgetFormGroup">
      <mat-form-field>
        <input type="text" matInput placeholder="نام" formControlName="name">
      </mat-form-field>
    </div>
    <mat-divider></mat-divider>
    <h3>متن افزونه</h3>
    <div [formGroup]="configFormGroup">
      <div [froalaEditor] formControlName="content"></div>
    </div>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button color="primary" (click)="upsert()">Add</button>
  </mat-card-actions>
</mat-card>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ArticleUpsertComponent.ctorParameters = () => [
    { type: Store }
];
ArticleUpsertComponent.propDecorators = {
    widget: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ArticleViewComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
}
ArticleViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-article-view",
                template: `<div fxLayout="row" fxFlex="100" fxLayoutAlign="center start">
  <button mat-mini-fab color="accent" *ngIf="havePermission$ | async" [routerLink]="['/widget/upsert/article', (widget)?._id]">
    <mat-icon>edit</mat-icon>
  </button>

  <div fxFlex="90" [froalaView]="(widget)?.Config.content" align="right" class="article"></div>
</div>`,
                styles: [`:host{position:relative;display:block}.mat-mini-fab{position:absolute;top:-20px;right:-20px}.article{direction:rtl;text-align:right;padding-top:25px}`]
            },] },
];
/** @nocollapse */
ArticleViewComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LinksUpsertComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "links" });
    }
    /**
     * @return {?}
     */
    upsert() {
        /** @type {?} */
        const widget = Object.assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
        this.store.dispatch(new UpsertWidgetStartAction(widget));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.widget != undefined) {
            this.widgetFormGroup.patchValue(this.widget);
            this.configFormGroup.patchValue(this.widget.Config);
            debugger;
            this._update_links(this.widget.Config.links);
        }
    }
    /**
     * view methods
     * @return {?}
     */
    addlink() {
        (/** @type {?} */ (this.configFormGroup.get("links"))).push(this._get_new_empty_link_item());
    }
    /**
     * @param {?} link
     * @return {?}
     */
    removelink(link) {
        debugger;
        /** @type {?} */
        const data = /** @type {?} */ (this.configFormGroup.get("links"));
        if (data.controls.length > -1) {
            data.removeAt(link);
        }
        else {
            return data;
        }
    }
    /**
     * private methods
     * @return {?}
     */
    _createFormGroup() {
        this.configFormGroup = new FormGroup({
            links: new FormArray([])
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    }
    /**
     * @return {?}
     */
    _get_new_empty_link_item() {
        return new FormGroup({
            url: new FormControl("/"),
            label: new FormControl("")
        });
    }
    /**
     * @param {?} links
     * @return {?}
     */
    _update_links(links) {
        (/** @type {?} */ (this.configFormGroup.get("links"))).reset();
        links.forEach((link) => {
            /** @type {?} */
            const _link = this._get_new_empty_link_item();
            _link.patchValue(link);
            (/** @type {?} */ (this.configFormGroup.get("links"))).push(_link);
        });
    }
}
LinksUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-links-upsert",
                template: `<mat-card fxFlex>
  <mat-card-header>
    <mat-card-title fxLayout="row" fxLayoutGap="5px">
      <mat-icon>gradient</mat-icon>
      <span>ایجاد افزونه‌</span>
    </mat-card-title>
    <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
      <span>
        نام لینک موردنظر را وارد کرده و اطلاعات را کامل نمایید ...
      </span>
    </mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    <h3>نام ویجت</h3>
    <div [formGroup]="widgetFormGroup">
      <mat-form-field>
        <input type="text" matInput placeholder="نام" formControlName="name">
      </mat-form-field>
    </div>
    <mat-divider></mat-divider>
    <br>
    <div fxLayout="row" fxLayoutAlign="space-between center">
      <h3>تنظیمات ویجت</h3>
      <button color="primary" mat-fab fxFlexAlign="end" (click)="addlink()">
        <mat-icon>add</mat-icon>
      </button>
    </div>
    <div [formGroup]="configFormGroup">
      <div fxFlex="nogrow" *ngFor="let ctrl of $any(configFormGroup.get('links')).controls; let idx = index"
        [formGroup]="ctrl">
        <div [formGroup]="ctrl" fxLayout="row" fxLayoutGap="25px">
          <button mat-icon-button fxFlex="nogrow" (click)="removelink(idx)">
            <mat-icon>delete</mat-icon>
          </button>
          <mat-form-field fxFlex>
            <input type="text" matInput placeholder="آدرس" formControlName="url">
          </mat-form-field>
          <mat-form-field fxFlex>
            <input type="text" matInput placeholder="نام" formControlName="label">
          </mat-form-field>
        </div>
      </div>
    </div>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button color="primary" (click)="upsert()">ثبت</button>
  </mat-card-actions>
</mat-card>`,
                styles: [``]
            },] },
];
/** @nocollapse */
LinksUpsertComponent.ctorParameters = () => [
    { type: Store }
];
LinksUpsertComponent.propDecorators = {
    widget: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LinksViewComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    set widget(widget) {
        debugger;
        widget.Config.links.forEach(item => item.url = item.url.startsWith("www.") ? item.url = "http://" + item.url : item.url);
        widget.Config.links.forEach(item => item.isExternal = item.url.startsWith("http"));
        this._widget = widget;
    }
    /**
     * @return {?}
     */
    get widget() {
        return this._widget;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
}
LinksViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-links-view",
                template: `<div fxLayout="column">
  <div class="actions" fxLayout="row" fxFlex fxLayoutAlign="end">
    <button fxFlex="nogrow" mat-icon-button color="primary" *ngIf="havePermission$ | async" [routerLink]="['/widget/upsert/links', (widget)?._id]">
      <mat-icon>edit</mat-icon>
    </button>
  </div>
  <div fxLayout="row" fxFlex fxLayoutAlign="end">
    <h3>
      {{widget.name}}
    </h3>
  </div>
  <mat-list fxLayout="column" fxFlex="100">
    <mat-list-item fxLayout="column" *ngFor="let link of (widget)?.Config.links" fxFlex="100">
      <mat-icon mat-list-icon>link</mat-icon>
      <a fxLayout="row" *ngIf="!link.isExternal" fxFlex="grow" [routerLink]="[link.url]">
        {{link.label}}
      </a>
      <a fxLayout="row" *ngIf="link.isExternal" target="_blank" fxFlex="grow" [href]="link.url">
        {{link.label}}
      </a>
    </mat-list-item>
  </mat-list>
</div>`,
                styles: [`:host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}`]
            },] },
];
/** @nocollapse */
LinksViewComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ListViewComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        debugger;
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
}
ListViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-list-view",
                template: `<div fxLayout="column">
  <div class="actions" fxLayout="row" fxFlex fxLayoutAlign="end">
    <button fxFlex="nogrow" mat-icon-button color="primary" *ngIf="havePermission$ | async" [routerLink]="['/widget/upsert/links', (widget)?._id]">
      <mat-icon>edit</mat-icon>
    </button>
  </div>
  <div fxLayout="row" fxFlex fxLayoutAlign="end">
    <h3>
      {{widget.name}}
    </h3>
  </div>
  <mat-list fxLayout="column" fxFlex="100">
    <mat-list-item fxLayout="column" *ngFor="let item of (widget)?.Config.list" fxFlex="100">
      <mat-icon class="large-icon" mat-list-icon>account_box</mat-icon>
      <h4 mat-line> {{item.title}}</h4>
      <p mat-line> {{item.subtitle}} </p>
      <p mat-line> {{item.description}} </p>
    </mat-list-item>
  </mat-list>
</div>`,
                styles: [`:host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}.large-icon{font-size:50px!important;width:50px!important;height:50px!important;color:#999}mat-list{direction:rtl}`]
            },] },
];
/** @nocollapse */
ListViewComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ListUpsertComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this._createFormGroup();
        this.widget = new WidgetModel({ type: "list" });
    }
    /**
     * @return {?}
     */
    upsert() {
        /** @type {?} */
        const widget = Object.assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
        this.store.dispatch(new UpsertWidgetStartAction(widget));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.widget != undefined) {
            this.widgetFormGroup.patchValue(this.widget);
            this.configFormGroup.patchValue(this.widget.Config);
            this._update_list(this.widget.Config.list);
        }
    }
    /**
     * @return {?}
     */
    addItem() {
        (/** @type {?} */ (this.configFormGroup.get("list"))).push(this._get_new_empty_list_item());
    }
    /**
     * @param {?} list
     * @return {?}
     */
    removelist(list) {
        debugger;
        /** @type {?} */
        const data = /** @type {?} */ (this.configFormGroup.get("list"));
        if (data.controls.length > -1) {
            data.removeAt(list);
        }
        else {
            return data;
        }
    }
    /**
     * @return {?}
     */
    _createFormGroup() {
        this.configFormGroup = new FormGroup({
            list: new FormArray([])
        });
        this.widgetFormGroup = new FormGroup({
            name: new FormControl("")
        });
    }
    /**
     * @return {?}
     */
    _get_new_empty_list_item() {
        return new FormGroup({
            title: new FormControl(""),
            subtitle: new FormControl(""),
            description: new FormControl("")
        });
    }
    /**
     * @param {?} list
     * @return {?}
     */
    _update_list(list) {
        (/** @type {?} */ (this.configFormGroup.get("list"))).reset();
        list.forEach((item) => {
            /** @type {?} */
            const _list = this._get_new_empty_list_item();
            _list.patchValue(item);
            (/** @type {?} */ (this.configFormGroup.get("list"))).push(_list);
        });
    }
}
ListUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-list-upsert",
                template: `<mat-card>
  <mat-card-header>
    <mat-card-title fxLayout="row" fxLayoutGap="5px">
      <mat-icon>gradient</mat-icon>
      <span>ایجاد افزونه‌</span>
    </mat-card-title>
    <!-- <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
      <span>
        افزونه‌ مورد نظر را براساس نوع آن ایجاد نمایید ...
      </span>
    </mat-card-subtitle> -->
  </mat-card-header>
  <mat-card-content>
    <h3>نام افزونه</h3>
    <div [formGroup]="widgetFormGroup">
      <mat-form-field>
        <input type="text" matInput placeholder="نام" formControlName="name">
      </mat-form-field>
    </div>
    <mat-divider></mat-divider>
    <h3>متن افزونه</h3>
    <button color="primary" mat-fab fxFlexAlign="end" (click)="addItem()">
      <mat-icon>add</mat-icon>
    </button>
    <div [formGroup]="configFormGroup">
      <div fxFlex="nogrow" *ngFor="let ctrl of $any(configFormGroup.get('list')).controls; let idx = index" [formGroup]="ctrl">
        <button mat-icon-button fxFlex="nogrow" (click)="removelist(idx)">
          <mat-icon>delete</mat-icon>
        </button>
        <mat-form-field fxFlex>
          <input type="text" matInput placeholder="عنوان" formControlName="title">
        </mat-form-field>
        <mat-form-field fxFlex>
          <input type="text" matInput placeholder="زیرعنوان" formControlName="subtitle">
        </mat-form-field>
        <mat-form-field fxFlex>
          <input type="text" matInput placeholder="توضیحات" formControlName="description">
        </mat-form-field>
      </div>
    </div>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button color="primary" (click)="upsert()">ثبت</button>
  </mat-card-actions>
</mat-card>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ListUpsertComponent.ctorParameters = () => [
    { type: Store }
];
ListUpsertComponent.propDecorators = {
    widget: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgsWidgetTypesModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent, ListViewComponent, ListUpsertComponent, NgsWidgetTypesModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC10eXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2xpbmtzL2xpbmtzLXVwc2VydC9saW5rcy11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvbGlua3MvbGlua3Mtdmlldy9saW5rcy12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2xpc3QvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzL2xpYi9saXN0L2xpc3QtdXBzZXJ0L2xpc3QtdXBzZXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL3dpZGdldC10eXBlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vYXJ0aWNsZS13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtYXJ0aWNsZS11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgPG1hdC1pY29uPmdyYWRpZW50PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHw6LCgMKMPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwhLS0gPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIMOYwqfDmcKBw5jCssOZwojDmcKGw5nCh8OiwoDCjCDDmcKFw5nCiMOYwrHDmMKvIMOZwobDmMK4w5jCsSDDmMKxw5jCpyDDmMKow5jCscOYwqfDmMKzw5jCp8OYwrMgw5nChsOZwojDmMK5IMOYwqLDmcKGIMOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCryAuLi5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT4gLS0+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8aDM+w5nChsOYwqfDmcKFIMOYwqfDmcKBw5jCssOZwojDmcKGw5nChzwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2lkZ2V0Rm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICA8aDM+w5nChcOYwqrDmcKGIMOYwqfDmcKBw5jCssOZwojDmcKGw5nChzwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgIDxkaXYgW2Zyb2FsYUVkaXRvcl0gZm9ybUNvbnRyb2xOYW1lPVwiY29udGVudFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJ1cHNlcnQoKVwiPkFkZDwvYnV0dG9uPlxyXG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFVwc2VydDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHRASW5wdXQoKSB3aWRnZXQ6IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD47XHJcblx0d2lkZ2V0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY3JlYXRlRm9ybUdyb3VwKCk7XHJcblx0XHR0aGlzLndpZGdldCA9IG5ldyBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+KHsgdHlwZTogXCJhcnRpY2xlXCIgfSk7XHJcblx0fVxyXG5cclxuXHR1cHNlcnQoKSB7XHJcblx0XHRjb25zdCB3aWRnZXQgPSB7XHJcblx0XHRcdC4uLnRoaXMud2lkZ2V0LFxyXG5cdFx0XHQuLi50aGlzLndpZGdldEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Q29uZmlnOiB0aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uKHdpZGdldCkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLndpZGdldCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLndpZGdldCk7XHJcblx0XHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQuQ29uZmlnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdF9jcmVhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRjb250ZW50OiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCwgSVdpZGdldFZpZXcgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEFydGljbGVXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9hcnRpY2xlLXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1hcnRpY2xlLXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dEFsaWduPVwiY2VudGVyIHN0YXJ0XCI+XHJcbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJhY2NlbnRcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9hcnRpY2xlJywgKHdpZGdldCk/Ll9pZF1cIj5cclxuICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPGRpdiBmeEZsZXg9XCI5MFwiIFtmcm9hbGFWaWV3XT1cIih3aWRnZXQpPy5Db25maWcuY29udGVudFwiIGFsaWduPVwicmlnaHRcIiBjbGFzcz1cImFydGljbGVcIj48L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30ubWF0LW1pbmktZmFie3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjBweDtyaWdodDotMjBweH0uYXJ0aWNsZXtkaXJlY3Rpb246cnRsO3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy10b3A6MjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD47XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uLCBXaWRnZXRNb2RlbCwgSVdpZGdldFVwc2VydCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgTGlua3NXaWRnZXRDb25maWdNb2RlbCwgTGlua0l0ZW0gfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4RmxleD5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgPG1hdC1pY29uPmdyYWRpZW50PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHw6LCgMKMPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICDDmcKGw5jCp8OZwoUgw5nChMObwozDmcKGw5rCqSDDmcKFw5nCiMOYwrHDmMKvw5nChsOYwrjDmMKxIMOYwrHDmMKnIMOZwojDmMKnw5jCscOYwq8gw5rCqcOYwrHDmMKvw5nChyDDmcKIIMOYwqfDmMK3w5nChMOYwqfDmMK5w5jCp8OYwqogw5jCscOYwqcgw5rCqcOYwqfDmcKFw5nChCDDmcKGw5nChcOYwqfDm8KMw5vCjMOYwq8gLi4uXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8aDM+w5nChsOYwqfDmcKFIMOZwojDm8KMw5jCrMOYwqo8L2gzPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIndpZGdldEZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxyXG4gICAgPGJyPlxyXG4gICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICA8aDM+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmcKIw5vCjMOYwqzDmMKqPC9oMz5cclxuICAgICAgPGJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXQtZmFiIGZ4RmxleEFsaWduPVwiZW5kXCIgKGNsaWNrKT1cImFkZGxpbmsoKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiICpuZ0Zvcj1cImxldCBjdHJsIG9mICRhbnkoY29uZmlnRm9ybUdyb3VwLmdldCgnbGlua3MnKSkuY29udHJvbHM7IGxldCBpZHggPSBpbmRleFwiXHJcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJjdHJsXCI+XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImN0cmxcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCIgKGNsaWNrKT1cInJlbW92ZWxpbmsoaWR4KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKiw5jCr8OYwrHDmMKzXCIgZm9ybUNvbnRyb2xOYW1lPVwidXJsXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInVwc2VydCgpXCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rc1Vwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFVwc2VydDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHR3aWRnZXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jcmVhdGVGb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMud2lkZ2V0ID0gbmV3IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+KHsgdHlwZTogXCJsaW5rc1wiIH0pO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLl91cGRhdGVfbGlua3ModGhpcy53aWRnZXQuQ29uZmlnLmxpbmtzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdGFkZGxpbmsoKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKHRoaXMuX2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCkpO1xyXG5cdH1cclxuXHRyZW1vdmVsaW5rKGxpbmspIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImxpbmtzXCIpIGFzIEZvcm1BcnJheTtcclxuXHRcdGlmIChkYXRhLmNvbnRyb2xzLmxlbmd0aCA+IC0xKSB7XHJcblx0XHRcdGRhdGEucmVtb3ZlQXQobGluayk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH1cclxuXHR9XHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblxyXG5cdF9jcmVhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRsaW5rczogbmV3IEZvcm1BcnJheShbXSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy53aWRnZXRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHR1cmw6IG5ldyBGb3JtQ29udHJvbChcIi9cIiksXHJcblx0XHRcdGxhYmVsOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfdXBkYXRlX2xpbmtzKGxpbmtzOiBMaW5rSXRlbVtdKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlua3NcIikgYXMgRm9ybUFycmF5KS5yZXNldCgpO1xyXG5cdFx0bGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG5cdFx0XHRjb25zdCBfbGluayA9IHRoaXMuX2dldF9uZXdfZW1wdHlfbGlua19pdGVtKCk7XHJcblx0XHRcdF9saW5rLnBhdGNoVmFsdWUobGluayk7XHJcblx0XHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJsaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2goX2xpbmspO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rc1dpZGdldENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xpbmtzLXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1saW5rcy12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9saW5rcycsICh3aWRnZXQpPy5faWRdXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgPGgzPlxyXG4gICAgICB7e3dpZGdldC5uYW1lfX1cclxuICAgIDwvaDM+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1saXN0IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWxpc3QtaXRlbSBmeExheW91dD1cImNvbHVtblwiICpuZ0Zvcj1cImxldCBsaW5rIG9mICh3aWRnZXQpPy5Db25maWcubGlua3NcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+bGluazwvbWF0LWljb24+XHJcbiAgICAgIDxhIGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCIhbGluay5pc0V4dGVybmFsXCIgZnhGbGV4PVwiZ3Jvd1wiIFtyb3V0ZXJMaW5rXT1cIltsaW5rLnVybF1cIj5cclxuICAgICAgICB7e2xpbmsubGFiZWx9fVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCJsaW5rLmlzRXh0ZXJuYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiBmeEZsZXg9XCJncm93XCIgW2hyZWZdPVwibGluay51cmxcIj5cclxuICAgICAgICB7e2xpbmsubGFiZWx9fVxyXG4gICAgICA8L2E+XHJcbiAgICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgPC9tYXQtbGlzdD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpibG9ja306aG9zdDpob3ZlciAuYWN0aW9uc3tvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlfW1hdC1saXN0IGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmFjdGlvbnN7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlLWluLW91dDtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW59LmFjdGlvbnMgbWF0LWljb257Y29sb3I6IzEyMTIxMn1oM3twYWRkaW5nLXJpZ2h0OjIwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtzVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8TGlua3NXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHRfd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHRzZXQgd2lkZ2V0KHdpZGdldDogV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0d2lkZ2V0LkNvbmZpZy5saW5rcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS51cmwgPSBpdGVtLnVybC5zdGFydHNXaXRoKFwid3d3LlwiKSA/IGl0ZW0udXJsID0gXCJodHRwOi8vXCIgKyBpdGVtLnVybCA6IGl0ZW0udXJsKTtcclxuXHRcdHdpZGdldC5Db25maWcubGlua3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uaXNFeHRlcm5hbCA9IGl0ZW0udXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpKTtcclxuXHRcdHRoaXMuX3dpZGdldCA9IHdpZGdldDtcclxuXHR9XHJcblx0Z2V0IHdpZGdldCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl93aWRnZXQ7XHJcblx0fVxyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBMaXN0V2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlzdC13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlzdC12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9saW5rcycsICh3aWRnZXQpPy5faWRdXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgPGgzPlxyXG4gICAgICB7e3dpZGdldC5uYW1lfX1cclxuICAgIDwvaDM+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1saXN0IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWxpc3QtaXRlbSBmeExheW91dD1cImNvbHVtblwiICpuZ0Zvcj1cImxldCBpdGVtIG9mICh3aWRnZXQpPy5Db25maWcubGlzdFwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJsYXJnZS1pY29uXCIgbWF0LWxpc3QtaWNvbj5hY2NvdW50X2JveDwvbWF0LWljb24+XHJcbiAgICAgIDxoNCBtYXQtbGluZT4ge3tpdGVtLnRpdGxlfX08L2g0PlxyXG4gICAgICA8cCBtYXQtbGluZT4ge3tpdGVtLnN1YnRpdGxlfX0gPC9wPlxyXG4gICAgICA8cCBtYXQtbGluZT4ge3tpdGVtLmRlc2NyaXB0aW9ufX0gPC9wPlxyXG4gICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gIDwvbWF0LWxpc3Q+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlO2Rpc3BsYXk6YmxvY2t9Omhvc3Q6aG92ZXIgLmFjdGlvbnN7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZX1tYXQtbGlzdCBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5hY3Rpb25ze3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufS5hY3Rpb25zIG1hdC1pY29ue2NvbG9yOiMxMjEyMTJ9aDN7cGFkZGluZy1yaWdodDoyMHB4fS5sYXJnZS1pY29ue2ZvbnQtc2l6ZTo1MHB4IWltcG9ydGFudDt3aWR0aDo1MHB4IWltcG9ydGFudDtoZWlnaHQ6NTBweCFpbXBvcnRhbnQ7Y29sb3I6Izk5OX1tYXQtbGlzdHtkaXJlY3Rpb246cnRsfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8TGlzdFdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxMaXN0V2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiwgV2lkZ2V0TW9kZWwsIElXaWRnZXRVcHNlcnQgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuXHJcbmltcG9ydCB7IExpc3RXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9saXN0LXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vbGlzdC13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlzdC11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgPG1hdC1pY29uPmdyYWRpZW50PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHw6LCgMKMPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwhLS0gPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIMOYwqfDmcKBw5jCssOZwojDmcKGw5nCh8OiwoDCjCDDmcKFw5nCiMOYwrHDmMKvIMOZwobDmMK4w5jCsSDDmMKxw5jCpyDDmMKow5jCscOYwqfDmMKzw5jCp8OYwrMgw5nChsOZwojDmMK5IMOYwqLDmcKGIMOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCryAuLi5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT4gLS0+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8aDM+w5nChsOYwqfDmcKFIMOYwqfDmcKBw5jCssOZwojDmcKGw5nChzwvaDM+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2lkZ2V0Rm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICA8aDM+w5nChcOYwqrDmcKGIMOYwqfDmcKBw5jCssOZwojDmcKGw5nChzwvaDM+XHJcbiAgICA8YnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1mYWIgZnhGbGV4QWxpZ249XCJlbmRcIiAoY2xpY2spPVwiYWRkSXRlbSgpXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgKm5nRm9yPVwibGV0IGN0cmwgb2YgJGFueShjb25maWdGb3JtR3JvdXAuZ2V0KCdsaXN0JykpLmNvbnRyb2xzOyBsZXQgaWR4ID0gaW5kZXhcIiBbZm9ybUdyb3VwXT1cImN0cmxcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiAoY2xpY2spPVwicmVtb3ZlbGlzdChpZHgpXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKyw5vCjMOYwrHDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInN1YnRpdGxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRVcHNlcnQ8TGlzdFdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaXN0V2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHdpZGdldEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NyZWF0ZUZvcm1Hcm91cCgpO1xyXG5cdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWw8TGlzdFdpZGdldENvbmZpZ01vZGVsPih7IHR5cGU6IFwibGlzdFwiIH0pO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuX3VwZGF0ZV9saXN0KHRoaXMud2lkZ2V0LkNvbmZpZy5saXN0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXkpLnB1c2godGhpcy5fZ2V0X25ld19lbXB0eV9saXN0X2l0ZW0oKSk7XHJcblx0fVxyXG5cdHJlbW92ZWxpc3QobGlzdCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXk7XHJcblx0XHRpZiAoZGF0YS5jb250cm9scy5sZW5ndGggPiAtMSkge1xyXG5cdFx0XHRkYXRhLnJlbW92ZUF0KGxpc3QpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9XHJcblx0fVxyXG5cdF9jcmVhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRsaXN0OiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLndpZGdldEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0X2dldF9uZXdfZW1wdHlfbGlzdF9pdGVtKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRzdWJ0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF91cGRhdGVfbGlzdChsaXN0OiBMaXN0SXRlbVtdKSB7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXkpLnJlc2V0KCk7XHJcblx0XHRsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0Y29uc3QgX2xpc3QgPSB0aGlzLl9nZXRfbmV3X2VtcHR5X2xpc3RfaXRlbSgpO1xyXG5cdFx0XHRfbGlzdC5wYXRjaFZhbHVlKGl0ZW0pO1xyXG5cdFx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibGlzdFwiKSBhcyBGb3JtQXJyYXkpLnB1c2goX2xpc3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGcm9hbGFFZGl0b3JNb2R1bGUsIEZyb2FsYVZpZXdNb2R1bGUgfSBmcm9tIFwiYW5ndWxhci1mcm9hbGEtd3lzaXd5Z1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcblxyXG4vKipcclxuICogYXJ0aWNsZVxyXG4gKi9cclxuaW1wb3J0IHsgQXJ0aWNsZVVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFydGljbGVWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudFwiO1xyXG4vKipcclxuICogbGlua3NcclxuICovXHJcbmltcG9ydCB7IExpbmtzVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlua3MvbGlua3MtdXBzZXJ0L2xpbmtzLXVwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGlua3NWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlua3MvbGlua3Mtdmlldy9saW5rcy12aWV3LmNvbXBvbmVudFwiO1xyXG4vKipcclxuICogbGlzdHNcclxuICovXHJcbmltcG9ydCB7IExpc3RVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3QtdXBzZXJ0L2xpc3QtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2xpc3QvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdEZyb2FsYUVkaXRvck1vZHVsZS5mb3JSb290KCksXHJcblx0XHRGcm9hbGFWaWV3TW9kdWxlLmZvclJvb3QoKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBcnRpY2xlVXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0QXJ0aWNsZVZpZXdDb21wb25lbnQsXHJcblx0XHRMaW5rc1Vwc2VydENvbXBvbmVudCxcclxuXHRcdExpbmtzVmlld0NvbXBvbmVudCxcclxuXHRcdExpc3RVcHNlcnRDb21wb25lbnQsXHJcblx0XHRMaXN0Vmlld0NvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRBcnRpY2xlVXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0QXJ0aWNsZVZpZXdDb21wb25lbnQsXHJcblx0XHRMaW5rc1Vwc2VydENvbXBvbmVudCxcclxuXHRcdExpbmtzVmlld0NvbXBvbmVudCxcclxuXHRcdExpc3RVcHNlcnRDb21wb25lbnQsXHJcblx0XHRMaXN0Vmlld0NvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW0FydGljbGVWaWV3Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzV2lkZ2V0VHlwZXNNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztJQTZDQyxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQTJCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7S0FDN0U7Ozs7SUFFRCxNQUFNOztRQUNMLE1BQU0sTUFBTSxxQkFDUixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQ2pDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEQ7S0FDRDs7OztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0g7OztZQWhFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNEJDO2dCQUNYLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNaOzs7O1lBdENRLEtBQUs7OztxQkF3Q1osS0FBSzs7Ozs7OztBQzFDUDs7OztJQXdCQyxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0tBQUk7Ozs7SUFFekMsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN6RTs7O1lBbkJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7OztPQU1KO2dCQUNOLE1BQU0sRUFBRSxDQUFDLHVKQUF1SixDQUFDO2FBQ2pLOzs7O1lBakJRLEtBQUs7Ozs7Ozs7QUNGZDs7OztJQWdFQyxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQXlCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDekU7Ozs7SUFFRCxNQUFNOztRQUNMLE1BQU0sTUFBTSxxQkFDUixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQ2pDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsU0FBUztZQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0M7S0FDRDs7Ozs7SUFLRCxPQUFPO1FBQ04sbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFjLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7S0FDdkY7Ozs7O0lBQ0QsVUFBVSxDQUFDLElBQUk7UUFDZCxTQUFTOztRQUNULE1BQU0sSUFBSSxxQkFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQWMsRUFBQztRQUM1RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7S0FDRDs7Ozs7SUFLRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLEtBQUssRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNIOzs7O0lBQ0Qsd0JBQXdCO1FBQ3ZCLE9BQU8sSUFBSSxTQUFTLENBQUM7WUFDcEIsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUN6QixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQzFCLENBQUMsQ0FBQztLQUNIOzs7OztJQUNELGFBQWEsQ0FBQyxLQUFpQjtRQUM5QixtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQWMsR0FBRSxLQUFLLEVBQUUsQ0FBQztRQUN6RCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSTs7WUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDOUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQWMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0QsQ0FBQyxDQUFDO0tBQ0g7OztZQXRIRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStDQztnQkFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQXpEUSxLQUFLOzs7cUJBMkRaLEtBQUs7Ozs7Ozs7QUM3RFA7Ozs7SUFpREMsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtLQUFLOzs7OztJQVYxQyxJQUFJLE1BQU0sQ0FBQyxNQUEyQztRQUNyRCxTQUFTO1FBQ1QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pILE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7O0lBQ0QsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3BCOzs7O0lBSUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN6RTs7O1lBNUNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FzQko7Z0JBQ04sTUFBTSxFQUFFLENBQUMsb1FBQW9RLENBQUM7YUFDOVE7Ozs7WUFqQ1EsS0FBSzs7Ozs7OztBQ0ZkOzs7O0lBb0NDLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FBSzs7OztJQUUxQyxRQUFRO1FBQ1AsU0FBUztRQUNULElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN6RTs7O1lBaENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQko7Z0JBQ04sTUFBTSxFQUFFLENBQUMsc1hBQXNYLENBQUM7YUFDaFk7Ozs7WUE5QlEsS0FBSzs7Ozs7OztBQ0ZkOzs7O0lBOERDLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBd0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUN2RTs7OztJQUVELE1BQU07O1FBQ0wsTUFBTSxNQUFNLHFCQUNSLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssSUFDakM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDekQ7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNDO0tBQ0Q7Ozs7SUFFRCxPQUFPO1FBQ04sbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFjLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUM7S0FDdEY7Ozs7O0lBQ0QsVUFBVSxDQUFDLElBQUk7UUFDZCxTQUFTOztRQUNULE1BQU0sSUFBSSxxQkFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQWMsRUFBQztRQUMzRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7S0FDRDs7OztJQUNELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFFRCx3QkFBd0I7UUFDdkIsT0FBTyxJQUFJLFNBQVMsQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQzFCLFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDN0IsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUNoQyxDQUFDLENBQUM7S0FDSDs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBZ0I7UUFDNUIsbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFjLEdBQUUsS0FBSyxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUk7O1lBQ2pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzlDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsbUJBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFjLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztLQUNIOzs7WUE5R0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0Q0M7Z0JBQ1gsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ1o7Ozs7WUF2RFEsS0FBSzs7O3FCQXlEWixLQUFLOzs7Ozs7O0FDM0RQOzs7WUF3Q0MsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtpQkFDMUI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHNCQUFzQjtvQkFDdEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixpQkFBaUI7aUJBQ2pCO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGlCQUFpQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDL0I7Ozs7Ozs7Ozs7Ozs7OzsifQ==