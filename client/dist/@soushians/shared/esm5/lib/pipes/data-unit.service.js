/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
var DataUnitService = /** @class */ (function () {
    function DataUnitService() {
    }
    /**
     * @param {?} value
     * @param {?=} exponent
     * @return {?}
     */
    DataUnitService.prototype.transform = function (value, exponent) {
        debugger;
        if (value == 0)
            return '0 B';
        if (value == null)
            return 'نامحدود';
        var /** @type {?} */ B = 1;
        var /** @type {?} */ KB = B * 1024;
        var /** @type {?} */ MB = KB * 1024;
        var /** @type {?} */ GB = MB * 1024;
        var /** @type {?} */ convertedValue;
        var /** @type {?} */ suffix = 'B';
        if (value >= GB) {
            suffix = 'GB';
            convertedValue = (value / GB).toPrecision(3);
        }
        else if (value >= MB) {
            suffix = 'MG';
            convertedValue = (value / MB).toPrecision(3);
        }
        else if (value >= KB) {
            suffix = 'KB';
            convertedValue = (value / KB).toPrecision(3);
        }
        else {
            suffix = 'B';
            convertedValue = (value).toPrecision(3);
        }
        return convertedValue + ' ' + suffix;
    };
    return DataUnitService;
}());
export { DataUnitService };
DataUnitService.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=data-unit.service.js.map
