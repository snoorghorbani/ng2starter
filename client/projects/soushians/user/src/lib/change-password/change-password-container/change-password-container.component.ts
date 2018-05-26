import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { ChangePasswordModel } from "../../models";

import * as FeatureReducer from "../../feature/feature.reducers";
import { ChangePassword } from "../change-password.actions";

@Component({
	template: `<user-change-password
                (submited)='changePassword($event)'
                [formGroup]="formGroup"
              ></user-change-password>`
})
export class ChangePasswordContainerComponent implements OnInit {
	formGroup = ChangePasswordModel.Request.formGroup;
	ChangePasswordModel = new ChangePasswordModel.Request();
	constructor(private route: ActivatedRoute, private store: Store<FeatureReducer.FeatureState>) { }

	ngOnInit() {
		this.store.select(FeatureReducer.getUserInfo).subscribe((userInfo) => {
			if (!userInfo) return;
			// TODO:
			// this.ChangePasswordModel.Username = userInfo.Username;
		});
	}
	changePassword(event) {
		this.ChangePasswordModel.Password = this.formGroup.get("Password").value;

		this.store.dispatch(new ChangePassword(this.ChangePasswordModel));
	}
}
