import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FieldConfig, Field } from "../../../models";

@Component({
	selector: "ngs-form-control-date",
	templateUrl: "./date.component.html",
	styleUrls: [ "./date.component.scss" ]
})
export class DateFormInputControlComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	constructor() {}
}
