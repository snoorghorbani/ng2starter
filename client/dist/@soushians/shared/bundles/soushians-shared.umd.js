(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@soushians/shared', ['exports', '@angular/core'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.shared = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SharedModule = (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.decorators = [
        { type: core.NgModule, args: [{},] },
    ];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var HttpResponseBaseModel = (function () {
        function HttpResponseBaseModel() {
        }
        return HttpResponseBaseModel;
    }());
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     * @template T
     */
    var HttpRequestBaseModel = (function () {
        function HttpRequestBaseModel() {
        }
        return HttpRequestBaseModel;
    }());
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ stringTemplate = function (template, model) {
        return eval('`' + template + '`');
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} destination
     * @return {?}
     */
    function MatchValidator(destination) {
        return function (control) {
            if (!control.root.value)
                return;
            var /** @type {?} */ destinationValue = control.root.value[destination];
            return (destinationValue == control.value)
                ? null
                : { key: "don't matched" };
        };
    }

    exports.SharedModule = SharedModule;
    exports.HttpResponseBaseModel = HttpResponseBaseModel;
    exports.HttpRequestBaseModel = HttpRequestBaseModel;
    exports.stringTemplate = stringTemplate;
    exports.MatchValidator = MatchValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-shared.umd.js.map
