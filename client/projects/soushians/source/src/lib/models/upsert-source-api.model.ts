import { Injectable } from "@angular/core";
// import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { SourceModel } from "../models";

export namespace UpsertSourceApiModel {
	// export class Request implements HttpRequestBaseModel<Request> {
	export class Request {
		_id: string;
		Endpoint: string;
		Interval: number;
		IsActive: boolean;
		Thresholds: {
			Name: string;
			Formula: string;
			Message: string;
			Type: boolean;
		}[];
		constructor(initValue = {} as UpsertSourceApiModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				_id: this._id,
				Endpoint: this.Endpoint,
				Interval: this.Interval,
				IsActive: this.IsActive,
				Thresholds: this.Thresholds
			};
		}
		static get formGroup() {
			return new FormGroup({
				_id: new FormControl("", [ Validators.required ]),
				Endpoint: new FormControl("", [ Validators.required ]),
				Interval: new FormControl("", [ Validators.required ]),
				IsActive: new FormControl("false", [ Validators.required ]),
				Thresholds: new FormArray([])
			});
		}
	}

	export class Response {
		Result: SourceModel;
		constructor() {}
	}
}
