import { DiagramsActionTypes, DiagramsAction } from "../actions";
import { GetDiagramsApiModel } from "../models/get-diagrams-api.model";

console.log(GetDiagramsApiModel);

export interface State {
	loaded: boolean;
	diagram: GetDiagramsApiModel.Response;
}
export const initialState: State = {
	loaded: false,
	diagram: {
		Result: []
	}
};

export function diagramReducer(state = initialState, action: DiagramsAction): State {
	switch (action.type) {
		case DiagramsActionTypes.GET_DIAGRAM: {
			return {
				...state,
				loaded: true
				// diagram: action.payload,
			};
		}
		case DiagramsActionTypes.GET_DIAGRAM_START: {
			return {
				...state,
				loaded: true
				//  diagram: action.payload,
			};
		}

		default: {
			return state;
		}
	}
}

export const DiagramInfo = (state: State) => state.diagram;
