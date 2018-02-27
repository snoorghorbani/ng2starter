import { responseStatusTypes } from "@soushians/shared";
import { FormSchemaModel } from "../models";
import { FormsListActionTypes, FormsListActions } from "./list.actions";

export interface State {
	status: responseStatusTypes;
	data: FormSchemaModel[];
}
export const initialState: State = {
	status: "pristine",
	data: []
};
export function reducer(state = initialState, action: FormsListActions): State {
	switch (action.type) {
		case FormsListActionTypes.FORMS_LIST: {
			return {
				...initialState,
				status: "dirty"
			};
		}
		case FormsListActionTypes.FORMS_LIST_START: {
			return {
				...initialState,
				status: "pending"
			};
		}
		case FormsListActionTypes.FORMS_LIST_SUCCEED: {
			return {
				...initialState,
				data: action.payload,
				status: "succeed"
			};
		}
		case FormsListActionTypes.FORMS_LIST_FAILED: {
			return {
				...initialState,
				status: "failed"
			};
		}

		default: {
			return initialState;
		}
	}
}

export var getStatus = (state: State) => state.status;
