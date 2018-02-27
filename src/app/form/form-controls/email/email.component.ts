import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
<<<<<<< HEAD
	selector: "app-email",
	templateUrl: "./email.component.html",
	styleUrls: [ "./email.component.scss" ]
=======
	selector: "ngs-form-control-email",
	templateUrl: "./email.component.html"
>>>>>>> c2ba1d7561243e144178aeb26928beb48353d32b
})
export class EmailComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}

	ngOnInit() {}
}
