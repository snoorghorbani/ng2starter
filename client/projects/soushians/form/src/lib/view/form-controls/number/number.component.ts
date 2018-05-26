import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FieldConfig } from "../../../models";

@Component({
	selector: "ngs-form-control-number",
	templateUrl: "./number.component.html",
	styleUrls: [ "./number.component.scss" ]
})
export class NumberComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FieldConfig;
	constructor() {}

	ngOnInit() {}
}
