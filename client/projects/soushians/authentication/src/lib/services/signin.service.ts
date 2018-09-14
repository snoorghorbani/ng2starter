import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { MatSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map, switchMap, take, filter, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";

// import { environment } from "../../environments/environment";

import { Signin_ApiModel, UserModel } from "../models";
import { AuthenticationConfigurationService } from "./authentication-configuration.service";
import { FeatureState } from "../reducers";
import { WhoAmIAction } from "../actions";

@Injectable({
	providedIn: "root"
})
export class SigninService {
	constructor(
		private http: HttpClient,
		private store: Store<FeatureState>,
		private configurationService: AuthenticationConfigurationService,
		private snackBar: MatSnackBar
	) {
		setTimeout(() => this.store.dispatch(new WhoAmIAction()), 300);
	}

	signup(model: any): Observable<UserModel> {
		return this.configurationService.config$.pipe(
			filter(config => config.endpoints.signIn != ""),
			take(1),
			switchMap(config =>
				this.http.post<Signin_ApiModel.Response>(config.env.server + config.endpoints.signUp, model)
			),
			map(response => {
				const user: any = Object.assign({}, response.Result);
				if (user.Role) {
					user.Roles = [ user.Role ];
				}
				return user;
			})
		);
	}

	signin(model: any): Observable<UserModel> {
		return this.configurationService.config$.pipe(
			filter(config => config.endpoints.signIn != ""),
			take(1),
			switchMap(config =>
				this.http.post<Signin_ApiModel.Response>(config.env.server + config.endpoints.signIn, model)
			),
			map(response => {
				const user: any = Object.assign({}, response.Result);
				if (user.Role) {
					user.Roles = [ user.Role ];
				}
				return user;
			})
		);
		// .catch(err => {
		// 	if (err.status == 400) {
		// 		this.snackBar.open("کد امنیتی اشتباه است", null, {
		// 			duration: 5000
		// 		});
		// 	} else if (err.status == 403) {
		// 		this.snackBar.open(" شماره موبایل و یا کلمه عبور اشتباه است", null, {
		// 			duration: 5000
		// 		});
		// 	}
		// 	return Observable.throw(err);
		// });
	}

	// TODO:
	signout(): Observable<any> {
		return this.http
			.get(this.configurationService.config.env.server + this.configurationService.config.endpoints.signOut)
			.map(response => response);
	}

	// TODO: remove it
	whoAmI(): Observable<any> {
		return this.http.get(this.configurationService.config.endpoints.whoAmI).map(response => response);
	}
}
