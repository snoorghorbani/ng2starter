import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FieldConfig, Field } from "../../../models";

@Component({
	selector: "ngs-form-control-color",
	templateUrl: "./color.component.html",
	styleUrls: [ "./color.component.scss" ]
})
export class ColorComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	@Input() form: FormGroup;
	@Input() schema: FieldConfig;
	constructor() {}

	ngOnInit() {}
}
