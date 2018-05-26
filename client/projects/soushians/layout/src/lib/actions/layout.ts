import { Action } from "@ngrx/store";
import { LayoutConfigModel } from "@soushians/config";

export const OPEN_SIDENAV = "[Layout] Open Sidenav";
export const CLOSE_SIDENAV = "[Layout] Close Sidenav";

export enum LayoutActionTypes {
	UPDATE_LAYOUT_CONFIG = "[Layout] UPDATE_LAYOUT_CONFIG",
	SIGNOUT = "[Layout] signout",
	TITLE_CHANGED = "[LAYOUT] TITLE_CHANGED",
	CHANGE_LAYOUT = "[Layout] Change Layout",
	CHANGE_MAIN_SIDENAVE_MODE = "[Layout] Change main sidenav mode",
	OPEN_SECOND_SIDEBAR = "[Layout] Open Second Sidebar",
	CLOSE_SECOND_SIDEBAR = "[Layout] Close Second Sidebar",
	CHANGE_SECOND_SIDENAV_MODE = "[Layout] Change second sidenav mode"
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
export class SignoutAction implements Action {
	readonly type = LayoutActionTypes.SIGNOUT;
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
export type Actions =
	| UpdateLayoutConfigAction
	| OpenSidenavAction
	| CloseSidenavAction
	| ChangeSideNavMode
	| ChangeLayout
	| SignoutAction
	| TitleChangedAction
	| OpenSecondSidenavAction
	| CloseSecondSidenavAction
	| ChangeSecondSidenavMode;
