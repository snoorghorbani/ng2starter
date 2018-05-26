import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
	selector: "auth-signin",
	templateUrl: "./signin.component.html",
	styleUrls: [ "./signin.component.scss" ]
})
export class SigninComponent {
	@Output() signedin = new EventEmitter();

	@Input() formId: string;

	signin(formGroup: FormGroup) {
		if (!formGroup.valid) return;
		this.signedin.emit(formGroup.value);
	}

	constructor() {}
}
