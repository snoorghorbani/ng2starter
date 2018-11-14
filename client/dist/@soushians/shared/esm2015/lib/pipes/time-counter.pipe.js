/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
/**
 * @record
 */
function TimeCounterExtractor() { }
/** @type {?} */
TimeCounterExtractor.prototype.count;
/** @type {?} */
TimeCounterExtractor.prototype.value;
/** @type {?} */
TimeCounterExtractor.prototype.remaining;
export class TimeCounterPipe {
    /**
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
        if (!value)
            return '';
        /** @type {?} */
        const connector = ' : ';
        /** @type {?} */
        let hoursData = this.getHours(value);
        /** @type {?} */
        let minutsData = this.getMinuts(hoursData.remaining);
        /** @type {?} */
        let secondssData = this.getSeconds(minutsData.remaining);
        return [secondssData, minutsData, hoursData]
            .map(i => i.count).join(connector);
    }
}
TimeCounterPipe.decorators = [
    { type: Pipe, args: [{ name: 'timeCounter' },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1jb3VudGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy90aW1lLWNvdW50ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBVXBELE1BQU07Ozs7O0lBR00sUUFBUSxDQUFDLEtBQWE7O1FBQzFCLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7O1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPO1lBQ3RCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQzs7Ozs7O0lBRUUsU0FBUyxDQUFDLEtBQWE7O1FBQzNCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7UUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPO1lBQ0gsS0FBSztZQUNMLEtBQUssRUFBRSxLQUFLLEdBQUcsUUFBUTtZQUN2QixTQUFTLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO1NBQ2xDLENBQUM7Ozs7OztJQUVFLFVBQVUsQ0FBQyxLQUFhOztRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPO1lBQ0gsS0FBSztZQUNMLEtBQUssRUFBRSxLQUFLLEdBQUcsUUFBUTtZQUN2QixTQUFTLEVBQUUsS0FBSyxHQUFHLEtBQUs7U0FDM0IsQ0FBQzs7Ozs7OztJQUlOLFNBQVMsQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7UUFDckMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7UUFDdEIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDOztRQUd4QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUNyQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFDckQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekQsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUMsU0FBUyxDQUFDO2FBQ3RDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FFMUM7OztZQTVDSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFRpbWVDb3VudGVyRXh0cmFjdG9yIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcmVtYWluaW5nOiBudW1iZXI7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3RpbWVDb3VudGVyJyB9KVxyXG5leHBvcnQgY2xhc3MgVGltZUNvdW50ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0SG91cnModmFsdWU6IG51bWJlcik6IFRpbWVDb3VudGVyRXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwICogNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnINiz2KfYudiqJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE1pbnV0cyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnINiv2YLbjNmC2YcnLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnQgKiByYXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IoKHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcg2KvYp9mG24zZhycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdG9yID0gJyA6ICc7XHJcblxyXG4gICAgICAgIC8vIGxldCBkYXlzRGF0YSA9IHRoaXMuZ2V0RGF5cyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGhvdXJzRGF0YSA9IHRoaXMuZ2V0SG91cnModmFsdWUpO1xyXG4gICAgICAgIGxldCBtaW51dHNEYXRhID0gdGhpcy5nZXRNaW51dHMoaG91cnNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgbGV0IHNlY29uZHNzRGF0YSA9IHRoaXMuZ2V0U2Vjb25kcyhtaW51dHNEYXRhLnJlbWFpbmluZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBbc2Vjb25kc3NEYXRhLCBtaW51dHNEYXRhLGhvdXJzRGF0YV1cclxuICAgICAgICAgICAgLm1hcChpID0+IGkuY291bnQpLmpvaW4oY29ubmVjdG9yKTtcclxuXHJcbiAgICB9XHJcbn0iXX0=