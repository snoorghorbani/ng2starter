/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.number;
/** @type {?} */
export var initialState = {
    number: 0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default: {
            return state;
        }
    }
}
/**
 * @record
 */
export function SocketState() { }
/** @type {?} */
SocketState.prototype.change;
/** @type {?} */
export var SocketReducer = {
    change: Reducer
};
/**
 * @record
 */
export function AppState() { }
/** @type {?} */
AppState.prototype.socket;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvY2tldC8iLCJzb3VyY2VzIjpbImxpYi9zb2NrZXQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUtBLFdBQWEsWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxDQUFDO0NBQ1QsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFvQixFQUFFLE1BQWM7SUFBcEMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7Ozs7Ozs7O0FBTUQsV0FBYSxhQUFhLEdBQUc7SUFDNUIsTUFBTSxFQUFFLE9BQU87Q0FDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRudW1iZXI6IG51bWJlcjtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRudW1iZXI6IDBcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU29ja2V0U3RhdGUge1xyXG5cdGNoYW5nZTogU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb2NrZXRSZWR1Y2VyID0ge1xyXG5cdGNoYW5nZTogUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0c29ja2V0OiBTb2NrZXRTdGF0ZTtcclxufVxyXG4iXX0=