import { Component, OnInit, Input } from "@angular/core";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";

@Component({
	selector: "app-checkbox",
	templateUrl: "./checkbox.component.html"
})
export class CheckboxComponent implements OnInit {
	@Input() schema: FormFieldSchema;
	constructor() {}

	ngOnInit() {}
}
