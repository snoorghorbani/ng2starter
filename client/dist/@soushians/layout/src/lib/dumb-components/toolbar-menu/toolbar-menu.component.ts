import { Component, Input, HostListener, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/observable/from";
import { DOCUMENT } from "@angular/platform-browser";
import { fromEvent } from "rxjs/observable/fromEvent";
import { of } from "rxjs/observable/of";
import { trigger, state, transition, style, animate } from "@angular/animations";

import { UserModel } from "@soushians/user";
import { LayoutConfigModel } from "@soushians/config";

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

@Component({
	selector: "layout-toolbar",
	templateUrl: "./toolbar-menu.component.html",
	styleUrls: [ "./toolbar-menu.component.css" ],
	animations: [
		trigger("logoAnimation", [
			state(
				"comfortable",
				style({
					width: "90px",
					height: "90px",
					top: "50px",
					right: "calc(50% - 50px)"
				})
			),
			state(
				"compact",
				style({
					width: "36px",
					height: "36px",
					top: "13px",
					right: "13px"
				})
			),
			state(
				"summary",
				style({
					width: "36px",
					height: "36px",
					top: "76px",
					right: "10px"
				})
			),
			state(
				"hide",
				style({
					width: "0",
					height: "0",
					top: "76px",
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
			transition("compact => summary", animate("800ms ease-out"))
		]),
		trigger("menuAnimation", [
			state(
				"comfortable",
				style({
					"padding-right": "calc(50% - 195px)",
					bottom: "25px"
				})
			),
			state(
				"compact",
				style({
					"padding-right": "25px",
					bottom: "13px"
				})
			),
			state(
				"summary",
				style({
					"padding-right": "25px",
					bottom: "14px"
				})
			),
			state(
				"hide",
				style({
					"padding-right": "25px",
					bottom: "14px"
				})
			),
			transition("comfortable => compact", animate("800ms ease-in")),
			transition("comfortable => hide", animate("400ms ease-in")),
			transition("hide => comfortable", animate("600ms ease-in")),
			transition("compact => hide", animate("400ms ease-in")),
			transition("hide => compact", animate("600ms ease-in")),
			transition("summary => hide", animate("400ms ease-in")),
			transition("hide => summary", animate("600ms ease-in")),
			// transition("comfortable => summary", animate("800ms ease-in")),
			transition("summary => compact", animate("400ms ease-out")),
			transition("summary => comfortable", animate("800ms ease-out")),
			transition("compact => comfortable", animate("800ms ease-out")),
			transition("compact => summary", animate("400ms ease-in"))
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
					bottom: "75px",
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
					transform: "translateX(0)",
					right: "60px",
					bottom: "79px",
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
					transform: "translateX(0)",
					right: "60px",
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
					transform: "translateX(0)",
					right: "60px",
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
					boxShadow: "1px 1px 3px rgba(0,0,0,0)"
				})
			),
			state(
				"compact",
				style({
					backgroundColor: "rgba(256,256,256,1)",
					height: "128px",
					top: "0",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
				})
			),
			state(
				"summary",
				style({
					backgroundColor: "rgba(256,256,256,1)",
					height: "128px",
					top: "-64px",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
				})
			),
			state(
				"hide",
				style({
					backgroundColor: "rgba(256,256,256,1)",
					height: "128px",
					top: "-128px",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
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
export class ToolbarMenuComponent {
	showSecondSidenav: Observable<boolean>;
	@Input() showSidebarMenu;
	@Input("app-config") app_config;
	@Input() user: UserModel;
	@Input() displayName: string;
	showMainSidenav: Observable<boolean>;
	toolbarAnimationState: "comfortable" | "compact" | "summary" | "hide" = "compact";
	menuAnimationState: "comfortable" | "compact" | "summary" | "hide" = "compact";
	logoAnimationState: "comfortable" | "compact" | "summary" | "hide" = "compact";
	titleAnimationState: "comfortable" | "compact" | "summary" | "hide" = "compact";
	menuItems$: Observable<any[]>;
	lastScroll: number;
	config: toolbarState;
	config$: Observable<toolbarState>;
	constructor(
		@Inject(DOCUMENT) private document: any,
		private _location: Location,
		private store: Store<FeatureState>,
		public configurationService: LayoutConfigurationService
	) {
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
		// setTimeout(() => {
		// 	this.menuAnimationState = "compact";
		// }, 4000);
		this.menuItems$ = this.configurationService.config$.map(config => config.menuItems);
		fromEvent(this.document.body, "scroll").subscribe(() => {
			let scrolledAmount = this.document.body.scrollTop;
			let scrollToTop =
				scrolledAmount - this.lastScroll < 0 && this.document.body.scrollHeight - scrolledAmount < 100;
			// let scrollToTop = scrolledAmount - this.lastScroll < 0;
			this.lastScroll = this.document.body.scrollTop;
			if (!this.config.visibility) return;
			if (scrolledAmount == 0) {
				if (this.config.mode == "comfortable") return;
				this.store.dispatch(new ChangeToolbatToComfortableModeAction());
			} else if (scrolledAmount < 128 || scrollToTop) {
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
}
