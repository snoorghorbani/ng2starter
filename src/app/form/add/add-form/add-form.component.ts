import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";
import { FormSchema } from "app/form/models/form-schema.model";
import { AddFormApiModel } from "../../models";

@Component({
	selector: "ngs-form-add",
	templateUrl: "./add-form.component.html"
})
export class AddFormComponent {
	schema: FormSchema = new FormSchema();
	@Output() submited = new EventEmitter();
	formGroup = AddFormApiModel.Request.formGroup;

	constructor() {}

	add() {
		this.submited.emit(this.formGroup.value);
	}
	changed($event) {}
	addRootControl(type: "array" | "group") {
		debugger;
		this.schema.form = new FormFieldSchema(type);
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
