import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FieldConfig } from "../../models";
import { Form } from "@angular/forms";

@Component({
	selector: "app-form-group",
	templateUrl: "./form-group.component.html"
})
export class FormGroupComponent {
	@Input() schema: FieldConfig;
	@Input() noHeader: boolean = false;
	@Output() changes = new EventEmitter();
	@Output() delete = new EventEmitter();
	constructor() {
		debugger;
	}

	changed() {
		this.changes.emit();
	}

	addFormGroup(root: FieldConfig) {
		const group = new FieldConfig("group");
		group.fields = [];
		root.fields.push(group);
		this.schema.id = this.schema.id + 1;
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
	deleteFormGroup(idx: number) {
		this.schema.fields.splice(idx, 1);
	}
}
