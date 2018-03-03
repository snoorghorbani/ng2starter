import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "../../../models";
import { FormGroup } from "@angular/forms";

@Component({
	selector: "ngs-form-control-color",
	templateUrl: "./color.component.html",
	styleUrls: [ "./color.component.scss" ]
})
export class ColorComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}

	ngOnInit() {}
}
