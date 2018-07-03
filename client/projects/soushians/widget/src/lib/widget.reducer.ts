import * as fromRoot from "./root/widgets.reducers";

// tslint:disable-next-line:no-empty-interface
export interface WidgetState {
	db: fromRoot.State;
}

export const WidgetReducer = {
	db: fromRoot.Reducer
};

export interface AppState {
	widgets: WidgetState;
}
