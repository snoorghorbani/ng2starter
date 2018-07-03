import { Action } from "@ngrx/store";

import { RuleModel } from "../models";

export enum RulesListActionTypes {
	RULES_LIST = "[RULE][DB] RULES_LIST",
	RULES_LIST_START = "[RULE][DB] RULES_LIST_START",
	RULES_LIST_SUCCEED = "[RULE][DB] RULES_LIST_SUCCEED",
	RULES_LIST_FAILED = "[RULE][DB] RULES_LIST_FAILED",
	RULE_UPSERT = "[RULE][DB] RULE_UPSERT",
	GET_RULE = "[RULE][DB] GET_RULE",
	RULE_FETCHED = "[RULE][DB] RULE_FETCHED"
}

export class RulesListAction implements Action {
	readonly type = RulesListActionTypes.RULES_LIST;
}
export class RulesListStartAction implements Action {
	readonly type = RulesListActionTypes.RULES_LIST_START;
}
export class RulesListSucceedAction implements Action {
	readonly type = RulesListActionTypes.RULES_LIST_SUCCEED;
	constructor(public payload: RuleModel[]) {}
}
export class RulesListFailedAction implements Action {
	readonly type = RulesListActionTypes.RULES_LIST_FAILED;
}
export class UpsertRuleAction implements Action {
	readonly type = RulesListActionTypes.RULE_UPSERT;
	constructor(public payload: RuleModel) {}
}
export class GetRuleAction implements Action {
	readonly type = RulesListActionTypes.GET_RULE;
	constructor(public payload: string) {}
}
export class RuleFechedAction implements Action {
	readonly type = RulesListActionTypes.RULE_FETCHED;
	constructor(public payload: RuleModel) {}
}

export type RulesListActions =
	| RulesListAction
	| RulesListStartAction
	| RulesListSucceedAction
	| RulesListFailedAction
	| UpsertRuleAction
	| GetRuleAction
	| RuleFechedAction;
