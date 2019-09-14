// import { name, version } from "../../package.json";

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

import { AuthenticationModuleConfig, MODULE_CONFIG_TOKEN } from "./authentication.config";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";
import { SigninComponent } from "./dump-components/signin/signin.component";
import { AuthenticationContainerComponent } from "./smart-components/authentication-container/authentication-container.component";

import { WithCredentialInterceptor } from "./interceptors/with-credential.interceptor";
import { UnauthorizedInterceptor } from "./interceptors/unauthorized.interceptor";

import { AuthenticationReducers } from "./reducers/index";

import { SigninEffects } from "./effects/signin.effects";
import { AuthenticationEffects } from "./effects/authentication.effects";
import { SigninService } from "./services/signin.service";
import { SignupContainerComponent } from "./smart-components/signup-container/signup-container.component";
import { SignupComponent } from "./dump-components/signup/signup.component";
import { SigninGuard } from "./routing-guards/signin.guard";

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
	declarations: [
		SigninContainerComponent,
		SigninComponent,
		AuthenticationContainerComponent,
		SignupContainerComponent,
		SignupComponent
	],
	entryComponents: [SigninContainerComponent],
	providers: [SigninGuard],
	exports: []
})
export class NgsAuthenticationModule {
	static forRoot(config: AuthenticationModuleConfig = <AuthenticationModuleConfig>{}): ModuleWithProviders {
		return {
			ngModule: RootNgsAuthenticationModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config },
				{
					provide: HTTP_INTERCEPTORS,
					useClass: UnauthorizedInterceptor,
					multi: true
				},
				{
					provide: HTTP_INTERCEPTORS,
					useClass: WithCredentialInterceptor,
					multi: true
				},
				SigninService
			]
		};
	}
}

@NgModule({
	imports: [
		StoreModule.forFeature("authentication", AuthenticationReducers),
		EffectsModule.forFeature([SigninEffects, AuthenticationEffects]),
		AuthenticationRoutingModule,
		NgsAuthenticationModule
	]
})
export class RootNgsAuthenticationModule {
	constructor() {
		(<any>window).___starter = (<any>window).___starter || {};
		(<any>window).___starter.authentication = "7.8.0";
	}
}
