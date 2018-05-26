import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import * as FeatureReducer from "../../feature/feature.reducers";
import { UserModel } from "../../models";

@Component({
	template: `<user-profile
                [information]="data$"
                [dataStatus$]='dataStatus$'
            ></user-profile>`
})
export class ProfileContainerComponent implements OnInit {
	data$: Observable<UserModel>;
	dataStatus$: Observable<boolean>;

	constructor(private store: Store<FeatureReducer.FeatureState>) {
		this.data$ = this.store.select(FeatureReducer.getUser);
		this.dataStatus$ = this.store.select(FeatureReducer.getUserInforamtionStatus);
	}

	ngOnInit() {}
}
