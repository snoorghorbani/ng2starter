import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { UserModel } from "app/models/user";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormModel, AddFormApiModel } from "app/models/form";

@Component({
	selector: "add-form",
	templateUrl: "./add-form.component.html"
})
export class AddFormComponent {
	@Output() submited = new EventEmitter();
	formGroup = AddFormApiModel.Request.formGroup;
	add() {
		this.submited.emit(this.formGroup.value);
	}
}
