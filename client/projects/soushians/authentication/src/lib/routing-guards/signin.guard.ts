import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { FeatureState, getLoggedIn } from "../reducers";

@Injectable()
export class SigninGuard implements CanActivate {
	constructor(private store: Store<FeatureState>) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.store.select(getLoggedIn).take(1).map(authed => !authed);
	}
}
