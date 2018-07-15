import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

import { UserModel, EditProfile_ApiModel, ProfileViewModel, FailedLoginReportModel } from "../models";
import { UserConfigurationService } from "./user-configuration.service";
import { Store } from "@ngrx/store";

import { stringTemplate } from "@soushians/shared";
import { map } from "rxjs/operators";

import { GetProfile } from "../profile-view/profile-view.actions";
import { getAccountInfo } from "../dashboard/account.reducer";
import { UserModuleConfig } from "../user.config";

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
		this.configurationService.config$.subscribe((config) => (this.config = config));
		setTimeout(() => {
			this.store.dispatch(new GetProfile());
		}, 999);
	}

	getAccountInfo(): Observable<ProfileViewModel.Response> {
		return this.configurationService.config$
			.filter((config) => config.endpoints.profileInformation != "")
			.take(1)
			.switchMap((config) =>
				this.http
					.get<any>(config.env.server + config.endpoints.profileInformation)
					.let(config.responseToUserInfo)
					.pipe(
						map((response: UserModel) => {
							const user: any = Object.assign({}, response);
							if (user.Role) {
								user.Roles = [ user.Role ];
							}
							return user;
						})
					)
			);
	}
	editProfile(data: EditProfile_ApiModel.Request): Observable<UserModel> {
		const model = new EditProfile_ApiModel.Request(data);
		return this.http
			.put<EditProfile_ApiModel.Response>(
				stringTemplate(this.config.env.server + this.config.endpoints.editProfile, model),
				model.getRequestBody()
			)
			.map((response) => new EditProfile_ApiModel.Response(response).extractData());
	}
	// TODO: remove
	getInfo(data: ProfileViewModel.Request): Observable<any> {
		const model = new ProfileViewModel.Request(data);

		return this.http
			.get<ProfileViewModel.Response>(
				stringTemplate(this.config.env.server + this.config.endpoints.getAccountInfo, model)
			)
			.map((response) => response);
	}

	is_role(role: string): Observable<boolean> {
		return this.store
			.select(getAccountInfo)
			.filter((user) => user && user.Roles != undefined)
			.take(1)
			.map((user) => user.Roles.indexOf(role) > -1);
	}
}
