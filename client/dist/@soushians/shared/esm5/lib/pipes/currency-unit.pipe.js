/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
var CurrencyUnitPipe = /** @class */ (function () {
    function CurrencyUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    CurrencyUnitPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    function (value, exponent) {
        if (!value && value != 0)
            return '';
        else if (value == 0)
            return 'رایگان';
        /** @type {?} */
        var suffix = 'ریال';
        return [value.toLocaleString('fa-IR'), suffix].join(' ');
    };
    CurrencyUnitPipe.decorators = [
        { type: Pipe, args: [{ name: 'currencyUnit' },] }
    ];
    return CurrencyUnitPipe;
}());
export { CurrencyUnitPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktdW5pdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvY3VycmVuY3ktdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lBSWhELG9DQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLFFBQWdCO1FBQ3JDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFFLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQzthQUM3QixJQUFJLEtBQUssSUFBSSxDQUFDO1lBQUUsT0FBTyxRQUFRLENBQUM7O1FBRXJDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUQ7O2dCQVJKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7OzJCQUY5Qjs7U0FHYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2N1cnJlbmN5VW5pdCcgfSlcclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5VW5pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlICYmIHZhbHVlIT0wKSByZXR1cm4gJyc7XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT0gMCkgcmV0dXJuICfYsdin24zar9in2YYnO1xyXG5cclxuICAgICAgICBsZXQgc3VmZml4ID0gJ9ix24zYp9mEJztcclxuICAgICAgICByZXR1cm4gW3ZhbHVlLnRvTG9jYWxlU3RyaW5nKCdmYS1JUicpLCBzdWZmaXhdLmpvaW4oJyAnKTtcclxuICAgIH1cclxufSJdfQ==