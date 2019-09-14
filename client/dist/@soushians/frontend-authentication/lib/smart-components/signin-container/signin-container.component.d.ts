import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { FrontendAuthenticationConfigurationService } from "../../services/frontend-authentication-configuration.service";
import { FeatureState } from "../../reducers";
export declare class SigninContainerComponent {
    private configurationService;
    private store;
    formId$: Observable<string>;
    signedIn$: EventEmitter<boolean>;
    constructor(configurationService: FrontendAuthenticationConfigurationService, store: Store<FeatureState>);
    signIn(formValue: any): void;
}
