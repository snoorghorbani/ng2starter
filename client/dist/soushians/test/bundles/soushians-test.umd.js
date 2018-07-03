(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@soushians/authentication'), require('@soushians/config'), require('@soushians/diagram'), require('@soushians/form'), require('@soushians/layout'), require('@soushians/shared'), require('@soushians/source'), require('@soushians/user'), require('@soushians/socket')) :
    typeof define === 'function' && define.amd ? define('@soushians/test', ['exports', '@angular/core', '@soushians/authentication', '@soushians/config', '@soushians/diagram', '@soushians/form', '@soushians/layout', '@soushians/shared', '@soushians/source', '@soushians/user', '@soushians/socket'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.test = {}),global.ng.core,null,null,null,null,null,null,null,null,null));
}(this, (function (exports,i0,authentication,config,diagram,form,layout,shared,source,user,socket) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TestService = (function () {
        function TestService() {
        }
        TestService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TestService.ctorParameters = function () { return []; };
        /** @nocollapse */ TestService.ngInjectableDef = i0.defineInjectable({ factory: function TestService_Factory() { return new TestService(); }, token: TestService, providedIn: "root" });
        return TestService;
    }());

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
        TestComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestComponent.decorators = [
            { type: i0.Component, args: [{
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
    var TestModule = (function () {
        function TestModule() {
        }
        TestModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            authentication.NgsAuthenticationModule.forRoot(),
                            config.NgsConfigModule,
                            diagram.NgsDiagramModule.forRoot(),
                            form.NgsFormModule.forRoot(),
                            layout.NgsLayoutModule.forRoot(),
                            shared.SharedModule,
                            source.SourceModule,
                            user.NgsUserModule.forRoot(),
                            socket.NgsSocketModule.forRoot()
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

    exports.TestService = TestService;
    exports.TestComponent = TestComponent;
    exports.TestModule = TestModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXRlc3QudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL3Rlc3QvbGliL3Rlc3Quc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy90ZXN0L2xpYi90ZXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy90ZXN0L2xpYi90ZXN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXN0U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLXRlc3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAgdGVzdCB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVGVzdENvbXBvbmVudCB9IGZyb20gXCIuL3Rlc3QuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NBdXRoZW50aWNhdGlvbk1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcbmltcG9ydCB7IE5nc0NvbmZpZ01vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBOZ3NEaWFncmFtTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZGlhZ3JhbVwiO1xyXG5pbXBvcnQgeyBOZ3NGb3JtTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZm9ybVwiO1xyXG5pbXBvcnQgeyBOZ3NMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3NvdXJjZVwiO1xyXG5pbXBvcnQgeyBOZ3NVc2VyTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5pbXBvcnQgeyBOZ3NTb2NrZXRNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zb2NrZXRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzQXV0aGVudGljYXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0TmdzRGlhZ3JhbU1vZHVsZS5mb3JSb290KCksXHJcblx0XHROZ3NGb3JtTW9kdWxlLmZvclJvb3QoKSxcclxuXHRcdE5nc0xheW91dE1vZHVsZS5mb3JSb290KCksXHJcblx0XHRTaGFyZWRNb2R1bGUsXHJcblx0XHRTb3VyY2VNb2R1bGUsXHJcblx0XHROZ3NVc2VyTW9kdWxlLmZvclJvb3QoKSxcclxuXHRcdE5nc1NvY2tldE1vZHVsZS5mb3JSb290KClcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBUZXN0Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBUZXN0Q29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlc3RNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIk5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIiwiTmdzQ29uZmlnTW9kdWxlIiwiTmdzRGlhZ3JhbU1vZHVsZSIsIk5nc0Zvcm1Nb2R1bGUiLCJOZ3NMYXlvdXRNb2R1bGUiLCJTaGFyZWRNb2R1bGUiLCJTb3VyY2VNb2R1bGUiLCJOZ3NVc2VyTW9kdWxlIiwiTmdzU29ja2V0TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzswQkFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsZ0NBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSw0Q0FJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozs0QkFWRDs7Ozs7OztBQ0FBOzs7O29CQWFDQyxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSQyxzQ0FBdUIsQ0FBQyxPQUFPLEVBQUU7NEJBQ2pDQyxzQkFBZTs0QkFDZkMsd0JBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUMxQkMsa0JBQWEsQ0FBQyxPQUFPLEVBQUU7NEJBQ3ZCQyxzQkFBZSxDQUFDLE9BQU8sRUFBRTs0QkFDekJDLG1CQUFZOzRCQUNaQyxtQkFBWTs0QkFDWkMsa0JBQWEsQ0FBQyxPQUFPLEVBQUU7NEJBQ3ZCQyxzQkFBZSxDQUFDLE9BQU8sRUFBRTt5QkFDekI7d0JBQ0QsWUFBWSxFQUFFLENBQUUsYUFBYSxDQUFFO3dCQUMvQixPQUFPLEVBQUUsQ0FBRSxhQUFhLENBQUU7cUJBQzFCOzt5QkEzQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=