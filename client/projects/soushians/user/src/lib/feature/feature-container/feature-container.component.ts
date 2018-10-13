import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";

import * as FeatureReducer from "../../user.reducers";
import { ProfileViewModel } from "../../models/profile-view.model";
import { Search } from "../../search-account/search.actions";

@Component({
	template: "<router-outlet></router-outlet>"
})
export class FeatureContainerComponent {
	constructor(private route: ActivatedRoute, private store: Store<FeatureReducer.AppState>) {
		this.route.params.subscribe(params => {
			let model = new ProfileViewModel.Request({ Email: params.Email } as ProfileViewModel.Request);
			this.store.dispatch(new Search(model));
		});
	}
}
