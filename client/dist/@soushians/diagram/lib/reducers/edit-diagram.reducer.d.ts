import { responseStatusTypes } from "@soushians/shared";
import { EditDiagramApiModel } from "../models/edit-diagram-api.model";
import { EditDiagramActions } from "../actions/edit-diagram.actions";
export interface State {
	status: responseStatusTypes;
	data: EditDiagramApiModel.Response;
}
export declare const initialState: State;
export declare function Reducer(state: State, action: EditDiagramActions): State
export declare const EditDiagramInfo: (state: State) => EditDiagramApiModel.Response;
