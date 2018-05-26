import { responseStatusTypes } from "@soushians/shared";
import { AddDiagramActions } from "../actions";
import { AddDiagramApiModel } from "../models";
export interface State {
    status: responseStatusTypes;
    data: AddDiagramApiModel.Request;
}
export declare const initialState: State;
export declare function addDiagramReducer(state: State, action: AddDiagramActions): State;
export declare const AddDiagramInfo: (state: State) => AddDiagramApiModel.Request;
