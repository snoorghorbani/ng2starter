import { env } from "./env";

import { RuleModuleConfig } from "@soushians/rule";
import { IfUserIsAuthenticatedGwtGivenStep, IfUserHaveRoleGwtGivenStep, GwtThenAuthorizeStep } from "@soushians/gwt-steps";

export class NgsRuleModuleConfig implements RuleModuleConfig {
	static stepClasses = [GwtThenAuthorizeStep, IfUserHaveRoleGwtGivenStep, IfUserIsAuthenticatedGwtGivenStep];
	static env = env;
}
