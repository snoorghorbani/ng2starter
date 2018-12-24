/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    { type: Pipe, args: [{ name: 'currencyUnit' },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktdW5pdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvY3VycmVuY3ktdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFDekIsU0FBUyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNyQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBRSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7YUFDN0IsSUFBSSxLQUFLLElBQUksQ0FBQztZQUFFLE9BQU8sUUFBUSxDQUFDOztRQUVyQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVEOzs7WUFSSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdjdXJyZW5jeVVuaXQnIH0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSE9MCkgcmV0dXJuICcnO1xyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDApIHJldHVybiAn2LHYp9uM2q/Yp9mGJztcclxuXHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9ICfYsduM2KfZhCc7XHJcbiAgICAgICAgcmV0dXJuIFt2YWx1ZS50b0xvY2FsZVN0cmluZygnZmEtSVInKSwgc3VmZml4XS5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn0iXX0=