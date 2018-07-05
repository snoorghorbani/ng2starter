import { Action } from "@ngrx/store";
import { RuleModel } from "../models/rule.model";
export declare enum RulesListActionTypes {
    RULES_LIST = "[RULE][DB] RULES_LIST",
    RULES_LIST_START = "[RULE][DB] RULES_LIST_START",
    RULES_LIST_SUCCEED = "[RULE][DB] RULES_LIST_SUCCEED",
    RULES_LIST_FAILED = "[RULE][DB] RULES_LIST_FAILED",
    RULE_UPSERT = "[RULE][DB] RULE_UPSERT",
    GET_RULE = "[RULE][DB] GET_RULE",
    RULE_FETCHED = "[RULE][DB] RULE_FETCHED",
}
export declare class RulesListAction implements Action {
    readonly type: RulesListActionTypes;
}
export declare class RulesListStartAction implements Action {
    readonly type: RulesListActionTypes;
}
export declare class RulesListSucceedAction implements Action {
    payload: RuleModel[];
    readonly type: RulesListActionTypes;
    constructor(payload: RuleModel[]);
}
export declare class RulesListFailedAction implements Action {
    readonly type: RulesListActionTypes;
}
export declare class UpsertRuleAction implements Action {
    payload: RuleModel;
    readonly type: RulesListActionTypes;
    constructor(payload: RuleModel);
}
export declare class GetRuleAction implements Action {
    payload: string;
    readonly type: RulesListActionTypes;
    constructor(payload: string);
}
export declare class RuleFechedAction implements Action {
    payload: RuleModel;
    readonly type: RulesListActionTypes;
    constructor(payload: RuleModel);
}
export declare type RulesListActions = RulesListAction | RulesListStartAction | RulesListSucceedAction | RulesListFailedAction | UpsertRuleAction | GetRuleAction | RuleFechedAction;
