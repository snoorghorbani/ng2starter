import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControlSchema } from "app/form/models/form-field-schema.model";
import { FormSchemaModel } from "app/form/models/form-schema.model";
import { AddFormApiModel } from "../../models";

@Component({
	selector: "ngs-form-add",
	templateUrl: "./add-form.component.html"
})
export class AddFormComponent {
	@Input() schema: FormSchemaModel = new FormSchemaModel();
	@Input() formGroup = AddFormApiModel.Request.formGroup;
	@Output() submited = new EventEmitter();

	emit() {
		debugger;
		this.formGroup.get("form").setValue(this.schema.form);
		this.submited.emit(this.formGroup.value);
	}
	changed($event) {}
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
