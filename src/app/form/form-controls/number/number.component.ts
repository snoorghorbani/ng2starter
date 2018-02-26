import { Component, OnInit, Input } from "@angular/core";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";

@Component({
	selector: "app-number",
	templateUrl: "./number.component.html"
})
export class NumberComponent implements OnInit {
	@Input() schema: FormFieldSchema;
	constructor() {}

	ngOnInit() {}
}
