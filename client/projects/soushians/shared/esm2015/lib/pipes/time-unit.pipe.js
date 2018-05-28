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
export class TimeUnitPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    getDays(value) {
        let /** @type {?} */ rate = 60 * 60 * 24;
        let /** @type {?} */ count = Math.floor(value / rate);
        return {
            count,
            value: count + ' روز',
            remaining: value - count * rate
        };
    }
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
        if (value === 0)
            return '0 دقیقه';
        if (!value)
            return '';
        const /** @type {?} */ connector = ' و ';
        let /** @type {?} */ daysData = this.getDays(value);
        let /** @type {?} */ hoursData = this.getHours(daysData.remaining);
        let /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);
        return [daysData, hoursData, minutsData]
            .filter(i => i.count)
            .map(i => i.value).join(connector);
    }
}
TimeUnitPipe.decorators = [
    { type: Pipe, args: [{ name: 'timeUnit' },] },
];
//# sourceMappingURL=time-unit.pipe.js.map
