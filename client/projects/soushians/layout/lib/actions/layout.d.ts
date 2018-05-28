import { Action } from "@ngrx/store";
import { LayoutConfigModel } from "@soushians/config";
export declare const OPEN_SIDENAV = "[Layout] Open Sidenav";
export declare const CLOSE_SIDENAV = "[Layout] Close Sidenav";
export declare enum LayoutActionTypes {
    UPDATE_LAYOUT_CONFIG = "[Layout] UPDATE_LAYOUT_CONFIG",
    SIGNOUT = "[Layout] signout",
    TITLE_CHANGED = "[LAYOUT] TITLE_CHANGED",
    CHANGE_LAYOUT = "[Layout] Change Layout",
    CHANGE_MAIN_SIDENAVE_MODE = "[Layout] Change main sidenav mode",
    OPEN_SECOND_SIDEBAR = "[Layout] Open Second Sidebar",
    CLOSE_SECOND_SIDEBAR = "[Layout] Close Second Sidebar",
    CHANGE_SECOND_SIDENAV_MODE = "[Layout] Change second sidenav mode",
}
export declare class UpdateLayoutConfigAction implements Action {
    payload: LayoutConfigModel;
    readonly type: LayoutActionTypes;
    constructor(payload: LayoutConfigModel);
}
export declare class OpenSidenavAction implements Action {
    readonly type: string;
}
export declare class CloseSidenavAction implements Action {
    readonly type: string;
}
export declare class ChangeLayout implements Action {
    name: "with-margin" | "without-margin" | "default";
    readonly type: LayoutActionTypes;
    constructor(name: "with-margin" | "without-margin" | "default");
}
export declare class ChangeSideNavMode implements Action {
    mode: "over" | "push" | "side";
    readonly type: LayoutActionTypes;
    constructor(mode: "over" | "push" | "side");
}
export declare class ChangeSecondSidenavMode implements Action {
    mode: "over" | "push" | "side";
    readonly type: LayoutActionTypes;
    constructor(mode: "over" | "push" | "side");
}
export declare class SignoutAction implements Action {
    readonly type: LayoutActionTypes;
}
export declare class TitleChangedAction implements Action {
    title: string;
    readonly type: LayoutActionTypes;
    constructor(title: string);
}
export declare class OpenSecondSidenavAction implements Action {
    readonly type: LayoutActionTypes;
}
export declare class CloseSecondSidenavAction implements Action {
    readonly type: LayoutActionTypes;
}
export declare type Actions = UpdateLayoutConfigAction | OpenSidenavAction | CloseSidenavAction | ChangeSideNavMode | ChangeLayout | SignoutAction | TitleChangedAction | OpenSecondSidenavAction | CloseSecondSidenavAction | ChangeSecondSidenavMode;
