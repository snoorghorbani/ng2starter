import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { responseStatusTypes } from "@soushians/shared";

import { ProfileViewModel } from "../../models";
import * as FeatureReducer from "../../user.reducers";
import { Search } from "../search.actions";

@Component({
	selector: "search",
	templateUrl: "./search.component.html",
	styleUrls: [ "./search.component.scss" ]
})
export class SearchComponent implements OnInit {
	user: Observable<ProfileViewModel.Response>;
	userStatus$: Observable<responseStatusTypes>;
	formGroup = ProfileViewModel.Request.formGroup;
	userDataLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	userNotFound$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	constructor(private store: Store<FeatureReducer.AppState>) {
		this.user = this.store.select(FeatureReducer.getAccountInfo);
		this.userStatus$ = this.store.select(FeatureReducer.getSearchStatus);
	}

	ngOnInit() {
		this.userStatus$.subscribe(value => this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)));
	}
	search() {
		if (!this.formGroup.valid) return;
		this.store.dispatch(new Search(this.formGroup.value));
	}
}
