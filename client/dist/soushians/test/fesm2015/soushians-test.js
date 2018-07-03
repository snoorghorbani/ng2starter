import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { NgsAuthenticationModule } from '@soushians/authentication';
import { NgsConfigModule } from '@soushians/config';
import { NgsDiagramModule } from '@soushians/diagram';
import { NgsFormModule } from '@soushians/form';
import { NgsLayoutModule } from '@soushians/layout';
import { SharedModule } from '@soushians/shared';
import { SourceModule } from '@soushians/source';
import { NgsUserModule } from '@soushians/user';
import { NgsSocketModule } from '@soushians/socket';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestService {
    constructor() { }
}
TestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
TestService.ctorParameters = () => [];
/** @nocollapse */ TestService.ngInjectableDef = defineInjectable({ factory: function TestService_Factory() { return new TestService(); }, token: TestService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-test',
                template: `
    <p>
      test works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
TestComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TestModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { TestService, TestComponent, TestModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXRlc3QuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvdGVzdC9saWIvdGVzdC5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3Rlc3QvbGliL3Rlc3QuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3Rlc3QvbGliL3Rlc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlc3RTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdGVzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICB0ZXN0IHdvcmtzIVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuaW1wb3J0IHsgTmdzQ29uZmlnTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IE5nc0RpYWdyYW1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9kaWFncmFtXCI7XHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcbmltcG9ydCB7IE5nc0xheW91dE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2xheW91dFwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc291cmNlXCI7XHJcbmltcG9ydCB7IE5nc1VzZXJNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IE5nc1NvY2tldE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3NvY2tldFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NBdXRoZW50aWNhdGlvbk1vZHVsZS5mb3JSb290KCksXHJcblx0XHROZ3NDb25maWdNb2R1bGUsXHJcblx0XHROZ3NEaWFncmFtTW9kdWxlLmZvclJvb3QoKSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0TmdzTGF5b3V0TW9kdWxlLmZvclJvb3QoKSxcclxuXHRcdFNoYXJlZE1vZHVsZSxcclxuXHRcdFNvdXJjZU1vZHVsZSxcclxuXHRcdE5nc1VzZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0TmdzU29ja2V0TW9kdWxlLmZvclJvb3QoKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIFRlc3RDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIFRlc3RDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7QUNKRDtJQWFFLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDVkQ7OztZQWFDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsdUJBQXVCLENBQUMsT0FBTyxFQUFFO29CQUNqQyxlQUFlO29CQUNmLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsWUFBWTtvQkFDWixZQUFZO29CQUNaLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7aUJBQ3pCO2dCQUNELFlBQVksRUFBRSxDQUFFLGFBQWEsQ0FBRTtnQkFDL0IsT0FBTyxFQUFFLENBQUUsYUFBYSxDQUFFO2FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7In0=