import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { EffectsModule } from "@ngrx/effects";
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
	MatProgressBarModule
} from "@angular/material";

import { NgsConfigModule } from "@soushians/config";

import { LayoutReducers } from "./reducers/index";

import { MODULE_CONFIG_TOKEN, LayoutModuleConfigModel } from "./layout.config";
import { MainMenuComponent } from "./dumb-components/main-menu/main-menu.component";
import { SearchBoxComponent } from "./dumb-components/search-box/search-box.component";
import { LogoContainerComponent } from "./dumb-components/logo-container/logo-container.component";
import { ToolbarMenuComponent } from "./dumb-components/toolbar-menu/toolbar-menu.component";
import { FooterComponent } from "./dumb-components/footer/footer.component";
import { TitleComponent } from "./dumb-components/title/title.component";
import { NgsLayoutMainComponent } from "./dumb-components/main/main.component";
import { LayoutEffects } from "./layout.effects";
import { RuleModule } from "@soushians/rule";

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule,
		FormsModule,
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
		MatToolbarModule,
		MatDatepickerModule,
		MatProgressBarModule,
		RouterModule,
		NgsConfigModule,
		RuleModule
	],
	declarations: [
		MainMenuComponent,
		SearchBoxComponent,
		LogoContainerComponent,
		ToolbarMenuComponent,
		FooterComponent,
		TitleComponent,
		NgsLayoutMainComponent
	],
	exports: [
		MainMenuComponent,
		SearchBoxComponent,
		LogoContainerComponent,
		ToolbarMenuComponent,
		FooterComponent,
		TitleComponent,
		NgsLayoutMainComponent
	]
})
export class NgsLayoutModule {
	static forRoot(config?: LayoutModuleConfigModel): ModuleWithProviders {
		return {
			ngModule: RootNgsLayoutModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config } ]
		};
	}
}

@NgModule({
	imports: [
		NgsLayoutModule,
		StoreModule.forFeature("layout", LayoutReducers),
		EffectsModule.forFeature([ LayoutEffects ])
	],
	exports: [ NgsLayoutModule ]
})
export class RootNgsLayoutModule {}
