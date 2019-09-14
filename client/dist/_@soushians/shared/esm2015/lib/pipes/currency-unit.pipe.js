/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
export class CurrencyUnitPipe {
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
        if (!value && value != 0)
            return '';
        else if (value == 0)
            return 'رایگان';
        /** @type {?} */
        let suffix = 'ریال';
        return [value.toLocaleString('fa-IR'), suffix].join(' ');
    }
}
CurrencyUnitPipe.decorators = [
    { type: Pipe, args: [{ name: 'currencyUnit' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktdW5pdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvY3VycmVuY3ktdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFDekIsU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7YUFDN0IsSUFBSSxLQUFLLElBQUksQ0FBQztZQUFFLE9BQU8sUUFBUSxDQUFDOztZQUVqQyxNQUFNLEdBQUcsTUFBTTtRQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBUkosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnY3VycmVuY3lVbml0JyB9KVxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lVbml0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUhPTApIHJldHVybiAnJztcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PSAwKSByZXR1cm4gJ9ix2KfbjNqv2KfZhic7XHJcblxyXG4gICAgICAgIGxldCBzdWZmaXggPSAn2LHbjNin2YQnO1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUudG9Mb2NhbGVTdHJpbmcoJ2ZhLUlSJyksIHN1ZmZpeF0uam9pbignICcpO1xyXG4gICAgfVxyXG59Il19