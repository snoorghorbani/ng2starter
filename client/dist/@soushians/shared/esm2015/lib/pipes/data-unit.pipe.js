/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
export class DataUnitPipe {
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
        if (value == 0)
            return "0 بایت";
        if (value == null)
            return "نامحدود";
        /** @type {?} */
        let B = 1;
        /** @type {?} */
        let KB = B * 1024;
        /** @type {?} */
        let MB = KB * 1024;
        /** @type {?} */
        let GB = MB * 1024;
        /** @type {?} */
        let convertedValue;
        /** @type {?} */
        let suffix = "بایت";
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
    }
}
DataUnitPipe.decorators = [
    { type: Pipe, args: [{ name: "dataUnit" },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS11bml0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9kYXRhLXVuaXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUN4QixTQUFTLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ3hDLElBQUksS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFPLFFBQVEsQ0FBQztRQUNoQyxJQUFJLEtBQUssSUFBSSxJQUFJO1lBQUUsT0FBTyxTQUFTLENBQUM7O1lBRWhDLENBQUMsR0FBRyxDQUFDOztZQUNMLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSTs7WUFDYixFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7O1lBQ2QsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJOztZQUVkLGNBQWM7O1lBQ2QsTUFBTSxHQUFHLE1BQU07UUFFbkIsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDckIsY0FBYyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QzthQUFNLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUN2QixNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQ3BCLGNBQWMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7YUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDdkIsTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUNyQixjQUFjLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTixNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ2hCLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsT0FBTyxjQUFjLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUN0QyxDQUFDOzs7WUE3QkQsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoeyBuYW1lOiBcImRhdGFVbml0XCIgfSlcclxuZXhwb3J0IGNsYXNzIERhdGFVbml0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cdHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdGlmICh2YWx1ZSA9PSAwKSByZXR1cm4gXCIwINio2KfbjNiqXCI7XHJcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIFwi2YbYp9mF2K3Yr9mI2K9cIjtcclxuXHJcblx0XHRsZXQgQiA9IDE7XHJcblx0XHRsZXQgS0IgPSBCICogMTAyNDtcclxuXHRcdGxldCBNQiA9IEtCICogMTAyNDtcclxuXHRcdGxldCBHQiA9IE1CICogMTAyNDtcclxuXHJcblx0XHRsZXQgY29udmVydGVkVmFsdWU7XHJcblx0XHRsZXQgc3VmZml4ID0gXCLYqNin24zYqlwiO1xyXG5cclxuXHRcdGlmICh2YWx1ZSA+PSBHQikge1xyXG5cdFx0XHRzdWZmaXggPSBcItqv24zar9inINio2KfbjNiqXCI7XHJcblx0XHRcdGNvbnZlcnRlZFZhbHVlID0gKHZhbHVlIC8gR0IpLnRvRml4ZWQoMik7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlID49IE1CKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwi2YXar9inINio2KfbjNiqXCI7XHJcblx0XHRcdGNvbnZlcnRlZFZhbHVlID0gKHZhbHVlIC8gTUIpLnRvRml4ZWQoMik7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlID49IEtCKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwi2qnbjNmE2Ygg2KjYp9uM2KpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSAodmFsdWUgLyBLQikudG9GaXhlZCgyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwi2KjYp9uM2KpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSB2YWx1ZS50b0ZpeGVkKDIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb252ZXJ0ZWRWYWx1ZSArIFwiIFwiICsgc3VmZml4O1xyXG5cdH1cclxufVxyXG4iXX0=