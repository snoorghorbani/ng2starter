import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { Observable } from "rxjs/Observable";
import { TranslateService } from '@ngx-translate/core';
import { UserModel } from "@soushians/user";
import { FeatureState } from "../../reducers";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { State as toolbarState } from "../../reducers/toolbar.reducer";
export declare class ToolbarMenuThemeBComponent {
    private document;
    private _location;
    private store;
    private translateService;
    configurationService: LayoutConfigurationService;
    showSecondSidenav: Observable<boolean>;
    showSidebarMenu: any;
    app_config: any;
    user: UserModel;
    displayName: string;
    user$: Observable<UserModel>;
    showMainSidenav: Observable<boolean>;
    toolbarAnimationState: "comfortable" | "compact" | "summary" | "hide";
    menuAnimationState: "comfortable" | "compact" | "summary" | "hide";
    logoAnimationState: "comfortable" | "compact" | "summary" | "hide";
    titleAnimationState: "comfortable" | "compact" | "summary" | "hide";
    menuItems$: Observable<any[]>;
    lastScroll: number;
    config: toolbarState;
    config$: Observable<toolbarState>;
    anchorsMode: boolean;
    constructor(document: any, _location: Location, store: Store<FeatureState>, translateService: TranslateService, configurationService: LayoutConfigurationService);
    onWindowScroll(): void;
    signout(): void;
    goback(): void;
    toggleSecondSidebar(): void;
    toggleMainSidebar(): void;
    _observe_on_layout_config_and_filter_routes(): void;
}
