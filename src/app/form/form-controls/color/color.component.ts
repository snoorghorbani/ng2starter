import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
<<<<<<< HEAD
	selector: "app-color",
	templateUrl: "./color.component.html",
	styleUrls: [ "./color.component.scss" ]
=======
	selector: "ngs-form-control-color",
	templateUrl: "./color.component.html"
>>>>>>> c2ba1d7561243e144178aeb26928beb48353d32b
})
export class ColorComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}

	ngOnInit() {}
}
