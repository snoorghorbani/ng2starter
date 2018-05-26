import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Observable } from "rxjs/Observable";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { SwPush } from "@angular/service-worker";
import { BehaviorSubject } from "rxjs";
import { MatSidenav, MatSidenavContainer } from "@angular/material";

import { ConfigModel, getAppConfig } from "@soushians/config";
import { UserModel, getUserInfo } from "@soushians/user";

import {
	FeatureState,
	getShowMainSidenav,
	getMainSideNavMode,
	getShowSecondSidebarStatus,
	getSecondSidebarMode,
	getLayoutMode,
	getLayoutToolbarMode
} from "../../reducers";

import {
	CloseSecondSidenavAction,
	ChangeSecondSidenavMode,
	OpenSecondSidenavAction,
	ChangeSideNavMode,
	CloseSidenavAction,
	OpenSidenavAction,
	ChangeLayout,
	ChangeToolbatToComfortableModeAction
} from "../../actions";

@Component({
	selector: "layout-main",
	templateUrl: "./main.component.html",
	styleUrls: [ "./main.component.scss" ]
})
export class MainComponent {
	user$: Observable<UserModel>;
	progressStatus$: Observable<boolean>;
	showSidebarMenu = new BehaviorSubject(true);
	//user$: Observable<UserModel>;
	showMainSidenav: Observable<boolean>;
	mainSidenavMode: Observable<"side" | "over" | "push">;
	layoutMode: Observable<"with-margin" | "without-margin" | "default">;
	@Input("app-config") app_config: ConfigModel<any>;
	width = 100;
	showSecondSidenav: Observable<boolean>;
	secondSidenavMode: Observable<"side" | "over" | "push">;
	toolbarAnimationState: Observable<string>;
	@ViewChild("mainSideNav") mainSideNav: ElementRef;

	constructor(private store: Store<FeatureState>, private router: Router) {
		this.store.dispatch(new ChangeSideNavMode("push"));
		this.user$ = this.store.select((s) => (s as any).user.user.data);
		this.user$.subscribe((data) => {
			debugger;
		});
		this.showMainSidenav = this.store.select(getShowMainSidenav);
		this.mainSidenavMode = this.store.select(getMainSideNavMode);
		this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);

		//#region manage second sidebar
		this.store.dispatch(new ChangeSecondSidenavMode("push"));
		this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
		this.secondSidenavMode = this.store.select(getSecondSidebarMode);
		//#endregion manage second sidebar

		this.layoutMode = this.store.select(getLayoutMode);

		this.router.events.filter((data) => data instanceof NavigationEnd).subscribe((event) => {
			var hideSituations = [
				(event as NavigationEnd).urlAfterRedirects == "/auth/signin",
				(event as NavigationEnd).urlAfterRedirects == "/auth/signup/register",
				(event as NavigationEnd).urlAfterRedirects == "/auth/signup/verification",
				(event as NavigationEnd).urlAfterRedirects == "/user/password/reset"
			];
			if (hideSituations.some((i) => i)) this.showSidebarMenu.next(false);
			else this.showSidebarMenu.next(true);
		});

		this.layoutMode.subscribe((mode) => {
			if (!this.mainSideNav) return;
			(this.mainSideNav.nativeElement as HTMLDivElement).className = "";
			(this.mainSideNav.nativeElement as HTMLDivElement).classList.add(mode);
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
