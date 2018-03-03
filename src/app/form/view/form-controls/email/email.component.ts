import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-email",
	templateUrl: "./email.component.html",
	styleUrls: [ "./email.component.scss" ]
})
export class EmailComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}

	ngOnInit() {}
}
