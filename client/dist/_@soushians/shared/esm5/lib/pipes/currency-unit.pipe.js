/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktdW5pdC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvY3VycmVuY3ktdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBU0EsQ0FBQzs7Ozs7O0lBUEcsb0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsUUFBZ0I7UUFDckMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUUsQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzdCLElBQUksS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFPLFFBQVEsQ0FBQzs7WUFFakMsTUFBTSxHQUFHLE1BQU07UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7O2dCQVJKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7O0lBUzlCLHVCQUFDO0NBQUEsQUFURCxJQVNDO1NBUlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdjdXJyZW5jeVVuaXQnIH0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSE9MCkgcmV0dXJuICcnO1xyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09IDApIHJldHVybiAn2LHYp9uM2q/Yp9mGJztcclxuXHJcbiAgICAgICAgbGV0IHN1ZmZpeCA9ICfYsduM2KfZhCc7XHJcbiAgICAgICAgcmV0dXJuIFt2YWx1ZS50b0xvY2FsZVN0cmluZygnZmEtSVInKSwgc3VmZml4XS5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn0iXX0=