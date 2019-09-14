/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
/**
 * @record
 */
function TimeUnitExtractor() { }
if (false) {
    /** @type {?} */
    TimeUnitExtractor.prototype.count;
    /** @type {?} */
    TimeUnitExtractor.prototype.value;
    /** @type {?} */
    TimeUnitExtractor.prototype.remaining;
}
export class TimeUnitPipe {
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getDays(value) {
        /** @type {?} */
        let rate = 60 * 60 * 24;
        /** @type {?} */
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' روز',
            remaining: value - count * rate
        };
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getHours(value) {
        /** @type {?} */
        let rate = 60 * 60;
        /** @type {?} */
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getMinuts(value) {
        /** @type {?} */
        let rate = 60;
        /** @type {?} */
        let count = Math.floor(value / rate);
        return {
            count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getSeconds(value) {
        /** @type {?} */
        let count = Math.floor((value));
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
        /** @type {?} */
        const connector = ' و ';
        /** @type {?} */
        let daysData = this.getDays(value);
        /** @type {?} */
        let hoursData = this.getHours(daysData.remaining);
        /** @type {?} */
        let minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);
        return [daysData, hoursData, minutsData /*, secondssData*/]
            .filter(i => i.count)
            .map(i => i.value).join(connector);
    }
}
TimeUnitPipe.decorators = [
    { type: Pipe, args: [{ name: 'timeUnit' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS11bml0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbInNoYXJlZC9zcmMvbGliL3BpcGVzL3RpbWUtdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVwRCxnQ0FJQzs7O0lBSEcsa0NBQWM7O0lBQ2Qsa0NBQWM7O0lBQ2Qsc0NBQWtCOztBQUl0QixNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBRWIsT0FBTyxDQUFDLEtBQWE7O1lBQ3JCLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7O1lBQ25CLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEMsT0FBTztZQUNILEtBQUs7WUFDTCxLQUFLLEVBQUUsS0FBSyxHQUFHLE1BQU07WUFDckIsU0FBUyxFQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSTtTQUNsQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBQ08sUUFBUSxDQUFDLEtBQWE7O1lBQ3RCLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRTs7WUFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPO1lBQ3RCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUNPLFNBQVMsQ0FBQyxLQUFhOztZQUN2QixJQUFJLEdBQUcsRUFBRTs7WUFDVCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUNPLFVBQVUsQ0FBQyxLQUFhOztZQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSztTQUMzQixDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBR0QsU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNyQyxJQUFJLEtBQUssS0FBSyxDQUFDO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7Y0FFaEIsU0FBUyxHQUFHLEtBQUs7O1lBRW5CLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7WUFDOUIsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQzs7WUFDN0MsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUNwRCw0REFBNEQ7UUFFNUQsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFBLGtCQUFrQixDQUFDO2FBQ3JELE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDcEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUzQyxDQUFDOzs7WUF2REosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW50ZXJmYWNlIFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcmVtYWluaW5nOiBudW1iZXI7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3RpbWVVbml0JyB9KVxyXG5leHBvcnQgY2xhc3MgVGltZVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREYXlzKHZhbHVlOiBudW1iZXIpOiBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MCAqIDYwICogMjRcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcg2LHZiNiyJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEhvdXJzKHZhbHVlOiBudW1iZXIpOiBUaW1lVW5pdEV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MCAqIDYwO1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDYs9in2LnYqicsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRNaW51dHModmFsdWU6IG51bWJlcik6IFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwO1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDYr9mC24zZgtmHJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFNlY29uZHModmFsdWU6IG51bWJlcik6IFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKCh2YWx1ZSkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnINir2KfZhtuM2YcnLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAwKSByZXR1cm4gJzAg2K/ZgtuM2YLZhyc7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG5cclxuICAgICAgICBjb25zdCBjb25uZWN0b3IgPSAnINmIICc7XHJcblxyXG4gICAgICAgIGxldCBkYXlzRGF0YSA9IHRoaXMuZ2V0RGF5cyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGhvdXJzRGF0YSA9IHRoaXMuZ2V0SG91cnMoZGF5c0RhdGEucmVtYWluaW5nKTtcclxuICAgICAgICBsZXQgbWludXRzRGF0YSA9IHRoaXMuZ2V0TWludXRzKGhvdXJzRGF0YS5yZW1haW5pbmcpO1xyXG4gICAgICAgIC8vIGxldCBzZWNvbmRzc0RhdGEgPSB0aGlzLmdldFNlY29uZHMobWludXRzRGF0YS5yZW1haW5pbmcpO1xyXG5cclxuICAgICAgICByZXR1cm4gW2RheXNEYXRhLCBob3Vyc0RhdGEsIG1pbnV0c0RhdGEvKiwgc2Vjb25kc3NEYXRhKi9dXHJcbiAgICAgICAgICAgIC5maWx0ZXIoaSA9PiBpLmNvdW50KVxyXG4gICAgICAgICAgICAubWFwKGkgPT4gaS52YWx1ZSkuam9pbihjb25uZWN0b3IpO1xyXG5cclxuICAgIH1cclxufSJdfQ==