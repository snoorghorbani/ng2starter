import { Component, OnInit } from "@angular/core";

import * as FeatureReducer from "../../feature/feature.reducers";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { ProfileViewModel } from "../../models";
import { Search } from "../../search-account";

@Component({
	template: "<router-outlet></router-outlet>"
})
export class FeatureContainerComponent {
	constructor(private route: ActivatedRoute, private store: Store<FeatureReducer.FeatureState>) {
		this.route.params.subscribe((params) => {
			let model = new ProfileViewModel.Request({ Email: params.Email } as ProfileViewModel.Request);
			this.store.dispatch(new Search(model));
		});
	}
}
