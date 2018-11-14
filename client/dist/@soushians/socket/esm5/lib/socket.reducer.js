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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvY2tldC8iLCJzb3VyY2VzIjpbImxpYi9zb2NrZXQucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUtBLFdBQWEsWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxDQUFDO0NBQ1QsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxrQkFBa0IsS0FBb0IsRUFBRSxNQUFjO0lBQXBDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEOzs7Ozs7OztBQU1ELFdBQWEsYUFBYSxHQUFHO0lBQzVCLE1BQU0sRUFBRSxPQUFPO0NBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bnVtYmVyOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bnVtYmVyOiAwXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvY2tldFN0YXRlIHtcclxuXHRjaGFuZ2U6IFN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU29ja2V0UmVkdWNlciA9IHtcclxuXHRjaGFuZ2U6IFJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdHNvY2tldDogU29ja2V0U3RhdGU7XHJcbn1cclxuIl19