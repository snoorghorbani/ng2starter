import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-email",
	templateUrl: "./email.component.html"
})
export class EmailComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}

	ngOnInit() {}
}
