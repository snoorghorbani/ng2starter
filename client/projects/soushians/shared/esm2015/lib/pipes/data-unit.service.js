/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
export class DataUnitService {
    /**
     * @param {?} value
     * @param {?=} exponent
     * @return {?}
     */
    transform(value, exponent) {
        debugger;
        if (value == 0)
            return '0 B';
        if (value == null)
            return 'نامحدود';
        let /** @type {?} */ B = 1;
        let /** @type {?} */ KB = B * 1024;
        let /** @type {?} */ MB = KB * 1024;
        let /** @type {?} */ GB = MB * 1024;
        let /** @type {?} */ convertedValue;
        let /** @type {?} */ suffix = 'B';
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
    }
}
DataUnitService.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=data-unit.service.js.map
