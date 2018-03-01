import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControlSchema } from "../../models";

@Component({
	selector: "app-form-array",
	templateUrl: "./form-array.component.html"
})
export class FormArrayComponent {
	@Input() schema: FormControlSchema;
	@Output() changes = new EventEmitter();
	constructor() {}

	changed() {
		this.changes.emit();
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
