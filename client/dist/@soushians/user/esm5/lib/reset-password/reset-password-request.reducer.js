/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ResetPasswordRequestActionTypes } from "./reset-password-request.actions";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.numberOfRequested;
/** @type {?} */
State.prototype.lastRequestedTime;
/** @type {?} */
State.prototype.disable;
/** @type {?} */
export var initialState = {
    numberOfRequested: 0,
    lastRequestedTime: null,
    disable: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK: {
            return tslib_1.__assign({}, state);
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START: {
            return tslib_1.__assign({}, state, { numberOfRequested: state.numberOfRequested + 1, lastRequestedTime: Date.now().toString() });
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED: {
            return tslib_1.__assign({}, state);
        }
        case ResetPasswordRequestActionTypes.DISABLE_GET_LINK: {
            return tslib_1.__assign({}, state, { disable: true });
        }
        case ResetPasswordRequestActionTypes.ENABLE_GET_LINK: {
            return tslib_1.__assign({}, state, { disable: false });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export var getNumberOfRequeseted = function (state) { return state.numberOfRequested; };
/** @type {?} */
export var getStatus = function (state) { return state.disable; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBOEIsK0JBQStCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7O0FBTy9HLFdBQWEsWUFBWSxHQUFVO0lBQ2xDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixPQUFPLEVBQUUsS0FBSztDQUNkLENBQUM7Ozs7OztBQUNGLE1BQU0sa0JBQWtCLEtBQW9CLEVBQUUsTUFBa0M7SUFBeEQsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssK0JBQStCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUM3RCw0QkFDSSxLQUFLLEVBQ1A7U0FDRjtRQUNELEtBQUssK0JBQStCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUN2RSw0QkFDSSxLQUFLLElBQ1IsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFDOUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUN2QztTQUNGO1FBQ0QsS0FBSywrQkFBK0IsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ3pFLDRCQUNJLEtBQUssRUFDUDtTQUNGO1FBQ0QsS0FBSywrQkFBK0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3RELDRCQUNJLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxJQUNaO1NBQ0Y7UUFDRCxLQUFLLCtCQUErQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3JELDRCQUNJLEtBQUssSUFDUixPQUFPLEVBQUUsS0FBSyxJQUNiO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEOztBQUVELFdBQVcscUJBQXFCLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsaUJBQWlCLEVBQXZCLENBQXVCLENBQUM7O0FBQzdFLFdBQVcsU0FBUyxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbiwgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bnVtYmVyT2ZSZXF1ZXN0ZWQ6IG51bWJlcjtcclxuXHRsYXN0UmVxdWVzdGVkVGltZTogc3RyaW5nO1xyXG5cdGRpc2FibGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bnVtYmVyT2ZSZXF1ZXN0ZWQ6IDAsXHJcblx0bGFzdFJlcXVlc3RlZFRpbWU6IG51bGwsXHJcblx0ZGlzYWJsZTogZmFsc2VcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkdFVF9SRVNFVF9QQVNTV09SRF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRudW1iZXJPZlJlcXVlc3RlZDogc3RhdGUubnVtYmVyT2ZSZXF1ZXN0ZWQgKyAxLFxyXG5cdFx0XHRcdGxhc3RSZXF1ZXN0ZWRUaW1lOiBEYXRlLm5vdygpLnRvU3RyaW5nKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRElTQUJMRV9HRVRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc2FibGU6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5FTkFCTEVfR0VUX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkaXNhYmxlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXROdW1iZXJPZlJlcXVlc2V0ZWQgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5udW1iZXJPZlJlcXVlc3RlZDtcclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kaXNhYmxlO1xyXG4iXX0=