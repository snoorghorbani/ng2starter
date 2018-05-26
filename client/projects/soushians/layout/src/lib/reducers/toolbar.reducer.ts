import { ToolbarActionTypes, ToolbarActions } from "../actions";

export interface State {
	mode: "comfortable" | "compact" | "summary";
	enableComfortableMode: boolean;
	comfortableModeHaveBeenDone: boolean;
}

const initialState: State = {
	mode: "compact",
	enableComfortableMode: false,
	comfortableModeHaveBeenDone: false
};

export function Reducer(state = initialState, action: ToolbarActions): State {
	switch (action.type) {
		case ToolbarActionTypes.COMPACT:
			return {
				...state,
				mode: "compact"
			};
		case ToolbarActionTypes.COMPORTABLE:
			return {
				...state,
				mode: state.enableComfortableMode ? "comfortable" : "compact"
			};
		case ToolbarActionTypes.SUMMARY:
			return {
				...state,
				mode: "summary"
			};
		case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
			return {
				...state,
				enableComfortableMode: true
			};
		case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
			return {
				...state,
				mode: "compact",
				enableComfortableMode: false
			};
		default:
			return state;
	}
}

export const getToolbarMode = (state: State) => state.mode;
