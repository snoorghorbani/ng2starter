import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectFormControlUiComponent } from "app/form-field-types/select-form-control-ui/select-form-control-ui.component";
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
