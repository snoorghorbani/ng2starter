import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as layout from "./layout.reducer";
import * as fromToolbar from "./toolbar.reducer";
import { State } from "./layout.reducer";

export { State };

export interface LayoutState {
	layout: layout.State;
	toolbar: fromToolbar.State;
}

export const LayoutReducers = {
	layout: layout.Reducer,
	toolbar: fromToolbar.Reducer
};
export interface FeatureState {
	layout: LayoutState;
	toolbar: fromToolbar.State;
}

//#region selectors

export const selectLayoutState = createFeatureSelector<LayoutState>("layout");

//#endregion

export const getLayout = createSelector(selectLayoutState, (state: LayoutState) => state.layout);

export const getTitle = createSelector(getLayout, layout.getTitle);

export const getShowMainSidenav = createSelector(getLayout, layout.getShowMainSidenav);

export const getMainSideNavMode = createSelector(getLayout, layout.getMainSideNavMode);

export const getLayoutMode = createSelector(getLayout, layout.getLayoutMode);

export const getShowSecondSidebarStatus = createSelector(getLayout, layout.getShowSecondSidebarStatus);
export const getSecondSidebarMode = createSelector(getLayout, layout.getSecondSidebarMode);

//#region toolbar

export const getLayoutToolbar = createSelector(selectLayoutState, (state: LayoutState) => state.toolbar);
export const getLayoutToolbarMode = createSelector(getLayoutToolbar, fromToolbar.getToolbarMode);

//#endregion
