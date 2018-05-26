import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { FormSchemaModel, AddFormApiModel, FieldConfig } from "../../models";

@Component({
	selector: "ngs-form-add",
	templateUrl: "./add-form.component.html"
})
export class AddFormComponent {
	@Input() schema: FormSchemaModel;
	@Input() formGroup = AddFormApiModel.Request.formGroup;
	@Output() submited = new EventEmitter();
	@Output() changes = new EventEmitter();

	emit() {
		this.formGroup.patchValue({ form: this.schema.form });
		this.submited.emit(this.formGroup.value);
	}
	changed() {
		this.formGroup.patchValue({ form: this.schema.form });
		this.changes.emit(this.formGroup.value);
	}
	changeOrder($event) {
		debugger;
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
