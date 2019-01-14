/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GridsActionTypes } from "./widget.actions";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHMucmVkdWNlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvcm9vdC9ncmlkcy5yZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUVsRSwyQkFFQzs7O0lBREEscUJBQWtCOztTQUlaLEVBQUU7O0lBREgsWUFBWSxHQUFVO0lBQzNCLElBQUksSUFBSTtDQUNSOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQW9CLEVBQUUsTUFBb0I7SUFBMUMsc0JBQUEsRUFBQSxvQkFBb0I7O1FBQ3ZDLEtBQWtCO0lBQ3RCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLGdCQUFnQixDQUFDLE1BQU07WUFDM0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O2dCQUN0QixRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFFL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87O29CQUNqQixnQkFBZ0IsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFwQixDQUFvQixDQUFDO2dCQUNuRSxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUMxQixLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEI7WUFDRixDQUFDLENBQUMsQ0FBQztZQUVILDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBRUgsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO1lBQzNCLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUVoQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUEzQixDQUEyQixDQUFDO1lBQ3hFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTNCLDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBRUg7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sUUFBUSxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRzQWN0aW9uVHlwZXMsIEdyaWRzQWN0aW9ucyB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBHcmlkTW9kZWxbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogR3JpZHNBY3Rpb25zKTogU3RhdGUge1xyXG5cdGxldCBfZGF0YTogR3JpZE1vZGVsW107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBHcmlkc0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRjb25zdCBuZXdHcmlkcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdFx0bmV3R3JpZHMuZm9yRWFjaChuZXdHcmlkID0+IHtcclxuXHRcdFx0XHRjb25zdCBleGlzdGVkR3JpZEluZGV4ID0gX2RhdGEuZmluZEluZGV4KHcgPT4gdy5faWQgPT0gbmV3R3JpZC5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkR3JpZEluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdF9kYXRhLnNwbGljZShleGlzdGVkR3JpZEluZGV4LCAxLCBuZXdHcmlkKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdHcmlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgR3JpZHNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdF9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuZGF0YSk7XHJcblxyXG5cdFx0XHRjb25zdCBncmlkSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCh3ID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdF9kYXRhLnNwbGljZShncmlkSW5kZXgsIDEpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHcmlkcyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiJdfQ==