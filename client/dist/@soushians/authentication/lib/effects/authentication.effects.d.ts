import { Actions } from "@ngrx/effects";
import { ProgressingStarted, ProgressingFinished } from "../actions";
export declare class AuthenticationEffects {
    private actions$;
    constructor(actions$: Actions<any>);
    dispachProgressingStarted$: import("rxjs").Observable<ProgressingStarted>;
    dispachProgressingFinished$: import("rxjs").Observable<ProgressingFinished>;
}
