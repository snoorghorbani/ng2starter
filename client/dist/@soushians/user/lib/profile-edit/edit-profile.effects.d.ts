import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import { EditProfileStart, EditProfileSucceed, EditProfileFailed } from "./edit-profile.actions";
import { GetProfile } from "../profile-view/profile-view.actions";
export declare class EditProfileEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: UserService);
    EditProfileRequest$: Observable<EditProfileStart>;
    RequestEditProfileLink$: Observable<EditProfileSucceed | EditProfileFailed>;
    goToView$: Observable<GetProfile>;
}
