import { Component, OnInit, Input } from "@angular/core";
import { FieldConfig, Field } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-select",
	templateUrl: "./select.component.html",
	styleUrls: [ "./select.component.scss" ]
})
export class SelectComponent implements Field {
	config: FieldConfig;
	group: FormGroup;
	constructor() {}
}
