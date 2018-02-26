import { Component, OnInit, Input } from "@angular/core";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-select",
	templateUrl: "./select.component.html"
})
export class SelectComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormFieldSchema;
	constructor() {}
	ngOnInit() {}
}
