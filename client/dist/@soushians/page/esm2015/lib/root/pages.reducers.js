/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { PagesActionTypes } from "./pages.actions";
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
        case PagesActionTypes.UPSERT:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            let newPages = action.payload;
            if (!(newPages instanceof Array)) {
                newPages = [newPages];
                console.error("'PagesActionTypes.UPSERT' does not get array payload");
            }
            newPages.forEach((newPage) => {
                /** @type {?} */
                const existedPageIndex = _data.findIndex((w) => w._id == newPage._id);
                if (existedPageIndex > -1) {
                    _data.splice(existedPageIndex, 1, newPage);
                }
                else {
                    _data.push(newPage);
                }
            });
            return Object.assign({}, state, { data: _data });
        case PagesActionTypes.DELETE:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            const pageIndex = state.data.findIndex((w) => w._id == action.payload._id);
            _data.splice(pageIndex, 1);
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
export const getPages = (state) => state.data;
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMucmVkdWNlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcm9vdC9wYWdlcy5yZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7O1dBTzFELEVBQUU7O0FBRFQsTUFBTSxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1IsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQW9COztJQUNqRSxJQUFJLEtBQUssQ0FBYztJQUN2QixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO1lBQzNCLFFBQVEsQ0FBQztZQUNULEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUM1QixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxDQUFDLFFBQVEsWUFBWSxLQUFLLENBQUMsRUFBRTtnQkFDakMsUUFBUSxHQUFHLENBQUUsUUFBUSxDQUFFLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQzthQUN0RTtZQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7Z0JBQzVCLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RFLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzFCLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUMzQztxQkFBTTtvQkFDTixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNwQjthQUNELENBQUMsQ0FBQztZQUVILHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBRUgsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO1lBQzNCLFFBQVEsQ0FBQztZQUNULEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUU1QixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTNCLHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBRUg7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0NBQ0Q7O0FBRUQsYUFBYSxRQUFRLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZXNBY3Rpb25zLCBQYWdlc0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vcGFnZXMuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogUGFnZU1vZGVsW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFBhZ2VzQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRsZXQgX2RhdGE6IFBhZ2VNb2RlbFtdO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUGFnZXNBY3Rpb25UeXBlcy5VUFNFUlQ6XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGxldCBuZXdQYWdlcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cdFx0XHRpZiAoIShuZXdQYWdlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG5cdFx0XHRcdG5ld1BhZ2VzID0gWyBuZXdQYWdlcyBdO1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCInUGFnZXNBY3Rpb25UeXBlcy5VUFNFUlQnIGRvZXMgbm90IGdldCBhcnJheSBwYXlsb2FkXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXdQYWdlcy5mb3JFYWNoKChuZXdQYWdlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZFBhZ2VJbmRleCA9IF9kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gbmV3UGFnZS5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkUGFnZUluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdF9kYXRhLnNwbGljZShleGlzdGVkUGFnZUluZGV4LCAxLCBuZXdQYWdlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdQYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgUGFnZXNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblxyXG5cdFx0XHRjb25zdCBwYWdlSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0X2RhdGEuc3BsaWNlKHBhZ2VJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBhZ2VzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIl19