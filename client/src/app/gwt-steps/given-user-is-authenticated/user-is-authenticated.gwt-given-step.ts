import { Injector, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

import { getAccountInfo, UserFacadeService } from "@soushians/user";
import { GwtStep, GwtStepTypes } from "@soushians/rule";

import { UserIsAuthenticatedGwtGivenStepParams } from "./user-is-authenticated.gwt-given-step-params";
import { GivenUserIsAuthenticatedStepComponent } from "./step-component/given-user-is-authenticated-step.component";

export class IfUserIsAuthenticatedGwtGivenStep implements GwtStep<UserIsAuthenticatedGwtGivenStepParams> {
	id: string;
	name: string;
	opposite: boolean;
	description: string;
	type: GwtStepTypes;
	params: { role: "" };
	stepComponent = GivenUserIsAuthenticatedStepComponent;
	store: Store<any>;
	userFacadeService: UserFacadeService;
	constructor(public injector: Injector) {
		debugger;
		this.id = "if_user_is_authenticated";
		this.name = "if user is authenticated";
		this.description = "هنگامی که کاربر احراز هویت کرده است";
		this.type = GwtStepTypes.Given;
		this.store = this.injector.get(Store);
		this.userFacadeService = this.injector.get(UserFacadeService);
	}
	interperator(params: UserIsAuthenticatedGwtGivenStepParams, elementRef: ElementRef) {
		return this.userFacadeService.getDisplayName().pipe(
			map(userDispalyName => {
				debugger;
				return !!userDispalyName;
			})
		);
	}
}
