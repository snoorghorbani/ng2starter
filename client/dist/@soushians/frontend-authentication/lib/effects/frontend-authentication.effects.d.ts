import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Actions } from "@ngrx/effects";
import { ProgressingStarted, ProgressingFinished } from "../actions";
export declare class FrontendAuthenticationEffects {
    private actions$;
    private router;
    constructor(actions$: Actions<any>, router: Router);
    dispachProgressingStarted$: Observable<ProgressingStarted>;
    dispachProgressingFinished$: Observable<ProgressingFinished>;
}
