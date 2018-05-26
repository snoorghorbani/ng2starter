﻿import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { FeatureState, getUser } from "../reducers";

@Injectable({
	providedIn: "root"
})
export class UserGuard implements CanActivate {
	constructor(private store: Store<FeatureState>) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.store.select(getUser).take(1).map(user => (user.Roles as any).includes("User"));
	}
}
