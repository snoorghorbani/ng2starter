// #docplaster
// #docregion
import { Observable } from "rxjs/Observable";
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { SwPush } from "@angular/service-worker";

import * as authReducer from "@soushians/authentication";
import * as fromLayout from "@soushians/layout";

import { State } from "./reducers";
import { UserModel } from "@soushians/user";
import { SigninService } from "@soushians/authentication";
import { debounce } from "rxjs/operator/debounce";
import { MatSidenav, MatSidenavContainer } from "@angular/material";
import { ConfigModel, GetConfigsApiModel } from "@soushians/config";
import { getAppConfig } from "@soushians/config";
import {
	CloseSecondSidenavAction,
	ChangeSecondSidenavMode,
	OpenSecondSidenavAction,
	ChangeSideNavMode,
	CloseSidenavAction,
	OpenSidenavAction
} from "@soushians/layout";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements AfterViewInit {
	progressStatus$: Observable<boolean>;
	showSidebarMenu = new BehaviorSubject(true);
	//user$: Observable<UserModel>;
	user$: Observable<any>;
	userType: string;
	showMainSidenav: Observable<boolean>;
	mainSidenavMode: Observable<"side" | "over" | "push">;
	layoutMode: Observable<"with-margin" | "without-margin" | "default">;
	app_config: Observable<ConfigModel<any>>;
	width = 100;
	showSecondSidenav: Observable<boolean>;
	secondSidenavMode: Observable<"side" | "over" | "push">;
	@ViewChild("mainSideNav") mainSideNav: ElementRef;

	constructor(private store: Store<State>, private router: Router, public signinService: SigninService) {
		this.app_config = this.store.select(getAppConfig);

		this.store.dispatch(new ChangeSideNavMode("push"));
		this.showMainSidenav = this.store.select(fromLayout.getShowMainSidenav);
		this.mainSidenavMode = this.store.select(fromLayout.getMainSideNavMode);

		//#region manage second sidebar
		this.store.dispatch(new ChangeSecondSidenavMode("push"));
		this.showSecondSidenav = this.store.select(fromLayout.getShowSecondSidebarStatus);
		this.secondSidenavMode = this.store.select(fromLayout.getSecondSidebarMode);
		//#endregion manage second sidebar

		this.layoutMode = this.store.select(fromLayout.getLayoutMode);

		this.user$ = this.store.select(authReducer.getUser);
		this.userType = [ "admin-user", "agent-user", "user-user" ]
			.filter(
				(v, i) =>
					[ this.signinService.is_admin(), this.signinService.is_agent(), this.signinService.is_user() ][i]
			)
			.pop();
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
		this.progressStatus$ = this.store.select((state) => state.progress.status);

		this.layoutMode.subscribe((mode) => {
			if (!this.mainSideNav) return;
			(this.mainSideNav.nativeElement as HTMLDivElement).className = "";
			(this.mainSideNav.nativeElement as HTMLDivElement).classList.add(mode);
		});
	}

	ngAfterViewInit() {
		this.store.dispatch(new fromLayout.ChangeLayout("with-margin"));
	}

	onSecondSidebarClosedStart() {
		this.store.dispatch(new CloseSecondSidenavAction());
	}

	onSidebarClosedStart() {
		this.store.dispatch(new CloseSidenavAction());
	}

	toggleMainSidebar() {
		let action;
		this.showMainSidenav.subscribe((state) => {
			action = state ? new CloseSidenavAction() : new OpenSidenavAction();
		});
		this.store.dispatch(action);
	}
}
