/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostListener, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/platform-browser";
import { fromEvent } from "rxjs/observable/fromEvent";
import { trigger, state, transition, style, animate } from "@angular/animations";
import { UserModel } from "@soushians/user";
import * as fromLayout from "../../reducers";
import { DoSignoutAction, OpenSecondSidenavAction, CloseSecondSidenavAction, CloseSidenavAction, OpenSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, ChangeToolbatToSummaryModeAction } from "../../actions";
import { getShowSecondSidebarStatus, getLayoutToolbar } from "../../reducers";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
export class ToolbarMenuComponent {
    /**
     * @param {?} document
     * @param {?} _location
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(document, _location, store, configurationService) {
        this.document = document;
        this._location = _location;
        this.store = store;
        this.configurationService = configurationService;
        this.toolbarAnimationState = "compact";
        this.menuAnimationState = "compact";
        this.logoAnimationState = "compact";
        this.titleAnimationState = "compact";
        this.store.dispatch(new ChangeToolbatToComfortableModeAction());
        this.config$ = this.store.select(getLayoutToolbar);
        this.config$.subscribe(config => (this.config = config));
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
        this.showMainSidenav = this.store.select(fromLayout.getShowMainSidenav);
        this.store.select(fromLayout.getLayoutToolbarMode).subscribe(state => {
            this.menuAnimationState = state;
            this.logoAnimationState = state;
            setTimeout(() => {
                this.titleAnimationState = state;
            }, 1);
            setTimeout(() => {
                this.toolbarAnimationState = state;
            }, 1);
        });
        // setTimeout(() => {
        // 	this.menuAnimationState = "compact";
        // }, 4000);
        this.menuItems$ = this.configurationService.config$.map(config => config.menuItems);
        fromEvent(this.document.body, "scroll").subscribe(() => {
            let /** @type {?} */ scrolledAmount = this.document.body.scrollTop;
            let /** @type {?} */ scrollToTop = scrolledAmount - this.lastScroll < 0 && this.document.body.scrollHeight - scrolledAmount < 100;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            this.lastScroll = this.document.body.scrollTop;
            if (scrolledAmount == 0) {
                if (this.config.mode == "comfortable")
                    return;
                this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            }
            else if (scrolledAmount < 128 || scrollToTop) {
                if (this.config.mode == "compact")
                    return;
                this.store.dispatch(new ChangeToolbatToCompactModeAction());
            }
            else {
                if (this.config.mode == "summary")
                    return;
                this.store.dispatch(new ChangeToolbatToSummaryModeAction());
            }
        });
    }
    /**
     * @return {?}
     */
    onWindowScroll() {
        // of(1)
    }
    /**
     * @return {?}
     */
    signout() {
        this.store.dispatch(new DoSignoutAction());
    }
    /**
     * @return {?}
     */
    goback() {
        this._location.back();
    }
    /**
     * @return {?}
     */
    toggleSecondSidebar() {
        let /** @type {?} */ action;
        this.showSecondSidenav.subscribe(state => {
            action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    }
    /**
     * @return {?}
     */
    toggleMainSidebar() {
        let /** @type {?} */ action;
        this.showMainSidenav.subscribe(state => {
            action = state ? new CloseSidenavAction() : new OpenSidenavAction();
        });
        this.store.dispatch(action);
    }
}
ToolbarMenuComponent.decorators = [
    { type: Component, args: [{
                selector: "layout-toolbar",
                template: `<mat-toolbar [@toolbarAnimation]="toolbarAnimationState">
  <mat-toolbar-row>
      <!-- <div id="background"></div> -->
      <img [@logoAnimation]="logoAnimationState" id="logo" routerLink='/' src='../../../assets/images/shatel-logo.png' />

    <button type="button" *ngIf='showSidebarMenu && false' (click)="toggleMainSidebar()" mat-icon-button fxFlex="nogrow" fxLayoutAlign="center center">
      <mat-icon>menu</mat-icon>
    </button>
    <span [@titleAnimation]="titleAnimationState" id='app-name'>
      {{app_config?.Config.AppTitle}}
    </span>
    <app-title fxFlex fxLayoutAlign="start center"></app-title>
    <app-search-box fxFlex fxLayoutAlign="end center"></app-search-box>
    
    <button *ngIf="!displayName" mat-button routerLink="auth/signin">
      ورود
    </button>
    <button *ngIf="displayName" mat-button [matMenuTriggerFor]="toolbarMenu1">
      <mat-icon>account_circle</mat-icon>
      <span>
        {{displayName}}
      </span>
    </button>
    <mat-menu #toolbarMenu1>
      <button routerLink='/user/panel' mat-menu-item>
        <mat-icon>fingerprint</mat-icon>
        <span>
          مدیریت کاربری
        </span>
      </button>
      <button (click)='signout()' mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>خروج</span>
      </button>
    </mat-menu>
    <button mat-icon-button type="button" (click)="toggleSecondSidebar()" fxFlex="nogrow" fxLayoutAlign="center center">
      <mat-icon>notifications</mat-icon>
    </button>
    <button mat-icon-button (click)='goback()'>
      <mat-icon>arrow_back</mat-icon>
    </button>
    
  </mat-toolbar-row>
  <mat-toolbar-row>
    <div id="secondToolbar" [@menuAnimation]="menuAnimationState">
      <button mat-button 
      *ngFor="let menu of menuItems$ | async"
      routerLinkActive="active"
      [routerLink]="[menu.route]">
      <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->
      <span>{{menu.title}}</span>
    </button>
  </div>
</mat-toolbar-row>
</mat-toolbar>`,
                styles: [`#secondToolbar{transition:all;position:absolute;padding-right:25px}#logo{transition:all;position:absolute}#app-name{padding-right:8px}`],
                animations: [
                    trigger("logoAnimation", [
                        state("comfortable", style({
                            width: "90px",
                            height: "90px",
                            top: "50px",
                            right: "calc(50% - 50px)"
                        })),
                        state("compact", style({
                            width: "36px",
                            height: "36px",
                            top: "13px",
                            right: "13px"
                        })),
                        state("summary", style({
                            width: "36px",
                            height: "36px",
                            top: "76px",
                            right: "10px"
                        })),
                        transition("comfortable => compact", animate("800ms ease-out")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
                        transition("compact => summary", animate("800ms ease-out"))
                    ]),
                    trigger("menuAnimation", [
                        state("comfortable", style({
                            "padding-right": "calc(50% - 195px)",
                            bottom: "25px"
                        })),
                        state("compact", style({
                            "padding-right": "25px",
                            bottom: "13px"
                        })),
                        state("summary", style({
                            "padding-right": "25px",
                            bottom: "14px"
                        })),
                        transition("comfortable => compact", animate("800ms ease-in")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
                        transition("compact => summary", animate("400ms ease-in"))
                    ]),
                    trigger("titleAnimation", [
                        state("comfortable", style({
                            "margin-right": "0px",
                            "font-size": "larger",
                            "font-weight": "bolder",
                            transform: "translateX(50%)",
                            right: "calc(50%)",
                            bottom: "75px",
                            position: "absolute",
                            padding: 0
                        })),
                        state("compact", style({
                            "margin-right": "0px",
                            "font-size": "16px",
                            "font-weight": "bolder",
                            transform: "translateX(0)",
                            right: "60px",
                            bottom: "79px",
                            position: "absolute",
                            padding: 0
                        })),
                        state("summary", style({
                            "margin-right": "0px",
                            "font-size": "16px",
                            "font-weight": "bolder",
                            transform: "translateX(0)",
                            right: "60px",
                            bottom: "79px",
                            position: "absolute",
                            padding: 0
                        })),
                        transition("comfortable => compact", animate("850ms ease-out")),
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
                            boxShadow: "1px 1px 3px rgba(0,0,0,0)"
                        })),
                        state("compact", style({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "128px",
                            top: "0",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        state("summary", style({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "128px",
                            top: "-64px",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        state("hide", style({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "128px",
                            top: "-128px",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        transition("comfortable => compact", animate("800ms ease-in")),
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
ToolbarMenuComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Location },
    { type: Store },
    { type: LayoutConfigurationService }
];
ToolbarMenuComponent.propDecorators = {
    showSidebarMenu: [{ type: Input }],
    app_config: [{ type: Input, args: ["app-config",] }],
    user: [{ type: Input }],
    displayName: [{ type: Input }],
    onWindowScroll: [{ type: HostListener, args: ["body:scroll", [],] }]
};
function ToolbarMenuComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ToolbarMenuComponent.prototype.showSecondSidenav;
    /** @type {?} */
    ToolbarMenuComponent.prototype.showSidebarMenu;
    /** @type {?} */
    ToolbarMenuComponent.prototype.app_config;
    /** @type {?} */
    ToolbarMenuComponent.prototype.user;
    /** @type {?} */
    ToolbarMenuComponent.prototype.displayName;
    /** @type {?} */
    ToolbarMenuComponent.prototype.showMainSidenav;
    /** @type {?} */
    ToolbarMenuComponent.prototype.toolbarAnimationState;
    /** @type {?} */
    ToolbarMenuComponent.prototype.menuAnimationState;
    /** @type {?} */
    ToolbarMenuComponent.prototype.logoAnimationState;
    /** @type {?} */
    ToolbarMenuComponent.prototype.titleAnimationState;
    /** @type {?} */
    ToolbarMenuComponent.prototype.menuItems$;
    /** @type {?} */
    ToolbarMenuComponent.prototype.lastScroll;
    /** @type {?} */
    ToolbarMenuComponent.prototype.config;
    /** @type {?} */
    ToolbarMenuComponent.prototype.config$;
    /** @type {?} */
    ToolbarMenuComponent.prototype.document;
    /** @type {?} */
    ToolbarMenuComponent.prototype._location;
    /** @type {?} */
    ToolbarMenuComponent.prototype.store;
    /** @type {?} */
    ToolbarMenuComponent.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy90b29sYmFyLW1lbnUvdG9vbGJhci1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXRELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzVDLE9BQU8sS0FBSyxVQUFVLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUNOLGVBQWUsRUFDZix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsb0NBQW9DLEVBQ3BDLGdDQUFnQyxFQUNoQyxnQ0FBZ0MsRUFDaEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQiwwQkFBMEIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBNk56RixNQUFNOzs7Ozs7O0lBZUwsWUFDMkIsUUFBYSxFQUMvQixXQUNBLE9BQ0Q7UUFIbUIsYUFBUSxHQUFSLFFBQVEsQ0FB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QU0sRUFBRSxPQUFPOzRCQUNmLEdBQUcsRUFBRSxHQUFHOzRCQUNSLFNBQVMsRUFBRSw2QkFBNkI7eUJBQ3hDLENBQUMsQ0FDRjt3QkFDRCxLQUFLLENBQ0osU0FBUyxFQUNULEtBQUssQ0FBQzs0QkFDTCxlQUFlLEVBQUUscUJBQXFCOzRCQUN0QyxNQUFNLEVBQUUsT0FBTzs0QkFDZixHQUFHLEVBQUUsT0FBTzs0QkFDWixTQUFTLEVBQUUsNkJBQTZCO3lCQUN4QyxDQUFDLENBQ0Y7d0JBQ0QsS0FBSyxDQUNKLE1BQU0sRUFDTixLQUFLLENBQUM7NEJBQ0wsZUFBZSxFQUFFLHFCQUFxQjs0QkFDdEMsTUFBTSxFQUFFLE9BQU87NEJBQ2YsR0FBRyxFQUFFLFFBQVE7NEJBQ2IsU0FBUyxFQUFFLDZCQUE2Qjt5QkFDeEMsQ0FBQyxDQUNGO3dCQUNELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7O3dCQUU5RCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQzNELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDL0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUMvRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUMxRCxDQUFDO2lCQUNGO2FBQ0Q7Ozs7NENBaUJFLE1BQU0sU0FBQyxRQUFRO1lBclFULFFBQVE7WUFEUixLQUFLO1lBeUJMLDBCQUEwQjs7OzhCQStOakMsS0FBSzt5QkFDTCxLQUFLLFNBQUMsWUFBWTttQkFDbEIsS0FBSzswQkFDTCxLQUFLOzZCQXVETCxZQUFZLFNBQUMsYUFBYSxFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0TGlzdGVuZXIsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgZnJvbSB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbVwiO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbUV2ZW50XCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWdNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0ICogYXMgZnJvbUxheW91dCBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuXHREb1NpZ25vdXRBY3Rpb24sXHJcblx0T3BlblNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvbixcclxuXHRPcGVuU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLCBnZXRMYXlvdXRUb29sYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXRlIGFzIHRvb2xiYXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC10b29sYmFyXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LXRvb2xiYXIgW0B0b29sYmFyQW5pbWF0aW9uXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZVwiPlxyXG4gIDxtYXQtdG9vbGJhci1yb3c+XHJcbiAgICAgIDwhLS0gPGRpdiBpZD1cImJhY2tncm91bmRcIj48L2Rpdj4gLS0+XHJcbiAgICAgIDxpbWcgW0Bsb2dvQW5pbWF0aW9uXT1cImxvZ29BbmltYXRpb25TdGF0ZVwiIGlkPVwibG9nb1wiIHJvdXRlckxpbms9Jy8nIHNyYz0nLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zaGF0ZWwtbG9nby5wbmcnIC8+XHJcblxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9J3Nob3dTaWRlYmFyTWVudSAmJiBmYWxzZScgKGNsaWNrKT1cInRvZ2dsZU1haW5TaWRlYmFyKClcIiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8c3BhbiBbQHRpdGxlQW5pbWF0aW9uXT1cInRpdGxlQW5pbWF0aW9uU3RhdGVcIiBpZD0nYXBwLW5hbWUnPlxyXG4gICAgICB7e2FwcF9jb25maWc/LkNvbmZpZy5BcHBUaXRsZX19XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8YXBwLXRpdGxlIGZ4RmxleCBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+PC9hcHAtdGl0bGU+XHJcbiAgICA8YXBwLXNlYXJjaC1ib3ggZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCI+PC9hcHAtc2VhcmNoLWJveD5cclxuICAgIFxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gcm91dGVyTGluaz1cImF1dGgvc2lnbmluXCI+XHJcbiAgICAgINmI2LHZiNivXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInRvb2xiYXJNZW51MVwiPlxyXG4gICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7e2Rpc3BsYXlOYW1lfX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8bWF0LW1lbnUgI3Rvb2xiYXJNZW51MT5cclxuICAgICAgPGJ1dHRvbiByb3V0ZXJMaW5rPScvdXNlci9wYW5lbCcgbWF0LW1lbnUtaXRlbT5cclxuICAgICAgICA8bWF0LWljb24+ZmluZ2VycHJpbnQ8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAg2YXYr9uM2LHbjNiqINqp2KfYsdio2LHbjFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT0nc2lnbm91dCgpJyBtYXQtbWVudS1pdGVtPlxyXG4gICAgICAgIDxtYXQtaWNvbj5leGl0X3RvX2FwcDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4+2K7YsdmI2Kw8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlU2Vjb25kU2lkZWJhcigpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPSdnb2JhY2soKSc+XHJcbiAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgXHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgIDxkaXYgaWQ9XCJzZWNvbmRUb29sYmFyXCIgW0BtZW51QW5pbWF0aW9uXT1cIm1lbnVBbmltYXRpb25TdGF0ZVwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gXHJcbiAgICAgICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVJdGVtcyQgfCBhc3luY1wiXHJcbiAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxyXG4gICAgICBbcm91dGVyTGlua109XCJbbWVudS5yb3V0ZV1cIj5cclxuICAgICAgPCEtLSA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e21lbnUuaWNvbn19PC9tYXQtaWNvbj4gLS0+XHJcbiAgICAgIDxzcGFuPnt7bWVudS50aXRsZX19PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LXRvb2xiYXItcm93PlxyXG48L21hdC10b29sYmFyPmAsXHJcblx0c3R5bGVzOiBbYCNzZWNvbmRUb29sYmFye3RyYW5zaXRpb246YWxsO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmctcmlnaHQ6MjVweH0jbG9nb3t0cmFuc2l0aW9uOmFsbDtwb3NpdGlvbjphYnNvbHV0ZX0jYXBwLW5hbWV7cGFkZGluZy1yaWdodDo4cHh9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImxvZ29BbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiOTBweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjkwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1MHB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSAtIDUwcHgpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjEzcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNzZweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwibWVudUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcInBhZGRpbmctcmlnaHRcIjogXCJjYWxjKDUwJSAtIDE5NXB4KVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjI1cHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwicGFkZGluZy1yaWdodFwiOiBcIjI1cHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIxM3B4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcInBhZGRpbmctcmlnaHRcIjogXCIyNXB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTRweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcInRpdGxlQW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcImxhcmdlclwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiY2FsYyg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjYwcHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4NTBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidG9vbGJhckFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMTksMTgxLDYzLDEpXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwicmdiYSgzMCwzMCwzMCwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMzdmhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwKVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItNjRweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi0xMjhweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhck1lbnVDb21wb25lbnQge1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdEBJbnB1dCgpIHNob3dTaWRlYmFyTWVudTtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblx0QElucHV0KCkgdXNlcjogVXNlck1vZGVsO1xyXG5cdEBJbnB1dCgpIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bWVudUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRsb2dvQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdHRpdGxlQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVJdGVtcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGxhc3RTY3JvbGw6IG51bWJlcjtcclxuXHRjb25maWc6IHRvb2xiYXJTdGF0ZTtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPHRvb2xiYXJTdGF0ZT47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhcik7XHJcblx0XHR0aGlzLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiAodGhpcy5jb25maWcgPSBjb25maWcpKTtcclxuXHRcdHRoaXMubGFzdFNjcm9sbCA9IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldExheW91dFRvb2xiYXJNb2RlKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHR0aGlzLm1lbnVBbmltYXRpb25TdGF0ZSA9IHN0YXRlO1xyXG5cdFx0XHR0aGlzLmxvZ29BbmltYXRpb25TdGF0ZSA9IHN0YXRlO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnRpdGxlQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZTtcclxuXHRcdFx0fSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gc3RhdGU7XHJcblx0XHRcdH0sIDEpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdC8vIFx0dGhpcy5tZW51QW5pbWF0aW9uU3RhdGUgPSBcImNvbXBhY3RcIjtcclxuXHRcdC8vIH0sIDQwMDApO1xyXG5cdFx0dGhpcy5tZW51SXRlbXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLm1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyk7XHJcblx0XHRmcm9tRXZlbnQodGhpcy5kb2N1bWVudC5ib2R5LCBcInNjcm9sbFwiKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRsZXQgc2Nyb2xsZWRBbW91bnQgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0XHRsZXQgc2Nyb2xsVG9Ub3AgPVxyXG5cdFx0XHRcdHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMCAmJiB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsZWRBbW91bnQgPCAxMDA7XHJcblx0XHRcdC8vIGxldCBzY3JvbGxUb1RvcCA9IHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMDtcclxuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0aWYgKHNjcm9sbGVkQW1vdW50ID09IDApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbWZvcnRhYmxlXCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsZWRBbW91bnQgPCAxMjggfHwgc2Nyb2xsVG9Ub3ApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbXBhY3RcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwic3VtbWFyeVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcImJvZHk6c2Nyb2xsXCIsIFtdKVxyXG5cdG9uV2luZG93U2Nyb2xsKCkge1xyXG5cdFx0Ly8gb2YoMSlcclxuXHR9XHJcblx0c2lnbm91dCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERvU2lnbm91dEFjdGlvbigpKTtcclxuXHR9XHJcblx0Z29iYWNrKCkge1xyXG5cdFx0dGhpcy5fbG9jYXRpb24uYmFjaygpO1xyXG5cdH1cclxuXHR0b2dnbGVTZWNvbmRTaWRlYmFyKCkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNlY29uZFNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHR0b2dnbGVNYWluU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRhY3Rpb24gPSBzdGF0ZSA/IG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSA6IG5ldyBPcGVuU2lkZW5hdkFjdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XHJcblx0fVxyXG59XHJcbiJdfQ==