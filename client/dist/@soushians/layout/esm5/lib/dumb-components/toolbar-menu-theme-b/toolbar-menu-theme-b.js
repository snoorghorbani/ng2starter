/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostListener, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/platform-browser";
import { fromEvent } from "rxjs/observable/fromEvent";
import { trigger, state, transition, style, animate } from "@angular/animations";
import { TranslateService } from '@ngx-translate/core';
import { UserModel, getAccountInfo } from "@soushians/user";
import * as fromLayout from "../../reducers";
import { DoSignoutAction, OpenSecondSidenavAction, CloseSecondSidenavAction, CloseSidenavAction, OpenSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, ChangeToolbatToSummaryModeAction } from "../../actions";
import { getShowSecondSidebarStatus, getLayoutToolbar } from "../../reducers";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { map, combineLatest } from "rxjs/operators";
var ToolbarMenuThemeBComponent = /** @class */ (function () {
    function ToolbarMenuThemeBComponent(document, _location, store, translateService, configurationService) {
        var _this = this;
        this.document = document;
        this._location = _location;
        this.store = store;
        this.translateService = translateService;
        this.configurationService = configurationService;
        this.toolbarAnimationState = "compact";
        this.menuAnimationState = "compact";
        this.logoAnimationState = "compact";
        this.titleAnimationState = "compact";
        this.anchorsMode = false;
        this.user$ = this.store.select(getAccountInfo);
        this.store.dispatch(new ChangeToolbatToComfortableModeAction());
        this.config$ = this.store.select(getLayoutToolbar);
        this.config$.subscribe(function (config) { return (_this.config = config); });
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
        this.showMainSidenav = this.store.select(fromLayout.getShowMainSidenav);
        this.store.select(fromLayout.getLayoutToolbarMode).subscribe(function (state) {
            setTimeout(function () { return (_this.menuAnimationState = state); }, 1);
            setTimeout(function () { return (_this.logoAnimationState = state); }, 1);
            setTimeout(function () { return (_this.titleAnimationState = state); }, 1);
            setTimeout(function () { return (_this.toolbarAnimationState = state); }, 1);
        });
        this._observe_on_layout_config_and_filter_routes();
        fromEvent(this.document.body, "scroll").subscribe(function () {
            /** @type {?} */
            var scrolledAmount = _this.document.body.scrollTop;
            /** @type {?} */
            var scrollToTop = scrolledAmount - _this.lastScroll < 0 &&
                _this.document.body.scrollHeight - document.body.offsetHeight - scrolledAmount > 300;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            _this.lastScroll = scrolledAmount;
            if (!_this.config.visibility)
                return;
            if (scrolledAmount == 0) {
                if (_this.config.mode == "comfortable")
                    return;
                _this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            }
            else if (scrolledAmount < 150 || scrollToTop) {
                if (_this.config.mode == "compact")
                    return;
                _this.store.dispatch(new ChangeToolbatToCompactModeAction());
            }
            else {
                if (_this.config.mode == "summary")
                    return;
                _this.store.dispatch(new ChangeToolbatToSummaryModeAction());
            }
        });
    }
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.onWindowScroll = /**
     * @return {?}
     */
    function () {
        // of(1)
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.signout = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new DoSignoutAction());
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.goback = /**
     * @return {?}
     */
    function () {
        this._location.back();
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.toggleSecondSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var action;
        this.showSecondSidenav.subscribe(function (state) {
            action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.toggleMainSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var action;
        this.showMainSidenav.subscribe(function (state) {
            action = state ? new CloseSidenavAction() : new OpenSidenavAction();
        });
        this.store.dispatch(action);
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype._observe_on_layout_config_and_filter_routes = /**
     * @return {?}
     */
    function () {
        this.menuItems$ = this.configurationService.config$.pipe(map(function (config) { return config.menuItems; }), combineLatest(this.user$), map(this.configurationService.config$.getValue().menu_item_authorization_operator));
    };
    ToolbarMenuThemeBComponent.decorators = [
        { type: Component, args: [{
                    selector: "layout-toolbar-b",
                    template: "<mat-toolbar dir=\"rtl\" color=\"primary\" [@toolbarAnimation]=\"toolbarAnimationState\">\n  <mat-toolbar-row dir=\"rtl\" id=\"firstToolbar\">\n    <!-- <div id=\"background\"></div> -->\n    <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='assets/logos/logo-type.png' />\n\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\"\n      fxLayoutAlign=\"center center\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\n      {{app_config?.Config.AppTitle}}\n    </span>\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\n\n\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\n      <span [translate]=\"'__signin'\"></span>\n    </button>\n    <button translate *ngIf=\"!displayName\" mat-button routerLink=\"auth/signup\">\n      {{'__signup' | translate}}\n    </button>\n    <button *ngIf=\"displayName\" mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">\n      <mat-icon>account_circle</mat-icon>\n    </button>\n    <mat-menu #toolbarMenu1 class=\"rtl-dir\">\n      <div id=\"acccountName\">\n        {{displayName}}\n      </div>\n      <button routerLink='/user/panel' mat-menu-item class=\"rtl-dir\">\n        <mat-icon>fingerprint</mat-icon>\n        <span translate=\"__account_mangement\">\n        </span>\n      </button>\n      <button (click)='signout()' mat-menu-item class=\"rtl-dir\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span translate>__signout</span>\n      </button>\n    </mat-menu>\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>notifications</mat-icon>\n    </button>\n    <button mat-icon-button (click)='goback()'>\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\n      <router-outlet name=\"ngs-layout-before-toolbar-menu\"></router-outlet>\n      <button mat-button *ngFor=\"let menu of menuItems$ | async\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\n        <span>{{menu.title}}</span>\n      </button>\n      <router-outlet name=\"ngs-layout-after-toolbar-menu\"></router-outlet>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>",
                    styles: ["#secondToolbar{transition:none;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important;height:50px!important;border-radius:0!important}#secondToolbar button.active{border-bottom:2px solid #ff7400;opacity:1}#logo{transition:none;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}"],
                    animations: [
                        trigger("logoAnimation", [
                            state("comfortable", style({
                                height: "48px",
                                top: "50px",
                                right: "calc(50% - 50px)"
                            })),
                            state("compact", style({
                                height: "36px",
                                top: "13px",
                                right: "13px"
                            })),
                            state("summary", style({
                                height: "36px",
                                top: "57px",
                                right: "10px"
                            })),
                            state("hide", style({
                                width: "0",
                                height: "0",
                                top: "57px",
                                right: "10px"
                            })),
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
                            state("comfortable", style({
                                right: "50%",
                                transform: "translateX(50%)",
                                bottom: "0"
                            })),
                            state("compact", style({
                                right: "50%",
                                transform: "translateX(50%)",
                                bottom: "0"
                            })),
                            state("summary", style({
                                right: "165px",
                                transform: "translateX(0)",
                                bottom: "0"
                            })),
                            state("hide", style({
                                right: "165px",
                                transform: "translateX(0)",
                                bottom: "0"
                            })),
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
                            state("comfortable", style({
                                "margin-right": "0px",
                                "font-size": "larger",
                                "font-weight": "bolder",
                                transform: "translateX(50%)",
                                right: "calc(50%)",
                                bottom: "165px",
                                position: "absolute",
                                padding: 0
                            })),
                            state("compact", style({
                                "margin-right": "0px",
                                "font-size": "16px",
                                "font-weight": "bolder",
                                right: "50%",
                                transform: "translateX(50%)",
                                bottom: "51px",
                                position: "absolute",
                                padding: 0
                            })),
                            state("summary", style({
                                "margin-right": "0px",
                                "font-size": "16px",
                                "font-weight": "bolder",
                                transform: "translateX(50%)",
                                right: "50%",
                                bottom: "79px",
                                position: "absolute",
                                padding: 0
                            })),
                            state("hide", style({
                                "margin-right": "0px",
                                "font-size": "1px",
                                "font-weight": "bolder",
                                // transform: "translateX(0)",
                                // right: "60px",
                                bottom: "79px",
                                position: "absolute",
                                padding: 0
                            })),
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
                            state("comfortable", style({
                                // backgroundColor: "rgba(119,181,63,1)",
                                backgroundColor: "rgba(256,256,256,1)",
                                color: "rgba(30,30,30,1)",
                                height: "33vh",
                                top: "0",
                            })),
                            state("compact", style({
                                // backgroundColor: "rgba(256,256,256,1)",
                                height: "100px",
                                top: "0",
                            })),
                            state("summary", style({
                                // backgroundColor: "rgba(256,256,256,1)",
                                height: "100px",
                                top: "-50px",
                            })),
                            state("hide", style({
                                // backgroundColor: "rgba(256,256,256,1)",
                                height: "100px",
                                top: "-100px",
                            })),
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
                },] },
    ];
    /** @nocollapse */
    ToolbarMenuThemeBComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Location },
        { type: Store },
        { type: TranslateService },
        { type: LayoutConfigurationService }
    ]; };
    ToolbarMenuThemeBComponent.propDecorators = {
        showSidebarMenu: [{ type: Input }],
        app_config: [{ type: Input, args: ["app-config",] }],
        user: [{ type: Input }],
        displayName: [{ type: Input }],
        onWindowScroll: [{ type: HostListener, args: ["body:scroll", [],] }]
    };
    return ToolbarMenuThemeBComponent;
}());
export { ToolbarMenuThemeBComponent };
if (false) {
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.showSecondSidenav;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.showSidebarMenu;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.app_config;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.user;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.displayName;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.user$;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.showMainSidenav;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.toolbarAnimationState;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.menuAnimationState;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.logoAnimationState;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.titleAnimationState;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.menuItems$;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.lastScroll;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.config;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.config$;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.anchorsMode;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.document;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype._location;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.store;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.translateService;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tZW51LXRoZW1lLWIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51LXRoZW1lLWIvdG9vbGJhci1tZW51LXRoZW1lLWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUQsT0FBTyxLQUFLLFVBQVUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQ04sZUFBZSxFQUNmLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixvQ0FBb0MsRUFDcEMsZ0NBQWdDLEVBQ2hDLGdDQUFnQyxFQUNoQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLDBCQUEwQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFekYsT0FBTyxFQUFF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LG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt5QkFDMUQsQ0FBQztxQkFDRjtpQkFDRDs7OztnREFtQkUsTUFBTSxTQUFDLFFBQVE7Z0JBbFVULFFBQVE7Z0JBRFIsS0FBSztnQkFRTCxnQkFBZ0I7Z0JBa0JoQiwwQkFBMEI7OztrQ0F5UmpDLEtBQUs7NkJBQ0wsS0FBSyxTQUFDLFlBQVk7dUJBQ2xCLEtBQUs7OEJBQ0wsS0FBSztpQ0F1REwsWUFBWSxTQUFDLGFBQWEsRUFBRSxFQUFFOztxQ0EvV2hDOztTQW1UYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0TGlzdGVuZXIsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgZnJvbSB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbVwiO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbUV2ZW50XCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIGZyb21MYXlvdXQgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7XHJcblx0RG9TaWdub3V0QWN0aW9uLFxyXG5cdE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cywgZ2V0TGF5b3V0VG9vbGJhciB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSBhcyB0b29sYmFyU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvdG9vbGJhci5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IG1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LXRvb2xiYXItYlwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC10b29sYmFyIGRpcj1cInJ0bFwiIGNvbG9yPVwicHJpbWFyeVwiIFtAdG9vbGJhckFuaW1hdGlvbl09XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGVcIj5cclxuICA8bWF0LXRvb2xiYXItcm93IGRpcj1cInJ0bFwiIGlkPVwiZmlyc3RUb29sYmFyXCI+XHJcbiAgICA8IS0tIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+IC0tPlxyXG4gICAgPGltZyBbQGxvZ29BbmltYXRpb25dPVwibG9nb0FuaW1hdGlvblN0YXRlXCIgaWQ9XCJsb2dvXCIgcm91dGVyTGluaz0nLycgc3JjPSdhc3NldHMvbG9nb3MvbG9nby10eXBlLnBuZycgLz5cclxuXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj0nc2hvd1NpZGViYXJNZW51ICYmIGZhbHNlJyAoY2xpY2spPVwidG9nZ2xlTWFpblNpZGViYXIoKVwiIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIlxyXG4gICAgICBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIFtAdGl0bGVBbmltYXRpb25dPVwidGl0bGVBbmltYXRpb25TdGF0ZVwiIGlkPSdhcHAtbmFtZSc+XHJcbiAgICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkFwcFRpdGxlfX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxhcHAtdGl0bGUgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj48L2FwcC10aXRsZT5cclxuICAgIDxhcHAtc2VhcmNoLWJveCBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIj48L2FwcC1zZWFyY2gtYm94PlxyXG5cclxuXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWduaW5cIj5cclxuICAgICAgPHNwYW4gW3RyYW5zbGF0ZV09XCInX19zaWduaW4nXCI+PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIHRyYW5zbGF0ZSAqbmdJZj1cIiFkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gcm91dGVyTGluaz1cImF1dGgvc2lnbnVwXCI+XHJcbiAgICAgIHt7J19fc2lnbnVwJyB8IHRyYW5zbGF0ZX19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJkaXNwbGF5TmFtZVwiIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwidG9vbGJhck1lbnUxXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxtYXQtbWVudSAjdG9vbGJhck1lbnUxIGNsYXNzPVwicnRsLWRpclwiPlxyXG4gICAgICA8ZGl2IGlkPVwiYWNjY291bnROYW1lXCI+XHJcbiAgICAgICAge3tkaXNwbGF5TmFtZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHJvdXRlckxpbms9Jy91c2VyL3BhbmVsJyBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsLWRpclwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5maW5nZXJwcmludDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4gdHJhbnNsYXRlPVwiX19hY2NvdW50X21hbmdlbWVudFwiPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT0nc2lnbm91dCgpJyBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsLWRpclwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5leGl0X3RvX2FwcDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4gdHJhbnNsYXRlPl9fc2lnbm91dDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L21hdC1tZW51PlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVTZWNvbmRTaWRlYmFyKClcIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bm90aWZpY2F0aW9uczwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9J2dvYmFjaygpJz5cclxuICAgICAgPG1hdC1pY29uPmFycm93X2JhY2s8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gIDwvbWF0LXRvb2xiYXItcm93PlxyXG4gIDxtYXQtdG9vbGJhci1yb3c+XHJcbiAgICA8ZGl2IGlkPVwic2Vjb25kVG9vbGJhclwiIFtAbWVudUFuaW1hdGlvbl09XCJtZW51QW5pbWF0aW9uU3RhdGVcIj5cclxuICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cIm5ncy1sYXlvdXQtYmVmb3JlLXRvb2xiYXItbWVudVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVJdGVtcyQgfCBhc3luY1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwie2V4YWN0OnRydWV9XCI+XHJcbiAgICAgICAgPCEtLSA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e21lbnUuaWNvbn19PC9tYXQtaWNvbj4gLS0+XHJcbiAgICAgICAgPHNwYW4+e3ttZW51LnRpdGxlfX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwibmdzLWxheW91dC1hZnRlci10b29sYmFyLW1lbnVcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC10b29sYmFyLXJvdz5cclxuPC9tYXQtdG9vbGJhcj5gLFxyXG5cdHN0eWxlczogW2Ajc2Vjb25kVG9vbGJhcnt0cmFuc2l0aW9uOm5vbmU7cG9zaXRpb246YWJzb2x1dGV9I3NlY29uZFRvb2xiYXIgYnV0dG9ue29wYWNpdHk6LjY7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsc2Fucy1zZXJpZiFpbXBvcnRhbnQ7Zm9udC1zaXplOi42NWVtIWltcG9ydGFudDtoZWlnaHQ6NTBweCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowIWltcG9ydGFudH0jc2Vjb25kVG9vbGJhciBidXR0b24uYWN0aXZle2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNmZjc0MDA7b3BhY2l0eToxfSNsb2dve3RyYW5zaXRpb246bm9uZTtwb3NpdGlvbjphYnNvbHV0ZX0jYXBwLW5hbWV7cGFkZGluZy1yaWdodDo4cHg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsc2Fucy1zZXJpZiFpbXBvcnRhbnR9YnV0dG9uLnJ0bC1kaXJ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnR9I2FjY2NvdW50TmFtZXtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDoyMHB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcn1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibG9nb0FuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjUwcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlIC0gNTBweClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMTNweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTNweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1N3B4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIwXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjU3cHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwibWVudUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCIxNjVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCIxNjVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcInRpdGxlQW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcImxhcmdlclwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiY2FsYyg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTY1cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNTFweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjFweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0Ly8gdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdC8vIHJpZ2h0OiBcIjYwcHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4NTBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJ0b29sYmFyQW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDExOSwxODEsNjMsMSlcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRjb2xvcjogXCJyZ2JhKDMwLDMwLDMwLDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzN2aFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdC8vIGJveFNoYWRvdzogXCIwcHggMXB4IDNweCByZ2JhKDAsMCwwLDApXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMFwiLFxyXG5cdFx0XHRcdFx0Ly8gYm94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi01MHB4XCIsXHJcblx0XHRcdFx0XHQvLyBib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiLTEwMHB4XCIsXHJcblx0XHRcdFx0XHQvLyBib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJNZW51VGhlbWVCQ29tcG9uZW50IHtcclxuXHRzaG93U2Vjb25kU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRASW5wdXQoKSBzaG93U2lkZWJhck1lbnU7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnO1xyXG5cdEBJbnB1dCgpIHVzZXI6IFVzZXJNb2RlbDtcclxuXHRASW5wdXQoKSBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bWVudUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRsb2dvQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdHRpdGxlQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVJdGVtcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGxhc3RTY3JvbGw6IG51bWJlcjtcclxuXHRjb25maWc6IHRvb2xiYXJTdGF0ZTtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPHRvb2xiYXJTdGF0ZT47XHJcblx0YW5jaG9yc01vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuXHRcdHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcblx0XHRwdWJsaWMgY29uZmlndXJhdGlvblNlcnZpY2U6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhcik7XHJcblx0XHR0aGlzLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiAodGhpcy5jb25maWcgPSBjb25maWcpKTtcclxuXHRcdHRoaXMubGFzdFNjcm9sbCA9IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldExheW91dFRvb2xiYXJNb2RlKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLm1lbnVBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubG9nb0FuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy50aXRsZUFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy50b29sYmFyQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKTtcclxuXHJcblx0XHRmcm9tRXZlbnQodGhpcy5kb2N1bWVudC5ib2R5LCBcInNjcm9sbFwiKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRsZXQgc2Nyb2xsZWRBbW91bnQgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0XHRsZXQgc2Nyb2xsVG9Ub3AgPVxyXG5cdFx0XHRcdHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMCAmJlxyXG5cdFx0XHRcdHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIHNjcm9sbGVkQW1vdW50ID4gMzAwO1xyXG5cdFx0XHQvLyBsZXQgc2Nyb2xsVG9Ub3AgPSBzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDA7XHJcblx0XHRcdHRoaXMubGFzdFNjcm9sbCA9IHNjcm9sbGVkQW1vdW50O1xyXG5cdFx0XHRpZiAoIXRoaXMuY29uZmlnLnZpc2liaWxpdHkpIHJldHVybjtcclxuXHRcdFx0aWYgKHNjcm9sbGVkQW1vdW50ID09IDApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbWZvcnRhYmxlXCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsZWRBbW91bnQgPCAxNTAgfHwgc2Nyb2xsVG9Ub3ApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbXBhY3RcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwic3VtbWFyeVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcImJvZHk6c2Nyb2xsXCIsIFtdKVxyXG5cdG9uV2luZG93U2Nyb2xsKCkge1xyXG5cdFx0Ly8gb2YoMSlcclxuXHR9XHJcblx0c2lnbm91dCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERvU2lnbm91dEFjdGlvbigpKTtcclxuXHR9XHJcblx0Z29iYWNrKCkge1xyXG5cdFx0dGhpcy5fbG9jYXRpb24uYmFjaygpO1xyXG5cdH1cclxuXHR0b2dnbGVTZWNvbmRTaWRlYmFyKCkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNlY29uZFNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHR0b2dnbGVNYWluU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRhY3Rpb24gPSBzdGF0ZSA/IG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSA6IG5ldyBPcGVuU2lkZW5hdkFjdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XHJcblx0fVxyXG5cdF9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKSB7XHJcblx0XHR0aGlzLm1lbnVJdGVtcyQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0bWFwKGNvbmZpZyA9PiBjb25maWcubWVudUl0ZW1zKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXIkKSxcclxuXHRcdFx0bWFwKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLm1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yKVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19