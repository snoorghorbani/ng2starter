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
	MatProgressBarModule
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

import { AuthenticationReducers } from "./reducers";

import { SigninEffects } from "./effects/signin.effects";
import { AuthenticationEffects } from "./effects/authentication.effects";
import { SigninService } from "./services/signin.service";

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
	declarations: [ SigninContainerComponent, SigninComponent, AuthenticationContainerComponent ],
	providers: [],
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
		EffectsModule.forFeature([ SigninEffects, AuthenticationEffects ]),
		AuthenticationRoutingModule,
		NgsAuthenticationModule
	]
})
export class RootNgsAuthenticationModule {}
