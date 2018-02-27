import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
<<<<<<< HEAD
	selector: "app-number",
	templateUrl: "./number.component.html",
	styleUrls: [ "./number.component.scss" ]
=======
	selector: "ngs-form-control-number",
	templateUrl: "./number.component.html"
>>>>>>> c2ba1d7561243e144178aeb26928beb48353d32b
})
export class NumberComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}

	ngOnInit() {}
}
