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
	MatCheckbox,
	MatCheckboxModule,
	MatTableModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
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

@NgModule({
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
		// NgsFormSelectorComponent
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
	exports: [ FormViewComponent ]
	// exports: [ FormViewComponent, NgsFormSelectorComponent ]
})
export class NgsFormModule {
	static forRoot(config?: FormModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsFormModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config } ]
		};
	}
}

@NgModule({
	imports: [
		NgsFormModule,
		StoreModule.forFeature("form", FormReducers)
		// EffectsModule.forFeature([ AddFormEffects, EditFormEffects, FormsListEffects ]),
		// RoutingModule
	],
	exports: [ NgsFormModule ]
})
export class RootNgsFormModule {}
