import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { getAccountInfo, AppState } from "../user.reducers";
import { UserConfigurationService } from "./user-configuration.service";
import { UserModel } from "../models/user.model";

@Injectable({
	providedIn: "root"
})
export class UserFacadeService {
	constructor(private store: Store<AppState>, private configService: UserConfigurationService) {}
	getDisplayName(): Observable<string> {
		return this.store.select(getAccountInfo).let(this.configService.config$.getValue().mapUserDisplayName);
		// .pipe(filter(displayName => displayName !== undefined));
	}
	getInfo(): Observable<UserModel> {
		return this.store.select(getAccountInfo);
	}
}
