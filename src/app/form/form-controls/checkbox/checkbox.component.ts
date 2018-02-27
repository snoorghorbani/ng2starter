import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
<<<<<<< HEAD
	selector: "app-checkbox",
	templateUrl: "./checkbox.component.html",
	styleUrls: [ "./checkbox.component.scss" ]
=======
	selector: "ngs-form-control-checkbox",
	templateUrl: "./checkbox.component.html"
>>>>>>> c2ba1d7561243e144178aeb26928beb48353d32b
})
export class CheckboxComponent {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;

	constructor() {}
}
