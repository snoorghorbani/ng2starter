import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserModel } from "./user.model";

export namespace ProfileViewModel {
	export class Request implements HttpRequestBaseModel<Request> {
		Email: string;

		constructor(initValue?: ProfileViewModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}

		static get formGroup() {
			return new FormGroup({
				Username: new FormControl("", [ Validators.minLength(8), Validators.required ])
			});
		}
	}

	export class Response extends UserModel {
		constructor() {
			super();
		}
	}
}
