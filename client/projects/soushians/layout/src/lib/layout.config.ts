import { InjectionToken } from "@angular/core";

import { Action } from "@ngrx/store";

export interface LayoutModuleConfigModel {
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
}

export const MODULE_DEFAULT_CONFIG: LayoutModuleConfigModel = {
	showMainSidenav: false,
	showSecondSideNav: true,
	secondSideNavMode: "over", //| "push" | "side",
	mainSideNavMode: "over", //| "push" | "side",
	showLeftNavBar: false,
	stickyLeftNavBar: false,
	layoutMode: "with-margin", // | "without-margin" | "default",
	title: "",
	menuItems: [
		{
			route: "/",
			icon: "multiline_chart",
			roles: [ "Admin", "User" ],
			title: "صفحه اصلی"
		},
		{
			route: "/configs",
			icon: "settings",
			roles: [ "Admin" ],
			title: "تنظیمات"
		},
		{
			route: "/source",
			icon: "device_hub",
			roles: [ "Admin" ],
			title: "آدرس سرویس ها"
		}
	],
	signoutAction: {} as Action
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<LayoutModuleConfigModel>("LayoutModuleConfigModel");
