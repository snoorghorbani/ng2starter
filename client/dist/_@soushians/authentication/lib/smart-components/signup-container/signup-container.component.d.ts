import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { AuthenticationConfigurationService } from "../../services/authentication-configuration.service";
import { FeatureState } from "../../reducers";
import { MatSnackBar } from "@angular/material";
export declare class SignupContainerComponent {
    private configurationService;
    private store;
    private snackBar;
    formId$: Observable<string>;
    signedUp$: EventEmitter<boolean>;
    constructor(configurationService: AuthenticationConfigurationService, store: Store<FeatureState>, snackBar: MatSnackBar);
    signup(formValue: any): void;
}
