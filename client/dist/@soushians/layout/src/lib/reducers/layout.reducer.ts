import * as layout from "../actions/layout";
import { LayoutConfigModel } from "@soushians/config";
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

const initialState: State = {
	showMainSidenav: false,
	showSecondSideNav: false,
	secondSideNavMode: "over",
	mainSideNavMode: "over",
	showLeftNavBar: false,
	stickyLeftNavBar: false,
	layoutMode: "default",
	title: "",
	menuItems: [],
	signoutAction: {} as Action,
	fullscreen: false
};

export function Reducer(state = initialState, action: layout.Actions): State {
	switch (action.type) {
		case layout.LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
			return {
				...state,
				...action.payload
			};
		case layout.CLOSE_SIDENAV:
			return {
				...state,
				showMainSidenav: false
			};

		case layout.OPEN_SIDENAV:
			return {
				...state,
				showMainSidenav: true
			};

		case layout.LayoutActionTypes.TITLE_CHANGED:
			return {
				...state,
				title: action.title
			};
		case layout.LayoutActionTypes.CHANGE_LAYOUT:
			return {
				...state,
				layoutMode: action.name
			};

		case layout.LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE:
			return {
				...state,
				mainSideNavMode: action.mode
			};

		case layout.LayoutActionTypes.CLOSE_SECOND_SIDEBAR:
			return {
				...state,
				showSecondSideNav: false
			};

		case layout.LayoutActionTypes.OPEN_SECOND_SIDEBAR:
			return {
				...state,
				showSecondSideNav: true
			};
		case layout.LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE:
			return {
				...state,
				secondSideNavMode: action.mode
			};
		case layout.LayoutActionTypes.FULLSCREEN:
			return {
				...state,
				fullscreen: true
			};
		case layout.LayoutActionTypes.EXIT_FULLSCREEN:
			return {
				...state,
				fullscreen: false
			};
		// case layout.LayoutActionTypes.TOGGLE_FULLSCREEN:
		// 	return {
		// 		...state,
		// 		fullscreen: state.fullscreen === true ? false : true
		// 	};
		default:
			return state;
	}
}

export const getShowSidenav = (state: State) => state.showMainSidenav;
export const getTitle = (state: State) => state.title;
export const getShowMainSidenav = (state: State) => state.showMainSidenav;
export const getMainSideNavMode = (state: State) => state.mainSideNavMode;
export const getLayoutMode = (state: State) => state.layoutMode;
export const getShowSecondSidebarStatus = (state: State) => state.showSecondSideNav;
export const getSecondSidebarMode = (state: State) => state.secondSideNavMode;
export const getFullscreenMode = (state: State) => state.fullscreen;
