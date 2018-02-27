import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-checkbox",
	templateUrl: "./checkbox.component.html"
})
export class CheckboxComponent {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;

	constructor() {}
}
