import { EventEmitter, ElementRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { responseStatusTypes } from "@soushians/shared";
import { SigninService } from "@soushians/authentication";
import { FeatureState } from "../../reducers";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
export declare class MainMenuComponent {
    private store;
    signinService: SigninService;
    configurationService: LayoutConfigurationService;
    closeSidebar: EventEmitter<{}>;
    authenticated: Observable<boolean>;
    customerStatus$: Observable<responseStatusTypes>;
    routes: any;
    customerMobileInput: ElementRef;
    constructor(store: Store<FeatureState>, signinService: SigninService, configurationService: LayoutConfigurationService);
}
