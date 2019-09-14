import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { Store } from "@ngrx/store";
import { UserModel } from "../models/user.model";
import { FrontendAuthenticationConfigurationService } from "./frontend-authentication-configuration.service";
import { FeatureState } from "../reducers";
export declare class FrontendSigninService {
    private http;
    private store;
    private configurationService;
    private snackBar;
    constructor(http: HttpClient, store: Store<FeatureState>, configurationService: FrontendAuthenticationConfigurationService, snackBar: MatSnackBar);
    signin(token: any): Observable<UserModel>;
    signout(): Observable<any>;
    whoAmI(): Observable<any>;
}
export declare let FrontendSigninServiceStub: {};
