import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { MatSnackBar } from "@angular/material";
import { UserModel } from "../models";
import { AuthenticationConfigurationService } from "./authentication-configuration.service";
export declare class SigninService {
    private http;
    private configurationService;
    private snackBar;
    constructor(http: HttpClient, configurationService: AuthenticationConfigurationService, snackBar: MatSnackBar);
    signin(model: any): Observable<UserModel>;
    signout(): Observable<any>;
}
export declare var SigninServiceStub: {};
