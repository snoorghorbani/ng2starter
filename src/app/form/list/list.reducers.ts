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
				...state,
				status: "dirty"
			};
		}
		case FormsListActionTypes.FORMS_LIST_START: {
			return {
				...state,
				status: "pending"
			};
		}
		case FormsListActionTypes.FORMS_LIST_SUCCEED: {
			return {
				...state,
				data: action.payload,
				status: "succeed"
			};
		}
		case FormsListActionTypes.FORMS_LIST_FAILED: {
			return {
				...state,
				status: "failed"
			};
		}
		case FormsListActionTypes.FORM_SCHEMA_UPDATE: {
			return {
				...state,
				data: state.data.map(formSchema => (formSchema._id == action.payload._id ? action.payload : formSchema))
			};
		}
		case FormsListActionTypes.ADD_FORM_SCHEMA: {
			return {
				...state,
				data: state.data.concat([ action.payload ])
			};
		}

		default: {
			return state;
		}
	}
}

export var getStatus = (state: State) => state.status;
