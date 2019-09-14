/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RuleAnchorsActionTypes } from "./rule-anchor.actions";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.active;
}
/** @type {?} */
export const initialState = {
    active: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state = initialState, action) {
    switch (action.type) {
        case RuleAnchorsActionTypes.SHOW_ANCHORS: {
            return Object.assign({}, state, { active: true });
        }
        case RuleAnchorsActionTypes.HIDE_ANCHORS: {
            return Object.assign({}, state, { active: false });
        }
        default: {
            return state;
        }
    }
}
//#region  selectors
/** @type {?} */
export const getAnchorsActivityState = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.active);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1hbmNob3IucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXFCLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFbEYsMkJBRUM7OztJQURBLHVCQUFnQjs7O0FBR2pCLE1BQU0sT0FBTyxZQUFZLEdBQVU7SUFDbEMsTUFBTSxFQUFFLEtBQUs7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQXlCO0lBQ3RFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pDLHlCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsSUFBSSxJQUNYO1NBQ0Y7UUFFRCxLQUFLLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pDLHlCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsS0FBSyxJQUNaO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtBQUNGLENBQUM7OztBQUdELE1BQU0sT0FBTyx1QkFBdUI7Ozs7QUFBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGVBbmNob3JzQWN0aW9uLCBSdWxlQW5jaG9yc0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vcnVsZS1hbmNob3IuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRhY3RpdmU6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSdWxlQW5jaG9yc0FjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuU0hPV19BTkNIT1JTOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWN0aXZlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLkhJREVfQU5DSE9SUzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFjdGl2ZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiAgc2VsZWN0b3JzXHJcbmV4cG9ydCBjb25zdCBnZXRBbmNob3JzQWN0aXZpdHlTdGF0ZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmFjdGl2ZTtcclxuLy8jZW5kcmVnaW9uXHJcbiJdfQ==