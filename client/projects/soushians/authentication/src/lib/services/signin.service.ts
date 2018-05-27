import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { MatSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map, switchMap, take, filter, tap } from "rxjs/operators";

// import { environment } from "../../environments/environment";

import { Signin_ApiModel, UserModel } from "../models";
import { AuthenticationConfigurationService } from "./authentication-configuration.service";

const SIGNIN_RESPONSE = "[APP] SIGNIN_RESPONSE";

@Injectable({
	providedIn: "root"
})
export class SigninService {
	// SigninResponse = new BehaviorSubject<UserModel>(new UserModel());
	constructor(
		private http: HttpClient,
		private configurationService: AuthenticationConfigurationService,
		private snackBar: MatSnackBar
	) {}

	signin(model: any): Observable<UserModel> {
		return this.configurationService.config$.pipe(
			filter(config => config.endpoints.signIn != ""),
			take(1),
			switchMap(config => this.http.post<Signin_ApiModel.Response>(config.endpoints.signIn, model)),
			map(response => {
				const userModel = new Signin_ApiModel.Response(response).extractData();
				// this.SigninResponse.next(userModel);
				return userModel;
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

	signout(): Observable<any> {
		localStorage.removeItem(SIGNIN_RESPONSE);
		return this.http
			.get(this.configurationService.config.endpoints.signOut, {
				withCredentials: true
			})
			.map(response => response);
	}
}

export var SigninServiceStub = {};
