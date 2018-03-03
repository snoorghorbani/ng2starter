import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormControlSchema } from "../../models";
import { Form } from "@angular/forms";

@Component({
	selector: "app-form-group",
	templateUrl: "./form-group.component.html"
})
export class FormGroupComponent {
	@Input() schema: FormControlSchema;
	@Output() changes = new EventEmitter();
	@Output() delete = new EventEmitter();
	constructor() {}

	changed() {
		this.changes.emit();
	}

	addFormGroup(root: FormControlSchema) {
		const group = new FormControlSchema("group");
		group.fields = [];
		root.fields.push(group);
		this.schema.id = this.schema.id + 1;
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
	deleteFormGroup(idx: number) {
		this.schema.fields.splice(idx, 1);
	}
}
