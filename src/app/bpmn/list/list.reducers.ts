import { responseStatusTypes } from "@soushians/shared";
import { ProcessModel } from "../models";
import { BpmnsListActionTypes, BpmnsListActions } from "./list.actions";

export interface State {
	status: responseStatusTypes;
	data: ProcessModel[];
}
export const initialState: State = {
	status: "pristine",
	data: []
};
export function reducer(state = initialState, action: BpmnsListActions): State {
	switch (action.type) {
		case BpmnsListActionTypes.BPMN_LIST: {
			return {
				...state,
				status: "dirty"
			};
		}
		case BpmnsListActionTypes.BPMN_LIST_START: {
			return {
				...state,
				status: "pending"
			};
		}
		case BpmnsListActionTypes.BPMN_LIST_SUCCEED: {
			return {
				...state,
				data: action.payload,
				status: "succeed"
			};
		}
		case BpmnsListActionTypes.BPMN_LIST_FAILED: {
			return {
				...state,
				status: "failed"
			};
		}
		case BpmnsListActionTypes.BPMN_SCHEMA_UPDATE: {
			debugger;
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(bpmn => bpmn._id == action.payload._id);
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
		case BpmnsListActionTypes.ADD_BPMN_SCHEMA: {
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(bpmn => bpmn._id == action.payload._id);
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
		case BpmnsListActionTypes.BPMN_SCHEMA_FETCHED: {
			const data = state.data.concat();
			var entityIdx = state.data.findIndex(bpmn => bpmn._id == action.payload._id);
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
