import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { ResetPasswordModel, ResetPasswordRequestModel, ChangePasswordModel } from "../models";
import { UserConfigurationService } from "./user-configuration.service";
export declare class PasswordService {
    private http;
    private store;
    private userConfigurationService;
    numberOfRequeseted$: Observable<number>;
    constructor(http: HttpClient, store: Store<any>, userConfigurationService: UserConfigurationService);
    isValidResetPasswordRequest(): Observable<boolean>;
    isValidResetPasswordReset(data: ResetPasswordModel.Request): Observable<any>;
    requestResetPasswordLink(data: ResetPasswordRequestModel.Request): Observable<any>;
    changePassword(data: ChangePasswordModel.Request): Observable<any>;
    resetPassword(data: ResetPasswordModel.Request): Observable<any>;
}
export declare var PasswordServiceStub: {};
