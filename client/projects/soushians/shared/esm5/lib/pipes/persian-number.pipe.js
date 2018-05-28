/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from "@angular/core";
var PersianNumberPipe = /** @class */ (function () {
    function PersianNumberPipe() {
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    PersianNumberPipe.prototype.transform = function (value, exponent) {
        if (!value)
            return '';
        var /** @type {?} */ res = '';
        for (var /** @type {?} */ index = 0; index < value.length; index++) {
            res += (+value[index]).toLocaleString('fa-IR', {
                useGrouping: false
            });
        }
        return res;
    };
    return PersianNumberPipe;
}());
export { PersianNumberPipe };
PersianNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'persianNumber' },] },
];
//# sourceMappingURL=persian-number.pipe.js.map
