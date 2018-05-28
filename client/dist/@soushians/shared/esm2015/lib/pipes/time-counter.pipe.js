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
export class TimeCounterPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    getHours(value) {
        let /** @type {?} */ rate = 60 * 60;
        let /** @type {?} */ count = Math.floor(value / rate);
        return {
            count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getMinuts(value) {
        let /** @type {?} */ rate = 60;
        let /** @type {?} */ count = Math.floor(value / rate);
        return {
            count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getSeconds(value) {
        let /** @type {?} */ count = Math.floor((value));
        return {
            count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
        if (!value)
            return '';
        const /** @type {?} */ connector = ' : ';
        // let daysData = this.getDays(value);
        let /** @type {?} */ hoursData = this.getHours(value);
        let /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
        let /** @type {?} */ secondssData = this.getSeconds(minutsData.remaining);
        return [secondssData, minutsData, hoursData]
            .map(i => i.count).join(connector);
    }
}
TimeCounterPipe.decorators = [
    { type: Pipe, args: [{ name: 'timeCounter' },] },
];
//# sourceMappingURL=time-counter.pipe.js.map
