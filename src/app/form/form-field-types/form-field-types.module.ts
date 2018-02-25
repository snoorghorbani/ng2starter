import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	MatSidenavModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	MatInputModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSelectModule,
	MatSliderModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SelectFormControlUiComponent } from "app/form/form-field-types/select-form-control-ui";

@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule,
		MatToolbarModule,
		MatFormFieldModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatCheckboxModule,
		MatRadioModule,
		MatSelectModule,
		MatSliderModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [ SelectFormControlUiComponent ],
	exports: [ SelectFormControlUiComponent ]
})
export class FormFieldTypesModule {}
