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
//# sourceMappingURL=index.js.map