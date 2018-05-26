import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import { GetProfile } from "../profile-view/profile-view.actions";
export declare class UserEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: UserService);
    getProfileInformation$: Observable<GetProfile>;
}
