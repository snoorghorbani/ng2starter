import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-checkbox",
	templateUrl: "./checkbox.component.html",
	styleUrls: [ "./checkbox.component.scss" ]
})
export class CheckboxComponent {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;

	constructor() {}
}
