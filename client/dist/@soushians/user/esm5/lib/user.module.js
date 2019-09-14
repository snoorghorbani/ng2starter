/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NgsFormModule } from "@soushians/form";
import { MODULE_CONFIG_TOKEN } from "./user.config";
import { EditProfileEffects } from "./profile-edit/edit-profile.effects";
import { ProfileViewEffects } from "./profile-view/profile-view.effects";
import { UserEffects } from "./feature/feature.effects";
import { SearchComponent } from "./search-account/search/search.component";
import { ChangePasswordComponent } from "./change-password/change-password/change-password.component";
import { ProfileEditComponent } from "./profile-edit/profile-edit/profile-edit.component";
import { DashboardLinksComponent } from "./dashboard/dashboard-links/dashboard-links.component";
import { ResetPasswordRequestComponent } from "./reset-password/reset-password-request/reset-password-request.component";
import { FeatureContainerComponent } from "./feature/feature-container/feature-container.component";
import { ChangePasswordContainerComponent } from "./change-password/change-password-container/change-password-container.component";
import { ProfileEditContainerComponent } from "./profile-edit/profile-edit-container/profile-edit-container.component";
import { DashboardContainerComponent } from "./dashboard/dashboard-container/dashboard.component";
import { ProfileComponent } from "./profile-view/profile/profile.component";
import { ProfileContainerComponent } from "./profile-view/profile-container/profile-container.component";
import { UserReducers } from "./user.reducers";
var NgsUserModule = /** @class */ (function () {
    function NgsUserModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsUserModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootNgsUserModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    NgsUserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                        FormsModule,
                        RouterModule,
                        CommonModule,
                        MatExpansionModule,
                        MatSnackBarModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatSelectModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatTabsModule,
                        FlexLayoutModule,
                        MatRadioModule,
                        ReactiveFormsModule,
                        BrowserAnimationsModule,
                        NgsFormModule
                    ],
                    declarations: [
                        SearchComponent,
                        ProfileComponent,
                        ChangePasswordComponent,
                        ProfileEditComponent,
                        ProfileContainerComponent,
                        DashboardLinksComponent,
                        ResetPasswordRequestComponent,
                        FeatureContainerComponent,
                        DashboardContainerComponent,
                        ChangePasswordContainerComponent,
                        ProfileEditContainerComponent
                    ],
                    exports: []
                },] }
    ];
    return NgsUserModule;
}());
export { NgsUserModule };
var RootNgsUserModule = /** @class */ (function () {
    function RootNgsUserModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.user = "8.0.10";
    }
    RootNgsUserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsUserModule,
                        StoreModule.forFeature("user", UserReducers),
                        EffectsModule.forFeature([
                            // ResetPasswordRequestEffects,
                            EditProfileEffects,
                            // ChangePasswordEffects,
                            ProfileViewEffects,
                            // SearchEffects,
                            UserEffects
                        ])
                    ]
                },] }
    ];
    /** @nocollapse */
    RootNgsUserModule.ctorParameters = function () { return []; };
    return RootNgsUserModule;
}());
export { RootNgsUserModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvdXNlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixjQUFjLEVBQ2QsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUN6SCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNuSSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN2SCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFBQTtJQTJDQSxDQUFDOzs7OztJQU5PLHFCQUFPOzs7O0lBQWQsVUFBZSxNQUF5QjtRQUN2QyxPQUFPO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDL0QsQ0FBQztJQUNILENBQUM7O2dCQTFDRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixhQUFhO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDYixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2Qiw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIsMkJBQTJCO3dCQUMzQixnQ0FBZ0M7d0JBQ2hDLDZCQUE2QjtxQkFDN0I7b0JBQ0QsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7O0lBUUQsb0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQVBZLGFBQWE7QUFTMUI7SUFlQztRQUNDLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDMUQsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQzFDLENBQUM7O2dCQWxCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLGFBQWE7d0JBQ2IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO3dCQUM1QyxhQUFhLENBQUMsVUFBVSxDQUFDOzRCQUN4QiwrQkFBK0I7NEJBQy9CLGtCQUFrQjs0QkFDbEIseUJBQXlCOzRCQUN6QixrQkFBa0I7NEJBQ2xCLGlCQUFpQjs0QkFDakIsV0FBVzt5QkFDWCxDQUFDO3FCQUNGO2lCQUNEOzs7O0lBTUQsd0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQUxZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vdXNlci5jb25maWdcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVFZmZlY3RzIH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3RWZmZWN0cyB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVc2VyRWZmZWN0cyB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZExpbmtzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLWNvbnRhaW5lci9mZWF0dXJlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQtY29udGFpbmVyL3Byb2ZpbGUtZWRpdC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJSZWR1Y2VycyB9IGZyb20gXCIuL3VzZXIucmVkdWNlcnNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0U2VhcmNoQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUNvbXBvbmVudCxcclxuXHRcdENoYW5nZVBhc3N3b3JkQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUVkaXRDb21wb25lbnQsXHJcblx0XHRQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGFzaGJvYXJkTGlua3NDb21wb25lbnQsXHJcblx0XHRSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCxcclxuXHRcdEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzVXNlck1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogVXNlck1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NVc2VyTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfV1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1VzZXJNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwidXNlclwiLCBVc2VyUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcclxuXHRcdFx0Ly8gUmVzZXRQYXNzd29yZFJlcXVlc3RFZmZlY3RzLFxyXG5cdFx0XHRFZGl0UHJvZmlsZUVmZmVjdHMsXHJcblx0XHRcdC8vIENoYW5nZVBhc3N3b3JkRWZmZWN0cyxcclxuXHRcdFx0UHJvZmlsZVZpZXdFZmZlY3RzLFxyXG5cdFx0XHQvLyBTZWFyY2hFZmZlY3RzLFxyXG5cdFx0XHRVc2VyRWZmZWN0c1xyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzVXNlck1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgPSAoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgfHwge307XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIudXNlciA9IFwiOC4wLjEwXCI7XHJcblx0fVxyXG59XHJcbiJdfQ==