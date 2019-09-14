import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { FrontendSigninService } from "./services/signin.service";
import { SigninSecceed } from "./actions/signin.actions";
export declare class FrontendAuthenticationModuleEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<any>, service: FrontendSigninService);
    goToList$: Observable<SigninSecceed>;
}
