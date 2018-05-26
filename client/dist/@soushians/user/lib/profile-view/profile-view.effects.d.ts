import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import { GetProfileStart, GetProfileSucceed, GetProfileFailed } from "./profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard/user.actions";
export declare class ProfileViewEffects {
    private actions$;
    private userService;
    constructor(actions$: Actions<any>, userService: UserService);
    ProfileRequest$: Observable<GetProfileStart>;
    getProfile$: Observable<GetProfileSucceed | GetProfileFailed>;
    refreshUserInfo$: Observable<RefreshUserInfoAction>;
}
