/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { EffectsModule } from "@ngrx/effects";
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from "@angular/material";
import { TranslateModule } from "@ngx-translate/core";
import { NgsConfigModule } from "@soushians/config";
import { LayoutReducers } from "./reducers/index";
import { MODULE_CONFIG_TOKEN } from "./layout.config";
import { MainMenuComponent } from "./dumb-components/main-menu/main-menu.component";
import { SearchBoxComponent } from "./dumb-components/search-box/search-box.component";
import { LogoContainerComponent } from "./dumb-components/logo-container/logo-container.component";
import { ToolbarMenuComponent } from "./dumb-components/toolbar-menu/toolbar-menu.component";
import { FooterComponent } from "./dumb-components/footer/footer.component";
import { TitleComponent } from "./dumb-components/title/title.component";
import { NgsLayoutMainComponent } from "./dumb-components/main/main.component";
import { LayoutEffects } from "./layout.effects";
import { RuleModule } from "@soushians/rule";
import { ToolbarMenuThemeBComponent } from "./dumb-components/toolbar-menu-theme-b/toolbar-menu-theme-b";
var NgsLayoutModule = /** @class */ (function () {
    function NgsLayoutModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsLayoutModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootNgsLayoutModule,
            providers: [
                { provide: LOCALE_ID, useValue: "en en-US" },
                { provide: MODULE_CONFIG_TOKEN, useValue: config }
            ]
        };
    };
    NgsLayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        BrowserModule,
                        RouterModule,
                        FormsModule,
                        HttpClientModule,
                        FlexLayoutModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatSnackBarModule,
                        MatSidenavModule,
                        MatExpansionModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatListModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatInputModule,
                        MatToolbarModule,
                        MatDatepickerModule,
                        MatProgressBarModule,
                        RouterModule,
                        TranslateModule,
                        NgsConfigModule,
                        RuleModule
                    ],
                    declarations: [
                        MainMenuComponent,
                        SearchBoxComponent,
                        LogoContainerComponent,
                        ToolbarMenuComponent,
                        ToolbarMenuThemeBComponent,
                        FooterComponent,
                        TitleComponent,
                        NgsLayoutMainComponent
                    ],
                    exports: [
                        MainMenuComponent,
                        SearchBoxComponent,
                        LogoContainerComponent,
                        ToolbarMenuComponent,
                        ToolbarMenuThemeBComponent,
                        FooterComponent,
                        TitleComponent,
                        NgsLayoutMainComponent
                    ]
                },] }
    ];
    return NgsLayoutModule;
}());
export { NgsLayoutModule };
var RootNgsLayoutModule = /** @class */ (function () {
    function RootNgsLayoutModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.layout = "8.0.10";
    }
    RootNgsLayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsLayoutModule,
                        StoreModule.forFeature("layout", LayoutReducers),
                        EffectsModule.forFeature([LayoutEffects])
                    ],
                    exports: [NgsLayoutModule]
                },] }
    ];
    /** @nocollapse */
    RootNgsLayoutModule.ctorParameters = function () { return []; };
    return RootNgsLayoutModule;
}());
export { RootNgsLayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFDTixhQUFhLEVBQ2IsZUFBZSxFQUNmLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFB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cnMsIExPQ0FMRV9JRCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NDb25maWdNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IExheW91dFJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNYWluTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2xvZ28tY29udGFpbmVyL2xvZ28tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb29sYmFyTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy90b29sYmFyLW1lbnUvdG9vbGJhci1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5nc0xheW91dE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRFZmZlY3RzIH0gZnJvbSBcIi4vbGF5b3V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuaW1wb3J0IHsgVG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51LXRoZW1lLWIvdG9vbGJhci1tZW51LXRoZW1lLWJcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRUcmFuc2xhdGVNb2R1bGUsXHJcblx0XHROZ3NDb25maWdNb2R1bGUsXHJcblx0XHRSdWxlTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0VG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQsXHJcblx0XHRGb290ZXJDb21wb25lbnQsXHJcblx0XHRUaXRsZUNvbXBvbmVudCxcclxuXHRcdE5nc0xheW91dE1haW5Db21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0VG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQsXHJcblx0XHRGb290ZXJDb21wb25lbnQsXHJcblx0XHRUaXRsZUNvbXBvbmVudCxcclxuXHRcdE5nc0xheW91dE1haW5Db21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NMYXlvdXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IExheW91dE1vZHVsZUNvbmZpZ01vZGVsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiBcImVuIGVuLVVTXCIgfSxcclxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NMYXlvdXRNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwibGF5b3V0XCIsIExheW91dFJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbTGF5b3V0RWZmZWN0c10pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbTmdzTGF5b3V0TW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0xheW91dE1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgPSAoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgfHwge307XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIubGF5b3V0ID0gXCI4LjAuMTBcIjtcclxuXHR9XHJcbn1cclxuIl19