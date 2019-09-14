import * as layout from "../actions/layout";
import { Action } from "@ngrx/store";
export interface State {
    showMainSidenav?: boolean;
    showSecondSideNav?: boolean;
    secondSideNavMode?: "over" | "push" | "side";
    mainSideNavMode?: "over" | "push" | "side";
    menuItems?: {
        route: string;
        icon: string;
        roles: string[];
        title: string;
    }[];
    showLeftNavBar?: boolean;
    stickyLeftNavBar?: boolean;
    layoutMode?: "with-margin" | "without-margin" | "default";
    title?: string;
    signoutAction: Action;
    fullscreen: boolean;
}
export declare function Reducer(state: State, action: layout.Actions): State;
export declare const getShowSidenav: (state: State) => boolean;
export declare const getTitle: (state: State) => string;
export declare const getShowMainSidenav: (state: State) => boolean;
export declare const getMainSideNavMode: (state: State) => "push" | "over" | "side";
export declare const getLayoutMode: (state: State) => "default" | "with-margin" | "without-margin";
export declare const getShowSecondSidebarStatus: (state: State) => boolean;
export declare const getSecondSidebarMode: (state: State) => "push" | "over" | "side";
export declare const getFullscreenMode: (state: State) => boolean;
