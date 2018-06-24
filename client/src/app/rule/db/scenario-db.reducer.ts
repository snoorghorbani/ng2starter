import { responseStatusTypes } from "@soushians/shared";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { ScenariosListActionTypes, ScenariosListActions } from "./scenario-db.actions";

export interface State {
	status: responseStatusTypes;
	data: GwtScenarioModel[];
}
export const initialState: State = {
	status: "pristine",
	data: []
};
export function reducer(state = initialState, action: ScenariosListActions): State {
	switch (action.type) {
		case ScenariosListActionTypes.SCENARIOS_LIST: {
			return {
				...state,
				status: "dirty"
			};
		}
		case ScenariosListActionTypes.SCENARIOS_LIST_START: {
			return {
				...state,
				status: "pending"
			};
		}
		case ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED: {
			return {
				...state,
				data: action.payload,
				status: "succeed"
			};
		}
		case ScenariosListActionTypes.SCENARIOS_LIST_FAILED: {
			return {
				...state,
				status: "failed"
			};
		}
		case ScenariosListActionTypes.SCENARIO_UPSERT: {
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
		case ScenariosListActionTypes.SCENARIO_FETCHED: {
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
