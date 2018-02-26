import { Component, OnInit, Input } from "@angular/core";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-text",
	templateUrl: "./text.component.html"
})
export class TextComponent {
	@Input() form: FormGroup;
	@Input() schema: FormFieldSchema;

	constructor() {}
}
