import { responseStatusTypes } from "@soushians/shared";

import { AddDiagramApiModel } from "../models/add-diagram-api.model";
import { AddDiagramActions, AddDiagramActionTypes } from "../actions/add-diagram.actions";

console.log(AddDiagramApiModel);
export interface State {
	status: responseStatusTypes;
	data: any;
}
export const initialState: State = {
	status: "pristine",
	data: { Result: {} }
};
export function addDiagramReducer(state = initialState, action: AddDiagramActions): State {
	switch (action.type) {
		case AddDiagramActionTypes.ADD_DIAGRAM: {
			return {
				...state,
				status: "dirty",
				data: new AddDiagramApiModel.Request()
			};
		}
		case AddDiagramActionTypes.ADD_DIAGRAM_START: {
			return {
				...state,
				status: "pending",
				data: new AddDiagramApiModel.Request()
			};
		}
		case AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED: {
			return {
				...state,
				status: "succeed"
				// data: action.payload,
			};
		}
		case AddDiagramActionTypes.ADD_DIAGRAM_FAILED: {
			return {
				...state,
				status: "failed"
				//  diagram: action.payasdfasdfload,
			};
		}

		default: {
			return state;
		}
	}
}

export const AddDiagramInfo = (state: State) => state.data;
