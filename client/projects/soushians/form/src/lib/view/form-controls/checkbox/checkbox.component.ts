import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Field, FieldConfig } from "../../../models";

@Component({
	selector: "ngs-form-control-checkbox",
	templateUrl: "./checkbox.component.html",
	styleUrls: [ "./checkbox.component.scss" ]
})
export class CheckboxComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	constructor() {}
}
