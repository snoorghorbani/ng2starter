import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { FormControlSchema } from "../../models";

@Component({
	selector: "app-form-control",
	templateUrl: "./form-control.component.html"
})
export class FormControlComponent {
	@Input() schema: FormControlSchema;
	@Output() changes = new EventEmitter();

	width = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	options = new FormArray([
		new FormGroup({
			key: new FormControl(),
			value: new FormControl()
		})
	]);
	constructor() {}

	changed() {
		debugger;
		if ([ this.schema.name, this.schema.placeholder, this.schema.inputType ].some(item => !item)) return true;
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
		debugger;
		this.schema.options = this.options.value;
	}
}
