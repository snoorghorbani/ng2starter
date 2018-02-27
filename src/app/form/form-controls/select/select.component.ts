import { Component, OnInit, Input } from "@angular/core";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormGroup } from "@angular/forms";

@Component({
<<<<<<< HEAD
	selector: "ngs-form-control-select",
	templateUrl: "./select.component.html",
	styleUrls: [ "./select.component.scss" ]
=======
	selector: "ngs-form-control-select",
	templateUrl: "./select.component.html"
>>>>>>> c2ba1d7561243e144178aeb26928beb48353d32b
})
export class SelectComponent implements OnInit {
	@Input() form: FormGroup;
	@Input() schema: FormControlSchema;
	constructor() {}
	ngOnInit() {}
}
