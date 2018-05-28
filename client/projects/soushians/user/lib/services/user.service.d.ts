import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { UserModel, EditProfile_ApiModel, ProfileViewModel } from "../models";
import { UserConfigurationService } from "./user-configuration.service";
import { Store } from "@ngrx/store";
export declare class UserService {
    private http;
    private store;
    private configurationService;
    responseCache: ProfileViewModel.Response;
    constructor(http: HttpClient, store: Store<any>, configurationService: UserConfigurationService);
    getProfileInformation(): Observable<ProfileViewModel.Response>;
    editProfile(data: EditProfile_ApiModel.Request): Observable<UserModel>;
    getInfo(data: ProfileViewModel.Request): Observable<any>;
    is_role(role: string): Observable<boolean>;
}
