import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "app-select",
	templateUrl: "./select.component.html",
	styleUrls: [ "./select.component.scss" ]
})
export class SelectComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}
	ngOnInit() {}
}
