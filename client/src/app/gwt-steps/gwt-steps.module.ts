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
	MatTableModule
} from "@angular/material";

import { OperationGwtStepComponent } from "./given-user-have-operation";
import { GwtThenAuthorizeStepComponent } from "./then-authorize";
import { IfUserHaveRoleGwtGivenStepComponent } from "./if-user-have-role";

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
	declarations: [ OperationGwtStepComponent, GwtThenAuthorizeStepComponent, IfUserHaveRoleGwtGivenStepComponent ],
	entryComponents: [ OperationGwtStepComponent, GwtThenAuthorizeStepComponent, IfUserHaveRoleGwtGivenStepComponent ],
	exports: []
})
export class GwtStepsModule {}
