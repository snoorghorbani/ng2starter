import * as fromRoot from "./root/widgets.reducers";
export interface WidgetState {
    db: fromRoot.State;
}
export declare const WidgetReducer: {
    db: typeof fromRoot.Reducer;
};
export interface AppState {
    widgets: WidgetState;
}
