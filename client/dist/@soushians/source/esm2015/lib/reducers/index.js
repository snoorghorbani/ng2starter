/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as sourceList from './source-list.reducer';
/**
 * @record
 */
export function SourceState() { }
function SourceState_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceState.prototype.list;
}
export const /** @type {?} */ SourceReducers = {
    sources: sourceList.Reducer
};
/**
 * @record
 */
export function FeatureState() { }
function FeatureState_tsickle_Closure_declarations() {
    /** @type {?} */
    FeatureState.prototype.sources;
}
//#region selectors
export const /** @type {?} */ selectSourceState = createFeatureSelector("source");
//#endregion
export const /** @type {?} */ getSourceList = createSelector(selectSourceState, (state) => state.list);
//export const getSourceListData = createSelector(
//        getSourceList,
//        sourceList.getSourceListData
//);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0FBTXBELE1BQU0sQ0FBQyx1QkFBTSxjQUFjLEdBQUc7SUFDeEIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPO0NBQ2hDLENBQUM7Ozs7Ozs7Ozs7QUFVRixNQUFNLENBQUMsdUJBQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQWMsUUFBUSxDQUFDLENBQUM7O0FBSTlFLE1BQU0sQ0FBQyx1QkFBTSxhQUFhLEdBQUcsY0FBYyxDQUNuQyxpQkFBaUIsRUFDakIsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN6QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCAqIGFzIHNvdXJjZUxpc3QgZnJvbSAnLi9zb3VyY2UtbGlzdC5yZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlU3RhdGUge1xyXG4gICAgICAgIGxpc3Q6IHNvdXJjZUxpc3QuU3RhdGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNvdXJjZVJlZHVjZXJzID0ge1xyXG4gICAgICBzb3VyY2VzOiBzb3VyY2VMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuICAgICAgICAnc291cmNlcyc6IFNvdXJjZVN0YXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RTb3VyY2VTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxTb3VyY2VTdGF0ZT4oXCJzb3VyY2VcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb3VyY2VMaXN0ID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgICAgc2VsZWN0U291cmNlU3RhdGUsXHJcbiAgICAgICAgKHN0YXRlOiBTb3VyY2VTdGF0ZSkgPT4gc3RhdGUubGlzdFxyXG4pO1xyXG4vL2V4cG9ydCBjb25zdCBnZXRTb3VyY2VMaXN0RGF0YSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4vLyAgICAgICAgZ2V0U291cmNlTGlzdCxcclxuLy8gICAgICAgIHNvdXJjZUxpc3QuZ2V0U291cmNlTGlzdERhdGFcclxuLy8pO1xyXG4iXX0=