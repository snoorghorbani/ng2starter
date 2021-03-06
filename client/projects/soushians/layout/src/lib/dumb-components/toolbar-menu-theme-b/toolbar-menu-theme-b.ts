import { Component, Input, HostListener, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/observable/from";
import { DOCUMENT } from "@angular/common";
import { fromEvent } from "rxjs/observable/fromEvent";
import { of } from "rxjs/observable/of";
import { trigger, state, transition, style, animate } from "@angular/animations";
import { TranslateService } from '@ngx-translate/core';


import { UserModel, getAccountInfo } from "@soushians/user";

import * as fromLayout from "../../reducers";
import {
	DoSignoutAction,
	OpenSecondSidenavAction,
	CloseSecondSidenavAction,
	CloseSidenavAction,
	OpenSidenavAction,
	ChangeToolbatToComfortableModeAction,
	ChangeToolbatToCompactModeAction,
	ChangeToolbatToSummaryModeAction
} from "../../actions";
import { FeatureState, getShowSecondSidebarStatus, getLayoutToolbar } from "../../reducers";

import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { State as toolbarState } from "../../reducers/toolbar.reducer";
import { map, combineLatest } from "rxjs/operators";

@Component({
	selector: "layout-toolbar-b",
	templateUrl: "./toolbar-menu-theme-b.html",
	styleUrls: ["./toolbar-menu-theme-b.scss"],
	animations: [
		trigger("logoAnimation", [
			state(
				"comfortable",
				style({
					height: "48px",
					top: "50px",
					right: "calc(50% - 50px)"
				})
			),
			state(
				"compact",
				style({
					height: "36px",
					top: "13px",
					right: "13px"
				})
			),
			state(
				"summary",
				style({
					height: "36px",
					top: "57px",
					right: "10px"
				})
			),
			state(
				"hide",
				style({
					width: "0",
					height: "0",
					top: "57px",
					right: "10px"
				})
			),
			transition("comfortable => compact", animate("800ms ease-out")),
			transition("comfortable => hide", animate("800ms ease-in")),
			transition("hide => comfortable", animate("800ms ease-in")),
			transition("compact => hide", animate("800ms ease-in")),
			transition("hide => compact", animate("800ms ease-in")),
			transition("summary => hide", animate("800ms ease-in")),
			transition("hide => summary", animate("800ms ease-in")),
			// transition("comfortable => summary", animate("800ms ease-in")),
			transition("summary => compact", animate("400ms ease-out")),
			transition("summary => comfortable", animate("800ms ease-out")),
			transition("compact => comfortable", animate("800ms ease-out")),
			transition("compact => summary", animate("400ms ease-out"))
		]),
		trigger("menuAnimation", [
			state(
				"comfortable",
				style({
					right: "50%",
					transform: "translateX(50%)",
					bottom: "0"
				})
			),
			state(
				"compact",
				style({
					right: "50%",
					transform: "translateX(50%)",
					bottom: "0"
				})
			),
			state(
				"summary",
				style({
					right: "165px",
					transform: "translateX(0)",
					bottom: "0"
				})
			),
			state(
				"hide",
				style({
					right: "165px",
					transform: "translateX(0)",
					bottom: "0"
				})
			),
			transition("comfortable => compact", animate("800ms ease-in-out")),
			transition("comfortable => hide", animate("400ms ease-in-out")),
			transition("hide => comfortable", animate("600ms ease-in-out")),
			transition("compact => hide", animate("400ms ease-in-out")),
			transition("hide => compact", animate("600ms ease-in-out")),
			transition("summary => hide", animate("400ms ease-in-out")),
			transition("hide => summary", animate("600ms ease-in-out")),
			// transition("comfortable => summary", animate("800ms ease-in")),
			transition("summary => compact", animate("400ms ease-out")),
			transition("summary => comfortable", animate("800ms ease-out")),
			transition("compact => comfortable", animate("800ms ease-out")),
			transition("compact => summary", animate("400ms ease-in-out"))
		]),
		trigger("titleAnimation", [
			state(
				"comfortable",
				style({
					"margin-right": "0px",
					"font-size": "larger",
					"font-weight": "bolder",
					transform: "translateX(50%)",
					right: "calc(50%)",
					bottom: "165px",
					position: "absolute",
					padding: 0
				})
			),
			state(
				"compact",
				style({
					"margin-right": "0px",
					"font-size": "16px",
					"font-weight": "bolder",
					right: "50%",
					transform: "translateX(50%)",
					bottom: "51px",
					position: "absolute",
					padding: 0
				})
			),
			state(
				"summary",
				style({
					"margin-right": "0px",
					"font-size": "16px",
					"font-weight": "bolder",
					transform: "translateX(50%)",
					right: "50%",
					bottom: "79px",
					position: "absolute",
					padding: 0
				})
			),
			state(
				"hide",
				style({
					"margin-right": "0px",
					"font-size": "1px",
					"font-weight": "bolder",
					// transform: "translateX(0)",
					// right: "60px",
					bottom: "79px",
					position: "absolute",
					padding: 0
				})
			),
			transition("comfortable => compact", animate("850ms ease-out")),
			transition("comfortable => hide", animate("800ms ease-in")),
			transition("hide => comfortable", animate("800ms ease-in")),
			transition("compact => hide", animate("800ms ease-in")),
			transition("hide => compact", animate("800ms ease-in")),
			transition("summary => hide", animate("800ms ease-in")),
			transition("hide => summary", animate("800ms ease-in")),
			// transition("comfortable => summary", animate("800ms ease-in")),
			transition("summary => compact", animate("400ms ease-out")),
			transition("summary => comfortable", animate("800ms ease-out")),
			transition("compact => comfortable", animate("800ms ease-out")),
			transition("compact => summary", animate("400ms ease-in"))
		]),
		trigger("toolbarAnimation", [
			state(
				"comfortable",
				style({
					// backgroundColor: "rgba(119,181,63,1)",
					backgroundColor: "rgba(256,256,256,1)",
					color: "rgba(30,30,30,1)",
					height: "33vh",
					top: "0",
					// boxShadow: "0px 1px 3px rgba(0,0,0,0)"
				})
			),
			state(
				"compact",
				style({
					// backgroundColor: "rgba(256,256,256,1)",
					height: "100px",
					top: "0",
					// boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
				})
			),
			state(
				"summary",
				style({
					// backgroundColor: "rgba(256,256,256,1)",
					height: "100px",
					top: "-50px",
					// boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
				})
			),
			state(
				"hide",
				style({
					// backgroundColor: "rgba(256,256,256,1)",
					height: "100px",
					top: "-100px",
					// boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
				})
			),
			transition("comfortable => compact", animate("800ms ease-in")),
			transition("comfortable => hide", animate("800ms ease-in")),
			transition("hide => comfortable", animate("800ms ease-in")),
			transition("compact => hide", animate("800ms ease-in")),
			transition("hide => compact", animate("800ms ease-in")),
			transition("summary => hide", animate("800ms ease-in")),
			transition("hide => summary", animate("800ms ease-in")),
			// transition("comfortable => summary", animate("800ms ease-in")),
			transition("summary => compact", animate("400ms ease-out")),
			transition("summary => comfortable", animate("800ms ease-out")),
			transition("compact => comfortable", animate("800ms ease-out")),
			transition("compact => summary", animate("400ms ease-in"))
		])
	]
})
export class ToolbarMenuThemeBComponent {
	showSecondSidenav: Observable<boolean>;
	@Input() showSidebarMenu;
	@Input("app-config") app_config;
	@Input() user: UserModel;
	@Input() displayName: string;
	user$: Observable<UserModel>;
	showMainSidenav: Observable<boolean>;
	toolbarAnimationState: "comfortable" | "compact" | "summary" | "hide" = "compact";
	menuAnimationState: "comfortable" | "compact" | "summary" | "hide" = "compact";
	logoAnimationState: "comfortable" | "compact" | "summary" | "hide" = "compact";
	titleAnimationState: "comfortable" | "compact" | "summary" | "hide" = "compact";
	menuItems$: Observable<any[]>;
	lastScroll: number;
	config: toolbarState;
	config$: Observable<toolbarState>;
	anchorsMode: boolean = false;
	constructor(
		@Inject(DOCUMENT) private document: any,
		private _location: Location,
		private store: Store<FeatureState>,
		private translateService: TranslateService,
		public configurationService: LayoutConfigurationService
	) {
		this.user$ = this.store.select(getAccountInfo);
		this.store.dispatch(new ChangeToolbatToComfortableModeAction());
		this.config$ = this.store.select(getLayoutToolbar);
		this.config$.subscribe(config => (this.config = config));
		this.lastScroll = this.document.body.scrollTop;
		this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
		this.showMainSidenav = this.store.select(fromLayout.getShowMainSidenav);
		this.store.select(fromLayout.getLayoutToolbarMode).subscribe(state => {
			setTimeout(() => (this.menuAnimationState = state), 1);
			setTimeout(() => (this.logoAnimationState = state), 1);
			setTimeout(() => (this.titleAnimationState = state), 1);
			setTimeout(() => (this.toolbarAnimationState = state), 1);
		});
		this._observe_on_layout_config_and_filter_routes();

		fromEvent(this.document.body, "scroll").subscribe(() => {
			let scrolledAmount = this.document.body.scrollTop;
			let scrollToTop =
				scrolledAmount - this.lastScroll < 0 &&
				this.document.body.scrollHeight - document.body.offsetHeight - scrolledAmount > 300;
			// let scrollToTop = scrolledAmount - this.lastScroll < 0;
			this.lastScroll = scrolledAmount;
			if (!this.config.visibility) return;
			if (scrolledAmount == 0) {
				if (this.config.mode == "comfortable") return;
				this.store.dispatch(new ChangeToolbatToComfortableModeAction());
			} else if (scrolledAmount < 150 || scrollToTop) {
				if (this.config.mode == "compact") return;
				this.store.dispatch(new ChangeToolbatToCompactModeAction());
			} else {
				if (this.config.mode == "summary") return;
				this.store.dispatch(new ChangeToolbatToSummaryModeAction());
			}
		});
	}

	@HostListener("body:scroll", [])
	onWindowScroll() {
		// of(1)
	}
	signout() {
		this.store.dispatch(new DoSignoutAction());
	}
	goback() {
		this._location.back();
	}
	toggleSecondSidebar() {
		let action;
		this.showSecondSidenav.subscribe(state => {
			action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
		});
		this.store.dispatch(action);
	}
	toggleMainSidebar() {
		let action;
		this.showMainSidenav.subscribe(state => {
			action = state ? new CloseSidenavAction() : new OpenSidenavAction();
		});
		this.store.dispatch(action);
	}
	_observe_on_layout_config_and_filter_routes() {
		this.menuItems$ = this.configurationService.config$.pipe(
			map(config => config.menuItems),
			combineLatest(this.user$),
			map(this.configurationService.config$.getValue().menu_item_authorization_operator)
		);
	}
}
