import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";

import { RuleConfigurationService } from "./rule-configuration.service";

import { AppState } from "../rule.reducers";

@Injectable({
	providedIn: "root"
})
export class GwtThenService {
	constructor() {}

	authorization() {
		debugger;
	}
}
