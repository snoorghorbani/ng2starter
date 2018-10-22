/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
/**
 * @record
 */
function TimeUnitExtractor() { }
/** @type {?} */
TimeUnitExtractor.prototype.count;
/** @type {?} */
TimeUnitExtractor.prototype.value;
/** @type {?} */
TimeUnitExtractor.prototype.remaining;
var TimeUnitPipe = /** @class */ (function () {
    function TimeUnitPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getDays = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rate = 60 * 60 * 24;
        /** @type {?} */
        var count = Math.floor(value / rate);
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
    TimeUnitPipe.prototype.getHours = /**
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
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getMinuts = /**
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
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getSeconds = /**
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
    TimeUnitPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    function (value, exponent) {
        if (value === 0)
            return '0 دقیقه';
        if (!value)
            return '';
        /** @type {?} */
        var connector = ' و ';
        /** @type {?} */
        var daysData = this.getDays(value);
        /** @type {?} */
        var hoursData = this.getHours(daysData.remaining);
        /** @type {?} */
        var minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);
        return [daysData, hoursData, minutsData]
            .filter(function (i) { return i.count; })
            .map(function (i) { return i.value; }).join(connector);
    };
    TimeUnitPipe.decorators = [
        { type: Pipe, args: [{ name: 'timeUnit' },] },
    ];
    return TimeUnitPipe;
}());
export { TimeUnitPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS11bml0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy90aW1lLXVuaXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVd4Qyw4QkFBTzs7OztjQUFDLEtBQWE7O1FBQ3pCLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFBOztRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPO1lBQ0gsS0FBSyxPQUFBO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxNQUFNO1lBQ3JCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQzs7Ozs7O0lBRUUsK0JBQVE7Ozs7Y0FBQyxLQUFhOztRQUMxQixJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDOztRQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNyQyxPQUFPO1lBQ0gsS0FBSyxPQUFBO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxPQUFPO1lBQ3RCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQzs7Ozs7O0lBRUUsZ0NBQVM7Ozs7Y0FBQyxLQUFhOztRQUMzQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7O1FBQ2QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTztZQUNILEtBQUssT0FBQTtZQUNMLEtBQUssRUFBRSxLQUFLLEdBQUcsUUFBUTtZQUN2QixTQUFTLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJO1NBQ2xDLENBQUM7Ozs7OztJQUVFLGlDQUFVOzs7O2NBQUMsS0FBYTs7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEMsT0FBTztZQUNILEtBQUssT0FBQTtZQUNMLEtBQUssRUFBRSxLQUFLLEdBQUcsUUFBUTtZQUN2QixTQUFTLEVBQUUsS0FBSyxHQUFHLEtBQUs7U0FDM0IsQ0FBQzs7Ozs7OztJQUlOLGdDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLFFBQWdCO1FBQ3JDLElBQUksS0FBSyxLQUFLLENBQUM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sRUFBRSxDQUFDOztRQUV0QixJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUM7O1FBRXhCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUNsRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFHckQsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFtQjthQUNyRCxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUUxQzs7Z0JBdkRKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O3VCQVIxQjs7U0FTYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbnRlcmZhY2UgVGltZVVuaXRFeHRyYWN0b3Ige1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICByZW1haW5pbmc6IG51bWJlcjtcclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAndGltZVVuaXQnIH0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lVW5pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBwcml2YXRlIGdldERheXModmFsdWU6IG51bWJlcik6IFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwICogNjAgKiAyNFxyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IodmFsdWUgLyByYXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDYsdmI2LInLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnQgKiByYXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SG91cnModmFsdWU6IG51bWJlcik6IFRpbWVVbml0RXh0cmFjdG9yIHtcclxuICAgICAgICBsZXQgcmF0ZSA9IDYwICogNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnINiz2KfYudiqJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50ICogcmF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE1pbnV0cyh2YWx1ZTogbnVtYmVyKTogVGltZVVuaXRFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjA7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcih2YWx1ZSAvIHJhdGUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogY291bnQgKyAnINiv2YLbjNmC2YcnLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnQgKiByYXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyKTogVGltZVVuaXRFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguZmxvb3IoKHZhbHVlKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcg2KvYp9mG24zZhycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IDApIHJldHVybiAnMCDYr9mC24zZgtmHJztcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RvciA9ICcg2YggJztcclxuXHJcbiAgICAgICAgbGV0IGRheXNEYXRhID0gdGhpcy5nZXREYXlzKHZhbHVlKTtcclxuICAgICAgICBsZXQgaG91cnNEYXRhID0gdGhpcy5nZXRIb3VycyhkYXlzRGF0YS5yZW1haW5pbmcpO1xyXG4gICAgICAgIGxldCBtaW51dHNEYXRhID0gdGhpcy5nZXRNaW51dHMoaG91cnNEYXRhLnJlbWFpbmluZyk7XHJcbiAgICAgICAgLy8gbGV0IHNlY29uZHNzRGF0YSA9IHRoaXMuZ2V0U2Vjb25kcyhtaW51dHNEYXRhLnJlbWFpbmluZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBbZGF5c0RhdGEsIGhvdXJzRGF0YSwgbWludXRzRGF0YS8qLCBzZWNvbmRzc0RhdGEqL11cclxuICAgICAgICAgICAgLmZpbHRlcihpID0+IGkuY291bnQpXHJcbiAgICAgICAgICAgIC5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKGNvbm5lY3Rvcik7XHJcblxyXG4gICAgfVxyXG59Il19