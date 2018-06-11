import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import { GetProfile } from "../profile-view/profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard";
export declare class UserEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: UserService);
    getAccountInfo$: Observable<GetProfile>;
    signout$: Observable<RefreshUserInfoAction>;
}
