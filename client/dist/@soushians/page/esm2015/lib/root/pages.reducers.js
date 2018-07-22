/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { PagesActionTypes } from "./pages.actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.data;
}
const ɵ0 = [];
const /** @type {?} */ initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state = initialState, action) {
    let /** @type {?} */ _data;
    switch (action.type) {
        case PagesActionTypes.UPSERT:
            _data = state.data.concat();
            let /** @type {?} */ newPages = action.payload;
            if (!(newPages instanceof Array)) {
                newPages = [newPages];
                console.error("'PagesActionTypes.UPSERT' does not get array payload");
            }
            newPages.forEach((newPage) => {
                const /** @type {?} */ existedPageIndex = _data.findIndex((w) => w._id == newPage._id);
                if (existedPageIndex > -1) {
                    _data.splice(existedPageIndex, 1, newPage);
                }
                else {
                    _data.push(newPage);
                }
            });
            return Object.assign({}, state, { data: _data });
        case PagesActionTypes.DELETE:
            _data = Object.assign({}, state.data);
            const /** @type {?} */ pageIndex = state.data.findIndex((w) => w._id == action.payload._id);
            _data.splice(pageIndex, 1);
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}
export const /** @type {?} */ getPages = (state) => state.data;
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMucmVkdWNlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcm9vdC9wYWdlcy5yZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7V0FPMUQsRUFBRTtBQURULHVCQUFNLFlBQVksR0FBVTtJQUMzQixJQUFJLElBQUk7Q0FDUixDQUFDOzs7Ozs7QUFFRixNQUFNLGtCQUFrQixLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQW9CO0lBQ2pFLHFCQUFJLEtBQXVCLENBQUM7SUFDNUIsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO1lBQzNCLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLHFCQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxRQUFRLEdBQUcsQ0FBRSxRQUFRLENBQUUsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO2FBQ3RFO1lBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUM1Qix1QkFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEUsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDM0M7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEI7YUFDRCxDQUFDLENBQUM7WUFFSCxNQUFNLG1CQUNGLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBRUgsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO1lBQzNCLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEMsdUJBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0UsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFM0IsTUFBTSxtQkFDRixLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssSUFDVjtRQUVIO1lBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkO0NBQ0Q7QUFFRCxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VzQWN0aW9ucywgUGFnZXNBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3BhZ2VzLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IFBhZ2VNb2RlbDxhbnk+W107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFBhZ2VzQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRsZXQgX2RhdGE6IFBhZ2VNb2RlbDxhbnk+W107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBQYWdlc0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRsZXQgbmV3UGFnZXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdFx0aWYgKCEobmV3UGFnZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuXHRcdFx0XHRuZXdQYWdlcyA9IFsgbmV3UGFnZXMgXTtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiJ1BhZ2VzQWN0aW9uVHlwZXMuVVBTRVJUJyBkb2VzIG5vdCBnZXQgYXJyYXkgcGF5bG9hZFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV3UGFnZXMuZm9yRWFjaCgobmV3UGFnZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRQYWdlSW5kZXggPSBfZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IG5ld1BhZ2UuX2lkKTtcclxuXHRcdFx0XHRpZiAoZXhpc3RlZFBhZ2VJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZFBhZ2VJbmRleCwgMSwgbmV3UGFnZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9kYXRhLnB1c2gobmV3UGFnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIFBhZ2VzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEpO1xyXG5cclxuXHRcdFx0Y29uc3QgcGFnZUluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdF9kYXRhLnNwbGljZShwYWdlSW5kZXgsIDEpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQYWdlcyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiJdfQ==