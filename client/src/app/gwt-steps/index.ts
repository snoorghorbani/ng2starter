import { RuleModuleConfig } from "@rule";

import { GwtThenAuthorizeStep } from "./then-authorize/authorize.gwt-then-step";
import { IfUserHaveRoleGwtGivenStep } from "./if-user-have-role/user-have-role.gwt-given-step";
import { GwtGivenOperationStep } from "./given-user-have-operation";

export const ruleModuleConfig: RuleModuleConfig = {
	stepClasses: [ GwtGivenOperationStep, GwtThenAuthorizeStep, IfUserHaveRoleGwtGivenStep ]
};
