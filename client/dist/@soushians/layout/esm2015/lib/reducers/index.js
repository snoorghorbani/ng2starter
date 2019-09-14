/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as layout from "./layout.reducer";
import * as fromToolbar from "./toolbar.reducer";
/**
 * @record
 */
export function LayoutState() { }
if (false) {
    /** @type {?} */
    LayoutState.prototype.layout;
    /** @type {?} */
    LayoutState.prototype.toolbar;
}
/** @type {?} */
export const LayoutReducers = {
    layout: layout.Reducer,
    toolbar: fromToolbar.Reducer
};
/**
 * @record
 */
export function FeatureState() { }
if (false) {
    /** @type {?} */
    FeatureState.prototype.layout;
    /** @type {?} */
    FeatureState.prototype.toolbar;
}
//#region selectors
/** @type {?} */
export const selectLayoutState = createFeatureSelector("layout");
//#endregion
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.layout;
/** @type {?} */
export const getLayout = createSelector(selectLayoutState, (ɵ0));
/** @type {?} */
export const getTitle = createSelector(getLayout, layout.getTitle);
/** @type {?} */
export const getShowMainSidenav = createSelector(getLayout, layout.getShowMainSidenav);
/** @type {?} */
export const getMainSideNavMode = createSelector(getLayout, layout.getMainSideNavMode);
/** @type {?} */
export const getLayoutMode = createSelector(getLayout, layout.getLayoutMode);
/** @type {?} */
export const getShowSecondSidebarStatus = createSelector(getLayout, layout.getShowSecondSidebarStatus);
/** @type {?} */
export const getSecondSidebarMode = createSelector(getLayout, layout.getSecondSidebarMode);
/** @type {?} */
export const getFullscreenMode = createSelector(getLayout, layout.getFullscreenMode);
//#region toolbar
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.toolbar;
/** @type {?} */
export const getLayoutToolbar = createSelector(selectLayoutState, (ɵ1));
/** @type {?} */
export const getLayoutToolbarMode = createSelector(getLayoutToolbar, fromToolbar.getToolbarMode);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEtBQUssV0FBVyxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRWpELGlDQUdDOzs7SUFGQSw2QkFBcUI7O0lBQ3JCLDhCQUEyQjs7O0FBRzVCLE1BQU0sT0FBTyxjQUFjLEdBQUc7SUFDN0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPO0lBQ3RCLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTztDQUM1Qjs7OztBQUNELGtDQUdDOzs7SUFGQSw4QkFBb0I7O0lBQ3BCLCtCQUEyQjs7OztBQUs1QixNQUFNLE9BQU8saUJBQWlCLEdBQUcscUJBQXFCLENBQWMsUUFBUSxDQUFDOzs7Ozs7QUFJbEIsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTTs7QUFBL0YsTUFBTSxPQUFPLFNBQVMsR0FBRyxjQUFjLENBQUMsaUJBQWlCLE9BQXVDOztBQUVoRyxNQUFNLE9BQU8sUUFBUSxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7QUFFbEUsTUFBTSxPQUFPLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDOztBQUV0RixNQUFNLE9BQU8sa0JBQWtCLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsa0JBQWtCLENBQUM7O0FBRXRGLE1BQU0sT0FBTyxhQUFhLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDOztBQUU1RSxNQUFNLE9BQU8sMEJBQTBCLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsMEJBQTBCLENBQUM7O0FBQ3RHLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQzs7QUFDMUYsTUFBTSxPQUFPLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDOzs7Ozs7QUFJbEIsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTzs7QUFBdkcsTUFBTSxPQUFPLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsT0FBd0M7O0FBQ3hHLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi9sYXlvdXQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tVG9vbGJhciBmcm9tIFwiLi90b29sYmFyLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3RhdGUge1xyXG5cdGxheW91dDogbGF5b3V0LlN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0UmVkdWNlcnMgPSB7XHJcblx0bGF5b3V0OiBsYXlvdXQuUmVkdWNlcixcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5SZWR1Y2VyXHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRsYXlvdXQ6IExheW91dFN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TGF5b3V0U3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8TGF5b3V0U3RhdGU+KFwibGF5b3V0XCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLmxheW91dCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRUaXRsZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYWluU2lkZU5hdk1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRMYXlvdXRNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2Vjb25kU2lkZWJhck1vZGUpO1xyXG5leHBvcnQgY29uc3QgZ2V0RnVsbHNjcmVlbk1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRGdWxsc2NyZWVuTW9kZSk7XHJcblxyXG4vLyNyZWdpb24gdG9vbGJhclxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dFRvb2xiYXIgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RMYXlvdXRTdGF0ZSwgKHN0YXRlOiBMYXlvdXRTdGF0ZSkgPT4gc3RhdGUudG9vbGJhcik7XHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dFRvb2xiYXIsIGZyb21Ub29sYmFyLmdldFRvb2xiYXJNb2RlKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG4iXX0=