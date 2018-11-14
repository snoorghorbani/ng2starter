import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map, switchMap, take, filter, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";

// import { environment } from "../../environments/environment";

import { UserModel } from "../models/user.model";
import { FrontendAuthenticationConfigurationService } from "./frontend-authentication-configuration.service";
import { FeatureState } from "../reducers";
// import { WhoAmIAction } from "../actions";

@Injectable({
	providedIn: "root"
})
export class FrontendSigninService {
	constructor(
		private http: HttpClient,
		private store: Store<FeatureState>,
		private configurationService: FrontendAuthenticationConfigurationService,
		private snackBar: MatSnackBar
	) {
		// setTimeout(() => this.store.dispatch(new WhoAmIAction()), 300);
	}

	signin(token: any): Observable<UserModel> {
		this.configurationService.config$.subscribe(c => {
			debugger;
		});
		return this.configurationService.config$.pipe(
			filter(config => config.endpoints.signIn != ""),
			take(1),
			switchMap(config => this.http.post(config.env.frontend_server + config.endpoints.signIn, { token })),
			map((response: any) => {
				const user: any = Object.assign({}, response.Result);
				if (user.Role) {
					user.Roles = [ user.Role ];
				}
				return user;
			})
		);
	}

	signout(): Observable<any> {
		return this.http
			.get(
				this.configurationService.config.env.frontend_server +
					this.configurationService.config.endpoints.signOut
			)
			.map(response => response);
	}

	whoAmI(): Observable<any> {
		return this.http
			.get(
				this.configurationService.config.env.frontend_server + this.configurationService.config.endpoints.whoAmI
			)
			.map(response => response);
	}
}

export let FrontendSigninServiceStub = {};
