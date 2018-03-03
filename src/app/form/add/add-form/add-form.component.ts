import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControlSchema } from "../../models/form-field-schema.model";
import { FormSchemaModel } from "../../models/form-schema.model";
import { AddFormApiModel } from "../../models";

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
		this.formGroup.patchValue(this.schema);
		this.submited.emit(this.formGroup.value);
	}
	changed($event) {
		debugger;
		this.formGroup.patchValue(this.schema);
		this.changes.emit(this.formGroup.value);
	}
	changeOrder($event) {
		debugger;
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
