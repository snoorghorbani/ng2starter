import { RuleModuleConfig } from "@soushians/rule";

import { GwtThenAuthorizeStep } from "./then-authorize/authorize.gwt-then-step";
import { IfUserHaveRoleGwtGivenStep } from "./if-user-have-role/user-have-role.gwt-given-step";
import { IfUserIsAuthenticatedGwtGivenStep } from "./given-user-is-authenticated/user-is-authenticated.gwt-given-step";

export const ruleModuleConfig: RuleModuleConfig = {
	stepClasses: [ GwtThenAuthorizeStep, IfUserHaveRoleGwtGivenStep, IfUserIsAuthenticatedGwtGivenStep ]
};
