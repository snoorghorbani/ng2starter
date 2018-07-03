import { NgModule, ModuleWithProviders } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSnackBarModule,
	MatSidenavModule,
	MatExpansionModule,
	MatSelectModule,
	MatFormFieldModule,
	MatListModule,
	MatMenuModule,
	MatRadioModule,
	MatInputModule,
	MatToolbarModule,
	MatDatepickerModule,
	MatProgressBarModule,
	MatSlideToggleModule
} from "@angular/material";
import { EffectsModule } from "@ngrx/effects";

import { ConfigModuleConfig, MODULE_CONFIG_TOKEN } from "./config.config";
import { ConfigsComponent } from "./smart-components/configs/configs.component";
import { ConfigEditComponent } from "./smart-components/config-edit/config-edit.component";
import { ConfigAppConfigComponent } from "./dumb-components/app-config/app-config.component";
import { UserModuleConfigComponent } from "./dumb-components/user-module-config/user-module-config.component";
import { LayoutModuleConfigComponent } from "./dumb-components/layout-config/layout-module-config.component";
import { ConfigModuleContainerComponent } from "./smart-components/config-module-container/config-module-container.component";
import { AuthenticationModuleConfigComponent } from "./dumb-components/authentication-module-config/authentication-module-config.component";
import { DynamicConfigComponentSelectorComponent } from "./smart-components/dynamic-config-component-selector/dynamic-config-component-selector.component";
import { LoadConfigEffects } from "./effects/load-config.effects";
import { ConfigReducers } from "./reducers/index";
import { RoutingModule } from "./config.routing-module";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		FlexLayoutModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSnackBarModule,
		MatSidenavModule,
		MatExpansionModule,
		MatSelectModule,
		MatFormFieldModule,
		MatListModule,
		MatMenuModule,
		MatRadioModule,
		MatInputModule,
		MatSlideToggleModule,
		MatToolbarModule,
		MatDatepickerModule,
		MatProgressBarModule,
		BrowserAnimationsModule
	],
	declarations: [
		ConfigsComponent,
		ConfigEditComponent,
		ConfigAppConfigComponent,
		UserModuleConfigComponent,
		LayoutModuleConfigComponent,
		ConfigModuleContainerComponent,
		AuthenticationModuleConfigComponent,
		DynamicConfigComponentSelectorComponent
	],
	providers: []
})
export class NgsConfigModule {
	static forRoot(config: ConfigModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsConfigModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config } ]
		};
	}
}

@NgModule({
	imports: [
		NgsConfigModule,
		StoreModule.forFeature("config", ConfigReducers),
		EffectsModule.forFeature([ LoadConfigEffects ]),
		RoutingModule
	],
	exports: [ NgsConfigModule ]
})
export class RootNgsConfigModule {}
