import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
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
	MatSlideToggleModule,
	MatDividerModule,
	MatCheckboxModule,
	MatTableModule,
	MatDatepickerModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { FormModuleConfig, MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "./form.config";
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
import { FormCaptchaComponent } from "./view/form-controls/form-captcha/form-captcha.component";
import { FormConfigurationService } from "./services/form-configuration.service";

@NgModule({
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
		// NgsFormSelectorComponent
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
	// exports: [ FormViewComponent, NgsFormSelectorComponent ]
})
export class NgsFormModule {
	static forRoot(config?: FormModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsFormModule,
			providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, FormConfigurationService]
		};
	}
}

@NgModule({
	imports: [
		NgsFormModule,
		StoreModule.forFeature("form", FormReducers),
		EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects, CaptchaEffects]),
		RoutingModule
	],
	exports: [NgsFormModule]
})
export class RootNgsFormModule {
	constructor() {
		(<any>window).___starter = (<any>window).___starter || {};
		(<any>window).___starter.form = "8.0.10";
	}
}
