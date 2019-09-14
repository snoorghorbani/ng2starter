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
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MODULE_CONFIG_TOKEN } from "./rule.config";
import { RoutingModule } from "./rule-routing.module";
import { RuleReducers } from "./rule.reducers";
import { RuleComponent } from "./rule.component";
import { RuleAnchorDirective } from "./rule-anchor/rule-anchor.directive";
import { GwtViewComponent } from "./gwt-view/gwt-view.component";
import { StepLoaderDirective } from "./step-loader/step-loader.directive";
import { ScenariosDbEffects } from "./db/scenario-db.effects";
import { RulesListEffects } from "./db/rule-db.effects";
import { GwtModeButtonComponent } from "./mode-button/mode-button.component";
import { RuleService } from "./services/rule.service";
import { RuleConfigurationService } from "./services/rule-configuration.service";
import { ScenarioService } from "./services/scenario.service";
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
                RuleConfigurationService,
                ScenarioService
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
                declarations: [RuleComponent, RuleAnchorDirective, GwtViewComponent, StepLoaderDirective, GwtModeButtonComponent],
                entryComponents: [GwtViewComponent],
                exports: [RuleAnchorDirective, GwtModeButtonComponent]
            },] }
];
export class RootRuleModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.rule = "8.0.10";
    }
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
            },] }
];
/** @nocollapse */
RootRuleModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3J1bGUvIiwic291cmNlcyI6WyJsaWIvcnVsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFDTixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDZixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsY0FBYyxFQUNkLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQThCOUQsTUFBTSxPQUFPLFVBQVU7Ozs7O0lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBeUI7UUFDdkMsT0FBTztZQUNOLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLEVBQUUsRUFBRTtnQkFDeEQsV0FBVztnQkFDWCx3QkFBd0I7Z0JBQ3hCLGVBQWU7YUFDZjtTQUNELENBQUM7SUFDSCxDQUFDOzs7WUF2Q0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO2lCQUN2QjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ2pILGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQzthQUN0RDs7QUF3QkQsTUFBTSxPQUFPLGNBQWM7SUFDMUI7UUFDQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQzFELENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7WUFiRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFVBQVU7b0JBQ1YsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDO29CQUM1QyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDaEUsYUFBYTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBSdWxlTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vcnVsZS5jb25maWdcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3J1bGUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUnVsZVJlZHVjZXJzIH0gZnJvbSBcIi4vcnVsZS5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBSdWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcnVsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUnVsZUFuY2hvckRpcmVjdGl2ZSB9IGZyb20gXCIuL3J1bGUtYW5jaG9yL3J1bGUtYW5jaG9yLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHd3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vZ3d0LXZpZXcvZ3d0LXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0ZXBMb2FkZXJEaXJlY3RpdmUgfSBmcm9tIFwiLi9zdGVwLWxvYWRlci9zdGVwLWxvYWRlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9zRGJFZmZlY3RzIH0gZnJvbSBcIi4vZGIvc2NlbmFyaW8tZGIuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSdWxlc0xpc3RFZmZlY3RzIH0gZnJvbSBcIi4vZGIvcnVsZS1kYi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEd3dE1vZGVCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9tb2RlLWJ1dHRvbi9tb2RlLWJ1dHRvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUnVsZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ydWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUnVsZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcnVsZS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2NlbmFyaW9TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2NlbmFyaW8uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbUnVsZUNvbXBvbmVudCwgUnVsZUFuY2hvckRpcmVjdGl2ZSwgR3d0Vmlld0NvbXBvbmVudCwgU3RlcExvYWRlckRpcmVjdGl2ZSwgR3d0TW9kZUJ1dHRvbkNvbXBvbmVudF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbR3d0Vmlld0NvbXBvbmVudF0sXHJcblx0ZXhwb3J0czogW1J1bGVBbmNob3JEaXJlY3RpdmUsIEd3dE1vZGVCdXR0b25Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSdWxlTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBSdWxlTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdFJ1bGVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB8fCB7fSB9LFxyXG5cdFx0XHRcdFJ1bGVTZXJ2aWNlLFxyXG5cdFx0XHRcdFJ1bGVDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdFx0XHRTY2VuYXJpb1NlcnZpY2VcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0UnVsZU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJydWxlXCIsIFJ1bGVSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1J1bGVzTGlzdEVmZmVjdHMsIFNjZW5hcmlvc0RiRWZmZWN0c10pLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1J1bGVNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290UnVsZU1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgPSAoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgfHwge307XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIucnVsZSA9IFwiOC4wLjEwXCI7XHJcblx0fVxyXG59XHJcbiJdfQ==