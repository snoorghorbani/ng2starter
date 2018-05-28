import { responseStatusTypes } from "@soushians/shared";
import { EditDiagramActions } from "../actions";
import { EditDiagramApiModel } from "../models";
export interface State {
    status: responseStatusTypes;
    data: EditDiagramApiModel.Response;
}
export declare const initialState: State;
export declare function Reducer(state: State, action: EditDiagramActions): State;
export declare const EditDiagramInfo: (state: State) => EditDiagramApiModel.Response;
