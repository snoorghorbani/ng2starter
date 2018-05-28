/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from "@angular/core";
var CurrencyUnitPipe = /** @class */ (function () {
    function CurrencyUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    CurrencyUnitPipe.prototype.transform = function (value, exponent) {
        if (!value && value != 0)
            return '';
        else if (value == 0)
            return 'رایگان';
        var /** @type {?} */ suffix = 'ریال';
        return [value.toLocaleString('fa-IR'), suffix].join(' ');
    };
    return CurrencyUnitPipe;
}());
export { CurrencyUnitPipe };
CurrencyUnitPipe.decorators = [
    { type: Pipe, args: [{ name: 'currencyUnit' },] },
];
//# sourceMappingURL=currency-unit.pipe.js.map
