import { Injector } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

import { getAccountInfo } from "@soushians/user";

import { GwtStep, GwtStepTypes } from "@rule";
import { AppState } from "../../app.reducers";
import { OperationGwtStepComponent } from "./step-component/operation-gwt-step.component";

export interface OperationGwtStepParams {
	operation: string;
}

export class GwtGivenOperationStep implements GwtStep<OperationGwtStepParams> {
	name: string;
	description: string;
	type: GwtStepTypes;
	params: { operation: "" };
	stepComponent = OperationGwtStepComponent;
	store: Store<AppState>;
	constructor(public injector: Injector) {
		this.name = "operation given step";
		this.description = "هنگامی که کاربر دسترسی ... را دارد";
		this.type = GwtStepTypes.Given;
		this.store = this.injector.get(Store);
	}
	interperator(params, elementRef) {
		const user$ = this.store.select(getAccountInfo);
		return user$.pipe(
			map(user => {
				debugger;
				return true;
			})
		);
	}
}
