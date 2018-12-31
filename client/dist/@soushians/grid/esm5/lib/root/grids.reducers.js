/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GridsActionTypes } from "./widget.actions";
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
        case GridsActionTypes.UPSERT:
            _data = state.data.concat();
            /** @type {?} */
            var newGrids = action.payload;
            newGrids.forEach(function (newGrid) {
                /** @type {?} */
                var existedGridIndex = _data.findIndex(function (w) { return w._id == newGrid._id; });
                if (existedGridIndex > -1) {
                    _data.splice(existedGridIndex, 1, newGrid);
                }
                else {
                    _data.push(newGrid);
                }
            });
            return tslib_1.__assign({}, state, { data: _data });
        case GridsActionTypes.DELETE:
            _data = Object.assign({}, state.data);
            /** @type {?} */
            var gridIndex = state.data.findIndex(function (w) { return w._id == action.payload._id; });
            _data.splice(gridIndex, 1);
            return tslib_1.__assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
export var getGrids = function (state) { return state.data; };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHMucmVkdWNlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvcm9vdC9ncmlkcy5yZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztTQU8zRCxFQUFFOztBQURULElBQU0sWUFBWSxHQUFVO0lBQzNCLElBQUksSUFBSTtDQUNSLENBQUM7Ozs7OztBQUVGLE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBb0IsRUFBRSxNQUFvQjtJQUExQyxzQkFBQSxFQUFBLG9CQUFvQjs7SUFDM0MsSUFBSSxLQUFLLENBQWM7SUFDdkIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssZ0JBQWdCLENBQUMsTUFBTTtZQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7WUFDNUIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUVoQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzs7Z0JBQ3ZCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUMxQixLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEI7YUFDRCxDQUFDLENBQUM7WUFFSCw0QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssSUFDVjtRQUVILEtBQUssZ0JBQWdCLENBQUMsTUFBTTtZQUMzQixLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUV0QyxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQTNCLENBQTJCLENBQUMsQ0FBQztZQUN6RSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUzQiw0QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssSUFDVjtRQUVIO1lBQ0MsT0FBTyxLQUFLLENBQUM7S0FDZDtDQUNEOztBQUVELFdBQWEsUUFBUSxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZHNBY3Rpb25UeXBlcywgR3JpZHNBY3Rpb25zIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IEdyaWRNb2RlbFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBHcmlkc0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBHcmlkTW9kZWxbXTtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEdyaWRzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGNvbnN0IG5ld0dyaWRzID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG5cdFx0XHRuZXdHcmlkcy5mb3JFYWNoKG5ld0dyaWQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRHcmlkSW5kZXggPSBfZGF0YS5maW5kSW5kZXgodyA9PiB3Ll9pZCA9PSBuZXdHcmlkLl9pZCk7XHJcblx0XHRcdFx0aWYgKGV4aXN0ZWRHcmlkSW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0X2RhdGEuc3BsaWNlKGV4aXN0ZWRHcmlkSW5kZXgsIDEsIG5ld0dyaWQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfZGF0YS5wdXNoKG5ld0dyaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBHcmlkc0FjdGlvblR5cGVzLkRFTEVURTpcclxuXHRcdFx0X2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5kYXRhKTtcclxuXHJcblx0XHRcdGNvbnN0IGdyaWRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KHcgPT4gdy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0X2RhdGEuc3BsaWNlKGdyaWRJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdyaWRzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIl19