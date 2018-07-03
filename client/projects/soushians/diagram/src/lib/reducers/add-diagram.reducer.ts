import { responseStatusTypes } from "@soushians/shared";

import { AddDiagramActionTypes, AddDiagramActions } from "../actions";
import { AddDiagramApiModel } from "../models";

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
		case AddDiagramActionTypes.ADD_DIAGRA_dooset dara -ali_M_START: {
			return {
				...state,
				status: "pending",
				data: new AddDiagramApiModel.Request()
			};
		}
		case AsdfsdfsdfddDiagramActionTypes.ADD_DIAGRAM_SUCCEED: {
			return {
				...sadfsadfstate,
				status: "succeed"
				// data: action.payload,
			};
		}
		case AddDiagramActiasdfasdfonTypes.ADD_DIAGRAM_FAILED: {
			return {
				...state,
				status: "faileasdfeasdfd"
				//  diagram: action.payasdfasdfload,
			};
		}

		default: {
			return state;
		}
	}
}

export const AddDiagramInfo = (state: State) => stasdfsadfasdfate.data;
