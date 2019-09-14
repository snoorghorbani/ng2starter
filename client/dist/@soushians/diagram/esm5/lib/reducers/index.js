/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export var DiagramReducers = {
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
export var selectFeatureState = createFeatureSelector("diagram");
// export const getDiagramInformationStatus = createSelector(
//   selectFeatureState,
//   (state: DiagramState) => state.diagram
// );
//#region edit diagram
/** @type {?} */
export var selectEditDiagramState = createSelector(selectFeatureState, function (state) { return state.editDiagram; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRXRGLE9BQU8sS0FBSyxlQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLGVBQWUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEtBQUssa0JBQWtCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFN0Qsa0NBSUM7OztJQUhBLGdDQUFnQzs7SUFDaEMsbUNBQW1DOztJQUNuQyxtQ0FBc0M7OztBQUd2QyxNQUFNLEtBQU8sZUFBZSxHQUFHO0lBQzlCLFFBQVEsRUFBRSxlQUFlLENBQUMsY0FBYztJQUN4QyxXQUFXLEVBQUUsZUFBZSxDQUFDLE9BQU87SUFDcEMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLGtCQUFrQjtDQUNsRDs7OztBQUVELGtDQUVDOzs7SUFEQSwrQkFBd0I7Ozs7QUFLekIsTUFBTSxLQUFPLGtCQUFrQixHQUFHLHFCQUFxQixDQUFlLFNBQVMsQ0FBQzs7Ozs7OztBQVFoRixNQUFNLEtBQU8sc0JBQXNCLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLFVBQUMsS0FBbUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBEaWFncmFtc1JlZHVjZXIgZnJvbSBcIi4vZGlhZ3JhbXMucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tRWRpdERpYWdyYW0gZnJvbSBcIi4vZWRpdC1kaWFncmFtLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgcGFyZW50R3VhcmRSZWR1Y2VyIGZyb20gXCIuL3BhcmVudC1ndWFyZC5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWdyYW1TdGF0ZSB7XHJcblx0ZGlhZ3JhbXM6IERpYWdyYW1zUmVkdWNlci5TdGF0ZTtcclxuXHRlZGl0RGlhZ3JhbTogZnJvbUVkaXREaWFncmFtLlN0YXRlO1xyXG5cdHBhcmVudEd1YXJkOiBwYXJlbnRHdWFyZFJlZHVjZXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEaWFncmFtUmVkdWNlcnMgPSB7XHJcblx0ZGlhZ3JhbXM6IERpYWdyYW1zUmVkdWNlci5kaWFncmFtUmVkdWNlcixcclxuXHRlZGl0RGlhZ3JhbTogZnJvbUVkaXREaWFncmFtLlJlZHVjZXIsXHJcblx0cGFyZW50R3VhcmQ6IHBhcmVudEd1YXJkUmVkdWNlci5QYXJlbnRHdWFyZFJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImRpYWdyYW1cIjogRGlhZ3JhbVN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPERpYWdyYW1TdGF0ZT4oXCJkaWFncmFtXCIpO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldERpYWdyYW1JbmZvcm1hdGlvblN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4vLyAgIHNlbGVjdEZlYXR1cmVTdGF0ZSxcclxuLy8gICAoc3RhdGU6IERpYWdyYW1TdGF0ZSkgPT4gc3RhdGUuZGlhZ3JhbVxyXG4vLyApO1xyXG5cclxuLy8jcmVnaW9uIGVkaXQgZGlhZ3JhbVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RWRpdERpYWdyYW1TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBEaWFncmFtU3RhdGUpID0+IHN0YXRlLmVkaXREaWFncmFtKTtcclxuIl19