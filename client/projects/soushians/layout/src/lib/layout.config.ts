import { InjectionToken } from "@angular/core";

import { LayoutConfigModel } from "@soushians/config";

export interface LayoutModuleConfig extends LayoutConfigModel {}

export const MODULE_DEFAULT_CONFIG: LayoutModuleConfig = {
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
	]
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<LayoutModuleConfig>("LayoutModuleConfig");
