/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as source from "../actions/source.action";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.data;
var ɵ0 = [];
/** @type {?} */
var initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case source.SourceActionTypes.SOURCE_SUBMIT:
            return tslib_1.__assign({}, state);
        case source.SourceActionTypes.SOURCE_SUBMIT_SUCCEED:
            return tslib_1.__assign({}, state);
        case source.SourceActionTypes.SOURCE_SUBMIT_FAILED:
            return tslib_1.__assign({}, state);
        default:
            return state;
    }
}
/** @type {?} */
export var getSourceListData = function (state) { return state.data; };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxpc3QucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc291cmNlLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL3NvdXJjZS1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O1NBUTVDLEVBQUU7O0FBRFQsSUFBTSxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1IsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxrQkFBa0IsS0FBb0IsRUFBRSxNQUFzQjtJQUE1QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUMzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYTtZQUMxQyw0QkFDSSxLQUFLLEVBQ1A7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUI7WUFDbEQsNEJBQ0ksS0FBSyxFQUNQO1FBQ0gsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CO1lBQ2pELDRCQUNJLEtBQUssRUFDUDtRQUVIO1lBQ0MsT0FBTyxLQUFLLENBQUM7S0FDZDtDQUNEOztBQUVELFdBQWEsaUJBQWlCLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHNvdXJjZSBmcm9tIFwiLi4vYWN0aW9ucy9zb3VyY2UuYWN0aW9uXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsLCBVcHNlcnRTb3VyY2VBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IFNvdXJjZU1vZGVsW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IHNvdXJjZS5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2Ugc291cmNlLlNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2Ugc291cmNlLlNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfU1VDQ0VFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBzb3VyY2UuU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9GQUlMRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U291cmNlTGlzdERhdGEgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=