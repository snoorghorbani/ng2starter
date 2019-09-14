/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as DiagramsReducer from "./diagrams.reducer";
import * as fromEditDiagram from "./edit-diagram.reducer";
import * as parentGuardReducer from "./parent-guard.reducer";
/**
 * @record
 */
export function DiagramState() { }
if (false) {
    /** @type {?} */
    DiagramState.prototype.diagrams;
    /** @type {?} */
    DiagramState.prototype.editDiagram;
    /** @type {?} */
    DiagramState.prototype.parentGuard;
}
/** @type {?} */
export const DiagramReducers = {
    diagrams: DiagramsReducer.diagramReducer,
    editDiagram: fromEditDiagram.Reducer,
    parentGuard: parentGuardReducer.ParentGuardReducer
};
/**
 * @record
 */
export function FeatureState() { }
if (false) {
    /** @type {?} */
    FeatureState.prototype.diagram;
}
//#region selectors
/** @type {?} */
export const selectFeatureState = createFeatureSelector("diagram");
// export const getDiagramInformationStatus = createSelector(
//   selectFeatureState,
//   (state: DiagramState) => state.diagram
// );
//#region edit diagram
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.editDiagram;
/** @type {?} */
export const selectEditDiagramState = createSelector(selectFeatureState, (ɵ0));
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRXRGLE9BQU8sS0FBSyxlQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLGVBQWUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEtBQUssa0JBQWtCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFN0Qsa0NBSUM7OztJQUhBLGdDQUFnQzs7SUFDaEMsbUNBQW1DOztJQUNuQyxtQ0FBc0M7OztBQUd2QyxNQUFNLE9BQU8sZUFBZSxHQUFHO0lBQzlCLFFBQVEsRUFBRSxlQUFlLENBQUMsY0FBYztJQUN4QyxXQUFXLEVBQUUsZUFBZSxDQUFDLE9BQU87SUFDcEMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLGtCQUFrQjtDQUNsRDs7OztBQUVELGtDQUVDOzs7SUFEQSwrQkFBd0I7Ozs7QUFLekIsTUFBTSxPQUFPLGtCQUFrQixHQUFHLHFCQUFxQixDQUFlLFNBQVMsQ0FBQzs7Ozs7Ozs7OztBQVFQLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVc7O0FBQW5ILE1BQU0sT0FBTyxzQkFBc0IsR0FBRyxjQUFjLENBQUMsa0JBQWtCLE9BQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgRGlhZ3JhbXNSZWR1Y2VyIGZyb20gXCIuL2RpYWdyYW1zLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbUVkaXREaWFncmFtIGZyb20gXCIuL2VkaXQtZGlhZ3JhbS5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHBhcmVudEd1YXJkUmVkdWNlciBmcm9tIFwiLi9wYXJlbnQtZ3VhcmQucmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFncmFtU3RhdGUge1xyXG5cdGRpYWdyYW1zOiBEaWFncmFtc1JlZHVjZXIuU3RhdGU7XHJcblx0ZWRpdERpYWdyYW06IGZyb21FZGl0RGlhZ3JhbS5TdGF0ZTtcclxuXHRwYXJlbnRHdWFyZDogcGFyZW50R3VhcmRSZWR1Y2VyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGlhZ3JhbVJlZHVjZXJzID0ge1xyXG5cdGRpYWdyYW1zOiBEaWFncmFtc1JlZHVjZXIuZGlhZ3JhbVJlZHVjZXIsXHJcblx0ZWRpdERpYWdyYW06IGZyb21FZGl0RGlhZ3JhbS5SZWR1Y2VyLFxyXG5cdHBhcmVudEd1YXJkOiBwYXJlbnRHdWFyZFJlZHVjZXIuUGFyZW50R3VhcmRSZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0XCJkaWFncmFtXCI6IERpYWdyYW1TdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxEaWFncmFtU3RhdGU+KFwiZGlhZ3JhbVwiKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXREaWFncmFtSW5mb3JtYXRpb25TdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihcclxuLy8gICBzZWxlY3RGZWF0dXJlU3RhdGUsXHJcbi8vICAgKHN0YXRlOiBEaWFncmFtU3RhdGUpID0+IHN0YXRlLmRpYWdyYW1cclxuLy8gKTtcclxuXHJcbi8vI3JlZ2lvbiBlZGl0IGRpYWdyYW1cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEVkaXREaWFncmFtU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogRGlhZ3JhbVN0YXRlKSA9PiBzdGF0ZS5lZGl0RGlhZ3JhbSk7XHJcbiJdfQ==