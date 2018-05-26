import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FieldConfig, Field } from "../../../models";

@Component({
	selector: "ngs-form-control-email",
	templateUrl: "./email.component.html",
	styleUrls: [ "./email.component.scss" ]
})
export class EmailComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	constructor() {}

	ngOnInit() {}
}
