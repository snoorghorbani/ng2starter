import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer } from "@ngrx/store";

import * as ConfigReducer from "./config.reducer";
import * as fromEditConfig from "./edit-config.reducer";

import { environment } from "../../environments/environment";
import * as fromRouter from "@ngrx/router-store";

// import * as fromLayout from '../core/layout/reducers';
import { AuthenticationReducers, AuthenticationState } from "@soushians/authentication";
import * as progressReducer from "./progress.reducer";

export interface State {
	// layout: fromLayout.layoutState;
	progress: progressReducer.State;
}

export const reducers: ActionReducerMap<State> = {
	// layout: fromLayout.layoutReducer,
	progress: progressReducer.Reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<any> {
	return function(state: State, action: any): State {
		console.log("state", state);
		console.log("action", action);

		return reducer(state, action);
	};
}

export const metaReducers: ActionReducer<any>[] = !environment.production ? [ logger ] : [];
