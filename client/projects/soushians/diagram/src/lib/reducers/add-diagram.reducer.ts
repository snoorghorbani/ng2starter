import { responseStatusTypes } from "@soushians/shared";

import { AddDiagramActionTypes, AddDiagramActions } from "../actions";
import { AddDiagramApiModel } from "../models";

export interface State {
	status: responseStatusTypes;
	data: AddDiagramApiModel.Request;
}
export const initialState: State = {
	status: "pristine",
	data: new AddDiagramApiModel.Request()
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
				//  diagram: action.payload,
			};
		}

		default: {
			return state;
		}
	}
}

export const AddDiagramInfo = (state: State) => state.data;
