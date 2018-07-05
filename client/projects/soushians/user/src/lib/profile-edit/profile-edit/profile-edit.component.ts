import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import { FormGroup } from "@angular/forms";
import { ChangePasswordModel } from "../../models";
import { ConfigModel } from "@soushians/config";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "profile-edit",
	templateUrl: "./profile-edit.component.html"
})
export class ProfileEditComponent implements OnInit {
	@Output() submited = new EventEmitter();
	@Input() userInfo: any;
	@Input() formId: string;
	@Input("roles") roles$: Observable<string[]>;
	@Input() groups: string[];
	constructor(private router: Router) {}

	ngOnInit() {}
	editProfile(form: FormGroup) {
		if (!form.valid) return;
		this.submited.emit(form.value);
	}
	goback() {
		this.router.navigate([ ".." ]);
	}
}
