import { responseStatusTypes } from "@soushians/shared";

import { EditDiagramActionTypes, EditDiagramActions } from "../actions";
import { EditDiagramApiModel } from "../models";

console.log(EditDiagramApiModel);
export interface State {
	status: responseStatusTypes;
	data: EditDiagramApiModel.Response;
}
export const initialState: State = {
	status: "pristine",
	data: { Result: {} } as EditDiagramApiModel.Response
};
export function Reducer(state = initialState, action: EditDiagramActions): State {
	switch (action.type) {
		case EditDiagramActionTypes.EDIT_DIAGRAM: {
			return {
				...state,
				status: "dirty",
				data: new EditDiagramApiModel.Response()
			};
		}
		case EditDiagramActionTypes.EDIT_DIAGRAM_START: {
			return {
				...state,
				status: "pending",
				data: new EditDiagramApiModel.Response()
			};
		}
		case EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED: {
			return {
				...state,
				status: "succeed"
			};
		}
		case EditDiagramActionTypes.EDIT_DIAGRAM_FAILED: {
			return {
				...state,
				status: "failed"
			};
		}

		default: {
			return state;
		}
	}
}

export const EditDiagramInfo = (state: State) => state.data;
