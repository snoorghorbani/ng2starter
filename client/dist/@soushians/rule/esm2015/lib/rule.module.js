/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MODULE_CONFIG_TOKEN } from "./rule.config";
import { RoutingModule } from "./rule-routing.module";
import { RuleReducers } from "./rule.reducers";
import { RuleService, RuleConfigurationService } from "./services";
import { RuleComponent } from "./rule.component";
import { RuleAnchorDirective } from "./rule-anchor/rule-anchor.directive";
import { GwtViewComponent } from "./gwt-view/gwt-view.component";
import { StepLoaderDirective } from "./step-loader/step-loader.directive";
import { ScenariosDbEffects } from "./db/scenario-db.effects";
import { RulesListEffects } from "./db/rule-db.effects";
export class RuleModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootRuleModule,
            providers: [
                { provide: MODULE_CONFIG_TOKEN, useValue: config || {} },
                RuleService,
                RuleConfigurationService
            ]
        };
    }
}
RuleModule.decorators = [
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
                    MatCheckboxModule,
                    MatTableModule,
                    MatSelectModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatTabsModule,
                    MatDividerModule,
                    FlexLayoutModule,
                    MatRadioModule,
                    MatSlideToggleModule,
                    ReactiveFormsModule,
                    BrowserAnimationsModule
                ],
                declarations: [RuleComponent, RuleAnchorDirective, GwtViewComponent, StepLoaderDirective],
                entryComponents: [GwtViewComponent],
                exports: [RuleAnchorDirective]
            },] },
];
export class RootRuleModule {
}
RootRuleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RuleModule,
                    StoreModule.forFeature("rule", RuleReducers),
                    EffectsModule.forFeature([RulesListEffects, ScenariosDbEffects]),
                    RoutingModule
                ],
                exports: [RuleModule]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3J1bGUvIiwic291cmNlcyI6WyJsaWIvcnVsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQW9CLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUE4QnhELE1BQU07Ozs7O0lBQ0wsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF5QjtRQUN2QyxNQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUU7Z0JBQ3hELFdBQVc7Z0JBQ1gsd0JBQXdCO2FBQ3hCO1NBQ0QsQ0FBQztLQUNGOzs7WUF0Q0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO2lCQUN2QjtnQkFDRCxZQUFZLEVBQUUsQ0FBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUU7Z0JBQzNGLGVBQWUsRUFBRSxDQUFFLGdCQUFnQixDQUFFO2dCQUNyQyxPQUFPLEVBQUUsQ0FBRSxtQkFBbUIsQ0FBRTthQUNoQzs7QUF1QkQsTUFBTTs7O1lBVEwsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixVQUFVO29CQUNWLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztvQkFDNUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFFLENBQUM7b0JBQ2xFLGFBQWE7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsVUFBVSxDQUFFO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFJ1bGVNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9ydWxlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcnVsZS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSdWxlUmVkdWNlcnMgfSBmcm9tIFwiLi9ydWxlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFJ1bGVTZXJ2aWNlLCBSdWxlQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlc1wiO1xyXG5cclxuaW1wb3J0IHsgUnVsZUNvbXBvbmVudCB9IGZyb20gXCIuL3J1bGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJ1bGVBbmNob3JEaXJlY3RpdmUgfSBmcm9tIFwiLi9ydWxlLWFuY2hvci9ydWxlLWFuY2hvci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgR3d0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2d3dC12aWV3L2d3dC12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdGVwTG9hZGVyRGlyZWN0aXZlIH0gZnJvbSBcIi4vc3RlcC1sb2FkZXIvc3RlcC1sb2FkZXIuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IFNjZW5hcmlvc0RiRWZmZWN0cyB9IGZyb20gXCIuL2RiL3NjZW5hcmlvLWRiLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUnVsZXNMaXN0RWZmZWN0cyB9IGZyb20gXCIuL2RiL3J1bGUtZGIuZWZmZWN0c1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIFJ1bGVDb21wb25lbnQsIFJ1bGVBbmNob3JEaXJlY3RpdmUsIEd3dFZpZXdDb21wb25lbnQsIFN0ZXBMb2FkZXJEaXJlY3RpdmUgXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgR3d0Vmlld0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgUnVsZUFuY2hvckRpcmVjdGl2ZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdWxlTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBSdWxlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdFJ1bGVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB8fCB7fSB9LFxyXG5cdFx0XHRcdFJ1bGVTZXJ2aWNlLFxyXG5cdFx0XHRcdFJ1bGVDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRSdWxlTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcInJ1bGVcIiwgUnVsZVJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIFJ1bGVzTGlzdEVmZmVjdHMsIFNjZW5hcmlvc0RiRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgUnVsZU1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290UnVsZU1vZHVsZSB7fVxyXG4iXX0=