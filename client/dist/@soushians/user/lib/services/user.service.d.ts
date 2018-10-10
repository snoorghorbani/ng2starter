import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { UserConfigurationService } from "./user-configuration.service";
import { UserModuleConfig } from "../user.config";
import { ProfileViewModel } from "../models/profile-view.model";
import { UserModel } from "../models/user.model";
import { EditProfile_ApiModel } from "../models/profile-edit.model";
export declare class UserService {
    private http;
    private store;
    private configurationService;
    config: UserModuleConfig;
    constructor(http: HttpClient, store: Store<any>, configurationService: UserConfigurationService);
    getAccountInfo(): Observable<ProfileViewModel.Response>;
    editProfile(data: EditProfile_ApiModel.Request): Observable<UserModel>;
    getInfo(data: ProfileViewModel.Request): Observable<any>;
    is_role(role: string): Observable<boolean>;
}
