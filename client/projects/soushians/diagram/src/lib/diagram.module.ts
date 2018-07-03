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
	MatTooltipModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatTabsModule,
	MatRadioModule,
	MatCheckboxModule,
	MatGridListModule,
	MatSliderModule,
	MatAutocompleteModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { SharedModule } from "@soushians/shared";

import { DiagramModuleConfig, MODULE_CONFIG_TOKEN } from "./diagram.config";

import { DiagramReducers } from "./reducers";

import { ServerStatusDiagramComponent } from "./dumb-components/server-status-diagram/server-status-diagram.component";
import { DiagramPartialConfigEditComponent } from "./dumb-components/diagram-partial-config-edit/diagram-partial-config-edit.component";
import { PieDiagramPartialConfigComponent } from "./dumb-components/pie-diagram-partial-config/pie-diagram-partial-config.component";
import { BooleanoWidgetPartialConfigComponent } from "./dumb-components/booleano-widget-partial-config/booleano-widget-partial-config.component";
import { NumericWidgetPartialConfigComponent } from "./dumb-components/numeric-widget-partial-config/numeric-widget-partial-config.component";
import { LinearDiagramPartialConfigComponent } from "./dumb-components/linear-diagram-partial-config/linear-diagram-partial-config.component";
import { ServerConnectingTimeDiagramComponent } from "./dumb-components/server-connecting-time-diagram/server-connecting-time-diagram.component";
import { NumericEditDiagramComponent } from "./dumb-components/numeric-edit-diagram/numeric-edit-diagram.component";
import { NumericDiagramComponent } from "./dumb-components/numeric-diagram/numeric-diagram.component";

import { DiagramModuleContainerComponent } from "./smart-components/diagram-module-container/diagram-module-container.component";
import { DataMapperComponent } from "./smart-components/data-mapper/data-mapper.component";

import { AddDiagramComponent } from "./smart-components/add-diagram/add-diagram.component";
import { diagramViewComponent } from "./smart-components/diagram-view/diagram-view.component";
import { DiagramsComponent } from "./smart-components/diagrams/diagrams.component";
import { EditDiagramComponent } from "./smart-components/edit-diagram/edit-diagram.component";
import { DiagramComponent } from "./smart-components/diagram/diagram.component";
import { DynamicComponentSelectorComponent } from "./smart-components/dynamic-component-selector/dynamic-component-selector.component";
import { DynamicConfigComponentSelectorComponent } from "./smart-components/dynamic-config-component-selector/dynamic-config-component-selector.component";

import { DiagramEffects } from "./effects/diagrams.effects";
import { AddDiagramEffects } from "./effects/add-diagram.effects";

import { RoutingModule } from "./diagram-routing.module";
import { DiagramSelectorComponent } from "./smart-components/diagram-selector/diagram-selector.component";

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
		MatSelectModule,
		MatSliderModule,
		MatInputModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatTabsModule,
		FlexLayoutModule,
		MatRadioModule,
		MatTooltipModule,
		MatGridListModule,
		MatAutocompleteModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	declarations: [
		AddDiagramComponent,
		DiagramsComponent,
		diagramViewComponent,
		EditDiagramComponent,
		DynamicConfigComponentSelectorComponent,
		DiagramComponent,
		DynamicComponentSelectorComponent,
		DiagramModuleContainerComponent,
		DataMapperComponent,
		NumericDiagramComponent,
		ServerStatusDiagramComponent,
		DiagramPartialConfigEditComponent,
		PieDiagramPartialConfigComponent,
		BooleanoWidgetPartialConfigComponent,
		NumericWidgetPartialConfigComponent,
		ServerConnectingTimeDiagramComponent,
		NumericEditDiagramComponent,
		LinearDiagramPartialConfigComponent,
		DiagramSelectorComponent
	],
	entryComponents: [ DiagramSelectorComponent, diagramViewComponent ],
	exports: [ DiagramSelectorComponent ],
	providers: []
})
export class NgsDiagramModule {
	static forRoot(config?: DiagramModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsDiagramModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config } ]
		};
	}
}

@NgModule({
	imports: [
		NgsDiagramModule,
		StoreModule.forFeature("diagram", DiagramReducers),
		EffectsModule.forFeature([ DiagramEffects, AddDiagramEffects ]),
		RoutingModule
	],
	exports: [ NgsDiagramModule ]
})
export class RootNgsDiagramModule {}
