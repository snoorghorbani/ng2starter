import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormFieldSchema } from "app/form/models/form-field-schema.model";
import { FormSchema } from "app/form/models/form-schema.model";

@Component({
	selector: "app-addform",
	templateUrl: "./addform.component.html",
	styleUrls: [ "./addform.component.scss" ]
})
export class AddformComponent implements OnInit {
	schema: FormSchema = new FormSchema();
	constructor() {}

	ngOnInit() {}

	changed($event) {
		debugger;
	}
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
