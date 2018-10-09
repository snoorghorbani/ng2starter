/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { DashboardContainerComponent } from "./dashboard/dashboard-container/dashboard.component";
import { ProfileContainerComponent } from "./profile-view/profile-container/profile-container.component";
import { ProfileEditContainerComponent } from "./profile-edit/profile-edit-container/profile-edit-container.component";
import { ChangePasswordContainerComponent } from "./change-password/change-password-container/change-password-container.component";
import { SearchComponent } from "./search-account/search/search.component";
import { FeatureContainerComponent } from "./feature/feature-container/feature-container.component";
import { DashboardLinksComponent } from "./dashboard/dashboard-links/dashboard-links.component";
/** @type {?} */
export const routes = [
    {
        path: "user/panel",
        component: DashboardContainerComponent,
        children: [
            {
                path: "",
                component: DashboardLinksComponent
            },
            {
                path: "profile",
                component: ProfileContainerComponent
            },
            {
                path: "profile/edit",
                component: ProfileEditContainerComponent
            },
            {
                path: "password/change",
                component: ChangePasswordContainerComponent
            }
        ]
    },
    {
        path: "admin/user",
        children: [
            { path: "managment", component: SearchComponent },
            {
                path: ":Email",
                component: FeatureContainerComponent,
                children: [
                    {
                        path: "profile-edit",
                        component: ProfileEditContainerComponent
                    },
                    {
                        path: "change-password",
                        component: ChangePasswordContainerComponent
                    }
                ]
            }
        ]
    }
];
/** @type {?} */
export const NgsUserRoutingModule = RouterModule.forChild(routes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0aW5nLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi91c2VyLnJvdXRpbmctbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDekcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDdkgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDbkksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDOztBQUVoRyxhQUFhLE1BQU0sR0FBVztJQUM3QjtRQUNDLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSwyQkFBMkI7UUFDdEMsUUFBUSxFQUFFO1lBQ1Q7Z0JBQ0MsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLHVCQUF1QjthQUNsQztZQUNEO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLFNBQVMsRUFBRSx5QkFBeUI7YUFDcEM7WUFDRDtnQkFDQyxJQUFJLEVBQUUsY0FBYztnQkFDcEIsU0FBUyxFQUFFLDZCQUE2QjthQUN4QztZQUNEO2dCQUNDLElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLFNBQVMsRUFBRSxnQ0FBZ0M7YUFDM0M7U0FDRDtLQUNEO0lBQ0Q7UUFDQyxJQUFJLEVBQUUsWUFBWTtRQUNsQixRQUFRLEVBQUU7WUFDVCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtZQUNqRDtnQkFDQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUseUJBQXlCO2dCQUNwQyxRQUFRLEVBQUU7b0JBQ1Q7d0JBQ0MsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLFNBQVMsRUFBRSw2QkFBNkI7cUJBQ3hDO29CQUNEO3dCQUNDLElBQUksRUFBRSxpQkFBaUI7d0JBQ3ZCLFNBQVMsRUFBRSxnQ0FBZ0M7cUJBQzNDO2lCQUNEO2FBQ0Q7U0FDRDtLQUNEO0NBQ0QsQ0FBQzs7QUFFRixhQUFhLG9CQUFvQixHQUF3QixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtY29udGFpbmVyL3Byb2ZpbGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQtY29udGFpbmVyL3Byb2ZpbGUtZWRpdC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLWFjY291bnQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS1jb250YWluZXIvZmVhdHVyZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZExpbmtzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJ1c2VyL3BhbmVsXCIsXHJcblx0XHRjb21wb25lbnQ6IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIlwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRGFzaGJvYXJkTGlua3NDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwicHJvZmlsZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJwcm9maWxlL2VkaXRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInBhc3N3b3JkL2NoYW5nZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogXCJhZG1pbi91c2VyXCIsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7IHBhdGg6IFwibWFuYWdtZW50XCIsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIjpFbWFpbFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYXRoOiBcInByb2ZpbGUtZWRpdFwiLFxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYXRoOiBcImNoYW5nZS1wYXNzd29yZFwiLFxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5nc1VzZXJSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiJdfQ==