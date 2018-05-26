import { Action } from "@ngrx/store";

export interface State {
	number: number;
}
export const initialState: State = {
	number: 0
};

export function Reducer(state = initialState, action: Action): State {
	switch (action.type) {
		default: {
			return state;
		}
	}
}

export interface SocketState {
	change: State;
}

export const SocketReducer = {
	change: Reducer
};

export interface AppState {
	socket: SocketState;
}
