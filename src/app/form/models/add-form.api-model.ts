import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormModel } from "../models";

export namespace AddFormApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		name: string;
		form: object[];
		constructor(initValue = {} as AddFormApiModel.Request) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				name: this.name,
				form: this.form
			};
		}
		static get formGroup() {
			return new FormGroup({
				name: new FormControl("", [ Validators.required ]),
				form: new FormControl({})
			});
		}
	}

	export class Response {
		Result: FormModel;
		constructor() {}
	}
}
