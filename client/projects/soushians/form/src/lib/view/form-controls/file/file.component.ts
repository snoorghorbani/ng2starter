import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FieldConfig, Field } from "../../../models";

@Component({
	selector: "ngs-form-control-file",
	templateUrl: "./file.component.html",
	styleUrls: [ "./file.component.scss" ]
})
export class FileFormInputControlComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	constructor() {}
}
