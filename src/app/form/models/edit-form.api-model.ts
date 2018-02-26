import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormSchemaModel } from "../models";

export namespace EditFormApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		name: string;
		form: object[];
		constructor(initValue = {} as EditFormApiModel.Request) {
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
				form: new FormGroup({})
			});
		}
	}

	export class Response {
		Result: FormSchemaModel;
		constructor() {}
	}
}
