import { ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { ConfigModel } from "@soushians/config";
import { UserFacadeService, UserModel } from "@soushians/user";
import { FeatureState } from "../../reducers/index";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
export declare class NgsLayoutMainComponent {
    private store;
    private router;
    private configService;
    private translateService;
    private userFacadeService;
    app_config: ConfigModel<any>;
    mode$: Observable<"visible" | "invisible">;
    theme: string;
    user$: Observable<UserModel>;
    displayName$: Observable<string>;
    isFullscreen$: Observable<boolean>;
    progressStatus$: Observable<boolean>;
    showSidebarMenu: BehaviorSubject<boolean>;
    showMainSidenav: Observable<boolean>;
    mainSidenavMode: Observable<"side" | "over" | "push">;
    layoutMode: Observable<"with-margin" | "without-margin" | "default">;
    width: number;
    showSecondSidenav: Observable<boolean>;
    secondSidenavMode: Observable<"side" | "over" | "push">;
    toolbarAnimationState: Observable<string>;
    mainSideNav: ElementRef;
    theme_A: boolean;
    theme_B: boolean;
    constructor(store: Store<FeatureState>, router: Router, configService: LayoutConfigurationService, translateService: TranslateService, userFacadeService: UserFacadeService);
    onSecondSidebarClosedStart(): void;
    onSidebarClosedStart(): void;
    /**
     * private methods
     */
    _set_i18n_resource(): void;
}
