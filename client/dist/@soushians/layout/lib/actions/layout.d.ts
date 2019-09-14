import { Action } from "@ngrx/store";
import { LayoutModuleConfigModel } from "../layout.config";
export declare const OPEN_SIDENAV = "[Layout] Open Sidenav";
export declare const CLOSE_SIDENAV = "[Layout] Close Sidenav";
export declare enum LayoutActionTypes {
    UPDATE_LAYOUT_CONFIG = "[Layout] UPDATE_LAYOUT_CONFIG",
    DO_SIGNOUT = "[Layout] do signout",
    TITLE_CHANGED = "[LAYOUT] TITLE_CHANGED",
    CHANGE_LAYOUT = "[Layout] Change Layout",
    CHANGE_MAIN_SIDENAVE_MODE = "[Layout] Change main sidenav mode",
    OPEN_SECOND_SIDEBAR = "[Layout] Open Second Sidebar",
    CLOSE_SECOND_SIDEBAR = "[Layout] Close Second Sidebar",
    CHANGE_SECOND_SIDENAV_MODE = "[Layout] Change second sidenav mode",
    FULLSCREEN = "[Layout] FULLSCREEN",
    EXIT_FULLSCREEN = "[Layout] EXIT_FULLSCREEN",
    TOGGLE_FULLSCREEN = "[Layout] TOGGLE_FULLSCREEN"
}
export declare class UpdateLayoutConfigAction implements Action {
    payload: Partial<LayoutModuleConfigModel>;
    readonly type = LayoutActionTypes.UPDATE_LAYOUT_CONFIG;
    constructor(payload: Partial<LayoutModuleConfigModel>);
}
export declare class OpenSidenavAction implements Action {
    readonly type = "[Layout] Open Sidenav";
}
export declare class CloseSidenavAction implements Action {
    readonly type = "[Layout] Close Sidenav";
}
export declare class ChangeLayout implements Action {
    name: "with-margin" | "without-margin" | "default";
    readonly type = LayoutActionTypes.CHANGE_LAYOUT;
    constructor(name: "with-margin" | "without-margin" | "default");
}
export declare class ChangeSideNavMode implements Action {
    mode: "over" | "push" | "side";
    readonly type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
    constructor(mode: "over" | "push" | "side");
}
export declare class ChangeSecondSidenavMode implements Action {
    mode: "over" | "push" | "side";
    readonly type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
    constructor(mode: "over" | "push" | "side");
}
export declare class DoSignoutAction implements Action {
    readonly type = LayoutActionTypes.DO_SIGNOUT;
}
export declare class TitleChangedAction implements Action {
    title: string;
    readonly type = LayoutActionTypes.TITLE_CHANGED;
    constructor(title: string);
}
export declare class OpenSecondSidenavAction implements Action {
    readonly type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
}
export declare class CloseSecondSidenavAction implements Action {
    readonly type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
}
export declare class FullscreenAction implements Action {
    readonly type = LayoutActionTypes.FULLSCREEN;
}
export declare class ExitFullscreenAction implements Action {
    readonly type = LayoutActionTypes.EXIT_FULLSCREEN;
}
export declare class ToggleFullscreenAction implements Action {
    readonly type = LayoutActionTypes.TOGGLE_FULLSCREEN;
}
export declare type Actions = UpdateLayoutConfigAction | OpenSidenavAction | CloseSidenavAction | ChangeSideNavMode | ChangeLayout | DoSignoutAction | TitleChangedAction | OpenSecondSidenavAction | CloseSecondSidenavAction | FullscreenAction | ExitFullscreenAction | ChangeSecondSidenavMode | ToggleFullscreenAction;
