import { Injector, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

import { getAccountInfo } from "@soushians/user";
import { GwtStep, GwtStepTypes } from "@rule";

import { AppState } from "../../app.reducers";
import { IfUserHaveRoleGwtGivenStepComponent } from "./step-component/operation-gwt-step.component";

export interface IfUserHaveRoleGwtGivenStepParams {
	role: string;
}

export class IfUserHaveRoleGwtGivenStep implements GwtStep<IfUserHaveRoleGwtGivenStepParams> {
	id: string;
	name: string;
	description: string;
	type: GwtStepTypes;
	params: { role: "" };
	stepComponent = IfUserHaveRoleGwtGivenStepComponent;
	store: Store<AppState>;
	constructor(public injector: Injector) {
		this.id = "if_user_have_role_given_step";
		this.name = "if user have role given step";
		this.description = "هنگامی که کاربر نقش .. را دارد";
		this.type = GwtStepTypes.Given;
		this.store = this.injector.get(Store);
	}
	interperator(params: IfUserHaveRoleGwtGivenStepParams, elementRef: ElementRef) {
		const user$ = this.store.select(getAccountInfo);
		return user$.pipe(
			map(user => {
				debugger;
				if (user.Roles.includes(params.role)) return true;
				else return false;
			})
		);
	}
}
