import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Observable } from "rxjs/Observable";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { SwPush } from "@angular/service-worker";
import { BehaviorSubject } from "rxjs";
import { MatSidenav, MatSidenavContainer } from "@angular/material";

import { ConfigModel, getAppConfig } from "@soushians/config";
import { UserModel } from "@soushians/user";

import {
	FeatureState,
	getShowMainSidenav,
	getMainSideNavMode,
	getShowSecondSidebarStatus,
	getSecondSidebarMode,
	getLayoutMode,
	getLayoutToolbarMode,
	getFullscreenMode
} from "../../reducers";

import {
	ChangeToolbatToComfortableModeAction,
	CloseSecondSidenavAction,
	ChangeSecondSidenavMode,
	OpenSecondSidenavAction,
	CloseSidenavAction,
	ChangeSideNavMode,
	OpenSidenavAction,
	ChangeLayout
} from "../../actions";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { UserFacadeService } from "@soushians/user";
import { trigger, state, transition, animate, style } from "@angular/animations";

@Component({
	selector: "layout-main",
	templateUrl: "./main.component.html",
	styleUrls: [ "./main.component.scss" ],
	animations: [
		trigger("mode", [
			state("visible", style({ transform: "scaleY(1) translateY(0)" })),
			state("invisible", style({ height: "0", transform: "scaleY(0) translateY(100%)" })),
			transition("visible => invisible", [ animate("1000ms") ]),
			transition("invisible => visible", [ animate("1000ms") ])
		])
	]
})
export class NgsLayoutMainComponent {
	@Input("app-config") app_config: ConfigModel<any>;
	mode$: Observable<"visible" | "invisible">;
	user$: Observable<UserModel>;
	displayName$: Observable<string>;
	isFullscreen$: Observable<boolean>;
	progressStatus$: Observable<boolean>;
	showSidebarMenu = new BehaviorSubject(true);
	//user$: Observable<UserModel>;
	showMainSidenav: Observable<boolean>;
	mainSidenavMode: Observable<"side" | "over" | "push">;
	layoutMode: Observable<"with-margin" | "without-margin" | "default">;
	width = 100;
	showSecondSidenav: Observable<boolean>;
	secondSidenavMode: Observable<"side" | "over" | "push">;
	toolbarAnimationState: Observable<string>;
	@ViewChild("mainSideNav") mainSideNav: ElementRef;

	constructor(
		private store: Store<FeatureState>,
		private router: Router,
		private configService: LayoutConfigurationService,
		private userFacadeService: UserFacadeService
	) {
		this.store.dispatch(new ChangeSideNavMode("push"));
		this.user$ = this.store.select(s => (s as any).user.user.data);
		this.displayName$ = this.userFacadeService.getDisplayName();
		this.showMainSidenav = this.store.select(getShowMainSidenav);
		this.mainSidenavMode = this.store.select(getMainSideNavMode);
		this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);

		this.isFullscreen$ = this.store.select(getFullscreenMode);
		this.mode$ = this.isFullscreen$.map(mode => (mode ? "invisible" : "visible"));

		//#region manage second sidebar
		this.store.dispatch(new ChangeSecondSidenavMode("push"));
		this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
		this.secondSidenavMode = this.store.select(getSecondSidebarMode);
		//#endregion manage second sidebar

		this.layoutMode = this.store.select(getLayoutMode);

		this.router.events.filter(data => data instanceof NavigationEnd).subscribe(event => {
			var hideSituations = [
				(event as NavigationEnd).urlAfterRedirects == "/auth/signin",
				(event as NavigationEnd).urlAfterRedirects == "/auth/signup/register",
				(event as NavigationEnd).urlAfterRedirects == "/auth/signup/verification",
				(event as NavigationEnd).urlAfterRedirects == "/user/password/reset"
			];
			if (hideSituations.some(i => i)) this.showSidebarMenu.next(false);
			else this.showSidebarMenu.next(true);
		});
	}

	// ngAfterViewInit() {
	// 	this.store.dispatch(new ChangeLayout("with-margin"));
	// }

	onSecondSidebarClosedStart() {
		this.store.dispatch(new CloseSecondSidenavAction());
	}

	onSidebarClosedStart() {
		this.store.dispatch(new CloseSidenavAction());
	}
}
