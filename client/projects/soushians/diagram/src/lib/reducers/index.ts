import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as DiagramsReducer from "./diagrams.reducer";
import * as fromEditDiagram from "./edit-diagram.reducer";
import * as parentGuardReducer from "./parent-guard.reducer";

export interface DiagramState {
	diagrams: DiagramsReducer.State;
	editDiagram: fromEditDiagram.State;
	parentGuard: parentGuardReducer.State;
}

export const DiagramReducers = {
	diagrams: DiagramsReducer.diagramReducer,
	editDiagram: fromEditDiagram.Reducer,
	parentGuard: parentGuardReducer.ParentGuardReducer
};

export interface FeatureState {
	"diagram": DiagramState;
}

//#region selectors

export const selectFeatureState = createFeatureSelector<DiagramState>("diagram");

// export const getDiagramInformationStatus = createSelector(
//   selectFeatureState,
//   (state: DiagramState) => state.diagram
// );

//#region edit diagram
export const selectEditDiagramState = createSelector(selectFeatureState, (state: DiagramState) => state.editDiagram);
