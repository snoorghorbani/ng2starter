/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from "@angular/material";
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
export class NgsFormModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsFormModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    }
}
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
                    TextComponent,
                    NumberComponent,
                    TableComponent
                ],
                entryComponents: [
                    SelectComponent,
                    CheckboxComponent,
                    EmailComponent,
                    ColorComponent,
                    TextComponent,
                    NumberComponent,
                    TableComponent
                ],
                exports: [FormViewComponent]
            },] },
];
export class RootNgsFormModule {
}
RootNgsFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsFormModule,
                    StoreModule.forFeature("form", FormReducers),
                    EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects]),
                    RoutingModule
                ],
                exports: [NgsFormModule]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUVoQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQW9CLG1CQUFtQixFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFD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VSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7b0JBQzVDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFFLENBQUM7b0JBQy9FLGFBQWE7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsYUFBYSxDQUFFO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveCxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUsIG1lcmdlRWZmZWN0cyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi9mb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGb3JtUmVkdWNlcnMgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUFycmF5Q29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2Zvcm0tYXJyYXkvZm9ybS1hcnJheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybVZpZXdDb21wb25lbnQsIER5bmFtaWNGaWVsZERpcmVjdGl2ZSB9IGZyb20gXCIuL3ZpZXcvZm9ybS12aWV3L2Zvcm0tdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy90ZXh0L3RleHQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbWFpbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9lbWFpbC9lbWFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29sb3JDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvY29sb3IvY29sb3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy90YWJsZS90YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS1jb250YWluZXIvZWRpdC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QtY29udGFpbmVyL2Zvcm0tbGlzdC5jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLWNvbnRhaW5lci9hZGQtZm9ybS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0vYWRkLWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1FZmZlY3RzIH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1FZmZlY3RzIH0gZnJvbSBcIi4vZWRpdC9lZGl0LWZvcm0uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGb3Jtc0xpc3RFZmZlY3RzIH0gZnJvbSBcIi4vbGlzdC9saXN0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2Zvcm0tcm91dGluZy5tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RWRpdEZvcm1Db21wb25lbnQsXHJcblx0XHRGb3JtTGlzdENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdEZvcm1MaXN0Q29tcG9uZW50LFxyXG5cdFx0QWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdE1haW5Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRBZGRGb3JtQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUdyb3VwQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUFycmF5Q29tcG9uZW50LFxyXG5cdFx0Rm9ybUNvbnRyb2xDb21wb25lbnQsXHJcblx0XHRGb3JtVmlld0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNGaWVsZERpcmVjdGl2ZSxcclxuXHRcdFNlbGVjdENvbXBvbmVudCxcclxuXHRcdENoZWNrYm94Q29tcG9uZW50LFxyXG5cdFx0RW1haWxDb21wb25lbnQsXHJcblx0XHRDb2xvckNvbXBvbmVudCxcclxuXHRcdFRleHRDb21wb25lbnQsXHJcblx0XHROdW1iZXJDb21wb25lbnQsXHJcblx0XHRUYWJsZUNvbXBvbmVudFxyXG5cdFx0Ly8gTmdzRm9ybVNlbGVjdG9yQ29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdFNlbGVjdENvbXBvbmVudCxcclxuXHRcdENoZWNrYm94Q29tcG9uZW50LFxyXG5cdFx0RW1haWxDb21wb25lbnQsXHJcblx0XHRDb2xvckNvbXBvbmVudCxcclxuXHRcdFRleHRDb21wb25lbnQsXHJcblx0XHROdW1iZXJDb21wb25lbnQsXHJcblx0XHRUYWJsZUNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBGb3JtVmlld0NvbXBvbmVudCBdXHJcblx0Ly8gZXhwb3J0czogWyBGb3JtVmlld0NvbXBvbmVudCwgTmdzRm9ybVNlbGVjdG9yQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0Zvcm1Nb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IEZvcm1Nb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzRm9ybU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0Zvcm1Nb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZm9ybVwiLCBGb3JtUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgQWRkRm9ybUVmZmVjdHMsIEVkaXRGb3JtRWZmZWN0cywgRm9ybXNMaXN0RWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzRm9ybU1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRm9ybU1vZHVsZSB7fVxyXG4iXX0=