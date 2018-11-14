/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { RuleAnchorsActionTypes } from "./rule-anchor.actions";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.active;
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
/** @type {?} */
export const getAnchorsActivityState = (state) => state.active;
//#endregion

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1hbmNob3IucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXFCLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7O0FBTWxGLGFBQWEsWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxLQUFLO0NBQ2IsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxrQkFBa0IsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUF5QjtJQUN0RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6Qyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLElBQUksSUFDWDtTQUNGO1FBRUQsS0FBSyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6Qyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLEtBQUssSUFDWjtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNiO0tBQ0Q7Q0FDRDs7QUFHRCxhQUFhLHVCQUF1QixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnVsZUFuY2hvcnNBY3Rpb24sIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9ydWxlLWFuY2hvci5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRhY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGFjdGl2ZTogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJ1bGVBbmNob3JzQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5TSE9XX0FOQ0hPUlM6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhY3RpdmU6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIFJ1bGVBbmNob3JzQWN0aW9uVHlwZXMuSElERV9BTkNIT1JTOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWN0aXZlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8jcmVnaW9uICBzZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IGdldEFuY2hvcnNBY3Rpdml0eVN0YXRlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuYWN0aXZlO1xyXG4vLyNlbmRyZWdpb25cclxuIl19