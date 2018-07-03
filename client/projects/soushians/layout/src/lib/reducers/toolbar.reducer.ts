import { ToolbarActionTypes, ToolbarActions } from "../actions";

export interface State {
	mode: "comfortable" | "compact" | "summary" | "hide";
	enableComfortableMode: boolean;
	comfortableModeHaveBeenDone: boolean;
	visibility: boolean;
}

const initialState: State = {
	mode: "compact",
	enableComfortableMode: false,
	comfortableModeHaveBeenDone: false,
	visibility: true
};

export function Reducer(state = initialState, action: ToolbarActions): State {
	switch (action.type) {
		case ToolbarActionTypes.COMPACT:
			if (!state.visibility)
				return {
					...state,
					mode: "hide"
				};
			return {
				...state,
				mode: "compact"
			};
		case ToolbarActionTypes.COMPORTABLE:
			if (!state.visibility)
				return {
					...state,
					mode: "hide"
				};
			return {
				...state,
				mode: state.enableComfortableMode ? "comfortable" : "compact"
			};
		case ToolbarActionTypes.SUMMARY:
			if (!state.visibility)
				return {
					...state,
					mode: "hide"
				};
			return {
				...state,
				mode: "summary"
			};
		case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
			if (!state.visibility)
				return {
					...state,
					mode: "hide"
				};
			return {
				...state,
				enableComfortableMode: true
			};
		case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
			if (!state.visibility)
				return {
					...state,
					mode: "hide"
				};
			return {
				...state,
				mode: "compact",
				enableComfortableMode: false
			};
		case ToolbarActionTypes.VISIBLE:
			return {
				...state,
				mode: "compact",
				visibility: true
			};
		case ToolbarActionTypes.INVISIBLE:
			return {
				...state,
				mode: "hide",
				visibility: false
			};
		default:
			return state;
	}
}

export const getToolbarMode = (state: State) => state.mode;
