import * as fromRuleAnchor from "./rule-anchor/rule-anchor.reducer";
import * as fromRuleDbAnchor from "./db/rule-db.reducer";
import * as fromScenarioDbAnchor from "./db/scenario-db.reducer";
export interface RuleState {
    ruleAnchors: fromRuleAnchor.State;
    rules: fromRuleDbAnchor.State;
    scenarios: fromScenarioDbAnchor.State;
}
export declare const RuleReducers: {
    ruleAnchors: typeof fromRuleAnchor.Reducer;
    rules: typeof fromRuleDbAnchor.reducer;
    scenarios: typeof fromScenarioDbAnchor.reducer;
};
export interface AppState {
    "rule": RuleState;
}
