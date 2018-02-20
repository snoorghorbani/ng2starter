import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";

@Component({
	selector: "app-form-group",
	templateUrl: "./form-group.component.html",
	styleUrls: [ "./form-group.component.scss" ]
})
export class FormGroupComponent {
	@Input() schema: FormFieldSchema;
	@Output() change = new EventEmitter();
	constructor() {}

	changed($event) {
		debugger;
		this.change.emit($event);
	}

	addFormGroup(root: FormFieldSchema) {
		const group = new FormFieldSchema("group");
		group.fields = [];
		root.fields.push(group);
		return group;
	}
	addFormArray(root: FormFieldSchema) {
		const array = new FormFieldSchema("array");
		array.fields = [];
		root.fields.push(array);
		return array;
	}
	addFormControl(root: FormFieldSchema) {
		const control = new FormFieldSchema("control");
		root.fields.push(control);
		return control;
	}
}
