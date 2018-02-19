import { EditConfigActionTypes, EditConfigActions } from "../actions";
import { EditConfigApiModel } from "@soushians/config";
import { responseStatusTypes } from "@soushians/shared";

export interface State {
	status: responseStatusTypes;
	data: EditConfigApiModel.Response;
}
export const initialState: State = {
	status: "pristine",
	data: new EditConfigApiModel.Response()
};

export function Reducer(state = initialState, action: EditConfigActions): State {
	switch (action.type) {
		case EditConfigActionTypes.EDIT_CONFIG: {
			return {
				...state,
				status: "dirty",
				data: new EditConfigApiModel.Response()
			};
		}
		case EditConfigActionTypes.EDIT_CONFIG_START: {
			return {
				...state,
				status: "pending",
				data: new EditConfigApiModel.Response()
			};
		}
		case EditConfigActionTypes.EDIT_CONFIG_SUCCEED: {
			return {
				...state,
				status: "succeed"
			};
		}
		case EditConfigActionTypes.EDIT_CONFIG_FAILED: {
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

export const EditConfigInfo = (state: State) => state.data;
