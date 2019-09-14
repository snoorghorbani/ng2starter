import { ToolbarActions } from "../actions";
export interface State {
    mode: "comfortable" | "compact" | "summary" | "hide";
    enableComfortableMode: boolean;
    comfortableModeHaveBeenDone: boolean;
    visibility: boolean;
}
export declare function Reducer(state: State, action: ToolbarActions): State;
export declare const getToolbarMode: (state: State) => "hide" | "summary" | "comfortable" | "compact";
