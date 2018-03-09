import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as list from "../list/list.reducers";

export interface BpmnState {
	list: list.State;
}

export const BpmnReducers = {
	list: list.reducer
};

export interface MainContainerState {
	"bpmn": BpmnState;
}
