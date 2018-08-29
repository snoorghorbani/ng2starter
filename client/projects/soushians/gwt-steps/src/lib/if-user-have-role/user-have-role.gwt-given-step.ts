import { Injector, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, debounceTime, filter } from "rxjs/operators";
import { Observable } from "rxjs";

import { getAccountInfo } from "@soushians/user";
import { GwtStep, GwtStepTypes } from "@soushians/rule";

import { IfUserHaveRoleGwtGivenStepComponent } from "./step-component/operation-gwt-step.component";

export interface IfUserHaveRoleGwtGivenStepParams {
	role: string;
}

export class IfUserHaveRoleGwtGivenStep implements GwtStep<IfUserHaveRoleGwtGivenStepParams> {
	id: string;
	name: string;
	opposite: boolean;
	description: string;
	type: GwtStepTypes;
	params: { role: "" };
	stepComponent = IfUserHaveRoleGwtGivenStepComponent;
	store: Store<any>;
	constructor(public injector: Injector) {
		this.id = "if_user_have_role_given_step";
		this.name = "if user have role given step";
		this.description = "هنگامی که کاربر نقش .. را ندارد";
		this.type = GwtStepTypes.Given;
		this.store = this.injector.get(Store);
	}
	interperator(params: IfUserHaveRoleGwtGivenStepParams, elementRef: ElementRef) {
		const user$ = this.store
			.select(getAccountInfo)
			.pipe(filter(user => !!user.Roles), filter(user => user.Roles.length > 0));
		return user$.pipe(
			map(user => {
				debugger;
				return !(user as any).Roles.map(item => item.toLowerCase()).includes(params.role.toLowerCase());
			})
		);
	}
}
