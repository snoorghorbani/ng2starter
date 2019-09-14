import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { FeatureState } from "../reducers";
export declare class AdminGuard implements CanActivate {
    private store;
    constructor(store: Store<FeatureState>);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
