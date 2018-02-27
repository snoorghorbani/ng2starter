import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormControlSchema } from "app/form/models";

@Component({
	selector: "app-form-group",
	templateUrl: "./form-group.component.html",
	styleUrls: [ "./form-group.component.scss" ]
})
export class FormGroupComponent {
	@Input() schema: FormControlSchema;
	@Output() change = new EventEmitter();
	constructor() {}

	changed($event) {
		this.change.emit($event);
	}

	addFormGroup(root: FormControlSchema) {
		const group = new FormControlSchema("group");
		group.fields = [];
		root.fields.push(group);
		return group;
	}
	addFormArray(root: FormControlSchema) {
		const array = new FormControlSchema("array");
		array.fields = [];
		root.fields.push(array);
		return array;
	}
	addFormControl(root: FormControlSchema) {
		const control = new FormControlSchema("control");
		root.fields.push(control);
		return control;
	}
}
