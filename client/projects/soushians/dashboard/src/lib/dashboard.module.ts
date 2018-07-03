import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule, Store } from "@ngrx/store";
import { SharedModule } from "@soushians/shared";
import { GridStackModule } from "ng2-gridstack";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import {
	MatExpansionModule,
	MatSnackBarModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatTabsModule,
	MatRadioModule,
	MatButtonModule,
	MatIconModule,
	MatSidenavModule,
	MatCardModule
} from "@angular/material";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { WidgetListContainerComponent } from "./widget/list";
import { WidgetReducers } from "../main-container";
import { WidgetService } from "./services";
import { DashboardConfigurationService } from "./services/dashboard-configuration.service";
import { MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, DashboardModuleConfig } from "./dashboard.config";
import { WidgetListLayoutComponent } from "./widget/list/widget-list-layout/widget-list-layout.component";
import { AddWidgetContainerComponent } from "./widget/add/add-widget-container";
import { AddWidgetLayoutComponent } from "./widget/add/add-widget-layout";
import { ListComponent } from "./widget/component-list/list/view/list.component";
import { WidgetSelectorComponent } from "./widget/list/widget-selector/widget-selector.component";
import { WidgetEffects } from "./widget";

import { EditListComponent } from "./widget/component-list/list/edit-list/edit-list.component";
import { EditWidgetLayoutComponent } from "./widget/edit/edit-widget-layout";
import { EditWidgetContainerComponent } from "./widget/edit/edit-widget-container";
import { EditWidgetSelectorComponent } from "./widget/edit/edit-widget-selector/edit-widget-selector.component";
import { DiagramComponent } from "./widget/component-list/diagram/view/diagram.component";
import { EditDiagramComponent } from "./widget/component-list/diagram/edit-diagram/edit-diagram.component";

@NgModule({
	imports: [
		CommonModule,
		GridStackModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatCardModule,
		FlexLayoutModule,
		MatFormFieldModule,
		MatInputModule
	],
	declarations: [
		WidgetListLayoutComponent,
		WidgetListContainerComponent,
		AddWidgetLayoutComponent,
		AddWidgetContainerComponent,
		EditWidgetLayoutComponent,
		ListComponent,
		EditListComponent,
		EditWidgetContainerComponent,
		WidgetSelectorComponent,
		EditWidgetSelectorComponent,
		EditDiagramComponent,
		DiagramComponent
	],
	entryComponents: [ ListComponent, EditListComponent, EditDiagramComponent ],
	providers: [ WidgetService, DashboardConfigurationService ]
})
export class DashboardModule {
	static forRoot(config?: DashboardModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootDashboardModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config },
				WidgetService,
				DashboardConfigurationService
			]
		};
	}
}

@NgModule({
	imports: [
		DashboardModule,
		StoreModule.forFeature("widget", WidgetReducers),
		EffectsModule.forFeature([ WidgetEffects ]),
		DashboardRoutingModule
	],
	exports: [ DashboardModule ]
})
export class RootDashboardModule {}
