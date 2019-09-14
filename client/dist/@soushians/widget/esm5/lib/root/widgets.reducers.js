/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { WidgetsActionTypes } from "./widget.actions";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.data;
}
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
            newWidgets.forEach((/**
             * @param {?} newWidget
             * @return {?}
             */
            function (newWidget) {
                /** @type {?} */
                var existedWidgetIndex = _data.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w._id == newWidget._id; }));
                if (existedWidgetIndex > -1) {
                    _data.splice(existedWidgetIndex, 1, newWidget);
                }
                else {
                    _data.push(newWidget);
                }
            }));
            return tslib_1.__assign({}, state, { data: _data });
        case WidgetsActionTypes.DELETE:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            var widgetIndex = state.data.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w._id == action.payload._id; }));
            if (widgetIndex > -1) {
                _data.splice(widgetIndex, 1);
            }
            return tslib_1.__assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
export var getWidgets = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data; });
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5yZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3Jvb3Qvd2lkZ2V0cy5yZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBa0Isa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUV0RSwyQkFFQzs7O0lBREEscUJBQXlCOztTQUluQixFQUFFOztJQURILFlBQVksR0FBVTtJQUMzQixJQUFJLElBQUk7Q0FDUjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFvQixFQUFFLE1BQXNCO0lBQTVDLHNCQUFBLEVBQUEsb0JBQW9COztRQUN2QyxLQUF5QjtJQUM3QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxrQkFBa0IsQ0FBQyxNQUFNO1lBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztnQkFDeEIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBQy9CLElBQUksQ0FBQyxDQUFDLFVBQVUsWUFBWSxLQUFLLENBQUMsRUFBRTtnQkFDbkMsVUFBVSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQzthQUN4RTtZQUVELFVBQVUsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxTQUFTOztvQkFDdEIsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQXRCLENBQXNCLEVBQUM7Z0JBQ3pFLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2lCQUMvQztxQkFBTTtvQkFDTixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN0QjtZQUNGLENBQUMsRUFBQyxDQUFDO1lBRUgsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLElBQ1Y7UUFFSCxLQUFLLGtCQUFrQixDQUFDLE1BQU07WUFDN0IsUUFBUSxDQUFDO1lBQ1QsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O2dCQUV0QixXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUEzQixDQUEyQixFQUFDO1lBQzVFLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtZQUNELDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBQ0g7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sVUFBVTs7OztBQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpZGdldHNBY3Rpb25zLCBXaWRnZXRzQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogV2lkZ2V0TW9kZWw8YW55PltdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBXaWRnZXRzQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRsZXQgX2RhdGE6IFdpZGdldE1vZGVsPGFueT5bXTtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFdpZGdldHNBY3Rpb25UeXBlcy5VUFNFUlQ6XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0bGV0IG5ld1dpZGdldHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdFx0aWYgKCEobmV3V2lkZ2V0cyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG5cdFx0XHRcdG5ld1dpZGdldHMgPSBbbmV3V2lkZ2V0c107XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIidXaWRnZXRzQWN0aW9uVHlwZXMuVVBTRVJUJyBkb2VzIG5vdCBnZXQgYXJyYXkgcGF5bG9hZFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV3V2lkZ2V0cy5mb3JFYWNoKChuZXdXaWRnZXQpID0+IHtcclxuXHRcdFx0XHRjb25zdCBleGlzdGVkV2lkZ2V0SW5kZXggPSBfZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IG5ld1dpZGdldC5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkV2lkZ2V0SW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0X2RhdGEuc3BsaWNlKGV4aXN0ZWRXaWRnZXRJbmRleCwgMSwgbmV3V2lkZ2V0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdXaWRnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBXaWRnZXRzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cclxuXHRcdFx0Y29uc3Qgd2lkZ2V0SW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKHdpZGdldEluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRfZGF0YS5zcGxpY2Uod2lkZ2V0SW5kZXgsIDEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXaWRnZXRzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIl19