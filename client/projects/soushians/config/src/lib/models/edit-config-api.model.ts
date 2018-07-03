import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ConfigModel } from "../models";

export namespace EditConfigApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		Name: string;
		Config: {};
		constructor(initValue = {} as EditConfigApiModel.Request) {
			Object.keys(initValue).forEach(key => ((this as any)[key] = (initValue as any)[key]));
		}

		getRequestBody() {
			return {
				Name: this.Name,
				Config: this.Config
			};
		}
		static get formGroup() {
			return new FormGroup({
				Name: new FormControl("", [ Validators.required ]),
				Config: new FormGroup({})
			});
		}
	}

	export class Response {
		Result: ConfigModel<any>;
		constructor() {}
	}
}
