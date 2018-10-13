import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { AppState } from "../user.reducers";
import { UserConfigurationService } from "./user-configuration.service";
import { UserModel } from "../models/user.model";
export declare class UserFacadeService {
    private store;
    private configService;
    constructor(store: Store<AppState>, configService: UserConfigurationService);
    getDisplayName(): Observable<string>;
    getInfo(): Observable<UserModel>;
}
