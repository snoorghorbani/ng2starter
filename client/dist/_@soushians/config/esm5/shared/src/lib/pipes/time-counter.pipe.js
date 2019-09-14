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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1jb3VudGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbInNoYXJlZC9zcmMvbGliL3BpcGVzL3RpbWUtY291bnRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUdwRCxtQ0FJQzs7O0lBSEcscUNBQWM7O0lBQ2QscUNBQWM7O0lBQ2QseUNBQWtCOztBQUd0QjtJQUFBO0lBNkNBLENBQUM7Ozs7OztJQXpDVyxrQ0FBUTs7Ozs7SUFBaEIsVUFBaUIsS0FBYTs7WUFDdEIsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFOztZQUNkLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEMsT0FBTztZQUNILEtBQUssT0FBQTtZQUNMLEtBQUssRUFBRSxLQUFLLEdBQUcsT0FBTztZQUN0QixTQUFTLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO1NBQ2xDLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFDTyxtQ0FBUzs7Ozs7SUFBakIsVUFBa0IsS0FBYTs7WUFDdkIsSUFBSSxHQUFHLEVBQUU7O1lBQ1QsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQyxPQUFPO1lBQ0gsS0FBSyxPQUFBO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUNPLG9DQUFVOzs7OztJQUFsQixVQUFtQixLQUFhOztZQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLE9BQU87WUFDSCxLQUFLLE9BQUE7WUFDTCxLQUFLLEVBQUUsS0FBSyxHQUFHLFFBQVE7WUFDdkIsU0FBUyxFQUFFLEtBQUssR0FBRyxLQUFLO1NBQzNCLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFHRCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxRQUFnQjtRQUNyQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sRUFBRSxDQUFDOztZQUNoQixTQUFTLEdBQUcsS0FBSzs7O1lBR25CLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzs7WUFDaEMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7WUFDaEQsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUV4RCxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBQyxTQUFTLENBQUM7YUFDdEMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFM0MsQ0FBQzs7Z0JBNUNKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7O0lBNkM3QixzQkFBQztDQUFBLEFBN0NELElBNkNDO1NBNUNZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICByZW1haW5pbmc6IG51bWJlcjtcclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAndGltZUNvdW50ZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lQ291bnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIb3Vycyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjAgKiA2MDtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcg2LPYp9i52KonLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnQgKiByYXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0TWludXRzKHZhbHVlOiBudW1iZXIpOiBUaW1lQ291bnRlckV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MDtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcg2K/ZgtuM2YLZhycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTZWNvbmRzKHZhbHVlOiBudW1iZXIpOiBUaW1lQ291bnRlckV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcigodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDYq9in2YbbjNmHJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICAgICAgICBjb25zdCBjb25uZWN0b3IgPSAnIDogJztcclxuXHJcbiAgICAgICAgLy8gbGV0IGRheXNEYXRhID0gdGhpcy5nZXREYXlzKHZhbHVlKTtcclxuICAgICAgICBsZXQgaG91cnNEYXRhID0gdGhpcy5nZXRIb3Vycyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IG1pbnV0c0RhdGEgPSB0aGlzLmdldE1pbnV0cyhob3Vyc0RhdGEucmVtYWluaW5nKTtcclxuICAgICAgICBsZXQgc2Vjb25kc3NEYXRhID0gdGhpcy5nZXRTZWNvbmRzKG1pbnV0c0RhdGEucmVtYWluaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtzZWNvbmRzc0RhdGEsIG1pbnV0c0RhdGEsaG91cnNEYXRhXVxyXG4gICAgICAgICAgICAubWFwKGkgPT4gaS5jb3VudCkuam9pbihjb25uZWN0b3IpO1xyXG5cclxuICAgIH1cclxufSJdfQ==