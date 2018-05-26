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
var NgsFormModule = /** @class */ (function () {
    function NgsFormModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsFormModule.forRoot = function (config) {
        return {
            ngModule: RootNgsFormModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    return NgsFormModule;
}());
export { NgsFormModule };
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
var RootNgsFormModule = /** @class */ (function () {
    function RootNgsFormModule() {
    }
    return RootNgsFormModule;
}());
export { RootNgsFormModule };
RootNgsFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsFormModule,
                    StoreModule.forFeature("form", FormReducers)
                ],
                exports: [NgsFormModule]
            },] },
];
//# sourceMappingURL=form.module.js.map
