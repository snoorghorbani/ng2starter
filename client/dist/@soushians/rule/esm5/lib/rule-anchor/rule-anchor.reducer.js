/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RuleAnchorsActionTypes } from "./rule-anchor.actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.active;
}
export var /** @type {?} */ initialState = {
    active: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case RuleAnchorsActionTypes.SHOW_ANCHORS: {
            return tslib_1.__assign({}, state, { active: true });
        }
        case RuleAnchorsActionTypes.HIDE_ANCHORS: {
            return tslib_1.__assign({}, state, { active: false });
        }
        default: {
            return state;
        }
    }
}
//#region  selectors
export var /** @type {?} */ getAnchorsActivityState = function (state) { return state.active; };
//#endregion

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1hbmNob3IucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFxQixzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7QUFNbEYsTUFBTSxDQUFDLHFCQUFNLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsS0FBSztDQUNiLENBQUM7Ozs7OztBQUVGLE1BQU0sa0JBQWtCLEtBQW9CLEVBQUUsTUFBeUI7SUFBL0Msc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQyxNQUFNLHNCQUNGLEtBQUssSUFDUixNQUFNLEVBQUUsSUFBSSxJQUNYO1NBQ0Y7UUFFRCxLQUFLLHNCQUFzQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFDLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLE1BQU0sRUFBRSxLQUFLLElBQ1o7U0FDRjtRQUVELFNBQVMsQ0FBQztZQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7O0FBR0QsTUFBTSxDQUFDLHFCQUFNLHVCQUF1QixHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSdWxlQW5jaG9yc0FjdGlvbiwgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3J1bGUtYW5jaG9yLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0YWN0aXZlOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUnVsZUFuY2hvcnNBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSdWxlQW5jaG9yc0FjdGlvblR5cGVzLlNIT1dfQU5DSE9SUzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFjdGl2ZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgUnVsZUFuY2hvcnNBY3Rpb25UeXBlcy5ISURFX0FOQ0hPUlM6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRhY3RpdmU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyNyZWdpb24gIHNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3QgZ2V0QW5jaG9yc0FjdGl2aXR5U3RhdGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5hY3RpdmU7XHJcbi8vI2VuZHJlZ2lvblxyXG4iXX0=