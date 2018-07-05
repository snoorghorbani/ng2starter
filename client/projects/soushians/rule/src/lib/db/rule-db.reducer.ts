import { responseStatusTypes } from "@soushians/shared";

import { RuleModel } from "../models/rule.model";
import { RulesListActionTypes, RulesListActions } from "./rule-db.actions";

export interface State {
	status: responseStatusTypes;
	data: RuleModel[];
}
export const initialState: State = {
	status: "pristine",
	data: []
};
export function reducer(state = initialState, action: RulesListActions): State {
	switch (action.type) {
		case RulesListActionTypes.RULES_LIST: {
			return {
				...state,
				status: "dirty"
			};
		}
		case RulesListActionTypes.RULES_LIST_START: {
			return {
				...state,
				status: "pending"
			};
		}
		case RulesListActionTypes.RULES_LIST_SUCCEED: {
			return {
				...state,
				data: action.payload,
				status: "succeed"
			};
		}
		case RulesListActionTypes.RULES_LIST_FAILED: {
			return {
				...state,
				status: "failed"
			};
		}
		case RulesListActionTypes.RULE_UPSERT: {
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
		case RulesListActionTypes.RULE_FETCHED: {
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
