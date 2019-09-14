import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Store } from "@ngrx/store";
import { Actions } from "@ngrx/effects";
import { DoSignoutAction } from "@soushians/authentication";
import { InvisibleToolbarAction, VisibleToolbarAction, ExitFullscreenAction, FullscreenAction } from "./actions";
import { FeatureState } from "./reducers";
export declare class LayoutEffects {
    private actions$;
    private router;
    private store;
    constructor(actions$: Actions, router: Router, store: Store<FeatureState>);
    DoSignout$: Observable<DoSignoutAction>;
    fullscreen$: Observable<InvisibleToolbarAction>;
    exit_fullscreen$: Observable<VisibleToolbarAction>;
    fullscren_toolbar$: Observable<FullscreenAction | ExitFullscreenAction>;
}
