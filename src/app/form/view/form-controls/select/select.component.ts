import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-select",
	templateUrl: "./select.component.html",
	styleUrls: [ "./select.component.scss" ]
})
export class SelectComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}
	ngOnInit() {}
}
