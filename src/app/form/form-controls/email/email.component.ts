import { Component, OnInit, Input } from "@angular/core";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";

@Component({
	selector: "app-email",
	templateUrl: "./email.component.html"
})
export class EmailComponent implements OnInit {
	@Input() schema: FormFieldSchema;
	constructor() {}

	ngOnInit() {}
}
