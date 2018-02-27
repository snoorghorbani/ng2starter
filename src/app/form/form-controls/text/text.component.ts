import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-text",
	templateUrl: "./text.component.html",
	styleUrls: [ "./text.component.scss" ]
})
export class TextComponent {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;

	constructor() {}
}
