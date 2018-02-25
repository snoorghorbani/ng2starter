import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { FormFieldSchema } from "app/form/models";

@Component({
	selector: "app-form-control",
	templateUrl: "./form-control.component.html",
	styleUrls: [ "./form-control.component.scss" ]
})
export class FormControlComponent {
	@Input() schema: FormFieldSchema;
	@Output() change = new EventEmitter();

	options = new FormArray([
		new FormGroup({
			key: new FormControl(),
			value: new FormControl()
		})
	]);
	constructor() {}

	changed($event) {
		debugger;
		this.change.emit($event);
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
