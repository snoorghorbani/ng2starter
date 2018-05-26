import { NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule.decorators = [
    { type: NgModule, args: [{},] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var HttpResponseBaseModel = /** @class */ (function () {
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
var HttpRequestBaseModel = /** @class */ (function () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { SharedModule, HttpResponseBaseModel, HttpRequestBaseModel, stringTemplate, MatchValidator };
//# sourceMappingURL=soushians-shared.js.map
