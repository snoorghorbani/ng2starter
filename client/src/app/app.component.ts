// #docplaster
// #docregion
import { Observable } from "rxjs/Observable";
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";

import { ConfigModel, getAppConfig } from "@soushians/config";
import { ChangeToolbatToComfortableModeAction } from "@soushians/layout";

import { State } from "./app.reducers";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: [ "./app.component.scss" ]
})
export class AppComponent {
	app_config: Observable<ConfigModel<any>>;

	constructor(private store: Store<State>, private router: Router) {
		this.app_config = this.store.select(getAppConfig);

		setTimeout(() => {
			this.store.dispatch(new ChangeToolbatToComfortableModeAction());
		}, 3000);
	}
}
