/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from "@angular/core";
/**
 * @record
 */
function TimeUnitExtractor() { }
function TimeUnitExtractor_tsickle_Closure_declarations() {
    /** @type {?} */
    TimeUnitExtractor.prototype.count;
    /** @type {?} */
    TimeUnitExtractor.prototype.value;
    /** @type {?} */
    TimeUnitExtractor.prototype.remaining;
}
var TimeUnitPipe = /** @class */ (function () {
    function TimeUnitPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getDays = function (value) {
        var /** @type {?} */ rate = 60 * 60 * 24;
        var /** @type {?} */ count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' روز',
            remaining: value - count * rate
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getHours = function (value) {
        var /** @type {?} */ rate = 60 * 60;
        var /** @type {?} */ count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getMinuts = function (value) {
        var /** @type {?} */ rate = 60;
        var /** @type {?} */ count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getSeconds = function (value) {
        var /** @type {?} */ count = Math.floor((value));
        return {
            count: count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    };
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    TimeUnitPipe.prototype.transform = function (value, exponent) {
        if (value === 0)
            return '0 دقیقه';
        if (!value)
            return '';
        var /** @type {?} */ connector = ' و ';
        var /** @type {?} */ daysData = this.getDays(value);
        var /** @type {?} */ hoursData = this.getHours(daysData.remaining);
        var /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);
        return [daysData, hoursData, minutsData]
            .filter(function (i) { return i.count; })
            .map(function (i) { return i.value; }).join(connector);
    };
    return TimeUnitPipe;
}());
export { TimeUnitPipe };
TimeUnitPipe.decorators = [
    { type: Pipe, args: [{ name: 'timeUnit' },] },
];
//# sourceMappingURL=time-unit.pipe.js.map
