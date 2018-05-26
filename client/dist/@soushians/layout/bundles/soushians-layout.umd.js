(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@soushians/layout', ['exports', '@angular/core', '@angular/platform-browser', '@angular/common', '@angular/router', '@angular/forms', '@angular/common/http', '@angular/flex-layout', '@angular/material'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.layout = {}),global.ng.core,global.ng.platformBrowser,global.ng.common,global.ng.router,global.ng.forms,global.ng.common.http,global.ng['flex-layout'],global.ng.material));
}(this, (function (exports,core,platformBrowser,common,router,forms,http,flexLayout,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgsLayoutModule = (function () {
        function NgsLayoutModule() {
        }
        return NgsLayoutModule;
    }());
    NgsLayoutModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        platformBrowser.BrowserModule,
                        router.RouterModule,
                        forms.FormsModule,
                        http.HttpClientModule,
                        flexLayout.FlexLayoutModule,
                        material.MatIconModule,
                        material.MatButtonModule,
                        material.MatCardModule,
                        material.MatSnackBarModule,
                        material.MatSidenavModule,
                        material.MatExpansionModule,
                        material.MatSelectModule,
                        material.MatFormFieldModule,
                        material.MatListModule,
                        material.MatMenuModule,
                        material.MatRadioModule,
                        material.MatInputModule,
                        material.MatToolbarModule,
                        material.MatDatepickerModule,
                        material.MatProgressBarModule,
                        router.RouterModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];

    exports.NgsLayoutModule = NgsLayoutModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-layout.umd.js.map
