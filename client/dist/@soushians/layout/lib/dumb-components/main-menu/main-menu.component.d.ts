import { EventEmitter, ElementRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { responseStatusTypes } from "@soushians/shared";
import { SigninService } from "@soushians/authentication";
import { FeatureState } from "../../reducers";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { UserModel } from "@soushians/user";
export declare class MainMenuComponent {
    private store;
    signinService: SigninService;
    configurationService: LayoutConfigurationService;
    closeSidebar: EventEmitter<any>;
    authenticated: Observable<boolean>;
    user$: Observable<UserModel>;
    customerStatus$: Observable<responseStatusTypes>;
    routes$: Observable<any>;
    customerMobileInput: ElementRef;
    constructor(store: Store<FeatureState>, signinService: SigninService, configurationService: LayoutConfigurationService);
    _observe_on_layout_config_and_filter_routes(): void;
}
