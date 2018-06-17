/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { EffectsModule } from "@ngrx/effects";
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from "@angular/material";
import { NgsConfigModule } from "@soushians/config";
import { LayoutReducers } from "./reducers";
import { MODULE_CONFIG_TOKEN } from "./layout.config";
import { MainMenuComponent } from "./dumb-components/main-menu/main-menu.component";
import { SearchBoxComponent } from "./dumb-components/search-box/search-box.component";
import { LogoContainerComponent } from "./dumb-components/logo-container/logo-container.component";
import { ToolbarMenuComponent } from "./dumb-components/toolbar-menu/toolbar-menu.component";
import { FooterComponent } from "./dumb-components/footer/footer.component";
import { TitleComponent } from "./dumb-components/title/title.component";
import { MainComponent } from "./dumb-components/main/main.component";
import { LayoutEffects } from "./layout.effects";
export class NgsLayoutModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsLayoutModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    }
}
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
                    NgsConfigModule
                ],
                declarations: [
                    MainMenuComponent,
                    SearchBoxComponent,
                    LogoContainerComponent,
                    ToolbarMenuComponent,
                    FooterComponent,
                    TitleComponent,
                    MainComponent
                ],
                exports: [
                    MainMenuComponent,
                    SearchBoxComponent,
                    LogoContainerComponent,
                    ToolbarMenuComponent,
                    FooterComponent,
                    TitleComponent,
                    MainComponent
                ]
            },] },
];
export class RootNgsLayoutModule {
}
RootNgsLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsLayoutModule,
                    StoreModule.forFeature("layout", LayoutReducers),
                    EffectsModule.forFeature([LayoutEffects])
                ],
                exports: [NgsLayoutModule]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUNOLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLE1BQU0sbUJBQW1CLENBQUM7QUFFM0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFNUMsT0FBTyxFQUFFLG1CQUFtQixFQUEyQixNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQStDakQsTUFBTTs7Ozs7SUFDTCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWdDO1FBQzlDLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFFO1NBQ2pFLENBQUM7S0FDRjs7O1lBbkRELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixhQUFhO29CQUNiLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsWUFBWTtvQkFDWixlQUFlO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDYixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxhQUFhO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxhQUFhO2lCQUNiO2FBQ0Q7O0FBa0JELE1BQU07OztZQVJMLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsZUFBZTtvQkFDZixXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUM7b0JBQ2hELGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBRSxhQUFhLENBQUUsQ0FBQztpQkFDM0M7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsZUFBZSxDQUFFO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgTmdzQ29uZmlnTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9nb0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sb2dvLWNvbnRhaW5lci9sb2dvLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9vbGJhck1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51L3Rvb2xiYXItbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0RWZmZWN0cyB9IGZyb20gXCIuL2xheW91dC5lZmZlY3RzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEJyb3dzZXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TmdzQ29uZmlnTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50LFxyXG5cdFx0VGl0bGVDb21wb25lbnQsXHJcblx0XHRNYWluQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdEZvb3RlckNvbXBvbmVudCxcclxuXHRcdFRpdGxlQ29tcG9uZW50LFxyXG5cdFx0TWFpbkNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0xheW91dE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImxheW91dFwiLCBMYXlvdXRSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMYXlvdXRFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0xheW91dE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzTGF5b3V0TW9kdWxlIHt9XHJcbiJdfQ==