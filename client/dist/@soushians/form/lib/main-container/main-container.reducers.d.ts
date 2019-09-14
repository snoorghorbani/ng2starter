import * as list from "../list/list.reducers";
export interface FormState {
    list: list.State;
}
export declare const FormReducers: {
    list: typeof list.reducer;
};
export interface MainContainerState {
    "form": FormState;
}
