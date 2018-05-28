/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from "@angular/core";
var DataUnitPipe = /** @class */ (function () {
    function DataUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    DataUnitPipe.prototype.transform = function (value, exponent) {
        if (value == 0)
            return "0 بایت";
        if (value == null)
            return "نامحدود";
        var /** @type {?} */ B = 1;
        var /** @type {?} */ KB = B * 1024;
        var /** @type {?} */ MB = KB * 1024;
        var /** @type {?} */ GB = MB * 1024;
        var /** @type {?} */ convertedValue;
        var /** @type {?} */ suffix = "بایت";
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
    };
    return DataUnitPipe;
}());
export { DataUnitPipe };
DataUnitPipe.decorators = [
    { type: Pipe, args: [{ name: "dataUnit" },] },
];
//# sourceMappingURL=data-unit.pipe.js.map
