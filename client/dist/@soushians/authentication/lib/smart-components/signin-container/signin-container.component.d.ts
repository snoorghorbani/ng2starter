import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AuthenticationConfigurationService } from "../../services/authentication-configuration.service";
import { FeatureState } from "../../reducers";
export declare class SigninContainerComponent {
    private configurationService;
    private store;
    formId$: Observable<string>;
    constructor(configurationService: AuthenticationConfigurationService, store: Store<FeatureState>);
    signIn(formValue: any): void;
}
