import { DiagramsAction } from "../actions";
import { GetDiagramsApiModel } from "../models/get-diagrams-api.model";
export interface State {
    loaded: boolean;
    diagram: GetDiagramsApiModel.Response;
}
export declare const initialState: State;
export declare function diagramReducer(state: State, action: DiagramsAction): State;
export declare const DiagramInfo: (state: State) => GetDiagramsApiModel.Response;
