import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../user.reducers";
import { Observable } from "rxjs/Observable";
import { getAccountInfo } from "../user.reducers";
import { UserConfigurationService } from "./user-configuration.service";

@Injectable({
	providedIn: "root"
})
export class UserFacadeService {
	constructor(private store: Store<AppState>, private configService: UserConfigurationService) {}
	getDisplayName(): Observable<string> {
		return this.configService.config$
			.map(config => config.mapUserDisplayName)
			.switchMap(mapper => this.store.select(getAccountInfo).let(mapper));
	}
}
