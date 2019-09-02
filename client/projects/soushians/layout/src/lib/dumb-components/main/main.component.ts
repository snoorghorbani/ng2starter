import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input, HostBinding } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Observable } from "rxjs/Observable";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { SwPush } from "@angular/service-worker";
import { BehaviorSubject } from "rxjs";
import { MatSidenav, MatSidenavContainer } from "@angular/material";
import { TranslateService } from "@ngx-translate/core";
import { trigger, state, transition, animate, style } from "@angular/animations";

import { ConfigModel } from "@soushians/config";
import { UserFacadeService, UserModel } from "@soushians/user";

import {
	FeatureState,
	getShowMainSidenav,
	getMainSideNavMode,
	getShowSecondSidebarStatus,
	getSecondSidebarMode,
	getLayoutMode,
	getLayoutToolbarMode,
	getFullscreenMode
} from "../../reducers/index";

import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import {
	ChangeSideNavMode,
	ChangeSecondSidenavMode,
	CloseSecondSidenavAction,
	CloseSidenavAction
} from "../../actions/layout";

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
	theme: string;
	user$: Observable<UserModel>;
	displayName$: Observable<string>;
	isFullscreen$: Observable<boolean>;
	progressStatus$: Observable<boolean>;
	showSidebarMenu = new BehaviorSubject(true);
	// user$: Observable<UserModel>;
	showMainSidenav: Observable<boolean>;
	mainSidenavMode: Observable<"side" | "over" | "push">;
	layoutMode: Observable<"with-margin" | "without-margin" | "default">;
	width = 100;
	showSecondSidenav: Observable<boolean>;
	secondSidenavMode: Observable<"side" | "over" | "push">;
	toolbarAnimationState: Observable<string>;
	@ViewChild("mainSideNav") mainSideNav: ElementRef;
	@HostBinding("class.theme_A") theme_A: boolean;
	@HostBinding("class.theme_B") theme_B: boolean;
	constructor(
		private store: Store<FeatureState>,
		private router: Router,
		private configService: LayoutConfigurationService,
		private translateService: TranslateService,
		private userFacadeService: UserFacadeService
	) {
		this._set_i18n_resource();
		this.configService.config$.subscribe(config => {
			this.theme = config.theme;
			this.theme_A = config.theme == "theme_A";
			this.theme_B = config.theme == "theme_B";
		});
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
			const hideSituations = [
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

	/**
	 * private methods
	 */
	_set_i18n_resource() {
		this.translateService.setTranslation("en", {
			__signin: "Signin",
			__signup: "Signup",
			__account_mangement: "Account",
			__signout: "Signout"
		});
		this.translateService.setTranslation("fa", {
			__signin: "ورود",
			__signup: "ثبت نام",
			__account_mangement: "مدیریت کاربری",
			__signout: "خروج"
		});
	}
}
