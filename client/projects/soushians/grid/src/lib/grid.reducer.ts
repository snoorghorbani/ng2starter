import * as fromRoot from "./root/grids.reducers";

// tslint:disable-next-line:no-empty-interface
export interface GridState {
	db: fromRoot.State;
}

export const GridReducer = {
	db: fromRoot.Reducer
};

export interface AppState {
	grids: GridState;
}
