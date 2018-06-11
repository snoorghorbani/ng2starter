import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Actions } from "@ngrx/effects";
import { DoSignoutAction } from "@soushians/authentication";
export declare class LayoutEffects {
    private actions$;
    private router;
    constructor(actions$: Actions, router: Router);
    DoSignout$: Observable<DoSignoutAction>;
}
