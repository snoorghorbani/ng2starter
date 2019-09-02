import { NgModule, ModuleWithProviders } from "@angular/core";
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
	MatCheckboxModule,
	MatTableModule,
	MatBottomSheetModule,
	MatMenuModule,
	MatToolbarModule
} from "@angular/material";
import { EffectsModule } from "@ngrx/effects";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GridsterModule } from "angular-gridster2";

import { GridModuleConfig, MODULE_CONFIG_TOKEN } from "./grid.config";
import { GridRoutingModule } from "./grid-routing.module";
import { GetGridApiEffects } from "./services/api/get-grid/get-grid.effects";
import { UpsertGridApiEffects } from "./services/api/upsert-grid/upsert-grid.effects";
import { GetGridsApiEffects } from "./services/api/get-grids/get-grids.effects";
import { GridReducer } from "./grid.reducer";
import { GridDbEffects } from "./root/grids.effects";
import { RootComponent } from "./root/root.component";
import { GridService } from "./services/grid.service";
import { GridConfigurationService } from "./services/grid-configuration.service";
import { GridComponent } from "./grid/grid.component";
import { GridConfigComponent } from "./grid-config/grid-config.component";
import {
	DynamicGridItremConfigDirective,
	DynamicGridItemConfigComponent
} from "./grid-item/dynamic-grid-item-config.directive";
import { DynamicGridItemViewDirective } from "./grid-item/dynamic-grid-item-view.directive";

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
		MatBottomSheetModule,
		MatRadioModule,
		FlexLayoutModule,
		MatMenuModule,
		MatToolbarModule,
		FormsModule,
		ReactiveFormsModule,
		MatSlideToggleModule,
		MatDividerModule,
		MatCheckboxModule,
		MatTableModule,
		GridsterModule
	],
	declarations: [
		RootComponent,
		GridComponent,
		GridConfigComponent,
		DynamicGridItremConfigDirective,
		DynamicGridItemConfigComponent,
		DynamicGridItemViewDirective
	],
	entryComponents: [ GridConfigComponent, DynamicGridItemConfigComponent ],
	exports: [ GridComponent ]
})
export class NgsGridModule {
	static forRoot(config?: GridModuleConfig): ModuleWithProviders {
		return {
			ngModule: NgsGridRootModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config }, GridConfigurationService, GridService ]
		};
	}
}

@NgModule({
	imports: [
		NgsGridModule,
		GridRoutingModule,
		StoreModule.forFeature("grids", GridReducer),
		EffectsModule.forFeature([ GridDbEffects, GetGridApiEffects, GetGridsApiEffects, UpsertGridApiEffects ])
	],
	exports: [ NgsGridModule ]
})
export class NgsGridRootModule {}
