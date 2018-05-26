import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";

import { HttpRequestBaseModel } from "@soushians/shared";

import { DiagramModel } from "./diagram.model";

export namespace EditDiagramApiModel {
	export class Request {
		constructor(params: Request) {}
		getRequestQueryParams() {
			return {};
		}
		// TODO:
		static get formGroup() {
			return new FormGroup({
				Name: new FormControl("", [ Validators.required ]),
				IsActive: new FormControl("true", [ Validators.required ]),
				Route: new FormControl("", [ Validators.required ])
			});
		}
	}

	export class Response {
		Result: DiagramModel;
		constructor() {}
	}
}
