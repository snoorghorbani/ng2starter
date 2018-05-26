import * as source from "../actions/source.action";
import { SourceModel, UpsertSourceApiModel } from "../models";

export interface State {
	data: SourceModel[];
}

const initialState: State = {
	data: []
};

export function Reducer(state = initialState, action: source.Actions): State {
	switch (action.type) {
		case source.SourceActionTypes.SOURCE_SUBMIT:
			return {
				...state
			};
		case source.SourceActionTypes.SOURCE_SUBMIT_SUCCEED:
			return {
				...state
			};
		case source.SourceActionTypes.SOURCE_SUBMIT_FAILED:
			return {
				...state
			};

		default:
			return state;
	}
}

export const getSourceListData = (state: State) => state.data;
