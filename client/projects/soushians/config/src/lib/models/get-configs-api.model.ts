import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ConfigModel } from "./config.model";

export namespace GetConfigsApiModel {
	export class Request implements HttpRequestBaseModel<Request> {
		constructor(initValue: GetConfigsApiModel.Request = {} as GetConfigsApiModel.Request) {
			Object.keys(initValue).forEach(key => ((this as any)[key] = (initValue as any)[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response {
		Result: ConfigModel<any>[];
		constructor() {}
	}
}
