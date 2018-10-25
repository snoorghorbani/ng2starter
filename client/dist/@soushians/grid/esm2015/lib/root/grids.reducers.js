/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { GridsActionTypes } from "./widget.actions";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.data;
const ɵ0 = [];
/** @type {?} */
const initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state = initialState, action) {
    /** @type {?} */
    let _data;
    switch (action.type) {
        case GridsActionTypes.UPSERT:
            _data = state.data.concat();
            /** @type {?} */
            const newGrids = action.payload;
            newGrids.forEach(newGrid => {
                /** @type {?} */
                const existedGridIndex = _data.findIndex(w => w._id == newGrid._id);
                if (existedGridIndex > -1) {
                    _data.splice(existedGridIndex, 1, newGrid);
                }
                else {
                    _data.push(newGrid);
                }
            });
            return Object.assign({}, state, { data: _data });
        case GridsActionTypes.DELETE:
            _data = Object.assign({}, state.data);
            /** @type {?} */
            const gridIndex = state.data.findIndex(w => w._id == action.payload._id);
            _data.splice(gridIndex, 1);
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
export const getGrids = (state) => state.data;
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHMucmVkdWNlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvcm9vdC9ncmlkcy5yZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFnQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7O1dBTzNELEVBQUU7O0FBRFQsTUFBTSxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1IsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQW9COztJQUNqRSxJQUFJLEtBQUssQ0FBYztJQUN2QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO1lBQzNCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUM1QixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRWhDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7O2dCQUMxQixNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3BCO2FBQ0QsQ0FBQyxDQUFDO1lBRUgseUJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLElBQ1Y7UUFFSCxLQUFLLGdCQUFnQixDQUFDLE1BQU07WUFDM0IsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFdEMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFM0IseUJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLElBQ1Y7UUFFSDtZQUNDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Q0FDRDs7QUFFRCxhQUFhLFFBQVEsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkc0FjdGlvblR5cGVzLCBHcmlkc0FjdGlvbnMgfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogR3JpZE1vZGVsW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEdyaWRzQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRsZXQgX2RhdGE6IEdyaWRNb2RlbFtdO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgR3JpZHNBY3Rpb25UeXBlcy5VUFNFUlQ6XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0Y29uc3QgbmV3R3JpZHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRcdG5ld0dyaWRzLmZvckVhY2gobmV3R3JpZCA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZEdyaWRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCh3ID0+IHcuX2lkID09IG5ld0dyaWQuX2lkKTtcclxuXHRcdFx0XHRpZiAoZXhpc3RlZEdyaWRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZEdyaWRJbmRleCwgMSwgbmV3R3JpZCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9kYXRhLnB1c2gobmV3R3JpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIEdyaWRzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEpO1xyXG5cclxuXHRcdFx0Y29uc3QgZ3JpZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgodyA9PiB3Ll9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRfZGF0YS5zcGxpY2UoZ3JpZEluZGV4LCAxKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R3JpZHMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=