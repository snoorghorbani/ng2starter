import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { DisableGetLink, EnableGetLink, ResetPasswordLinkRequestStart, ResetPasswordLinkRequestSucceed, ResetPasswordLinkRequestFailed } from "./reset-password-request.actions";
import { PasswordService } from "../services/password.service";
export declare class ResetPasswordRequestEffects {
    private actions$;
    private passwordService;
    constructor(actions$: Actions<any>, passwordService: PasswordService);
    ResetPasswordRequest$: Observable<ResetPasswordLinkRequestStart>;
    MaximumTryHappend$: Observable<DisableGetLink>;
    enableAfterTime$: Observable<EnableGetLink>;
    RequestResetPasswordLink$: Observable<ResetPasswordLinkRequestSucceed | ResetPasswordLinkRequestFailed>;
}
