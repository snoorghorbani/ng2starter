/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as fromRuleAnchor from "./rule-anchor/rule-anchor.reducer";
import * as fromRuleDbAnchor from "./db/rule-db.reducer";
import * as fromScenarioDbAnchor from "./db/scenario-db.reducer";
/**
 * @record
 */
export function RuleState() { }
/** @type {?} */
RuleState.prototype.ruleAnchors;
/** @type {?} */
RuleState.prototype.rules;
/** @type {?} */
RuleState.prototype.scenarios;
/** @type {?} */
export var RuleReducers = {
    ruleAnchors: fromRuleAnchor.Reducer,
    rules: fromRuleDbAnchor.reducer,
    scenarios: fromScenarioDbAnchor.reducer
};
/**
 * @record
 */
export function AppState() { }
/** @type {?} */
AppState.prototype.rule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5yZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9ydWxlLnJlZHVjZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssY0FBYyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEtBQUssb0JBQW9CLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7OztBQVFqRSxXQUFhLFlBQVksR0FBRztJQUMzQixXQUFXLEVBQUUsY0FBYyxDQUFDLE9BQU87SUFDbkMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLE9BQU87SUFDL0IsU0FBUyxFQUFFLG9CQUFvQixDQUFDLE9BQU87Q0FDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21SdWxlQW5jaG9yIGZyb20gXCIuL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVJ1bGVEYkFuY2hvciBmcm9tIFwiLi9kYi9ydWxlLWRiLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVNjZW5hcmlvRGJBbmNob3IgZnJvbSBcIi4vZGIvc2NlbmFyaW8tZGIucmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSdWxlU3RhdGUge1xyXG5cdHJ1bGVBbmNob3JzOiBmcm9tUnVsZUFuY2hvci5TdGF0ZTtcclxuXHRydWxlczogZnJvbVJ1bGVEYkFuY2hvci5TdGF0ZTtcclxuXHRzY2VuYXJpb3M6IGZyb21TY2VuYXJpb0RiQW5jaG9yLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUnVsZVJlZHVjZXJzID0ge1xyXG5cdHJ1bGVBbmNob3JzOiBmcm9tUnVsZUFuY2hvci5SZWR1Y2VyLFxyXG5cdHJ1bGVzOiBmcm9tUnVsZURiQW5jaG9yLnJlZHVjZXIsXHJcblx0c2NlbmFyaW9zOiBmcm9tU2NlbmFyaW9EYkFuY2hvci5yZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRcInJ1bGVcIjogUnVsZVN0YXRlO1xyXG59XHJcbiJdfQ==