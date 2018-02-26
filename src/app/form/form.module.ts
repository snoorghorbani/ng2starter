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
import { MainContainerComponent } from "./main-container";
import { AddFormComponent, AddFormContainerComponent } from "./add";
import { FormService, FormConfigurationService } from "./services";
import { FormListComponent } from "./list";
import { EditFormComponent } from "./edit";
import { AddFormEffects } from "./add/add-form.effects";
import { EditFormEffects } from "./edit/edit-form.effects";
import { FormGroupComponent } from "./form-group";
import { FormArrayComponent } from "./form-array";
import { FormControlComponent } from "./form-control";
import { FormViewComponent } from "./view";

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
		BrowserAnimationsModule
	],
	declarations: [
		EditFormComponent,
		FormListComponent,
		MainContainerComponent,
		AddFormContainerComponent,
		AddFormComponent,
		FormGroupComponent,
		FormArrayComponent,
		FormControlComponent,
		FormViewComponent
	],
	exports: [ FormViewComponent ]
})
export class NgsFormModule {
	static forRoot(config?: FormModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsFormModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config }, FormService, FormConfigurationService ]
		};
	}
}

@NgModule({
	imports: [ EffectsModule.forFeature([ AddFormEffects, EditFormEffects ]), NgsFormModule, RoutingModule ],
	exports: [ NgsFormModule ]
})
export class RootNgsFormModule {}
