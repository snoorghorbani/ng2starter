import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { map, filter, take, switchMap, combineLatest } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { stringTemplate } from "@soushians/shared";
import { getUser } from "@soushians/authentication";

import { UserConfigurationService } from "./user-configuration.service";
import { GetProfile } from "../profile-view/profile-view.actions";
import { getAccountInfo } from "../dashboard/account.reducer";
import { UserModuleConfig } from "../user.config";
import { ProfileViewModel } from "../models/profile-view.model";
import { UserModel } from "../models/user.model";
import { EditProfile_ApiModel } from "../models/profile-edit.model";

@Injectable({
	providedIn: "root"
})
export class UserService {
	config: UserModuleConfig;
	constructor(
		private http: HttpClient,
		private store: Store<any>,
		private configurationService: UserConfigurationService
	) {
		this.configurationService.config$.subscribe(config => (this.config = config));
		setTimeout(() => {
			this.store.dispatch(new GetProfile());
		}, 999);
	}

	getAccountInfo(): Observable<ProfileViewModel.Response> {
		return this.configurationService.config$.pipe(
			filter(config => config.endpoints.profileInformation != ""),
			take(1),
			combineLatest(this.store.select(getUser)),
			filter(([config, user]: [UserModuleConfig, any]) => user != undefined),
			switchMap(([config, user]: [UserModuleConfig, any]) => {
				debugger;
				return this.http
					.get<any>(
						stringTemplate(config.env[config.server] + config.endpoints.profileInformation, {
							user: user.User
						})
					)
					.let(config.responseToUserInfo)
					.pipe(
						map((response: UserModel) => {
							const _user: any = Object.assign({}, response);
							if (_user.Role) {
								_user.Roles = [_user.Role];
							}
							return _user;
						})
					);
			})
		);
	}
	editProfile(data: EditProfile_ApiModel.Request): Observable<UserModel> {
		const model = new EditProfile_ApiModel.Request(data);
		return this.http
			.put<EditProfile_ApiModel.Response>(
				stringTemplate(this.config.env[this.config.server] + this.config.endpoints.editProfile, model),
				model.getRequestBody()
			)
			.pipe(map(response => new EditProfile_ApiModel.Response(response).extractData()));
	}
	// TODO: remove
	getInfo(data: ProfileViewModel.Request): Observable<any> {
		const model = new ProfileViewModel.Request(data);

		return this.http
			.get<ProfileViewModel.Response>(
				stringTemplate(this.config.env[this.config.server] + this.config.endpoints.getAccountInfo, model)
			)
			.pipe(map(response => response));
	}

	is_role(role: string): Observable<boolean> {
		return this.store
			.select(getAccountInfo)
			.pipe(filter(user => user && user.Roles != undefined), take(1), map(user => user.Roles.indexOf(role) > -1));
	}
}
