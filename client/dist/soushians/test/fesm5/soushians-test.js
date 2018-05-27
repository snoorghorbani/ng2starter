import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { NgsAuthenticationModule } from '@soushians/authentication';
import { NgsConfigModule } from '@soushians/config';
import { NgsDiagramModule } from '@soushians/diagram';
import { NgsFormModule } from '@soushians/form';
import { NgsLayoutModule } from '@soushians/layout';
import { SharedModule } from '@soushians/shared';
import { SourceModule } from '@soushians/source';
import { NgsUserModule } from '@soushians/user';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestService = /** @class */ (function () {
    function TestService() {
    }
    return TestService;
}());
TestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
TestService.ctorParameters = function () { return []; };
/** @nocollapse */ TestService.ngInjectableDef = defineInjectable({ factory: function TestService_Factory() { return new TestService(); }, token: TestService, providedIn: "root" });

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
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-test',
                template: "\n    <p>\n      test works!\n    </p>\n  ",
                styles: []
            },] },
];
/** @nocollapse */
TestComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsAuthenticationModule,
                    NgsConfigModule,
                    NgsDiagramModule,
                    NgsFormModule,
                    NgsLayoutModule,
                    SharedModule,
                    SourceModule,
                    NgsUserModule
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
//# sourceMappingURL=soushians-test.js.map
