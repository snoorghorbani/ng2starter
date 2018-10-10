/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatDatepickerModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MODULE_CONFIG_TOKEN } from "./form.config";
import { FormReducers } from "./main-container/main-container.reducers";
import { SelectComponent } from "./view/form-controls/select/select.component";
import { FormGroupComponent } from "./add/form-group/form-group.component";
import { FormArrayComponent } from "./add/form-array/form-array.component";
import { FormControlComponent } from "./add/form-control/form-control.component";
import { FormViewComponent, DynamicFieldDirective } from "./view/form-view/form-view.component";
import { TextComponent } from "./view/form-controls/text/text.component";
import { CheckboxComponent } from "./view/form-controls/checkbox/checkbox.component";
import { EmailComponent } from "./view/form-controls/email/email.component";
import { ColorComponent } from "./view/form-controls/color/color.component";
import { NumberComponent } from "./view/form-controls/number/number.component";
import { TableComponent } from "./view/form-controls/table/table.component";
import { EditFormContainerComponent } from "./edit/edit-form-container/edit-form-container.component";
import { EditFormComponent } from "./edit/edit-form/edit-form.component";
import { FormListContainerComponent } from "./list/form-list-container/form-list.container.component";
import { FormListComponent } from "./list/form-list/form-list.component";
import { AddFormContainerComponent } from "./add/add-form-container/add-form-container.component";
import { MainContainerComponent } from "./main-container/main-container.component/main-container.component";
import { AddFormComponent } from "./add/add-form/add-form.component";
import { AddFormEffects } from "./add/add-form.effects";
import { EditFormEffects } from "./edit/edit-form.effects";
import { FormsListEffects } from "./list/list.effects";
import { RoutingModule } from "./form-routing.module";
import { DateFormInputControlComponent } from "./view/form-controls/date/date.component";
import { FileFormInputControlComponent } from "./view/form-controls/file/file.component";
import { CaptchaEffects } from "./add/captcha.effects";
import { FormCaptchaComponent } from "./view/form-controls/form-captcha";
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
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    NgsFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                        FormsModule,
                        RouterModule,
                        CommonModule,
                        MatExpansionModule,
                        MatSnackBarModule,
                        MatIconModule,
                        MatDatepickerModule,
                        MatButtonModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatTableModule,
                        MatSelectModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatTabsModule,
                        MatDividerModule,
                        FlexLayoutModule,
                        MatRadioModule,
                        MatSlideToggleModule,
                        ReactiveFormsModule
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
                },] },
    ];
    return NgsFormModule;
}());
export { NgsFormModule };
var RootNgsFormModule = /** @class */ (function () {
    function RootNgsFormModule() {
    }
    RootNgsFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsFormModule,
                        StoreModule.forFeature("form", FormReducers),
                        EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects, CaptchaEffects]),
                        RoutingModule
                    ],
                    exports: [NgsFormModule]
                },] },
    ];
    return RootNgsFormModule;
}());
export { RootNgsFormModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLG1CQUFtQixFQUNuQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFvQixtQkFBbUIsRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFB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Q2Qsb0JBQW9CO3FCQUVwQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsNkJBQTZCO3dCQUM3Qiw2QkFBNkI7d0JBQzdCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixjQUFjO3dCQUNkLG9CQUFvQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBRTVCOzt3QkF2SEQ7O1NBd0hhLGFBQWE7Ozs7O2dCQVN6QixRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGFBQWE7d0JBQ2IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO3dCQUM1QyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQzt3QkFDN0YsYUFBYTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQ3hCOzs0QkF6SUQ7O1NBMElhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUsIG1lcmdlRWZmZWN0cyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi9mb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGb3JtUmVkdWNlcnMgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUFycmF5Q29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2Zvcm0tYXJyYXkvZm9ybS1hcnJheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybVZpZXdDb21wb25lbnQsIER5bmFtaWNGaWVsZERpcmVjdGl2ZSB9IGZyb20gXCIuL3ZpZXcvZm9ybS12aWV3L2Zvcm0tdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy90ZXh0L3RleHQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbWFpbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9lbWFpbC9lbWFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29sb3JDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvY29sb3IvY29sb3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy90YWJsZS90YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS1jb250YWluZXIvZWRpdC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QtY29udGFpbmVyL2Zvcm0tbGlzdC5jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLWNvbnRhaW5lci9hZGQtZm9ybS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0vYWRkLWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1FZmZlY3RzIH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1FZmZlY3RzIH0gZnJvbSBcIi4vZWRpdC9lZGl0LWZvcm0uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGb3Jtc0xpc3RFZmZlY3RzIH0gZnJvbSBcIi4vbGlzdC9saXN0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2Zvcm0tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvZGF0ZS9kYXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9maWxlL2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhcHRjaGFFZmZlY3RzIH0gZnJvbSBcIi4vYWRkL2NhcHRjaGEuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGb3JtQ2FwdGNoYUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9mb3JtLWNhcHRjaGFcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdEVkaXRGb3JtQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUxpc3RDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRGb3JtTGlzdENvbXBvbmVudCxcclxuXHRcdEFkZEZvcm1Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRNYWluQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0QWRkRm9ybUNvbXBvbmVudCxcclxuXHRcdEZvcm1Hcm91cENvbXBvbmVudCxcclxuXHRcdEZvcm1BcnJheUNvbXBvbmVudCxcclxuXHRcdEZvcm1Db250cm9sQ29tcG9uZW50LFxyXG5cdFx0Rm9ybVZpZXdDb21wb25lbnQsXHJcblx0XHREeW5hbWljRmllbGREaXJlY3RpdmUsXHJcblx0XHRTZWxlY3RDb21wb25lbnQsXHJcblx0XHRDaGVja2JveENvbXBvbmVudCxcclxuXHRcdEVtYWlsQ29tcG9uZW50LFxyXG5cdFx0Q29sb3JDb21wb25lbnQsXHJcblx0XHREYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0VGV4dENvbXBvbmVudCxcclxuXHRcdE51bWJlckNvbXBvbmVudCxcclxuXHRcdFRhYmxlQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUNhcHRjaGFDb21wb25lbnRcclxuXHRcdC8vIE5nc0Zvcm1TZWxlY3RvckNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRTZWxlY3RDb21wb25lbnQsXHJcblx0XHRDaGVja2JveENvbXBvbmVudCxcclxuXHRcdEVtYWlsQ29tcG9uZW50LFxyXG5cdFx0Q29sb3JDb21wb25lbnQsXHJcblx0XHREYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0VGV4dENvbXBvbmVudCxcclxuXHRcdE51bWJlckNvbXBvbmVudCxcclxuXHRcdFRhYmxlQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUNhcHRjaGFDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtGb3JtVmlld0NvbXBvbmVudF1cclxuXHQvLyBleHBvcnRzOiBbIEZvcm1WaWV3Q29tcG9uZW50LCBOZ3NGb3JtU2VsZWN0b3JDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzRm9ybU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogRm9ybU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NGb3JtTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfV1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0Zvcm1Nb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZm9ybVwiLCBGb3JtUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtBZGRGb3JtRWZmZWN0cywgRWRpdEZvcm1FZmZlY3RzLCBGb3Jtc0xpc3RFZmZlY3RzLCBDYXB0Y2hhRWZmZWN0c10pLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogW05nc0Zvcm1Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRm9ybU1vZHVsZSB7IH1cclxuIl19