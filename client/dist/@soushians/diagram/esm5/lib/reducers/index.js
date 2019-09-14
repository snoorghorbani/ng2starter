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
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.editDiagram; };
/** @type {?} */
export var selectEditDiagramState = createSelector(selectFeatureState, (ɵ0));
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRXRGLE9BQU8sS0FBSyxlQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxLQUFLLGVBQWUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEtBQUssa0JBQWtCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFN0Qsa0NBSUM7OztJQUhBLGdDQUFnQzs7SUFDaEMsbUNBQW1DOztJQUNuQyxtQ0FBc0M7OztBQUd2QyxNQUFNLEtBQU8sZUFBZSxHQUFHO0lBQzlCLFFBQVEsRUFBRSxlQUFlLENBQUMsY0FBYztJQUN4QyxXQUFXLEVBQUUsZUFBZSxDQUFDLE9BQU87SUFDcEMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLGtCQUFrQjtDQUNsRDs7OztBQUVELGtDQUVDOzs7SUFEQSwrQkFBd0I7Ozs7QUFLekIsTUFBTSxLQUFPLGtCQUFrQixHQUFHLHFCQUFxQixDQUFlLFNBQVMsQ0FBQzs7Ozs7Ozs7OztBQVFQLFVBQUMsS0FBbUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCOztBQUFuSCxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixPQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIERpYWdyYW1zUmVkdWNlciBmcm9tIFwiLi9kaWFncmFtcy5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21FZGl0RGlhZ3JhbSBmcm9tIFwiLi9lZGl0LWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBwYXJlbnRHdWFyZFJlZHVjZXIgZnJvbSBcIi4vcGFyZW50LWd1YXJkLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhZ3JhbVN0YXRlIHtcclxuXHRkaWFncmFtczogRGlhZ3JhbXNSZWR1Y2VyLlN0YXRlO1xyXG5cdGVkaXREaWFncmFtOiBmcm9tRWRpdERpYWdyYW0uU3RhdGU7XHJcblx0cGFyZW50R3VhcmQ6IHBhcmVudEd1YXJkUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpYWdyYW1SZWR1Y2VycyA9IHtcclxuXHRkaWFncmFtczogRGlhZ3JhbXNSZWR1Y2VyLmRpYWdyYW1SZWR1Y2VyLFxyXG5cdGVkaXREaWFncmFtOiBmcm9tRWRpdERpYWdyYW0uUmVkdWNlcixcclxuXHRwYXJlbnRHdWFyZDogcGFyZW50R3VhcmRSZWR1Y2VyLlBhcmVudEd1YXJkUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiZGlhZ3JhbVwiOiBEaWFncmFtU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8RGlhZ3JhbVN0YXRlPihcImRpYWdyYW1cIik7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0RGlhZ3JhbUluZm9ybWF0aW9uU3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgc2VsZWN0RmVhdHVyZVN0YXRlLFxyXG4vLyAgIChzdGF0ZTogRGlhZ3JhbVN0YXRlKSA9PiBzdGF0ZS5kaWFncmFtXHJcbi8vICk7XHJcblxyXG4vLyNyZWdpb24gZWRpdCBkaWFncmFtXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RFZGl0RGlhZ3JhbVN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IERpYWdyYW1TdGF0ZSkgPT4gc3RhdGUuZWRpdERpYWdyYW0pO1xyXG4iXX0=