import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { MatSnackBar } from "@angular/material";
import { Store } from "@ngrx/store";
import { UserModel } from "../models";
import { AuthenticationConfigurationService } from "./authentication-configuration.service";
import { FeatureState } from "../reducers";
export declare class SigninService {
    private http;
    private store;
    private configurationService;
    private snackBar;
    constructor(http: HttpClient, store: Store<FeatureState>, configurationService: AuthenticationConfigurationService, snackBar: MatSnackBar);
    signup(model: any): Observable<UserModel>;
    signin(model: any): Observable<UserModel>;
    signout(): Observable<any>;
    whoAmI(): Observable<any>;
}
