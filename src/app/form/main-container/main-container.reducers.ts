import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as listReducer from "../list/list.reducers";

export interface FormState {
	list: listReducer.State;
}

export const FormReducers = {
	list: listReducer.reducer
};

export interface MainContainerState {
	"form": FormState;
}
