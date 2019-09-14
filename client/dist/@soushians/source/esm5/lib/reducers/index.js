/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export var SourceReducers = {
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
export var selectSourceState = createFeatureSelector("source");
//#endregion
/** @type {?} */
export var getSourceList = createSelector(selectSourceState, function (state) { return state.list; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUVwRCxpQ0FFQzs7O0lBRE8sMkJBQXNCOzs7QUFHOUIsTUFBTSxLQUFPLGNBQWMsR0FBRztJQUN4QixPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU87Q0FDaEM7Ozs7QUFFRCxrQ0FFQzs7O0lBRE8sK0JBQXVCOzs7O0FBTy9CLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBYyxRQUFRLENBQUM7OztBQUk3RSxNQUFNLEtBQU8sYUFBYSxHQUFHLGNBQWMsQ0FDbkMsaUJBQWlCLEVBQ2pCLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBzb3VyY2VMaXN0IGZyb20gJy4vc291cmNlLWxpc3QucmVkdWNlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvdXJjZVN0YXRlIHtcclxuICAgICAgICBsaXN0OiBzb3VyY2VMaXN0LlN0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb3VyY2VSZWR1Y2VycyA9IHtcclxuICAgICAgc291cmNlczogc291cmNlTGlzdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcbiAgICAgICAgJ3NvdXJjZXMnOiBTb3VyY2VTdGF0ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0U291cmNlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8U291cmNlU3RhdGU+KFwic291cmNlXCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U291cmNlTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICAgIHNlbGVjdFNvdXJjZVN0YXRlLFxyXG4gICAgICAgIChzdGF0ZTogU291cmNlU3RhdGUpID0+IHN0YXRlLmxpc3RcclxuKTtcclxuLy9leHBvcnQgY29uc3QgZ2V0U291cmNlTGlzdERhdGEgPSBjcmVhdGVTZWxlY3RvcihcclxuLy8gICAgICAgIGdldFNvdXJjZUxpc3QsXHJcbi8vICAgICAgICBzb3VyY2VMaXN0LmdldFNvdXJjZUxpc3REYXRhXHJcbi8vKTtcclxuIl19