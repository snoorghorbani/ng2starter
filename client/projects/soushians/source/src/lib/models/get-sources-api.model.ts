import { Injectable } from "@angular/core";
// import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SourceModel } from "./source.model";

export namespace GetSourcesApiModel {
	// export class Request implements HttpRequestBaseModel<Request> {
	export class Request {
		constructor(initValue: GetSourcesApiModel.Request = {} as GetSourcesApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {};
		}
	}

	export class Response {
		Result: SourceModel[];
		constructor() {}
	}
}
