import { __assign } from 'tslib';
import { Component, Input, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UpsertWidgetStartAction } from '@soushians/widget';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ArticleUpsertComponent = /** @class */ (function () {
    function ArticleUpsertComponent(store) {
        this.store = store;
        this._createFormGroup();
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
                    template: "<mat-card>\n  <mat-card-content>\n      <h3>\u0645\u0634\u062E\u0635\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"widgetFormGroup\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\"  formControlName=\"name\">\n      </mat-form-field>\n  </div>\n  <mat-divider></mat-divider>\n  <h3>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u062C\u062A</h3>\n    <div [formGroup]=\"configFormGroup\">\n        <!-- <editor apiKey=\"test\" [init]=\"{plugins: 'link'}\"></editor> -->\n        <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\"  formControlName=\"content\">\n          </mat-form-field>\n    </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button color=\"primary\" (click)=\"upsert()\">Add</button>\n    </mat-card-actions>\n  </mat-card>",
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
    function () { };
    ArticleViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-article-view",
                    template: "<mat-card>\n  <mat-card-title>{{widget.name}}</mat-card-title>\n  <mat-card-content>\n    <p>\n      article-view works!\n    </p>\n    <!-- <editor apiKey=\"test\" [init]=\"{plugins: 'link'}\"></editor> -->\n    {{(widget)?.Config.content}}\n  </mat-card-content>\n</mat-card>\n",
                    styles: [""]
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
                        MatTableModule
                    ],
                    declarations: [ArticleUpsertComponent, ArticleViewComponent],
                    entryComponents: [ArticleUpsertComponent, ArticleViewComponent],
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

export { ArticleUpsertComponent, ArticleViewComponent, NgsWidgetTypesModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC10eXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL3dpZGdldC10eXBlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vYXJ0aWNsZS13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtYXJ0aWNsZS11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICA8aDM+w5nChcOYwrTDmMKuw5jCtcOYwqfDmMKqIMOZwojDm8KMw5jCrMOYwqo8L2gzPlxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ3aWRnZXRGb3JtR3JvdXBcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiAgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8aDM+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmcKIw5vCjMOYwqzDmMKqPC9oMz5cbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XG4gICAgICAgIDwhLS0gPGVkaXRvciBhcGlLZXk9XCJ0ZXN0XCIgW2luaXRdPVwie3BsdWdpbnM6ICdsaW5rJ31cIj48L2VkaXRvcj4gLS0+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqrDmMKnw5vCjMObwozDmMKvXCIgIGZvcm1Db250cm9sTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj5BZGQ8L2J1dHRvbj5cbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XG4gIDwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFydGljbGVVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRVcHNlcnQ8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHdpZGdldEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NyZWF0ZUZvcm1Hcm91cCgpO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfY3JlYXRlRm9ybUdyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Y29udGVudDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vYXJ0aWNsZS13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtYXJ0aWNsZS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC10aXRsZT57e3dpZGdldC5uYW1lfX08L21hdC1jYXJkLXRpdGxlPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8cD5cbiAgICAgIGFydGljbGUtdmlldyB3b3JrcyFcbiAgICA8L3A+XG4gICAgPCEtLSA8ZWRpdG9yIGFwaUtleT1cInRlc3RcIiBbaW5pdF09XCJ7cGx1Z2luczogJ2xpbmsnfVwiPjwvZWRpdG9yPiAtLT5cbiAgICB7eyh3aWRnZXQpPy5Db25maWcuY29udGVudH19XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IEFydGljbGVVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi9hcnRpY2xlL2FydGljbGUtdXBzZXJ0L2FydGljbGUtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2FydGljbGUvYXJ0aWNsZS12aWV3L2FydGljbGUtdmlldy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGVcclxuXHRcdC8vIEVkaXRvck1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIEFydGljbGVVcHNlcnRDb21wb25lbnQsIEFydGljbGVWaWV3Q29tcG9uZW50IF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIEFydGljbGVVcHNlcnRDb21wb25lbnQsIEFydGljbGVWaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBBcnRpY2xlVmlld0NvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRUeXBlc01vZHVsZSB7fVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFxQ0MsZ0NBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCx1Q0FBTTs7O0lBQU47UUFDQyxxQkFBTSxNQUFNLGdCQUNSLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FDbEMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUN6RDs7OztJQUNELHlDQUFROzs7SUFBUjtRQUNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEQ7S0FDRDs7OztJQUVELGlEQUFnQjs7O0lBQWhCO1FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSDs7Z0JBdkRELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsMjVCQW9CRztvQkFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ1o7Ozs7Z0JBOUJRLEtBQUs7Ozt5QkFnQ1osS0FBSzs7aUNBbENQOzs7Ozs7O0FDQUE7SUEwQkMsOEJBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FBSTs7OztJQUV6Qyx1Q0FBUTs7O0lBQVIsZUFBYTs7Z0JBcEJiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUseVJBVVY7b0JBQ0EsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNaOzs7O2dCQXBCUSxLQUFLOzsrQkFGZDs7Ozs7OztBQ0FBOzs7O2dCQXdCQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGNBQWM7cUJBRWQ7b0JBQ0QsWUFBWSxFQUFFLENBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUU7b0JBQzlELGVBQWUsRUFBRSxDQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFFO29CQUNqRSxPQUFPLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTtpQkFDakM7OytCQWxERDs7Ozs7Ozs7Ozs7Ozs7OyJ9