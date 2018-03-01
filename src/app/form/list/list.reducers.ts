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
			debugger;
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(form => form._id == action.payload._id);
			if (entityIdx > -1) {
				data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
			} else {
				data.push(action.payload);
			}
			return {
				...state,
				data: data
			};
		}
		case FormsListActionTypes.ADD_FORM_SCHEMA: {
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(form => form._id == action.payload._id);
			if (entityIdx > -1) {
				data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
			} else {
				data.push(action.payload);
			}
			return {
				...state,
				data: data
			};
		}
		case FormsListActionTypes.FORM_SCHEMA_FETCHED: {
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(form => form._id == action.payload._id);
			if (entityIdx > -1) {
				data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
			} else {
				data.push(action.payload);
			}
			return {
				...state,
				data: data
			};
		}

		default: {
			return state;
		}
	}
}

export var getStatus = (state: State) => state.status;
