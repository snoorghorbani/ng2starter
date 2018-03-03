import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as list from "../list/list.reducers";

export interface FormState {
	list: list.State;
}

export const FormReducers = {
	list: list.reducer
};

export interface MainContainerState {
	"form": FormState;
}
