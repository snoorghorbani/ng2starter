import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "app/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormModel } from "../models";

export namespace AddFormApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		Name: string;
		Controls: object[];
		constructor(initValue = {} as AddFormApiModel.Request) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				Name: this.Name,
				Controls: this.Controls
			};
		}
		static get formGroup() {
			return new FormGroup({
				Name: new FormControl("", [ Validators.required ]),
				Controls: new FormGroup({})
			});
		}
	}

	export class Response {
		Result: FormModel;
		constructor() {}
	}
}
