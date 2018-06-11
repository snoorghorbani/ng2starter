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
export var /** @type {?} */ SourceReducers = {
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
export var /** @type {?} */ selectSourceState = createFeatureSelector("source");
//#endregion
export var /** @type {?} */ getSourceList = createSelector(selectSourceState, function (state) { return state.list; });
//export const getSourceListData = createSelector(
//        getSourceList,
//        sourceList.getSourceListData
//);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7O0FBTXBELE1BQU0sQ0FBQyxxQkFBTSxjQUFjLEdBQUc7SUFDeEIsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPO0NBQ2hDLENBQUM7Ozs7Ozs7Ozs7QUFVRixNQUFNLENBQUMscUJBQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQWMsUUFBUSxDQUFDLENBQUM7O0FBSTlFLE1BQU0sQ0FBQyxxQkFBTSxhQUFhLEdBQUcsY0FBYyxDQUNuQyxpQkFBaUIsRUFDakIsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgc291cmNlTGlzdCBmcm9tICcuL3NvdXJjZS1saXN0LnJlZHVjZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3VyY2VTdGF0ZSB7XHJcbiAgICAgICAgbGlzdDogc291cmNlTGlzdC5TdGF0ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU291cmNlUmVkdWNlcnMgPSB7XHJcbiAgICAgIHNvdXJjZXM6IHNvdXJjZUxpc3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG4gICAgICAgICdzb3VyY2VzJzogU291cmNlU3RhdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFNvdXJjZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFNvdXJjZVN0YXRlPihcInNvdXJjZVwiKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvdXJjZUxpc3QgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgICBzZWxlY3RTb3VyY2VTdGF0ZSxcclxuICAgICAgICAoc3RhdGU6IFNvdXJjZVN0YXRlKSA9PiBzdGF0ZS5saXN0XHJcbik7XHJcbi8vZXhwb3J0IGNvbnN0IGdldFNvdXJjZUxpc3REYXRhID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgICAgICBnZXRTb3VyY2VMaXN0LFxyXG4vLyAgICAgICAgc291cmNlTGlzdC5nZXRTb3VyY2VMaXN0RGF0YVxyXG4vLyk7XHJcbiJdfQ==