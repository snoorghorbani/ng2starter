/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as sourceList from './source-list.reducer';
/**
 * @record
 */
export function SourceState() { }
if (false) {
    /** @type {?} */
    SourceState.prototype.list;
}
/** @type {?} */
export const SourceReducers = {
    sources: sourceList.Reducer
};
/**
 * @record
 */
export function FeatureState() { }
if (false) {
    /** @type {?} */
    FeatureState.prototype.sources;
}
//#region selectors
/** @type {?} */
export const selectSourceState = createFeatureSelector("source");
//#endregion
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.list;
/** @type {?} */
export const getSourceList = createSelector(selectSourceState, (ɵ0));
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUVwRCxpQ0FFQzs7O0lBRE8sMkJBQXNCOzs7QUFHOUIsTUFBTSxPQUFPLGNBQWMsR0FBRztJQUN4QixPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU87Q0FDaEM7Ozs7QUFFRCxrQ0FFQzs7O0lBRE8sK0JBQXVCOzs7O0FBTy9CLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBYyxRQUFRLENBQUM7Ozs7OztBQU1yRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJOztBQUYxQyxNQUFNLE9BQU8sYUFBYSxHQUFHLGNBQWMsQ0FDbkMsaUJBQWlCLE9BRXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCAqIGFzIHNvdXJjZUxpc3QgZnJvbSAnLi9zb3VyY2UtbGlzdC5yZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlU3RhdGUge1xyXG4gICAgICAgIGxpc3Q6IHNvdXJjZUxpc3QuU3RhdGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNvdXJjZVJlZHVjZXJzID0ge1xyXG4gICAgICBzb3VyY2VzOiBzb3VyY2VMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuICAgICAgICAnc291cmNlcyc6IFNvdXJjZVN0YXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RTb3VyY2VTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxTb3VyY2VTdGF0ZT4oXCJzb3VyY2VcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb3VyY2VMaXN0ID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgICAgc2VsZWN0U291cmNlU3RhdGUsXHJcbiAgICAgICAgKHN0YXRlOiBTb3VyY2VTdGF0ZSkgPT4gc3RhdGUubGlzdFxyXG4pO1xyXG4vL2V4cG9ydCBjb25zdCBnZXRTb3VyY2VMaXN0RGF0YSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4vLyAgICAgICAgZ2V0U291cmNlTGlzdCxcclxuLy8gICAgICAgIHNvdXJjZUxpc3QuZ2V0U291cmNlTGlzdERhdGFcclxuLy8pO1xyXG4iXX0=