/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RulesListActionTypes } from "./rule-db.actions";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.status;
    /** @type {?} */
    State.prototype.data;
}
var ɵ0 = [];
/** @type {?} */
export var initialState = {
    status: "pristine",
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case RulesListActionTypes.RULES_LIST: {
            return tslib_1.__assign({}, state, { status: "dirty" });
        }
        case RulesListActionTypes.RULES_LIST_START: {
            return tslib_1.__assign({}, state, { status: "pending" });
        }
        case RulesListActionTypes.RULES_LIST_SUCCEED: {
            return tslib_1.__assign({}, state, { data: action.payload, status: "succeed" });
        }
        case RulesListActionTypes.RULES_LIST_FAILED: {
            return tslib_1.__assign({}, state, { status: "failed" });
        }
        case RulesListActionTypes.RULE_UPSERT: {
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            function (form) { return form._id == action.payload._id; }));
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return tslib_1.__assign({}, state, { data: data });
        }
        case RulesListActionTypes.RULE_FETCHED: {
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex((/**
             * @param {?} form
             * @return {?}
             */
            function (form) { return form._id == action.payload._id; }));
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return tslib_1.__assign({}, state, { data: data });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export var getStatus = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.status; });
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1kYi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL2RiL3J1bGUtZGIucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxvQkFBb0IsRUFBb0IsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUUzRSwyQkFHQzs7O0lBRkEsdUJBQTRCOztJQUM1QixxQkFBa0I7O1NBSVosRUFBRTs7QUFGVCxNQUFNLEtBQU8sWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLElBQUksSUFBSTtDQUNSOzs7Ozs7QUFDRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQW9CLEVBQUUsTUFBd0I7SUFBOUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxPQUFPLElBQ2Q7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMzQyw0QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsSUFDaEI7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM3Qyw0QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQ3BCLE1BQU0sRUFBRSxTQUFTLElBQ2hCO1NBQ0Y7UUFDRCxLQUFLLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUMsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxRQUFRLElBQ2Y7U0FDRjtRQUNELEtBQUssb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7O2dCQUNoQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7O2dCQUM1QixTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUE5QixDQUE4QixFQUFDO1lBQzVFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO1NBQ0Y7UUFDRCxLQUFLLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDOztnQkFDakMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFOztnQkFDNUIsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBOUIsQ0FBOEIsRUFBQztZQUM1RSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckU7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDMUI7WUFDRCw0QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLElBQUksSUFDVDtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNiO0tBQ0Q7QUFDRixDQUFDOztBQUVELE1BQU0sS0FBSyxTQUFTOzs7O0FBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcnVsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSdWxlc0xpc3RBY3Rpb25UeXBlcywgUnVsZXNMaXN0QWN0aW9ucyB9IGZyb20gXCIuL3J1bGUtZGIuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IFJ1bGVNb2RlbFtdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IFtdXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJ1bGVzTGlzdEFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRVNfTElTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFU19MSVNUX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSdWxlc0xpc3RBY3Rpb25UeXBlcy5SVUxFX1VQU0VSVDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUnVsZXNMaXN0QWN0aW9uVHlwZXMuUlVMRV9GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiJdfQ==