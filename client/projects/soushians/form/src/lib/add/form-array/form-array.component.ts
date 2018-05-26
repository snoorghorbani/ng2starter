import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FieldConfig } from "../../models";

@Component({
	selector: "app-form-array",
	templateUrl: "./form-array.component.html"
})
export class FormArrayComponent {
	@Input() schema: FieldConfig;
	@Output() changes = new EventEmitter();
	constructor() {}

	changed() {
		this.changes.emit();
	}

	addFormGroup(root: FieldConfig) {
		const group = new FieldConfig("group");
		group.fields = [];
		root.fields.push(group);
		return group;
	}
	addFormArray(root: FieldConfig) {
		const array = new FieldConfig("array");
		array.fields = [];
		root.fields.push(array);
		return array;
	}
	addFormControl(root: FieldConfig) {
		const control = new FieldConfig("control");
		root.fields.push(control);
		return control;
	}
}
