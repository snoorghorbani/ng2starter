import { Component, OnInit, Input } from "@angular/core";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";

@Component({
	selector: "app-select-form-control-ui",
	templateUrl: "./select-form-control-ui.component.html",
	styleUrls: [ "./select-form-control-ui.component.scss" ]
})
export class SelectFormControlUiComponent implements OnInit {
	@Input() schema: FormFieldSchema;
	constructor() {}

	ngOnInit() {}
}
