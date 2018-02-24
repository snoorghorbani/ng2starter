import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
	MatRadioModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { SharedModule } from "@soushians/shared";
import { InfraModule } from "@soushians/infra";

import { RoutingModule } from "./form-routing.module";
import { FormModuleConfig, MODULE_CONFIG_TOKEN } from "./form.config";
import { MainContainerComponent } from "app/form/main-container";
import { AddFormComponent, AddFormContainerComponent } from "app/form/add";
import { FormService, FormConfigurationService } from "app/form/services";
import { FormListComponent } from "app/form/list";
import { EditFormComponent } from "app/form/edit";
import { AddFormEffects } from "app/form/add/add-form.effects";
import { EditFormEffects } from "app/form/edit/edit-form.effects";

@NgModule({
	imports: [
		HttpClientModule,
		InfraModule,
		FormsModule,
		RouterModule,
		CommonModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		FlexLayoutModule,
		MatRadioModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		EffectsModule.forFeature([ AddFormEffects, EditFormEffects ])
	],
	declarations: [
		AddFormComponent,
		EditFormComponent,
		FormListComponent,
		MainContainerComponent,
		AddFormContainerComponent
	],
	exports: []
})
export class FormModule {
	static forRoot(config?: FormModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootFormModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config }, FormService, FormConfigurationService ]
		};
	}
}

@NgModule({
	imports: [ FormModule, RoutingModule ]
})
export class RootFormModule {}
