import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import { FormGroup } from "@angular/forms";
import { ChangePasswordModel } from "../../models";
import { ConfigModel } from "@soushians/config";
import { Observable } from "rxjs/Observable";

@Component({
	selector: "profile-edit",
	templateUrl: "./profile-edit.component.html"
})
export class ProfileEditComponent implements OnInit {
	@Output() submited = new EventEmitter();

	@Input() formId: string;
	@Input() formGroup: FormGroup;
	@Input("roles") roles$: Observable<string[]>;
	@Input() groups: string[];
	constructor() {}

	ngOnInit() {}
	editProfile() {
		if (!this.formGroup.valid) return;
		this.submited.emit(this.formGroup.value);
	}
}
