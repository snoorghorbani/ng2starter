import { env } from "./env";

import { RuleModuleConfig } from "@soushians/rule";

import { IfUserIsAuthenticatedGwtGivenStep } from "../gwt-steps/given-user-is-authenticated/user-is-authenticated.gwt-given-step";
import { IfUserHaveRoleGwtGivenStep } from "../gwt-steps/if-user-have-role/user-have-role.gwt-given-step";
import { GwtThenAuthorizeStep } from "../gwt-steps/then-authorize/authorize.gwt-then-step";

export class NgsRuleModuleConfig implements RuleModuleConfig {
	static stepClasses = [ GwtThenAuthorizeStep, IfUserHaveRoleGwtGivenStep, IfUserIsAuthenticatedGwtGivenStep ];
	static env = env;
}
