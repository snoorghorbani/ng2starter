import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
<<<<<<< HEAD
	selector: "app-text",
	templateUrl: "./text.component.html",
	styleUrls: [ "./text.component.scss" ]
=======
	selector: "ngs-form-control-text",
	templateUrl: "./text.component.html"
>>>>>>> c2ba1d7561243e144178aeb26928beb48353d32b
})
export class TextComponent {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;

	constructor() {}
}
