import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { UserModel } from "app/models/user";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormModel, EditFormApiModel } from "app/models/form";

@Component({
	selector: "edit-form",
	templateUrl: "./edit-form.component.html"
})
export class EditFormComponent {
	@Input() formGroup: FormGroup;
	@Output() submit = new EventEmitter();
	constructor() {}

	edit() {
		if (!this.formGroup.valid) return;
		return this.submit.emit(this.formGroup);
	}
}
