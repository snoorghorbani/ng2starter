import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FieldConfig, Field } from "../../../models";

@Component({
	selector: "ngs-form-control-text",
	templateUrl: "./text.component.html",
	styleUrls: [ "./text.component.scss" ]
})
export class TextComponent implements Field {
	config: FieldConfig;
	group: FormGroup;

	constructor() {}
}
