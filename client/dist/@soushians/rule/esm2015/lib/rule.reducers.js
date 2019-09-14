/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromRuleAnchor from "./rule-anchor/rule-anchor.reducer";
import * as fromRuleDbAnchor from "./db/rule-db.reducer";
import * as fromScenarioDbAnchor from "./db/scenario-db.reducer";
/**
 * @record
 */
export function RuleState() { }
if (false) {
    /** @type {?} */
    RuleState.prototype.ruleAnchors;
    /** @type {?} */
    RuleState.prototype.rules;
    /** @type {?} */
    RuleState.prototype.scenarios;
}
/** @type {?} */
export const RuleReducers = {
    ruleAnchors: fromRuleAnchor.Reducer,
    rules: fromRuleDbAnchor.reducer,
    scenarios: fromScenarioDbAnchor.reducer
};
/**
 * @record
 */
export function AppState() { }
if (false) {
    /** @type {?} */
    AppState.prototype.rule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5yZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9ydWxlLnJlZHVjZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssY0FBYyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEtBQUssb0JBQW9CLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFakUsK0JBSUM7OztJQUhBLGdDQUFrQzs7SUFDbEMsMEJBQThCOztJQUM5Qiw4QkFBc0M7OztBQUd2QyxNQUFNLE9BQU8sWUFBWSxHQUFHO0lBQzNCLFdBQVcsRUFBRSxjQUFjLENBQUMsT0FBTztJQUNuQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztJQUMvQixTQUFTLEVBQUUsb0JBQW9CLENBQUMsT0FBTztDQUN2Qzs7OztBQUVELDhCQUVDOzs7SUFEQSx3QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tUnVsZUFuY2hvciBmcm9tIFwiLi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21SdWxlRGJBbmNob3IgZnJvbSBcIi4vZGIvcnVsZS1kYi5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21TY2VuYXJpb0RiQW5jaG9yIGZyb20gXCIuL2RiL3NjZW5hcmlvLWRiLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZVN0YXRlIHtcclxuXHRydWxlQW5jaG9yczogZnJvbVJ1bGVBbmNob3IuU3RhdGU7XHJcblx0cnVsZXM6IGZyb21SdWxlRGJBbmNob3IuU3RhdGU7XHJcblx0c2NlbmFyaW9zOiBmcm9tU2NlbmFyaW9EYkFuY2hvci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJ1bGVSZWR1Y2VycyA9IHtcclxuXHRydWxlQW5jaG9yczogZnJvbVJ1bGVBbmNob3IuUmVkdWNlcixcclxuXHRydWxlczogZnJvbVJ1bGVEYkFuY2hvci5yZWR1Y2VyLFxyXG5cdHNjZW5hcmlvczogZnJvbVNjZW5hcmlvRGJBbmNob3IucmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0XCJydWxlXCI6IFJ1bGVTdGF0ZTtcclxufVxyXG4iXX0=