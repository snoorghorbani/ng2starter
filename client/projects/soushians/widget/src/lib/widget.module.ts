import { NgModule, ModuleWithProviders } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { EffectsModule } from "@ngrx/effects";
import { FlexLayoutModule } from "@angular/flex-layout";

import { WidgetService, WidgetConfigurationService } from "./services";
// import { WidgetReducer } from "./widget.reducer";
import { WidgetModuleConfig, MODULE_CONFIG_TOKEN } from "./widget.config";
import { WidgetRoutingModule } from "./widget-routing.module";
import { RootComponent } from "./root";
import { GetWidgetApiEffects } from "./services/api/get-widget/get-widget.effects";
import { UpsertWidgetApiEffects } from "./services/api/upsert-widget/upsert-widget.effects";
import { GetWidgetsApiEffects } from "./services/api/get-widgets/get-widgets.effects";
import { WidgetReducer } from "./widget.reducer";
import { WidgetDbEffects } from "./root/widgets.effects";
import { WidgetsManagementComponent } from "./mangement";
import { UpsertComponent } from "./upsert/upsert.component";
import { DynamicWidgetConfigDirective } from "./upsert/dynamic-widget-config.directive";
import { DynamicWidgetViewDirective } from "./view/dynamic-widget-view.directive";
import { WidgetSelectorComponent } from "./widget-selector/widget-selector.component";
import { DynamicWidgetViewComponent } from "./view/dynamic-widget-view.component";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
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
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		MatSlideToggleModule,
		MatDividerModule,
		MatCheckboxModule,
		MatTableModule
	],
	declarations: [
		RootComponent,
		WidgetsManagementComponent,
		UpsertComponent,
		DynamicWidgetConfigDirective,
		DynamicWidgetViewDirective,
		WidgetSelectorComponent,
		DynamicWidgetViewComponent
	],
	entryComponents: [ WidgetSelectorComponent, DynamicWidgetViewComponent ],
	exports: [ DynamicWidgetViewDirective, WidgetSelectorComponent, DynamicWidgetViewComponent ]
})
export class NgsWidgetModule {
	static forRoot(config?: WidgetModuleConfig): ModuleWithProviders {
		return {
			ngModule: NgsWidgetRootModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config }, WidgetConfigurationService, WidgetService ]
		};
	}
}

@NgModule({
	imports: [
		NgsWidgetModule,
		WidgetRoutingModule,
		StoreModule.forFeature("widgets", WidgetReducer),
		EffectsModule.forFeature([ WidgetDbEffects, GetWidgetApiEffects, GetWidgetsApiEffects, UpsertWidgetApiEffects ])
	],
	exports: [ NgsWidgetModule ]
})
export class NgsWidgetRootModule {}
