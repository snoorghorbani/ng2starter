import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map, switchMap, take, filter, tap, catchError } from "rxjs/operators";
import { Store } from "@ngrx/store";

// import { environment } from "../../environments/environment";
import { stringTemplate } from "@soushians/shared";

import { Signin_ApiModel, UserModel } from "../models";
import { AuthenticationConfigurationService } from "./authentication-configuration.service";
import { FeatureState } from "../reducers";
import { WhoAmIAction } from "../actions";
import { Cookie } from "@soushians/shared";

const COOKIE_NAME = "ngs-authentication";

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
			filter(config => config.endpoints.signUp != ""),
			take(1),
			switchMap(config =>
				this.http.post<Signin_ApiModel.Response>(config.env[config.server] + config.endpoints.signUp, model)
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
			switchMap(config => this.http.post<any>(config.env[config.server] + config.endpoints.signIn, model)),
			map(this.configurationService.config.responseToUser),
			map(user => {
				if (user.Role) {
					user.Roles = [ user.Role ];
				}
				return user;
			}),
			tap(user => {
				if (this.configurationService.config.mode == "token-base")
					Cookie.setCookie(COOKIE_NAME, JSON.stringify(user), this.configurationService.config.token.time);
			}),
			tap(user => this.configurationService.config.afterSignin(user))
		);
	}

	// TODO:
	signout(): Observable<any> {
		const config = this.configurationService.config;
		const tokenObject = JSON.parse(Cookie.getCookie(COOKIE_NAME));

		const endpoint = stringTemplate(config.env[config.server] + config.endpoints.signOut, tokenObject);
		const method = config.endpoints.signOutMethod || "get";

		if ([ "get", "put", "post", "patch", "delete" ].indexOf(method) === -1) {
			throwError(`${method} is not valid http method. [ @starter/authentication/signinservice/singout ]`);
		}

		return this.http[method](endpoint).pipe(
			tap(() => {
				Cookie.deleteCookie(COOKIE_NAME);
			})
		);
	}

	whoAmI(): Observable<any> {
		debugger;
		let user = { Token: "--" };
		if (this.configurationService.config.mode == "token-base") {
			try {
				user = JSON.parse(Cookie.getCookie(COOKIE_NAME));
			} catch (error) {}
		}
		return this.configurationService.config$.pipe(
			filter(config => config.endpoints.whoAmI != ""),
			take(1),
			switchMap(config =>
				this.http.get(stringTemplate(config.env[config.server] + config.endpoints.whoAmI, { user }))
			)
		);
	}
}
