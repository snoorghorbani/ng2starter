import { responseStatusTypes } from "@soushians/shared";
import { AddDiagramActions } from "../actions";
export interface State {
    status: responseStatusTypes;
    data: any;
}
export declare const initialState: State;
export declare function addDiagramReducer(state: State, action: AddDiagramActions): State;
export declare const AddDiagramInfo: (state: State) => any;
