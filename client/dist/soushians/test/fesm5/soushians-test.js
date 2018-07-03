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
var TestService = /** @class */ (function () {
    function TestService() {
    }
    TestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    TestService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestService.ngInjectableDef = defineInjectable({ factory: function TestService_Factory() { return new TestService(); }, token: TestService, providedIn: "root" });
    return TestService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    /**
     * @return {?}
     */
    TestComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-test',
                    template: "\n    <p>\n      test works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    TestComponent.ctorParameters = function () { return []; };
    return TestComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { TestService, TestComponent, TestModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXRlc3QuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvdGVzdC9saWIvdGVzdC5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3Rlc3QvbGliL3Rlc3QuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3Rlc3QvbGliL3Rlc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlc3RTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItdGVzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICB0ZXN0IHdvcmtzIVxyXG4gICAgPC9wPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdGVzdC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuaW1wb3J0IHsgTmdzQ29uZmlnTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IE5nc0RpYWdyYW1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9kaWFncmFtXCI7XHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcbmltcG9ydCB7IE5nc0xheW91dE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2xheW91dFwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc291cmNlXCI7XHJcbmltcG9ydCB7IE5nc1VzZXJNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IE5nc1NvY2tldE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3NvY2tldFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NBdXRoZW50aWNhdGlvbk1vZHVsZS5mb3JSb290KCksXHJcblx0XHROZ3NDb25maWdNb2R1bGUsXHJcblx0XHROZ3NEaWFncmFtTW9kdWxlLmZvclJvb3QoKSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0TmdzTGF5b3V0TW9kdWxlLmZvclJvb3QoKSxcclxuXHRcdFNoYXJlZE1vZHVsZSxcclxuXHRcdFNvdXJjZU1vZHVsZSxcclxuXHRcdE5nc1VzZXJNb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0TmdzU29ja2V0TW9kdWxlLmZvclJvb3QoKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIFRlc3RDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIFRlc3RDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3NCQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQixnQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsNENBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7d0JBVkQ7Ozs7Ozs7QUNBQTs7OztnQkFhQyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLHVCQUF1QixDQUFDLE9BQU8sRUFBRTt3QkFDakMsZUFBZTt3QkFDZixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7d0JBQzFCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3pCLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2QixlQUFlLENBQUMsT0FBTyxFQUFFO3FCQUN6QjtvQkFDRCxZQUFZLEVBQUUsQ0FBRSxhQUFhLENBQUU7b0JBQy9CLE9BQU8sRUFBRSxDQUFFLGFBQWEsQ0FBRTtpQkFDMUI7O3FCQTNCRDs7Ozs7Ozs7Ozs7Ozs7OyJ9