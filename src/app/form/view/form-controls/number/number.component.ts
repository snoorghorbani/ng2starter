import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FormControlSchema } from "../../../models";

@Component({
	selector: "ngs-form-control-number",
	templateUrl: "./number.component.html",
	styleUrls: [ "./number.component.scss" ]
})
export class NumberComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}

	ngOnInit() {}
}
