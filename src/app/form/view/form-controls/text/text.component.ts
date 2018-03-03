import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FormControlSchema } from "../../../models";

@Component({
	selector: "ngs-form-control-text",
	templateUrl: "./text.component.html",
	styleUrls: [ "./text.component.scss" ]
})
export class TextComponent {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;

	constructor() {}
}
