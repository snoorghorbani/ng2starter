import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { ConfigModel } from "../../models";
import { getConfigs, FeatureState } from "../../reducers";

@Component({
	selector: "configs",
	templateUrl: "./configs.component.html",
	styleUrls: [ "./configs.component.scss" ]
})
export class ConfigsComponent {
	configs: Observable<ConfigModel<any>[]>;
	constructor(private store: Store<FeatureState>) {
		this.configs = this.store.select(getConfigs);
	}
}
