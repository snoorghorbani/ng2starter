/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ResetPasswordRequestActionTypes } from "./reset-password-request.actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.numberOfRequested;
    /** @type {?} */
    State.prototype.lastRequestedTime;
    /** @type {?} */
    State.prototype.disable;
}
export var /** @type {?} */ initialState = {
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
export var /** @type {?} */ getNumberOfRequeseted = function (state) { return state.numberOfRequested; };
export var /** @type {?} */ getStatus = function (state) { return state.disable; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBOEIsK0JBQStCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7OztBQU8vRyxNQUFNLENBQUMscUJBQU0sWUFBWSxHQUFVO0lBQ2xDLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixPQUFPLEVBQUUsS0FBSztDQUNkLENBQUM7Ozs7OztBQUNGLE1BQU0sa0JBQWtCLEtBQW9CLEVBQUUsTUFBa0M7SUFBeEQsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSywrQkFBK0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQzlELE1BQU0sc0JBQ0YsS0FBSyxFQUNQO1NBQ0Y7UUFDRCxLQUFLLCtCQUErQixDQUFDLGlDQUFpQyxFQUFFLENBQUM7WUFDeEUsTUFBTSxzQkFDRixLQUFLLElBQ1IsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFDOUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUN2QztTQUNGO1FBQ0QsS0FBSywrQkFBK0IsQ0FBQyxtQ0FBbUMsRUFBRSxDQUFDO1lBQzFFLE1BQU0sc0JBQ0YsS0FBSyxFQUNQO1NBQ0Y7UUFDRCxLQUFLLCtCQUErQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDdkQsTUFBTSxzQkFDRixLQUFLLElBQ1IsT0FBTyxFQUFFLElBQUksSUFDWjtTQUNGO1FBQ0QsS0FBSywrQkFBK0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN0RCxNQUFNLHNCQUNGLEtBQUssSUFDUixPQUFPLEVBQUUsS0FBSyxJQUNiO1NBQ0Y7UUFFRCxTQUFTLENBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEO0FBRUQsTUFBTSxDQUFDLHFCQUFJLHFCQUFxQixHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLGlCQUFpQixFQUF2QixDQUF1QixDQUFDO0FBQzdFLE1BQU0sQ0FBQyxxQkFBSSxTQUFTLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uLCBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogbnVtYmVyO1xyXG5cdGxhc3RSZXF1ZXN0ZWRUaW1lOiBzdHJpbmc7XHJcblx0ZGlzYWJsZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogMCxcclxuXHRsYXN0UmVxdWVzdGVkVGltZTogbnVsbCxcclxuXHRkaXNhYmxlOiBmYWxzZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG51bWJlck9mUmVxdWVzdGVkOiBzdGF0ZS5udW1iZXJPZlJlcXVlc3RlZCArIDEsXHJcblx0XHRcdFx0bGFzdFJlcXVlc3RlZFRpbWU6IERhdGUubm93KCkudG9TdHJpbmcoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5ESVNBQkxFX0dFVF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGlzYWJsZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc2FibGU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldE51bWJlck9mUmVxdWVzZXRlZCA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm51bWJlck9mUmVxdWVzdGVkO1xyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRpc2FibGU7XHJcbiJdfQ==