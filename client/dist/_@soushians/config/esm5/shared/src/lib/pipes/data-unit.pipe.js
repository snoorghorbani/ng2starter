/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
var DataUnitPipe = /** @class */ (function () {
    function DataUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    DataUnitPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    function (value, exponent) {
        if (value == 0)
            return "0 بایت";
        if (value == null)
            return "نامحدود";
        /** @type {?} */
        var B = 1;
        /** @type {?} */
        var KB = B * 1024;
        /** @type {?} */
        var MB = KB * 1024;
        /** @type {?} */
        var GB = MB * 1024;
        /** @type {?} */
        var convertedValue;
        /** @type {?} */
        var suffix = "بایت";
        if (value >= GB) {
            suffix = "گیگا بایت";
            convertedValue = (value / GB).toFixed(2);
        }
        else if (value >= MB) {
            suffix = "مگا بایت";
            convertedValue = (value / MB).toFixed(2);
        }
        else if (value >= KB) {
            suffix = "کیلو بایت";
            convertedValue = (value / KB).toFixed(2);
        }
        else {
            suffix = "بایت";
            convertedValue = value.toFixed(2);
        }
        return convertedValue + " " + suffix;
    };
    DataUnitPipe.decorators = [
        { type: Pipe, args: [{ name: "dataUnit" },] }
    ];
    return DataUnitPipe;
}());
export { DataUnitPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS11bml0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbInNoYXJlZC9zcmMvbGliL3BpcGVzL2RhdGEtdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBOEJBLENBQUM7Ozs7OztJQTVCQSxnQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxRQUFnQjtRQUN4QyxJQUFJLEtBQUssSUFBSSxDQUFDO1lBQUUsT0FBTyxRQUFRLENBQUM7UUFDaEMsSUFBSSxLQUFLLElBQUksSUFBSTtZQUFFLE9BQU8sU0FBUyxDQUFDOztZQUVoQyxDQUFDLEdBQUcsQ0FBQzs7WUFDTCxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUk7O1lBQ2IsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJOztZQUNkLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTs7WUFFZCxjQUFjOztZQUNkLE1BQU0sR0FBRyxNQUFNO1FBRW5CLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNoQixNQUFNLEdBQUcsV0FBVyxDQUFDO1lBQ3JCLGNBQWMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7YUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDdkIsTUFBTSxHQUFHLFVBQVUsQ0FBQztZQUNwQixjQUFjLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDckIsY0FBYyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ04sTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNoQixjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sY0FBYyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDdEMsQ0FBQzs7Z0JBN0JELElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7O0lBOEIxQixtQkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHsgbmFtZTogXCJkYXRhVW5pdFwiIH0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhVW5pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHR0cmFuc2Zvcm0odmFsdWU6IG51bWJlciwgZXhwb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHRpZiAodmFsdWUgPT0gMCkgcmV0dXJuIFwiMCDYqNin24zYqlwiO1xyXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHJldHVybiBcItmG2KfZhdit2K/ZiNivXCI7XHJcblxyXG5cdFx0bGV0IEIgPSAxO1xyXG5cdFx0bGV0IEtCID0gQiAqIDEwMjQ7XHJcblx0XHRsZXQgTUIgPSBLQiAqIDEwMjQ7XHJcblx0XHRsZXQgR0IgPSBNQiAqIDEwMjQ7XHJcblxyXG5cdFx0bGV0IGNvbnZlcnRlZFZhbHVlO1xyXG5cdFx0bGV0IHN1ZmZpeCA9IFwi2KjYp9uM2KpcIjtcclxuXHJcblx0XHRpZiAodmFsdWUgPj0gR0IpIHtcclxuXHRcdFx0c3VmZml4ID0gXCLar9uM2q/YpyDYqNin24zYqlwiO1xyXG5cdFx0XHRjb252ZXJ0ZWRWYWx1ZSA9ICh2YWx1ZSAvIEdCKS50b0ZpeGVkKDIpO1xyXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA+PSBNQikge1xyXG5cdFx0XHRzdWZmaXggPSBcItmF2q/YpyDYqNin24zYqlwiO1xyXG5cdFx0XHRjb252ZXJ0ZWRWYWx1ZSA9ICh2YWx1ZSAvIE1CKS50b0ZpeGVkKDIpO1xyXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA+PSBLQikge1xyXG5cdFx0XHRzdWZmaXggPSBcItqp24zZhNmIINio2KfbjNiqXCI7XHJcblx0XHRcdGNvbnZlcnRlZFZhbHVlID0gKHZhbHVlIC8gS0IpLnRvRml4ZWQoMik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdWZmaXggPSBcItio2KfbjNiqXCI7XHJcblx0XHRcdGNvbnZlcnRlZFZhbHVlID0gdmFsdWUudG9GaXhlZCgyKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29udmVydGVkVmFsdWUgKyBcIiBcIiArIHN1ZmZpeDtcclxuXHR9XHJcbn1cclxuIl19