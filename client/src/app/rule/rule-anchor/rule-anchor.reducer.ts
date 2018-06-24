import { RuleAnchorsAction, RuleAnchorsActionTypes } from "./rule-anchor.actions";

export interface State {
	active: boolean;
}

export const initialState: State = {
	active: false
};

export function Reducer(state = initialState, action: RuleAnchorsAction): State {
	switch (action.type) {
		case RuleAnchorsActionTypes.SHOW_ANCHORS: {
			return {
				...state,
				active: true
			};
		}

		case RuleAnchorsActionTypes.HIDE_ANCHORS: {
			return {
				...state,
				active: false
			};
		}

		default: {
			return state;
		}
	}
}

//#region  selectors
export const getAnchorsActivityState = (state: State) => state.active;
//#endregion
