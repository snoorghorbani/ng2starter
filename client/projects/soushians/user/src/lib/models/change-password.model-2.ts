import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from "@angular/forms";
import { MatchValidator } from "@soushians/shared";
import { HttpParams } from "@angular/common/http";

export namespace ChangePasswordModel {
	export class Request implements HttpRequestBaseModel<Request> {
		Password: string;

		constructor(initValue?: ChangePasswordModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				Password: this.Password
			};
		}

		static get formGroup() {
			return new FormGroup({
				Password: new FormControl(null, [ Validators.required, Validators.minLength(7) ]),
				Confirm: new FormControl(null, [ Validators.required, MatchValidator("Password") ])
			});
		}
	}
	export class Response {
		constructor() {}
	}
}
