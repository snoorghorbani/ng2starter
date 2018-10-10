/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ScenariosListActionTypes } from "./scenario-db.actions";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.status;
/** @type {?} */
State.prototype.data;
/** @type {?} */
export var initialState = {
    status: "pristine",
    data: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ScenariosListActionTypes.SCENARIOS_LIST: {
            return tslib_1.__assign({}, state, { status: "dirty" });
        }
        case ScenariosListActionTypes.SCENARIOS_LIST_START: {
            return tslib_1.__assign({}, state, { status: "pending" });
        }
        case ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED: {
            return tslib_1.__assign({}, state, { data: action.payload, status: "succeed" });
        }
        case ScenariosListActionTypes.SCENARIOS_LIST_FAILED: {
            return tslib_1.__assign({}, state, { status: "failed" });
        }
        case ScenariosListActionTypes.UPSERT: {
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return tslib_1.__assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.SCENARIO_FETCHED: {
            /** @type {?} */
            var data = state.data.concat();
            /** @type {?} */
            var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return tslib_1.__assign({}, state, { data: data });
        }
        case ScenariosListActionTypes.UPDATE_DB: {
            /** @type {?} */
            var data_1 = state.data.concat();
            /** @type {?} */
            var scenarios = action.payload;
            scenarios.forEach(function (scenario) {
                /** @type {?} */
                var entityIdx = state.data.findIndex(function (form) { return form._id == scenario._id; });
                if (entityIdx > -1) {
                    data_1[entityIdx] = Object.assign({}, data_1[entityIdx], scenario);
                }
                else {
                    data_1.push(scenario);
                }
            });
            return tslib_1.__assign({}, state, { data: data_1 });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export var getStatus = function (state) { return state.status; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmFyaW8tZGIucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcnVsZS8iLCJzb3VyY2VzIjpbImxpYi9kYi9zY2VuYXJpby1kYi5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLHdCQUF3QixFQUF3QixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7O0FBTXZGLFdBQWEsWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLElBQUksRUFBRSxFQUFFO0NBQ1IsQ0FBQzs7Ozs7O0FBQ0YsTUFBTSxrQkFBa0IsS0FBb0IsRUFBRSxNQUE0QjtJQUFsRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUMzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM3Qyw0QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLE9BQU8sSUFDZDtTQUNGO1FBQ0QsS0FBSyx3QkFBd0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ25ELDRCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsU0FBUyxJQUNoQjtTQUNGO1FBQ0QsS0FBSyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3JELDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFDcEIsTUFBTSxFQUFFLFNBQVMsSUFDaEI7U0FDRjtRQUNELEtBQUssd0JBQXdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNwRCw0QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFFBQVEsSUFDZjtTQUNGO1FBQ0QsS0FBSyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDckMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7WUFDakMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUE5QixDQUE4QixDQUFDLENBQUM7WUFDN0UsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxJQUFJLElBQ1Q7U0FDRjtRQUNELEtBQUssd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7WUFDL0MsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7WUFDakMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUE5QixDQUE4QixDQUFDLENBQUM7WUFDN0UsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxJQUFJLElBQ1Q7U0FDRjtRQUNELEtBQUssd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBQ3hDLElBQU0sTUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1lBQ2pDLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDakMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7O2dCQUN6QixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkIsTUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDL0Q7cUJBQU07b0JBQ04sTUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEI7YUFDRCxDQUFDLENBQUM7WUFDSCw0QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQUksSUFDVDtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNiO0tBQ0Q7Q0FDRDs7QUFFRCxXQUFXLFNBQVMsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgR3d0U2NlbmFyaW9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3d0LXNjZW5hcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvc0xpc3RBY3Rpb25UeXBlcywgU2NlbmFyaW9zTGlzdEFjdGlvbnMgfSBmcm9tIFwiLi9zY2VuYXJpby1kYi5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogR3d0U2NlbmFyaW9Nb2RlbFtdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IFtdXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNjZW5hcmlvc0xpc3RBY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9TX0xJU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlNDRU5BUklPU19MSVNUX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuVVBTRVJUOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTY2VuYXJpb3NMaXN0QWN0aW9uVHlwZXMuU0NFTkFSSU9fRkVUQ0hFRDoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2NlbmFyaW9zTGlzdEFjdGlvblR5cGVzLlVQREFURV9EQjoge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0Y29uc3Qgc2NlbmFyaW9zID0gYWN0aW9uLnBheWxvYWQ7XHJcblx0XHRcdHNjZW5hcmlvcy5mb3JFYWNoKHNjZW5hcmlvID0+IHtcclxuXHRcdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBzY2VuYXJpby5faWQpO1xyXG5cdFx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBzY2VuYXJpbyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGRhdGEucHVzaChzY2VuYXJpbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIl19