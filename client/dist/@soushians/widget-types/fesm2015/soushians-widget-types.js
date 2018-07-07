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
class ArticleUpsertComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this._createFormGroup();
    }
    /**
     * @return {?}
     */
    upsert() {
        const /** @type {?} */ widget = Object.assign({}, this.widget, this.widgetFormGroup.value, { Config: this.configFormGroup.value });
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
  <mat-card-content>
      <h3>مشخصات ویجت</h3>
    <div [formGroup]="widgetFormGroup">
      <mat-form-field>
        <input type="text" matInput placeholder="نام"  formControlName="name">
      </mat-form-field>
  </div>
  <mat-divider></mat-divider>
  <h3>تنظیمات ویجت</h3>
    <div [formGroup]="configFormGroup">
        <!-- <editor apiKey="test" [init]="{plugins: 'link'}"></editor> -->
        <mat-form-field>
            <input type="text" matInput placeholder="متن تایید"  formControlName="content">
          </mat-form-field>
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
 * @suppress {checkTypes} checked by tsc
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
    ngOnInit() { }
}
ArticleViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-article-view",
                template: `<mat-card>
  <mat-card-title>{{widget.name}}</mat-card-title>
  <mat-card-content>
    <p>
      article-view works!
    </p>
    <!-- <editor apiKey="test" [init]="{plugins: 'link'}"></editor> -->
    {{(widget)?.Config.content}}
  </mat-card-content>
</mat-card>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
ArticleViewComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                    MatTableModule
                ],
                declarations: [ArticleUpsertComponent, ArticleViewComponent],
                entryComponents: [ArticleUpsertComponent, ArticleViewComponent],
                exports: [ArticleViewComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ArticleUpsertComponent, ArticleViewComponent, NgsWidgetTypesModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC10eXBlcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy9saWIvYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQtdHlwZXMvbGliL3dpZGdldC10eXBlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0U3RhcnRBY3Rpb24sIFdpZGdldE1vZGVsLCBJV2lkZ2V0VXBzZXJ0IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vYXJ0aWNsZS13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtYXJ0aWNsZS11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICA8aDM+w5nChcOYwrTDmMKuw5jCtcOYwqfDmMKqIMOZwojDm8KMw5jCrMOYwqo8L2gzPlxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ3aWRnZXRGb3JtR3JvdXBcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiAgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuICA8aDM+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmcKIw5vCjMOYwqzDmMKqPC9oMz5cbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XG4gICAgICAgIDwhLS0gPGVkaXRvciBhcGlLZXk9XCJ0ZXN0XCIgW2luaXRdPVwie3BsdWdpbnM6ICdsaW5rJ31cIj48L2VkaXRvcj4gLS0+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqrDmMKnw5vCjMObwozDmMKvXCIgIGZvcm1Db250cm9sTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidXBzZXJ0KClcIj5BZGQ8L2J1dHRvbj5cbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XG4gIDwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFydGljbGVVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRVcHNlcnQ8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0QElucHV0KCkgd2lkZ2V0OiBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHdpZGdldEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NyZWF0ZUZvcm1Hcm91cCgpO1xyXG5cdH1cclxuXHJcblx0dXBzZXJ0KCkge1xyXG5cdFx0Y29uc3Qgd2lkZ2V0ID0ge1xyXG5cdFx0XHQuLi50aGlzLndpZGdldCxcclxuXHRcdFx0Li4udGhpcy53aWRnZXRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdENvbmZpZzogdGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbih3aWRnZXQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy53aWRnZXQgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy53aWRnZXQpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMud2lkZ2V0LkNvbmZpZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfY3JlYXRlRm9ybUdyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Y29udGVudDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMud2lkZ2V0Rm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyBBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vYXJ0aWNsZS13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtYXJ0aWNsZS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC10aXRsZT57e3dpZGdldC5uYW1lfX08L21hdC1jYXJkLXRpdGxlPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8cD5cbiAgICAgIGFydGljbGUtdmlldyB3b3JrcyFcbiAgICA8L3A+XG4gICAgPCEtLSA8ZWRpdG9yIGFwaUtleT1cInRlc3RcIiBbaW5pdF09XCJ7cGx1Z2luczogJ2xpbmsnfVwiPjwvZWRpdG9yPiAtLT5cbiAgICB7eyh3aWRnZXQpPy5Db25maWcuY29udGVudH19XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPEFydGljbGVXaWRnZXRDb25maWdNb2RlbD47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuLy8gaW1wb3J0IHsgRWRpdG9yTW9kdWxlIH0gZnJvbSBcIkB0aW55bWNlL3RpbnltY2UtYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHsgQXJ0aWNsZVVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL2FydGljbGUvYXJ0aWNsZS11cHNlcnQvYXJ0aWNsZS11cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFydGljbGVWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vYXJ0aWNsZS9hcnRpY2xlLXZpZXcvYXJ0aWNsZS12aWV3LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZVxyXG5cdFx0Ly8gRWRpdG9yTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFsgQXJ0aWNsZVVwc2VydENvbXBvbmVudCwgQXJ0aWNsZVZpZXdDb21wb25lbnQgXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgQXJ0aWNsZVVwc2VydENvbXBvbmVudCwgQXJ0aWNsZVZpZXdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIEFydGljbGVWaWV3Q29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldFR5cGVzTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztJQXFDQyxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsTUFBTTtRQUNMLHVCQUFNLE1BQU0scUJBQ1IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssSUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUNsQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEQ7S0FDRDs7OztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDcEMsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BDLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0g7OztZQXZERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQW9CRztnQkFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQTlCUSxLQUFLOzs7cUJBZ0NaLEtBQUs7Ozs7Ozs7QUNsQ1A7Ozs7SUEwQkMsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtLQUFJOzs7O0lBRXpDLFFBQVEsTUFBSzs7O1lBcEJiLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Q0FVVjtnQkFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQXBCUSxLQUFLOzs7Ozs7O0FDRmQ7OztZQXlCQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGNBQWM7aUJBRWQ7Z0JBQ0QsWUFBWSxFQUFFLENBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUU7Z0JBQzlELGVBQWUsRUFBRSxDQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFFO2dCQUNqRSxPQUFPLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTthQUNqQzs7Ozs7Ozs7Ozs7Ozs7OyJ9