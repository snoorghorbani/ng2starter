import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
	selector: "auth-signup",
	templateUrl: "./signup.component.html",
	styleUrls: [ "./signup.component.scss" ]
})
export class SignupComponent {
	@Output() signedup = new EventEmitter();

	@Input() formId: string;

	signup(formGroup: FormGroup) {
		if (!formGroup.valid) return;
		this.signedup.emit(formGroup.value);
	}

	constructor() {}
}
