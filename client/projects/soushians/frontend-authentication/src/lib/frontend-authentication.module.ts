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

import { FrontendAuthenticationModuleConfig, MODULE_CONFIG_TOKEN } from "./frontend-authentication.config";
import { FrontendAuthenticationRoutingModule } from "./frontend-authentication-routing.module";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";
import { SigninComponent } from "./dump-components/signin/signin.component";
import { FrontendAuthenticationContainerComponent } from "./smart-components/frontend-authentication-container/frontend-authentication-container.component";

import { WithCredentialInterceptor } from "./interceptors/with-credential.interceptor";
import { UnauthorizedInterceptor } from "./interceptors/unauthorized.interceptor";

import { FrontendAuthenticationReducers } from "./reducers/index";

import { SigninEffects } from "./effects/signin.effects";
import { FrontendAuthenticationEffects } from "./effects/frontend-authentication.effects";
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
	declarations: [ SigninContainerComponent, SigninComponent, FrontendAuthenticationContainerComponent ],
	entryComponents: [ SigninContainerComponent ],
	providers: [],
	exports: []
})
export class NgsFrontendAuthenticationModule {
	static forRoot(
		config: FrontendAuthenticationModuleConfig = <FrontendAuthenticationModuleConfig>{}
	): ModuleWithProviders {
		return {
			ngModule: RootNgsFrontendAuthenticationModule,
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
		StoreModule.forFeature("frontend-authentication", FrontendAuthenticationReducers),
		EffectsModule.forFeature([ SigninEffects, FrontendAuthenticationEffects ]),
		FrontendAuthenticationRoutingModule,
		NgsFrontendAuthenticationModule
	]
})
export class RootNgsFrontendAuthenticationModule {}
