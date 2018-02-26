import { Component, OnInit, Input } from "@angular/core";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";

@Component({
	selector: "app-text",
	templateUrl: "./text.component.html"
})
export class TextComponent implements OnInit {
	@Input() schema: FormFieldSchema;
	constructor() {}

	ngOnInit() {}
}
