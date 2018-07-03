import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { trigger, state, style, transition, animate } from "@angular/animations";

import { responseStatusTypes } from "@soushians/shared";
import { SigninService } from "@soushians/authentication";

import { FeatureState } from "../../reducers";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { map, combineLatest } from "rxjs/operators";
import { getAccountInfo, UserModel } from "@soushians/user";

@Component({
	selector: "ngs-layout-main-menu",
	templateUrl: "./main-menu.component.html",
	styleUrls: [ "./main-menu.component.css" ],
	animations: [
		trigger("childMenu", [
			state(
				"inactive",
				style({
					// transform: 'scale(1)',
					height: "0px",
					opacity: "0"
				})
			),
			state(
				"active",
				style({
					// transform: 'scale(1.1)',
					height: "48px",
					opacity: "1"
				})
			),
			transition("inactive => active", animate("100ms ease-in")),
			transition("active => inactive", animate("100ms ease-out"))
		]),
		trigger("menuItem", [
			state(
				"inactive",
				style({
					height: "48px"
				})
			),
			state(
				"active",
				style({
					height: "100px"
				})
			),
			transition("inactive => active", animate("100ms ease-in")),
			transition("active => inactive", animate("100ms ease-out"))
		])
	]
})
export class MainMenuComponent {
	@Output() closeSidebar = new EventEmitter();
	@Input() authenticated: Observable<boolean>;
	user$: Observable<UserModel>;
	customerStatus$: Observable<responseStatusTypes>;
	routes$: Observable<any>;

	@ViewChild("customerMobileInput") customerMobileInput: ElementRef;
	constructor(
		private store: Store<FeatureState>,
		public signinService: SigninService,
		public configurationService: LayoutConfigurationService
	) {
		this.user$ = this.store.select(getAccountInfo);
		this._observe_on_layout_config_and_filter_routes();
	}
	_observe_on_layout_config_and_filter_routes() {
		this.routes$ = this.configurationService.config$.pipe(
			map(config => config.menuItems),
			combineLatest(this.user$),
			map(this.configurationService.config$.getValue().menu_item_authorization_operator)
		);
	}
}
