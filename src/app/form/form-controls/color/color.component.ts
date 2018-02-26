import { Component, OnInit, Input } from "@angular/core";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";

@Component({
	selector: "app-color",
	templateUrl: "./color.component.html"
})
export class ColorComponent implements OnInit {
	@Input() schema: FormFieldSchema;
	constructor() {}

	ngOnInit() {}
}
