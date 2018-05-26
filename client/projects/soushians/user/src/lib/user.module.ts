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

import { NgsFormModule } from "@soushians/form";

import { UserModuleConfig, MODULE_CONFIG_TOKEN } from "./user.config";
import { EditProfileEffects } from "./profile-edit/edit-profile.effects";
import { ProfileViewEffects } from "./profile-view/profile-view.effects";
import { UserEffects } from "./feature/feature.effects";
import { SearchComponent } from "./search-account/search/search.component";
import { ChangePasswordComponent } from "./change-password/change-password/change-password.component";
import { ProfileEditComponent } from "./profile-edit/profile-edit/profile-edit.component";
import { DashboardLinksComponent } from "./dashboard/dashboard-links/dashboard-links.component";
import { ResetPasswordRequestComponent } from "./reset-password/reset-password-request/reset-password-request.component";
import { FeatureContainerComponent } from "./feature/feature-container/feature-container.component";
import { ChangePasswordContainerComponent } from "./change-password/change-password-container/change-password-container.component";
import { ProfileEditContainerComponent } from "./profile-edit/profile-edit-container/profile-edit-container.component";
import { DashboardContainerComponent } from "./dashboard/dashboard-container/dashboard.component";
import { ProfileComponent } from "./profile-view/profile/profile.component";
import { ProfileContainerComponent } from "./profile-view/profile-container/profile-container.component";
import { UserReducers } from "./feature/feature.reducers";

@NgModule({
	imports: [
		HttpClientModule,
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
		BrowserAnimationsModule,
		NgsFormModule
	],
	declarations: [
		SearchComponent,
		ProfileComponent,
		ChangePasswordComponent,
		ProfileEditComponent,
		ProfileContainerComponent,
		DashboardLinksComponent,
		ResetPasswordRequestComponent,
		FeatureContainerComponent,
		DashboardContainerComponent,
		ChangePasswordContainerComponent,
		ProfileEditContainerComponent
	],
	exports: []
})
export class NgsUserModule {
	static forRoot(config?: UserModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsUserModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config } ]
		};
	}
}

@NgModule({
	imports: [
		NgsUserModule,
		StoreModule.forFeature("user", UserReducers),
		EffectsModule.forFeature([
			// ResetPasswordRequestEffects,
			EditProfileEffects,
			// ChangePasswordEffects,
			ProfileViewEffects,
			// SearchEffects,
			UserEffects
		])
	]
})
export class RootNgsUserModule {}
