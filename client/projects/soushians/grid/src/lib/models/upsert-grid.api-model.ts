import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { GridModel } from "./grid.model";

export namespace UpsertGridApiModel {
	export class Request {
		grid: GridModel;
		constructor(initValue: Partial<UpsertGridApiModel.Request> = {}) {
			Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return this.grid;
		}
	}

	export class Response {
		Result: GridModel;
		constructor() {}
	}
}
