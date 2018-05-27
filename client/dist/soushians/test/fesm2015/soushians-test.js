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
