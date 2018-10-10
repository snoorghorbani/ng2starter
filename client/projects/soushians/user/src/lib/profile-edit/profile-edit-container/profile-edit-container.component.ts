import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { of } from "rxjs";

import { getAppConfig } from "@soushians/config";

import { UserModel } from "../../models/user.model";
import * as FeatureReducer from "../../user.reducers";
import { EditProfile } from "../edit-profile.actions";
import { UserConfigurationService } from "../../services/user-configuration.service";
import { UserModuleConfig } from "../../user.config";
import { map, filter } from "rxjs/operators";

@Component({
	selector: "profile-edit-contianer",
	template: `<profile-edit
                (submited)='updateProfile($event)'
                [userInfo]="userInforamation$ | async"
                [roles]="roles$"
				[groups]="groups | async"
				[formId]="(config$|async)?.forms.profile_edit"
              ></profile-edit>`
})
export class ProfileEditContainerComponent implements OnInit {
	userInforamation$: Observable<UserModel>;
	roles$: Observable<string[]>;
	groups: Observable<string[]>;
	config$: Observable<UserModuleConfig>;

	constructor(private store: Store<FeatureReducer.AppState>, private configService: UserConfigurationService) {
		this.userInforamation$ = this.store.select(FeatureReducer.getAccountInfo);
		this.roles$ = this.store
			.select(getAppConfig)
			.pipe(filter(config => config != undefined), map(config => config.Config.Roles));
		// TODO:
		// this.groups = this.diagramService.getGroups();
		this.groups = of([ "test1", "test2" ]);

		this.config$ = this.configService.config$;
	}

	ngOnInit() {}

	updateProfile(data) {
		this.store.dispatch(new EditProfile(data));
	}
}
