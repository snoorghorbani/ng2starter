/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { WidgetsActionTypes } from "./widget.actions";
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
    /** @type {?} */
    var _data;
    switch (action.type) {
        case WidgetsActionTypes.UPSERT:
            _data = state.data.concat();
            /** @type {?} */
            var newWidgets = action.payload;
            if (!(newWidgets instanceof Array)) {
                newWidgets = [newWidgets];
                console.error("'WidgetsActionTypes.UPSERT' does not get array payload");
            }
            newWidgets.forEach(function (newWidget) {
                /** @type {?} */
                var existedWidgetIndex = _data.findIndex(function (w) { return w._id == newWidget._id; });
                if (existedWidgetIndex > -1) {
                    _data.splice(existedWidgetIndex, 1, newWidget);
                }
                else {
                    _data.push(newWidget);
                }
            });
            return tslib_1.__assign({}, state, { data: _data });
        case WidgetsActionTypes.DELETE:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            var widgetIndex = state.data.findIndex(function (w) { return w._id == action.payload._id; });
            if (widgetIndex > -1) {
                _data.splice(widgetIndex, 1);
            }
            return tslib_1.__assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
export var getWidgets = function (state) { return state.data; };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5yZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3Jvb3Qvd2lkZ2V0cy5yZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBa0Isa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztTQU8vRCxFQUFFOztBQURULElBQU0sWUFBWSxHQUFVO0lBQzNCLElBQUksSUFBSTtDQUNSLENBQUM7Ozs7OztBQUVGLE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBb0IsRUFBRSxNQUFzQjtJQUE1QyxzQkFBQSxFQUFBLG9CQUFvQjs7SUFDM0MsSUFBSSxLQUFLLENBQXFCO0lBQzlCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLGtCQUFrQixDQUFDLE1BQU07WUFDN0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1lBQzVCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDaEMsSUFBSSxDQUFDLENBQUMsVUFBVSxZQUFZLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2FBQ3hFO1lBRUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7O2dCQUM1QixJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQXRCLENBQXNCLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDNUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7aUJBQy9DO3FCQUFNO29CQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3RCO2FBQ0QsQ0FBQyxDQUFDO1lBRUgsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLElBQ1Y7UUFFSCxLQUFLLGtCQUFrQixDQUFDLE1BQU07WUFDN0IsUUFBUSxDQUFDO1lBQ1QsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1lBRTVCLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1lBQzdFLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtZQUNELDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBQ0g7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0NBQ0Q7O0FBRUQsV0FBYSxVQUFVLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0c0FjdGlvbnMsIFdpZGdldHNBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBXaWRnZXRNb2RlbDxhbnk+W107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFdpZGdldHNBY3Rpb25zKTogU3RhdGUge1xyXG5cdGxldCBfZGF0YTogV2lkZ2V0TW9kZWw8YW55PltdO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRsZXQgbmV3V2lkZ2V0cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0XHRpZiAoIShuZXdXaWRnZXRzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcblx0XHRcdFx0bmV3V2lkZ2V0cyA9IFtuZXdXaWRnZXRzXTtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiJ1dpZGdldHNBY3Rpb25UeXBlcy5VUFNFUlQnIGRvZXMgbm90IGdldCBhcnJheSBwYXlsb2FkXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXdXaWRnZXRzLmZvckVhY2goKG5ld1dpZGdldCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRXaWRnZXRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gbmV3V2lkZ2V0Ll9pZCk7XHJcblx0XHRcdFx0aWYgKGV4aXN0ZWRXaWRnZXRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZFdpZGdldEluZGV4LCAxLCBuZXdXaWRnZXQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfZGF0YS5wdXNoKG5ld1dpZGdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIFdpZGdldHNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblxyXG5cdFx0XHRjb25zdCB3aWRnZXRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAod2lkZ2V0SW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdF9kYXRhLnNwbGljZSh3aWRnZXRJbmRleCwgMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdpZGdldHMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=