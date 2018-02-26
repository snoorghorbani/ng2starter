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
import { SelectComponent } from "app/form/form-controls/select/select.component";
import { CheckboxComponent } from "app/form/form-controls/checkbox/checkbox.component";
import { EmailComponent } from "app/form/form-controls/email/email.component";
import { ColorComponent } from "app/form/form-controls";
import { TextComponent } from "app/form/form-controls/text";
import { NumberComponent } from "app/form/form-controls/number";

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
	declarations: [
		SelectComponent,
		CheckboxComponent,
		EmailComponent,
		ColorComponent,
		TextComponent,
		NumberComponent
	],
	exports: [ SelectComponent, CheckboxComponent, EmailComponent, ColorComponent, TextComponent, NumberComponent ]
})
export class FormControlsModule {}
