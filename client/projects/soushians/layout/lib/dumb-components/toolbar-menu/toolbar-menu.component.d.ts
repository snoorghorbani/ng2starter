import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { Observable } from "rxjs/Observable";
import { UserModel } from "@soushians/user";
import { FeatureState } from "../../reducers";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { State as toolbarState } from "../../reducers/toolbar.reducer";
export declare class ToolbarMenuComponent {
    private document;
    private _location;
    private store;
    configurationService: LayoutConfigurationService;
    showSecondSidenav: Observable<boolean>;
    showSidebarMenu: any;
    app_config: any;
    user: UserModel;
    showMainSidenav: Observable<boolean>;
    toolbarAnimationState: Observable<"comfortable" | "compact" | "summary">;
    menuItems$: Observable<any[]>;
    lastScroll: number;
    config: toolbarState;
    config$: Observable<toolbarState>;
    constructor(document: any, _location: Location, store: Store<FeatureState>, configurationService: LayoutConfigurationService);
    onWindowScroll(): void;
    signout(): void;
    goback(): void;
    toggleSecondSidebar(): void;
    toggleMainSidebar(): void;
}
