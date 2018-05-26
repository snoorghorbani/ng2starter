import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { FieldConfig } from "../../models";

@Component({
	selector: "app-form-control",
	templateUrl: "./form-control.component.html"
})
export class FormControlComponent {
	@Input() schema: FieldConfig;
	@Output() changes = new EventEmitter();
	@Output() delete = new EventEmitter();

	width = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	options = new FormArray([
		new FormGroup({
			key: new FormControl(),
			value: new FormControl()
		})
	]);
	tableOptions = new FormGroup({
		dataEndpoint: new FormControl("http://localhost:3000/api/fake/packgeCompareSimpleList")
	});
	constructor() {
		debugger;
	}

	changed() {
		if ([ this.schema.name, this.schema.title, this.schema.inputType ].some(item => !item)) return true;
		if (this.schema.inputType == "table") {
			this.schema.options = this.tableOptions.value;
		} else if (this.schema.inputType == "select") {
			this.schema.options = this.options.value;
		}
		this.changes.emit();
	}

	addOption() {
		this.options.push(
			new FormGroup({
				key: new FormControl(),
				value: new FormControl()
			})
		);
	}
	removeOption(i) {
		this.options.controls.splice(i, 1);
	}
	insertOptions() {
		this.schema.options = this.options.value;
	}
}
