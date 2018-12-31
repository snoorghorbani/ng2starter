import * as fromRoot from "./root/pages.reducers";
export interface PageState {
    db: fromRoot.State;
}
export declare const PageReducer: {
    db: typeof fromRoot.Reducer;
};
export interface AppState {
    pages: PageState;
}
