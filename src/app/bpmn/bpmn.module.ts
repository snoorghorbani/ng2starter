import "bpmn-js/lib/Modeler";

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
	MatRadioModule,
	MatSlideToggleModule,
	MatDividerModule,
	MatGridListModule,
	MatSidenavModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { SharedModule } from "@soushians/shared";
import { InfraModule } from "@soushians/infra";

import { RoutingModule } from "./bpmn-routing.module";
import { BpmnModuleConfig, MODULE_CONFIG_TOKEN } from "./bpmn.config";
import { MainContainerComponent, BpmnReducers } from "./main-container";
import { BpmnService, BpmnConfigurationService } from "./services";
import { ModelerComponent } from "./modeler";
import { BpmnsListEffects, BpmnListContainerComponent, BpmnListComponent } from "./list";
import { UpsertComponent, UpsertContainerComponent, UpsertBpmnEffects } from "./upsert";
import {
	FlowViewComponent,
	FlowViewContainerComponent,
	StartEventComponent,
	DynamicStateComponent,
	AcceptFlowComponent
} from "./view";
import { FlowTestComponent } from "./test";

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
		MatGridListModule,
		MatButtonModule,
		MatSidenavModule,
		MatCardModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatDividerModule,
		FlexLayoutModule,
		MatRadioModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	declarations: [
		MainContainerComponent,
		ModelerComponent,
		BpmnListContainerComponent,
		BpmnListComponent,
		UpsertComponent,
		UpsertContainerComponent,
		FlowViewContainerComponent,
		FlowViewComponent,
		FlowTestComponent,
		DynamicStateComponent,
		StartEventComponent,
		AcceptFlowComponent
	],
	exports: [ FlowViewContainerComponent ]
})
export class NgsBpmnModule {
	static forRoot(config?: BpmnModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsBpmnModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config }, BpmnService, BpmnConfigurationService ]
		};
	}
}

@NgModule({
	imports: [
		NgsBpmnModule,
		StoreModule.forFeature("bpmn", BpmnReducers),
		EffectsModule.forFeature([ BpmnsListEffects, UpsertBpmnEffects ]),
		RoutingModule
	],
	exports: [ NgsBpmnModule ]
})
export class RootNgsBpmnModule {}
