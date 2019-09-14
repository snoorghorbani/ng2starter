import { NgModule, ModuleWithProviders, InjectionToken, Injectable, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
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
	MatBottomSheetModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { NgsFormModule } from "@soushians/form";

import {
	FrontendAuthenticationContainerComponent
} from "./smart-components/frontend-authentication-container/frontend-authentication-container.component";
import { FrontendAuthenticationModuleConfig, MODULE_CONFIG_TOKEN } from "./frontend-authentication.config";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";
import { FrontendAuthenticationRoutingModule } from "./frontend-authentication-routing.module";
import { SigninComponent } from "./dump-components/signin/signin.component";

import { FrontendAuthenticationReducers } from "./reducers/index";

import { FrontendSigninService } from "./services/signin.service";
import { SigninEffects } from "./effects/signin.effects";
import { FrontendAuthenticationModuleEffects } from "./frontend-authentication.effect";

@NgModule({
	imports: [
		CommonModule,
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
		MatBottomSheetModule,
		MatFormFieldModule,
		MatListModule,
		MatMenuModule,
		MatRadioModule,
		MatInputModule,
		MatToolbarModule,
		MatDatepickerModule,
		MatProgressBarModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		FormsModule,
		NgsFormModule
	],
	declarations: [SigninContainerComponent, SigninComponent, FrontendAuthenticationContainerComponent],
	entryComponents: [SigninContainerComponent],
	providers: [],
	exports: []
})
export class NgsFrontendAuthenticationModule {
	static forRoot(
		config: FrontendAuthenticationModuleConfig = <FrontendAuthenticationModuleConfig>{}
	): ModuleWithProviders {
		return {
			ngModule: RootNgsFrontendAuthenticationModule,
			providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, FrontendSigninService]
		};
	}
}

@NgModule({
	imports: [
		StoreModule.forFeature("frontend-authentication", FrontendAuthenticationReducers),
		EffectsModule.forFeature([FrontendAuthenticationModuleEffects, SigninEffects]),
		FrontendAuthenticationRoutingModule,
		NgsFrontendAuthenticationModule
	]
})
export class RootNgsFrontendAuthenticationModule {
	constructor() {
		(<any>window).___starter = (<any>window).___starter || {};
		(<any>window).___starter.frontend_authentication = "8.0.10";
	}
}
