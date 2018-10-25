/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
export class NgsUserModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsUserModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    }
}
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
            },] },
];
export class RootNgsUserModule {
}
RootNgsUserModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsUserModule,
                    StoreModule.forFeature("user", UserReducers),
                    EffectsModule.forFeature([
                        EditProfileEffects,
                        ProfileViewEffects,
                        UserEffects
                    ])
                ]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvdXNlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixjQUFjLEVBQ2QsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxPQUFPLEVBQW9CLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDekgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDcEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDbkksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDdkgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDekcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBc0MvQyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF5QjtRQUN2QyxPQUFPO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUU7U0FDakUsQ0FBQztLQUNGOzs7WUExQ0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsYUFBYTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIsNkJBQTZCO29CQUM3Qix5QkFBeUI7b0JBQ3pCLDJCQUEyQjtvQkFDM0IsZ0NBQWdDO29CQUNoQyw2QkFBNkI7aUJBQzdCO2dCQUNELE9BQU8sRUFBRSxFQUFFO2FBQ1g7O0FBd0JELE1BQU0sT0FBTyxpQkFBaUI7OztZQWQ3QixRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLGFBQWE7b0JBQ2IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO29CQUM1QyxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUV4QixrQkFBa0I7d0JBRWxCLGtCQUFrQjt3QkFFbEIsV0FBVztxQkFDWCxDQUFDO2lCQUNGO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlLCBtZXJnZUVmZmVjdHMgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi91c2VyLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZUVmZmVjdHMgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdFZmZlY3RzIH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVzZXJFZmZlY3RzIH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLWFjY291bnQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgfSBmcm9tIFwiLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0L3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLWNvbnRhaW5lci9wcm9maWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlclJlZHVjZXJzIH0gZnJvbSBcIi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG5cdFx0TmdzRm9ybU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRTZWFyY2hDb21wb25lbnQsXHJcblx0XHRQcm9maWxlQ29tcG9uZW50LFxyXG5cdFx0Q2hhbmdlUGFzc3dvcmRDb21wb25lbnQsXHJcblx0XHRQcm9maWxlRWRpdENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXNoYm9hcmRMaW5rc0NvbXBvbmVudCxcclxuXHRcdFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50LFxyXG5cdFx0RmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NVc2VyTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBVc2VyTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc1VzZXJNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NVc2VyTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcInVzZXJcIiwgVXNlclJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXHJcblx0XHRcdC8vIFJlc2V0UGFzc3dvcmRSZXF1ZXN0RWZmZWN0cyxcclxuXHRcdFx0RWRpdFByb2ZpbGVFZmZlY3RzLFxyXG5cdFx0XHQvLyBDaGFuZ2VQYXNzd29yZEVmZmVjdHMsXHJcblx0XHRcdFByb2ZpbGVWaWV3RWZmZWN0cyxcclxuXHRcdFx0Ly8gU2VhcmNoRWZmZWN0cyxcclxuXHRcdFx0VXNlckVmZmVjdHNcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc1VzZXJNb2R1bGUge31cclxuIl19