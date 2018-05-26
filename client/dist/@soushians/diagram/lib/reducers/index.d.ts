import { MemoizedSelector } from "@ngrx/store";
import * as DiagramsReducer from "./diagrams.reducer";
import * as fromEditDiagram from "./edit-diagram.reducer";
import * as parentGuardReducer from "./parent-guard.reducer";
export interface DiagramState {
    diagrams: DiagramsReducer.State;
    editDiagram: fromEditDiagram.State;
    parentGuard: parentGuardReducer.State;
}
export declare const DiagramReducers: {
    diagrams: typeof DiagramsReducer.diagramReducer;
    editDiagram: typeof fromEditDiagram.Reducer;
    parentGuard: typeof parentGuardReducer.ParentGuardReducer;
};
export interface FeatureState {
    "diagram": DiagramState;
}
export declare const selectFeatureState: MemoizedSelector<object, DiagramState>;
export declare const selectEditDiagramState: MemoizedSelector<object, fromEditDiagram.State>;
