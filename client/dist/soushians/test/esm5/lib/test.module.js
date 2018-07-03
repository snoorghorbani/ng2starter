/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { TestComponent } from "./test.component";
import { NgsAuthenticationModule } from "@soushians/authentication";
import { NgsConfigModule } from "@soushians/config";
import { NgsDiagramModule } from "@soushians/diagram";
import { NgsFormModule } from "@soushians/form";
import { NgsLayoutModule } from "@soushians/layout";
import { SharedModule } from "@soushians/shared";
import { SourceModule } from "@soushians/source";
import { NgsUserModule } from "@soushians/user";
import { NgsSocketModule } from "@soushians/socket";
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsAuthenticationModule.forRoot(),
                        NgsConfigModule,
                        NgsDiagramModule.forRoot(),
                        NgsFormModule.forRoot(),
                        NgsLayoutModule.forRoot(),
                        SharedModule,
                        SourceModule,
                        NgsUserModule.forRoot(),
                        NgsSocketModule.forRoot()
                    ],
                    declarations: [TestComponent],
                    exports: [TestComponent]
                },] },
    ];
    return TestModule;
}());
export { TestModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3Rlc3QvIiwic291cmNlcyI6WyJsaWIvdGVzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Z0JBRW5ELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsdUJBQXVCLENBQUMsT0FBTyxFQUFFO3dCQUNqQyxlQUFlO3dCQUNmLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDMUIsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7cUJBQ3pCO29CQUNELFlBQVksRUFBRSxDQUFFLGFBQWEsQ0FBRTtvQkFDL0IsT0FBTyxFQUFFLENBQUUsYUFBYSxDQUFFO2lCQUMxQjs7cUJBM0JEOztTQTRCYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuaW1wb3J0IHsgTmdzQ29uZmlnTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IE5nc0RpYWdyYW1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9kaWFncmFtXCI7XHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcbmltcG9ydCB7IE5nc0xheW91dE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2xheW91dFwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc291cmNlXCI7XHJcbmltcG9ydCB7IE5nc1VzZXJNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IE5nc1NvY2tldE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3NvY2tldFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NBdXRoZW50aWNhdGlvbk1vZHVsZS5mb3JSb290KCksXHJcblx0XHROZ3NDb25maWdNb2R1bGUsXHJcblx0XHROZ3NEaWFncmFtTW9kdWxlLmZvclJvb3QoKSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0TmdzTGF5b3V0TW9kdWxlLmZvclJvb3QoKSxcclxuXHRcdFNoYXJlZE1vZHVsZSxcclxuXHRcdFNvdXJjZU1vZHVsZSxcclxuXHRcdE5nc1VzZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0TmdzU29ja2V0TW9kdWxlLmZvclJvb3QoKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIFRlc3RDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIFRlc3RDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdE1vZHVsZSB7fVxyXG4iXX0=