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
export var LayoutReducers = {
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
export var selectLayoutState = createFeatureSelector("layout");
//#endregion
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.layout; };
/** @type {?} */
export var getLayout = createSelector(selectLayoutState, (ɵ0));
/** @type {?} */
export var getTitle = createSelector(getLayout, layout.getTitle);
/** @type {?} */
export var getShowMainSidenav = createSelector(getLayout, layout.getShowMainSidenav);
/** @type {?} */
export var getMainSideNavMode = createSelector(getLayout, layout.getMainSideNavMode);
/** @type {?} */
export var getLayoutMode = createSelector(getLayout, layout.getLayoutMode);
/** @type {?} */
export var getShowSecondSidebarStatus = createSelector(getLayout, layout.getShowSecondSidebarStatus);
/** @type {?} */
export var getSecondSidebarMode = createSelector(getLayout, layout.getSecondSidebarMode);
/** @type {?} */
export var getFullscreenMode = createSelector(getLayout, layout.getFullscreenMode);
//#region toolbar
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.toolbar; };
/** @type {?} */
export var getLayoutToolbar = createSelector(selectLayoutState, (ɵ1));
/** @type {?} */
export var getLayoutToolbarMode = createSelector(getLayoutToolbar, fromToolbar.getToolbarMode);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEtBQUssV0FBVyxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRWpELGlDQUdDOzs7SUFGQSw2QkFBcUI7O0lBQ3JCLDhCQUEyQjs7O0FBRzVCLE1BQU0sS0FBTyxjQUFjLEdBQUc7SUFDN0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPO0lBQ3RCLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTztDQUM1Qjs7OztBQUNELGtDQUdDOzs7SUFGQSw4QkFBb0I7O0lBQ3BCLCtCQUEyQjs7OztBQUs1QixNQUFNLEtBQU8saUJBQWlCLEdBQUcscUJBQXFCLENBQWMsUUFBUSxDQUFDOzs7Ozs7QUFJbEIsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZOztBQUEvRixNQUFNLEtBQU8sU0FBUyxHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsT0FBdUM7O0FBRWhHLE1BQU0sS0FBTyxRQUFRLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDOztBQUVsRSxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsa0JBQWtCLENBQUM7O0FBRXRGLE1BQU0sS0FBTyxrQkFBa0IsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQzs7QUFFdEYsTUFBTSxLQUFPLGFBQWEsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7O0FBRTVFLE1BQU0sS0FBTywwQkFBMEIsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQzs7QUFDdEcsTUFBTSxLQUFPLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixDQUFDOztBQUMxRixNQUFNLEtBQU8saUJBQWlCLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUM7Ozs7OztBQUlsQixVQUFDLEtBQWtCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWE7O0FBQXZHLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsaUJBQWlCLE9BQXdDOztBQUN4RyxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4vbGF5b3V0LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVRvb2xiYXIgZnJvbSBcIi4vdG9vbGJhci5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlIHtcclxuXHRsYXlvdXQ6IGxheW91dC5TdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dFJlZHVjZXJzID0ge1xyXG5cdGxheW91dDogbGF5b3V0LlJlZHVjZXIsXHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuUmVkdWNlclxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0bGF5b3V0OiBMYXlvdXRTdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdExheW91dFN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPExheW91dFN0YXRlPihcImxheW91dFwiKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdExheW91dFN0YXRlLCAoc3RhdGU6IExheW91dFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0VGl0bGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cclxuLy8jcmVnaW9uIHRvb2xiYXJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLnRvb2xiYXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0VG9vbGJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXRUb29sYmFyLCBmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSk7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuIl19