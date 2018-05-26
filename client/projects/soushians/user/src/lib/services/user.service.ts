import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

import { UserModel, EditProfile_ApiModel, ProfileViewModel, FailedLoginReportModel } from "../models";
import { UserConfigurationService } from "./user-configuration.service";
import { Store } from "@ngrx/store";

import { stringTemplate } from "@soushians/shared";

// import * as userReducers from "../../feature/feature.reducers";
import { GetProfile } from "../profile-view/profile-view.actions";
import { getUser } from "../dashboard/user.reducer";

@Injectable({
	providedIn: "root"
})
export class UserService {
	responseCache: ProfileViewModel.Response;

	constructor(
		private http: HttpClient,
		private store: Store<any>,
		private configurationService: UserConfigurationService
	) {
		setTimeout(() => {
			this.store.dispatch(new GetProfile());
		}, 999);
	}

	getProfileInformation(): Observable<ProfileViewModel.Response> {
		return this.configurationService.config$
			.filter(config => config.endpoints.profileInformation != "")
			.take(1)
			.switchMap(config => this.http.get(config.endpoints.profileInformation))
			.map((response: UserModel) => response);
	}
	editProfile(data: EditProfile_ApiModel.Request): Observable<UserModel> {
		var model = new EditProfile_ApiModel.Request(data);
		return this.http
			.put(stringTemplate(this.configurationService.config.endpoints.editProfile, model), model.getRequestBody())
			.map((response: EditProfile_ApiModel.Response) =>
				new EditProfile_ApiModel.Response(response).extractData()
			);
	}
	getInfo(data: ProfileViewModel.Request): Observable<any> {
		const model = new ProfileViewModel.Request(data);

		if (this.responseCache && this.responseCache.Email == model.Email) return Observable.of(this.responseCache);
		return this.http
			.get(stringTemplate(this.configurationService.config.endpoints.getUserInfo, model))
			.do((response: ProfileViewModel.Response) => (this.responseCache = response))
			.map(response => response);
	}

	is_role(role: string): Observable<boolean> {
		return this.store
			.select(getUser)
			.filter(user => user && user.Roles != undefined)
			.take(1)
			.map(user => user.Roles.indexOf(role) > -1);
	}
}
