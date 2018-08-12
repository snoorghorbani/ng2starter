import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../user.reducers";
import { Observable } from "rxjs/Observable";
import { getAccountInfo } from "../user.reducers";
import { UserConfigurationService } from "./user-configuration.service";
import { map, switchMap, combineLatest, catchError, filter } from "rxjs/operators";
import { of } from "rxjs";
import { UserModel } from "../models";

@Injectable({
	providedIn: "root"
})
export class UserFacadeService {
	constructor(private store: Store<AppState>, private configService: UserConfigurationService) { }
	getDisplayName(): Observable<string> {
		return this.store.select(getAccountInfo).let(this.configService.config$.getValue().mapUserDisplayName);
		// .pipe(filter(displayName => displayName !== undefined));
	}
	getInfo(): Observable<UserModel> {
		return this.store.select(getAccountInfo);
	}
}
