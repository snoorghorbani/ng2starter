import { Store } from "@ngrx/store";
import { AppState } from "../user.reducers";
import { Observable } from "rxjs/Observable";
import { UserConfigurationService } from "./user-configuration.service";
import { UserModel } from "../models";
export declare class UserFacadeService {
    private store;
    private configService;
    constructor(store: Store<AppState>, configService: UserConfigurationService);
    getDisplayName(): Observable<string>;
    getInfo(): Observable<UserModel>;
}
