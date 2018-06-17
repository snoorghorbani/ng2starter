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
export declare const MODULE_DEFAULT_CONFIG: LayoutModuleConfigModel;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<LayoutModuleConfigModel>;
