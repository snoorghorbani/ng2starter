/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as fromRuleAnchor from "./rule-anchor";
import * as fromRuleDbAnchor from "./db/rule-db.reducer";
import * as fromScenarioDbAnchor from "./db/scenario-db.reducer";
/**
 * @record
 */
export function RuleState() { }
function RuleState_tsickle_Closure_declarations() {
    /** @type {?} */
    RuleState.prototype.ruleAnchors;
    /** @type {?} */
    RuleState.prototype.rules;
    /** @type {?} */
    RuleState.prototype.scenarios;
}
export var /** @type {?} */ RuleReducers = {
    ruleAnchors: fromRuleAnchor.Reducer,
    rules: fromRuleDbAnchor.reducer,
    scenarios: fromScenarioDbAnchor.reducer
};
/**
 * @record
 */
export function AppState() { }
function AppState_tsickle_Closure_declarations() {
    /** @type {?} */
    AppState.prototype.rule;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5yZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9ydWxlLnJlZHVjZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssY0FBYyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEtBQUssZ0JBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxLQUFLLG9CQUFvQixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBUWpFLE1BQU0sQ0FBQyxxQkFBTSxZQUFZLEdBQUc7SUFDM0IsV0FBVyxFQUFFLGNBQWMsQ0FBQyxPQUFPO0lBQ25DLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO0lBQy9CLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxPQUFPO0NBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tUnVsZUFuY2hvciBmcm9tIFwiLi9ydWxlLWFuY2hvclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tUnVsZURiQW5jaG9yIGZyb20gXCIuL2RiL3J1bGUtZGIucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tU2NlbmFyaW9EYkFuY2hvciBmcm9tIFwiLi9kYi9zY2VuYXJpby1kYi5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVTdGF0ZSB7XHJcblx0cnVsZUFuY2hvcnM6IGZyb21SdWxlQW5jaG9yLlN0YXRlO1xyXG5cdHJ1bGVzOiBmcm9tUnVsZURiQW5jaG9yLlN0YXRlO1xyXG5cdHNjZW5hcmlvczogZnJvbVNjZW5hcmlvRGJBbmNob3IuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSdWxlUmVkdWNlcnMgPSB7XHJcblx0cnVsZUFuY2hvcnM6IGZyb21SdWxlQW5jaG9yLlJlZHVjZXIsXHJcblx0cnVsZXM6IGZyb21SdWxlRGJBbmNob3IucmVkdWNlcixcclxuXHRzY2VuYXJpb3M6IGZyb21TY2VuYXJpb0RiQW5jaG9yLnJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdFwicnVsZVwiOiBSdWxlU3RhdGU7XHJcbn1cclxuIl19