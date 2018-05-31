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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEtBQUssV0FBVyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7OztBQU9qRCxNQUFNLENBQUMscUJBQU0sY0FBYyxHQUFHO0lBQzdCLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTztJQUN0QixPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU87Q0FDNUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FBUUYsTUFBTSxDQUFDLHFCQUFNLGlCQUFpQixHQUFHLHFCQUFxQixDQUFjLFFBQVEsQ0FBQyxDQUFDOztBQUk5RSxNQUFNLENBQUMscUJBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksQ0FBQyxDQUFDO0FBRWpHLE1BQU0sQ0FBQyxxQkFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFbkUsTUFBTSxDQUFDLHFCQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFdkYsTUFBTSxDQUFDLHFCQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFdkYsTUFBTSxDQUFDLHFCQUFNLGFBQWEsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUU3RSxNQUFNLENBQUMscUJBQU0sMEJBQTBCLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUN2RyxNQUFNLENBQUMscUJBQU0sb0JBQW9CLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7QUFJM0YsTUFBTSxDQUFDLHFCQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQyxDQUFDO0FBQ3pHLE1BQU0sQ0FBQyxxQkFBTSxvQkFBb0IsR0FBRyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgbGF5b3V0IGZyb20gXCIuL2xheW91dC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21Ub29sYmFyIGZyb20gXCIuL3Rvb2xiYXIucmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRTdGF0ZSB7XHJcblx0bGF5b3V0OiBsYXlvdXQuU3RhdGU7XHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXRSZWR1Y2VycyA9IHtcclxuXHRsYXlvdXQ6IGxheW91dC5SZWR1Y2VyLFxyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlJlZHVjZXJcclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdGxheW91dDogTGF5b3V0U3RhdGU7XHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RMYXlvdXRTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxMYXlvdXRTdGF0ZT4oXCJsYXlvdXRcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXQgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RMYXlvdXRTdGF0ZSwgKHN0YXRlOiBMYXlvdXRTdGF0ZSkgPT4gc3RhdGUubGF5b3V0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUaXRsZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFRpdGxlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93TWFpblNpZGVuYXYgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1haW5TaWRlTmF2TW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldE1haW5TaWRlTmF2TW9kZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0TW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldExheW91dE1vZGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5leHBvcnQgY29uc3QgZ2V0U2Vjb25kU2lkZWJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblxyXG4vLyNyZWdpb24gdG9vbGJhclxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dFRvb2xiYXIgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RMYXlvdXRTdGF0ZSwgKHN0YXRlOiBMYXlvdXRTdGF0ZSkgPT4gc3RhdGUudG9vbGJhcik7XHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dFRvb2xiYXIsIGZyb21Ub29sYmFyLmdldFRvb2xiYXJNb2RlKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG4iXX0=