import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from "@angular/http";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";

import * as FeatureReducer from "../user.reducers";

import { UserConfigurationService } from "./user-configuration.service";
import { of } from "rxjs";
import { ResetPasswordModel } from "../models/reset-password.model";
import { ResetPasswordRequestModel } from "../models/reset-password-request.model";
import { ChangePasswordModel } from "../models/change-password.model";

@Injectable({
	providedIn: "root"
})
export class PasswordService {
	numberOfRequeseted$: Observable<number>;

	constructor(
		private http: HttpClient,
		private store: Store<any>,
		private userConfigurationService: UserConfigurationService
	) {
		this.numberOfRequeseted$ = this.store.select(FeatureReducer.getNumberOfRequeseted);
	}

	isValidResetPasswordRequest(): Observable<boolean> {
		return this.numberOfRequeseted$.take(1).switchMap(count => (count < 3 ? of(true) : of(false)));
	}

	isValidResetPasswordReset(data: ResetPasswordModel.Request): Observable<any> {
		var model = new ResetPasswordModel.Request(data);
		let { Token } = model;
		return this.http.get(`http://wifi.shatel.ir/api/v1/reset/tokens/${Token}`, { withCredentials: true });
	}

	requestResetPasswordLink(data: ResetPasswordRequestModel.Request): Observable<any> {
		var model = new ResetPasswordRequestModel.Request(data);

		// TODO:
		// return this.http.post(this.userConfigurationService.config.endpoints.resetPasswordRequest(model), model.getRequestBody(), { withCredentials: true })
		return this.http.post(this.userConfigurationService.config.endpoints.editProfile, model.getRequestBody(), {
			withCredentials: true
		});
	}

	changePassword(data: ChangePasswordModel.Request): Observable<any> {
		var model = new ChangePasswordModel.Request(data);
		return this.http.patch(
			"this.userConfigurationService.config.endpoints.changePassword(model)",
			model.getRequestBody(),
			{
				withCredentials: true
			}
		);
	}

	resetPassword(data: ResetPasswordModel.Request): Observable<any> {
		var model = new ResetPasswordModel.Request(data);
		let { Token } = model;
		return this.http.patch(`http://wifi.shatel.ir/api/v1/reset/tokens/${Token}`, model.getRequestBody(), {
			withCredentials: true
		});
	}
}

export var PasswordServiceStub = {};
