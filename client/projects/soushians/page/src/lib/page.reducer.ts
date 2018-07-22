import * as fromRoot from "./root/pages.reducers";

// tslint:disable-next-line:no-empty-interface
export interface PageState {
	db: fromRoot.State;
}

export const PageReducer = {
	db: fromRoot.Reducer
};

export interface AppState {
	pages: PageState;
}
