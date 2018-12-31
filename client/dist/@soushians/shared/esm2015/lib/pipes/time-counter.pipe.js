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
    { type: Pipe, args: [{ name: 'timeCounter' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1jb3VudGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy90aW1lLWNvdW50ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0FBVXBELE1BQU0sT0FBTyxlQUFlOzs7OztJQUdoQixRQUFRLENBQUMsS0FBYTs7UUFDMUIsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7UUFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTztZQUNILEtBQUs7WUFDTCxLQUFLLEVBQUUsS0FBSyxHQUFHLE9BQU87WUFDdEIsU0FBUyxFQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSTtTQUNsQyxDQUFDOzs7Ozs7SUFFRSxTQUFTLENBQUMsS0FBYTs7UUFDM0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDOztRQUNkLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUk7U0FDbEMsQ0FBQzs7Ozs7O0lBRUUsVUFBVSxDQUFDLEtBQWE7O1FBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSyxFQUFFLEtBQUssR0FBRyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLLEdBQUcsS0FBSztTQUMzQixDQUFDOzs7Ozs7O0lBSU4sU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNyQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sRUFBRSxDQUFDOztRQUN0QixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUM7O1FBR3hCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBQ3JDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUNyRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6RCxPQUFPLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBQyxTQUFTLENBQUM7YUFDdEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUUxQzs7O1lBNUNKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICByZW1haW5pbmc6IG51bWJlcjtcclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAndGltZUNvdW50ZXInIH0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lQ291bnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRIb3Vycyh2YWx1ZTogbnVtYmVyKTogVGltZUNvdW50ZXJFeHRyYWN0b3Ige1xyXG4gICAgICAgIGxldCByYXRlID0gNjAgKiA2MDtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcg2LPYp9i52KonLFxyXG4gICAgICAgICAgICByZW1haW5pbmc6IHZhbHVlIC0gY291bnQgKiByYXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0TWludXRzKHZhbHVlOiBudW1iZXIpOiBUaW1lQ291bnRlckV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IHJhdGUgPSA2MDtcclxuICAgICAgICBsZXQgY291bnQgPSBNYXRoLmZsb29yKHZhbHVlIC8gcmF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb3VudCArICcg2K/ZgtuM2YLZhycsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZzogdmFsdWUgLSBjb3VudCAqIHJhdGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTZWNvbmRzKHZhbHVlOiBudW1iZXIpOiBUaW1lQ291bnRlckV4dHJhY3RvciB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gTWF0aC5mbG9vcigodmFsdWUpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdmFsdWU6IGNvdW50ICsgJyDYq9in2YbbjNmHJyxcclxuICAgICAgICAgICAgcmVtYWluaW5nOiB2YWx1ZSAtIGNvdW50XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcclxuICAgICAgICBjb25zdCBjb25uZWN0b3IgPSAnIDogJztcclxuXHJcbiAgICAgICAgLy8gbGV0IGRheXNEYXRhID0gdGhpcy5nZXREYXlzKHZhbHVlKTtcclxuICAgICAgICBsZXQgaG91cnNEYXRhID0gdGhpcy5nZXRIb3Vycyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IG1pbnV0c0RhdGEgPSB0aGlzLmdldE1pbnV0cyhob3Vyc0RhdGEucmVtYWluaW5nKTtcclxuICAgICAgICBsZXQgc2Vjb25kc3NEYXRhID0gdGhpcy5nZXRTZWNvbmRzKG1pbnV0c0RhdGEucmVtYWluaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtzZWNvbmRzc0RhdGEsIG1pbnV0c0RhdGEsaG91cnNEYXRhXVxyXG4gICAgICAgICAgICAubWFwKGkgPT4gaS5jb3VudCkuam9pbihjb25uZWN0b3IpO1xyXG5cclxuICAgIH1cclxufSJdfQ==