import { Action } from "@ngrx/store";
import { LayoutConfigModel } from "@soushians/config";

export const OPEN_SIDENAV = "[Layout] Open Sidenav";
export const CLOSE_SIDENAV = "[Layout] Close Sidenav";

export enum LayoutActionTypes {
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

export class UpdateLayoutConfigAction implements Action {
	readonly type = LayoutActionTypes.UPDATE_LAYOUT_CONFIG;
	constructor(public payload: LayoutConfigModel) {}
}
export class OpenSidenavAction implements Action {
	readonly type = OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
	readonly type = CLOSE_SIDENAV;
}

export class ChangeLayout implements Action {
	readonly type = LayoutActionTypes.CHANGE_LAYOUT;
	constructor(public name: "with-margin" | "without-margin" | "default") {}
}

export class ChangeSideNavMode implements Action {
	readonly type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
	constructor(public mode: "over" | "push" | "side") {}
}
export class ChangeSecondSidenavMode implements Action {
	readonly type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
	constructor(public mode: "over" | "push" | "side") {}
}
export class DoSignoutAction implements Action {
	readonly type = LayoutActionTypes.DO_SIGNOUT;
}

export class TitleChangedAction implements Action {
	readonly type = LayoutActionTypes.TITLE_CHANGED;
	constructor(public title: string) {}
}
export class OpenSecondSidenavAction implements Action {
	readonly type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
}

export class CloseSecondSidenavAction implements Action {
	readonly type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
}
export class FullscreenAction implements Action {
	readonly type = LayoutActionTypes.FULLSCREEN;
}
export class ExitFullscreenAction implements Action {
	readonly type = LayoutActionTypes.EXIT_FULLSCREEN;
}
export class ToggleFullscreenAction implements Action {
	readonly type = LayoutActionTypes.TOGGLE_FULLSCREEN;
}
export type Actions =
	| UpdateLayoutConfigAction
	| OpenSidenavAction
	| CloseSidenavAction
	| ChangeSideNavMode
	| ChangeLayout
	| DoSignoutAction
	| TitleChangedAction
	| OpenSecondSidenavAction
	| CloseSecondSidenavAction
	| FullscreenAction
	| ExitFullscreenAction
	| ChangeSecondSidenavMode
	| ToggleFullscreenAction;
