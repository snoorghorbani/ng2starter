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
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatTabsModule,
	MatRadioModule
} from "@angular/material";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { SharedModule } from "@soushians/shared";
import { AuthenticationModule } from "@soushians/authentication";

import { RoutingModule } from "./form-routing.module";
import { FormModuleConfig, MODULE_CONFIG_TOKEN } from "./form.config";
import { InfraModule } from "@soushians/infra";

//import { PasswordService, UserService, UserConfigurationService } from "./services";
//import { UserReducers } from "./feature";
//import { UserEffects } from "./feature";

@NgModule({
	imports: [
		HttpClientModule,
		InfraModule,
		FormsModule,
		RouterModule,
		CommonModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		FlexLayoutModule,
		MatRadioModule,
		ReactiveFormsModule,
		AuthenticationModule,
		BrowserAnimationsModule
	],
	declarations: [
		//Components here
	],
	exports: []
})
export class UserModule {
	static forRoot(config: FormModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootFormModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config }
				//UserConfigurationService,
				//PasswordService,
				//UserService
			]
		};
	}
}

@NgModule({
	imports: [
		UserModule,
		// StoreModule.forFeature("user", UserReducers),
		// EffectsModule.forFeature([
		// 	ResetPasswordRequestEffects,
		// 	EditProfileEffects,
		// 	ChangePasswordEffects,
		// 	ProfileViewEffects,
		// 	SearchEffects,
		// 	UserEffects
		// ]),
		RoutingModule
	]
})
export class RootFormModule {}
