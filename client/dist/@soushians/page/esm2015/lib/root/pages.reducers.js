/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PagesActionTypes } from "./pages.actions";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.data;
}
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
            newPages.forEach((/**
             * @param {?} newPage
             * @return {?}
             */
            (newPage) => {
                /** @type {?} */
                const existedPageIndex = _data.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                (w) => w._id == newPage._id));
                if (existedPageIndex > -1) {
                    _data.splice(existedPageIndex, 1, newPage);
                }
                else {
                    _data.push(newPage);
                }
            }));
            return Object.assign({}, state, { data: _data });
        case PagesActionTypes.DELETE:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            const pageIndex = state.data.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            (w) => w._id == action.payload._id));
            _data.splice(pageIndex, 1);
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
export const getPages = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMucmVkdWNlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcm9vdC9wYWdlcy5yZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFnQixnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRWpFLDJCQUVDOzs7SUFEQSxxQkFBa0I7O1dBSVosRUFBRTs7TUFESCxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFvQjs7UUFDN0QsS0FBa0I7SUFDdEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssZ0JBQWdCLENBQUMsTUFBTTtZQUMzQixRQUFRLENBQUM7WUFDVCxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Z0JBQ3hCLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTztZQUM3QixJQUFJLENBQUMsQ0FBQyxRQUFRLFlBQVksS0FBSyxDQUFDLEVBQUU7Z0JBQ2pDLFFBQVEsR0FBRyxDQUFFLFFBQVEsQ0FBRSxDQUFDO2dCQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7YUFDdEU7WUFFRCxRQUFRLENBQUMsT0FBTzs7OztZQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7O3NCQUN0QixnQkFBZ0IsR0FBRyxLQUFLLENBQUMsU0FBUzs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFDO2dCQUNyRSxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUMxQixLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEI7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBRUgsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO1lBQzNCLFFBQVEsQ0FBQztZQUNULEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztrQkFFdEIsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDO1lBQzFFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTNCLHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBRUg7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0YsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sUUFBUTs7OztBQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VzQWN0aW9ucywgUGFnZXNBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3BhZ2VzLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IFBhZ2VNb2RlbFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQYWdlc0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBQYWdlTW9kZWxbXTtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFBhZ2VzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRsZXQgbmV3UGFnZXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdFx0aWYgKCEobmV3UGFnZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuXHRcdFx0XHRuZXdQYWdlcyA9IFsgbmV3UGFnZXMgXTtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiJ1BhZ2VzQWN0aW9uVHlwZXMuVVBTRVJUJyBkb2VzIG5vdCBnZXQgYXJyYXkgcGF5bG9hZFwiKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV3UGFnZXMuZm9yRWFjaCgobmV3UGFnZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRQYWdlSW5kZXggPSBfZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IG5ld1BhZ2UuX2lkKTtcclxuXHRcdFx0XHRpZiAoZXhpc3RlZFBhZ2VJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZFBhZ2VJbmRleCwgMSwgbmV3UGFnZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9kYXRhLnB1c2gobmV3UGFnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIFBhZ2VzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgcGFnZUluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdF9kYXRhLnNwbGljZShwYWdlSW5kZXgsIDEpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQYWdlcyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiJdfQ==