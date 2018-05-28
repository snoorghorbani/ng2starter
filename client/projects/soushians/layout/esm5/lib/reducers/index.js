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
export var /** @type {?} */ LayoutReducers = {
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
export var /** @type {?} */ selectLayoutState = createFeatureSelector("layout");
//#endregion
export var /** @type {?} */ getLayout = createSelector(selectLayoutState, function (state) { return state.layout; });
export var /** @type {?} */ getTitle = createSelector(getLayout, layout.getTitle);
export var /** @type {?} */ getShowMainSidenav = createSelector(getLayout, layout.getShowMainSidenav);
export var /** @type {?} */ getMainSideNavMode = createSelector(getLayout, layout.getMainSideNavMode);
export var /** @type {?} */ getLayoutMode = createSelector(getLayout, layout.getLayoutMode);
export var /** @type {?} */ getShowSecondSidebarStatus = createSelector(getLayout, layout.getShowSecondSidebarStatus);
export var /** @type {?} */ getSecondSidebarMode = createSelector(getLayout, layout.getSecondSidebarMode);
//#region toolbar
export var /** @type {?} */ getLayoutToolbar = createSelector(selectLayoutState, function (state) { return state.toolbar; });
export var /** @type {?} */ getLayoutToolbarMode = createSelector(getLayoutToolbar, fromToolbar.getToolbarMode);
//#endregion
//# sourceMappingURL=index.js.map
