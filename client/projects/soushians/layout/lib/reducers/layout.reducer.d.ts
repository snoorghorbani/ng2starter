import * as layout from "../actions/layout";
import { LayoutConfigModel } from "@soushians/config";
export interface State extends LayoutConfigModel {
}
export declare function Reducer(state: State, action: layout.Actions): State;
export declare const getShowSidenav: (state: State) => boolean;
export declare const getTitle: (state: State) => string;
export declare const getShowMainSidenav: (state: State) => boolean;
export declare const getMainSideNavMode: (state: State) => "over" | "push" | "side";
export declare const getLayoutMode: (state: State) => "default" | "with-margin" | "without-margin";
export declare const getShowSecondSidebarStatus: (state: State) => boolean;
export declare const getSecondSidebarMode: (state: State) => "over" | "push" | "side";
