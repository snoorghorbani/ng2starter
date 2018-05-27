(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@soushians/authentication'), require('@soushians/config'), require('@soushians/diagram'), require('@soushians/form'), require('@soushians/layout'), require('@soushians/shared'), require('@soushians/source'), require('@soushians/user')) :
    typeof define === 'function' && define.amd ? define('@soushians/test', ['exports', '@angular/core', '@soushians/authentication', '@soushians/config', '@soushians/diagram', '@soushians/form', '@soushians/layout', '@soushians/shared', '@soushians/source', '@soushians/user'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.test = {}),global.ng.core,null,null,null,null,null,null,null,null));
}(this, (function (exports,core,authentication,config,diagram,form,layout,shared,source,user) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestService = (function () {
        function TestService() {
        }
        return TestService;
    }());
    TestService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    TestService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestService.ngInjectableDef = core.defineInjectable({ factory: function TestService_Factory() { return new TestService(); }, token: TestService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestComponent = (function () {
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
        { type: core.Component, args: [{
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
    var TestModule = (function () {
        function TestModule() {
        }
        return TestModule;
    }());
    TestModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        authentication.NgsAuthenticationModule,
                        config.NgsConfigModule,
                        diagram.NgsDiagramModule,
                        form.NgsFormModule,
                        layout.NgsLayoutModule,
                        shared.SharedModule,
                        source.SourceModule,
                        user.NgsUserModule
                    ],
                    declarations: [TestComponent],
                    exports: [TestComponent]
                },] },
    ];

    exports.TestService = TestService;
    exports.TestComponent = TestComponent;
    exports.TestModule = TestModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-test.umd.js.map
