import { Injector } from "@angular/core";
import { timer } from "rxjs";

import { UserService } from "@soushians/user";

import { RuleModuleConfig } from "./rule/rule.config";
import { GwtThenAuthorizeStepComponent } from "./rule/gwt-then-authorize-step/gwt-then-authorize-step.component";
import { GwtStep, OperationGwtStepParams } from "./rule/models/gwt-step.model";
import { GwtStepTypes } from "./rule/models/gwt-step-types.enum";
import { OperationGwtStepComponent } from "./rule/operation-gwt-step/operation-gwt-step.component";

export class OperationGwtStep implements GwtStep<OperationGwtStepParams> {
	name: string;
	type: GwtStepTypes;
	params: { role: "" };
	stepComponent = OperationGwtStepComponent;
	userService: UserService;
	constructor(public injector: Injector) {
		this.name = "operation given step";
		this.type = GwtStepTypes.Given;
		this.userService = this.injector.get(UserService);
	}
	interperator(params: OperationGwtStepParams) {
		debugger;
		// this.userService.getAccountInfo();
		return timer(3000).mapTo(true);
	}
}

export class GwtThenAuthorizeStep implements GwtStep {
	name: string;
	type: GwtStepTypes;
	params: {};
	stepComponent = GwtThenAuthorizeStepComponent;
	userService: UserService;
	constructor(private injector: Injector) {
		this.name = "authorize and show block";
		this.type = GwtStepTypes.Then;
		this.userService = this.injector.get(UserService);
	}
	interperator(params, elementRef) {
		debugger;
		this.userService.getAccountInfo();
		elementRef.nativeElement.style.display = "none";
		return timer(3000).mapTo(true);
	}
}

export const ruleModuleConfig: RuleModuleConfig = {
	stepClasses: [ OperationGwtStep, GwtThenAuthorizeStep ]
};
