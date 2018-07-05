import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { UserModel } from "../../models";
import * as FeatureReducer from "../../user.reducers";
import { UserConfigurationService } from "../../services/user-configuration.service";
import { UserModuleConfig } from "../../user.config";
export declare class ProfileEditContainerComponent implements OnInit {
    private store;
    private configService;
    userInforamation$: Observable<UserModel>;
    roles$: Observable<string[]>;
    groups: Observable<string[]>;
    config$: Observable<UserModuleConfig>;
    constructor(store: Store<FeatureReducer.AppState>, configService: UserConfigurationService);
    ngOnInit(): void;
    updateProfile(data: any): void;
}
