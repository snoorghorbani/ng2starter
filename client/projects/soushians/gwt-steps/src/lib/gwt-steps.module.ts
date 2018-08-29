import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
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
	MatRadioModule,
	MatSlideToggleModule,
	MatDividerModule,
	MatCheckboxModule,
	MatTableModule,
	MatAutocompleteModule
} from "@angular/material";

import { GwtThenAuthorizeStepComponent } from "./then-authorize/step-component/gwt-then-authorize-step.component";
import { IfUserHaveRoleGwtGivenStepComponent } from "./if-user-have-role/step-component/operation-gwt-step.component";
import {
	GivenUserIsAuthenticatedStepComponent
} from "./given-user-is-authenticated/step-component/given-user-is-authenticated-step.component";

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
		MatCheckboxModule,
		MatTableModule,
		MatSelectModule,
		MatAutocompleteModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatDividerModule,
		FlexLayoutModule,
		MatRadioModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	declarations: [
		GwtThenAuthorizeStepComponent,
		IfUserHaveRoleGwtGivenStepComponent,
		GivenUserIsAuthenticatedStepComponent
	],
	entryComponents: [
		GwtThenAuthorizeStepComponent,
		IfUserHaveRoleGwtGivenStepComponent,
		GivenUserIsAuthenticatedStepComponent
	],
	exports: []
})
export class GwtStepsModule { }
