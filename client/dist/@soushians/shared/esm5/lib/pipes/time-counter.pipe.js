/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from "@angular/core";
/**
 * @record
 */
function TimeCounterExtractor() { }
function TimeCounterExtractor_tsickle_Closure_declarations() {
    /** @type {?} */
    TimeCounterExtractor.prototype.count;
    /** @type {?} */
    TimeCounterExtractor.prototype.value;
    /** @type {?} */
    TimeCounterExtractor.prototype.remaining;
}
var TimeCounterPipe = /** @class */ (function () {
    function TimeCounterPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getHours = function (value) {
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
    TimeCounterPipe.prototype.getMinuts = function (value) {
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
    TimeCounterPipe.prototype.getSeconds = function (value) {
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
    TimeCounterPipe.prototype.transform = function (value, exponent) {
        if (!value)
            return '';
        var /** @type {?} */ connector = ' : ';
        // let daysData = this.getDays(value);
        var /** @type {?} */ hoursData = this.getHours(value);
        var /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
        var /** @type {?} */ secondssData = this.getSeconds(minutsData.remaining);
        return [secondssData, minutsData, hoursData]
            .map(function (i) { return i.count; }).join(connector);
    };
    return TimeCounterPipe;
}());
export { TimeCounterPipe };
TimeCounterPipe.decorators = [
    { type: Pipe, args: [{ name: 'timeCounter' },] },
];
//# sourceMappingURL=time-counter.pipe.js.map
