import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormFieldSchema } from "app/form/models";

@Component({
	selector: "app-form-array",
	templateUrl: "./form-array.component.html",
	styleUrls: [ "./form-array.component.scss" ]
})
export class FormArrayComponent {
	@Input() schema: FormFieldSchema;
	@Output() change = new EventEmitter();
	constructor() {}

	changed($event) {
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
