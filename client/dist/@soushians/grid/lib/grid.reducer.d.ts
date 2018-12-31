import * as fromRoot from "./root/grids.reducers";
export interface GridState {
    db: fromRoot.State;
}
export declare const GridReducer: {
    db: typeof fromRoot.Reducer;
};
export interface AppState {
    grids: GridState;
}
