/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
/**
 * @record
 */
function TimeCounterExtractor() { }
if (false) {
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
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getHours = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rate = 60 * 60;
        /** @type {?} */
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getMinuts = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rate = 60;
        /** @type {?} */
        var count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getSeconds = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var count = Math.floor((value));
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
    TimeCounterPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    function (value, exponent) {
        if (!value)
            return '';
        /** @type {?} */
        var connector = ' : ';
        // let daysData = this.getDays(value);
        /** @type {?} */
        var hoursData = this.getHours(value);
        /** @type {?} */
        var minutsData = this.getMinuts(hoursData.remaining);
        /** @type {?} */
        var secondssData = this.getSeconds(minutsData.remaining);
        return [secondssData, minutsData, hoursData]
            .map(function (i) { return i.count; }).join(connector);
    };
    TimeCounterPipe.decorators = [
        { type: Pipe, args: [{ name: 'timeCounter' },] }
    ];
    return TimeCounterPipe;
}());
export { TimeCounterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1jb3VudGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy90aW1lLWNvdW50ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHcEQsbUNBSUM7OztJQUhHLHFDQUFjOztJQUNkLHFDQUFjOztJQUNkLHlDQUFrQjs7QUFHdEI7SUFBQTtJQTZDQSxDQUFDOzs7Ozs7SUF6Q1csa0NBQVE7Ozs7O0lBQWhCLFVBQWlCLEtBQWE7O1lBQ3RCLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRTs7WUFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLE9BQU87WUFDSCxLQUFLLE9BQUE7WUFDTCxLQUFLLEVBQUUsS0FBSyxHQUFHLE9BQU87WUFDdEIsU0FBUyxFQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSTtTQUNsQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBQ08sbUNBQVM7Ozs7O0lBQWpCLFVBQWtCLEtBQWE7O1lBQ3ZCLElBQUksR0FBRyxFQUFFOztZQUNULEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEMsT0FBTztZQUNILEtBQUssT0FBQTtZQUNMLEtBQUssRUFBRSxLQUFLLEdBQUcsUUFBUTtZQUN2QixTQUFTLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO1NBQ2xDLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFDTyxvQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsS0FBYTs7WUFDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixPQUFPO1lBQ0gsS0FBSyxPQUFBO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSztTQUMzQixDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBR0QsbUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsUUFBZ0I7UUFDckMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7WUFDaEIsU0FBUyxHQUFHLEtBQUs7OztZQUduQixTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7O1lBQ2hDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7O1lBQ2hELFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFFeEQsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUMsU0FBUyxDQUFDO2FBQ3RDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTNDLENBQUM7O2dCQTVDSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOztJQTZDN0Isc0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQTVDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFRpbWVDb3VudGVyRXh0cmFjdG9yIHtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgcmVtYWluaW5nOiBudW1iZXI7XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ3RpbWVDb3VudGVyJyB9KVxyXG5leHBvcnQgY2xhc3MgVGltZUNvdW50ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0SG91cnModmFsdWU6IG51bWJlcik6IFRpbWVDb3VudGVyRXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwICogNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnINiz2KfYudiqJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE1pbnV0cyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnINiv2YLbjNmC2YcnLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnQgKiByYXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IoKHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcg2KvYp9mG24zZhycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdG9yID0gJyA6ICc7XHJcblxyXG4gICAgICAgIC8vIGxldCBkYXlzRGF0YSA9IHRoaXMuZ2V0RGF5cyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGhvdXJzRGF0YSA9IHRoaXMuZ2V0SG91cnModmFsdWUpO1xyXG4gICAgICAgIGxldCBtaW51dHNEYXRhID0gdGhpcy5nZXRNaW51dHMoaG91cnNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgbGV0IHNlY29uZHNzRGF0YSA9IHRoaXMuZ2V0U2Vjb25kcyhtaW51dHNEYXRhLnJlbWFpbmluZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBbc2Vjb25kc3NEYXRhLCBtaW51dHNEYXRhLGhvdXJzRGF0YV1cclxuICAgICAgICAgICAgLm1hcChpID0+IGkuY291bnQpLmpvaW4oY29ubmVjdG9yKTtcclxuXHJcbiAgICB9XHJcbn0iXX0=