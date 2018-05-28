/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from "@angular/core";
export class DataUnitPipe {
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
        if (value == 0)
            return "0 بایت";
        if (value == null)
            return "نامحدود";
        let /** @type {?} */ B = 1;
        let /** @type {?} */ KB = B * 1024;
        let /** @type {?} */ MB = KB * 1024;
        let /** @type {?} */ GB = MB * 1024;
        let /** @type {?} */ convertedValue;
        let /** @type {?} */ suffix = "بایت";
        if (value >= GB) {
            suffix = "گیگا بایت";
            convertedValue = (value / GB).toFixed(2);
        }
        else if (value >= MB) {
            suffix = "مگا بایت";
            convertedValue = (value / MB).toFixed(2);
        }
        else if (value >= KB) {
            suffix = "کیلو بایت";
            convertedValue = (value / KB).toFixed(2);
        }
        else {
            suffix = "بایت";
            convertedValue = value.toFixed(2);
        }
        return convertedValue + " " + suffix;
    }
}
DataUnitPipe.decorators = [
    { type: Pipe, args: [{ name: "dataUnit" },] },
];
//# sourceMappingURL=data-unit.pipe.js.map
