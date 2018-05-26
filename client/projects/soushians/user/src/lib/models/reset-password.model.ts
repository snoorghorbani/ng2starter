import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from "@angular/forms";
import { MatchValidator } from "@soushians/shared";

export namespace ResetPasswordModel {
	export class Request implements HttpRequestBaseModel<Request> {
		Password: string;
		Token: string;

		constructor(initValue?: ResetPasswordModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				Password: this.Password
				//Token: this.Token,
			};
		}

		static get formGroup() {
			return new FormGroup({
				Token: new FormControl(null, [ Validators.required ]),
				Password: new FormControl("", [ Validators.minLength(8), Validators.required ]),
				Confirm: new FormControl(null, [ Validators.required, MatchValidator("Password") ])
			});
		}
	}
	export class Response {
		constructor() {}
	}
}
