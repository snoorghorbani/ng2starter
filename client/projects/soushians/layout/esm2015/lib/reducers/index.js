/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as layout from "./layout.reducer";
import * as fromToolbar from "./toolbar.reducer";
/**
 * @record
 */
export function LayoutState() { }
function LayoutState_tsickle_Closure_declarations() {
    /** @type {?} */
    LayoutState.prototype.layout;
    /** @type {?} */
    LayoutState.prototype.toolbar;
}
export const /** @type {?} */ LayoutReducers = {
    layout: layout.Reducer,
    toolbar: fromToolbar.Reducer
};
/**
 * @record
 */
export function FeatureState() { }
function FeatureState_tsickle_Closure_declarations() {
    /** @type {?} */
    FeatureState.prototype.layout;
    /** @type {?} */
    FeatureState.prototype.toolbar;
}
//#region selectors
export const /** @type {?} */ selectLayoutState = createFeatureSelector("layout");
//#endregion
export const /** @type {?} */ getLayout = createSelector(selectLayoutState, (state) => state.layout);
export const /** @type {?} */ getTitle = createSelector(getLayout, layout.getTitle);
export const /** @type {?} */ getShowMainSidenav = createSelector(getLayout, layout.getShowMainSidenav);
export const /** @type {?} */ getMainSideNavMode = createSelector(getLayout, layout.getMainSideNavMode);
export const /** @type {?} */ getLayoutMode = createSelector(getLayout, layout.getLayoutMode);
export const /** @type {?} */ getShowSecondSidebarStatus = createSelector(getLayout, layout.getShowSecondSidebarStatus);
export const /** @type {?} */ getSecondSidebarMode = createSelector(getLayout, layout.getSecondSidebarMode);
//#region toolbar
export const /** @type {?} */ getLayoutToolbar = createSelector(selectLayoutState, (state) => state.toolbar);
export const /** @type {?} */ getLayoutToolbarMode = createSelector(getLayoutToolbar, fromToolbar.getToolbarMode);
//#endregion
//# sourceMappingURL=index.js.map
