/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS11bml0LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9kYXRhLXVuaXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUN4QixTQUFTLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ3hDLElBQUksS0FBSyxJQUFJLENBQUM7WUFBRSxPQUFPLFFBQVEsQ0FBQztRQUNoQyxJQUFJLEtBQUssSUFBSSxJQUFJO1lBQUUsT0FBTyxTQUFTLENBQUM7O1FBRXBDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFDVixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDOztRQUNsQixJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDOztRQUNuQixJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDOztRQUVuQixJQUFJLGNBQWMsQ0FBQzs7UUFDbkIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXBCLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNoQixNQUFNLEdBQUcsV0FBVyxDQUFDO1lBQ3JCLGNBQWMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7YUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDdkIsTUFBTSxHQUFHLFVBQVUsQ0FBQztZQUNwQixjQUFjLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDckIsY0FBYyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ04sTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNoQixjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sY0FBYyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDckM7OztZQTdCRCxJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6IFwiZGF0YVVuaXRcIiB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YVVuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblx0dHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHZhbHVlID09IDApIHJldHVybiBcIjAg2KjYp9uM2KpcIjtcclxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gXCLZhtin2YXYrdiv2YjYr1wiO1xyXG5cclxuXHRcdGxldCBCID0gMTtcclxuXHRcdGxldCBLQiA9IEIgKiAxMDI0O1xyXG5cdFx0bGV0IE1CID0gS0IgKiAxMDI0O1xyXG5cdFx0bGV0IEdCID0gTUIgKiAxMDI0O1xyXG5cclxuXHRcdGxldCBjb252ZXJ0ZWRWYWx1ZTtcclxuXHRcdGxldCBzdWZmaXggPSBcItio2KfbjNiqXCI7XHJcblxyXG5cdFx0aWYgKHZhbHVlID49IEdCKSB7XHJcblx0XHRcdHN1ZmZpeCA9IFwi2q/bjNqv2Kcg2KjYp9uM2KpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSAodmFsdWUgLyBHQikudG9GaXhlZCgyKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPj0gTUIpIHtcclxuXHRcdFx0c3VmZml4ID0gXCLZhdqv2Kcg2KjYp9uM2KpcIjtcclxuXHRcdFx0Y29udmVydGVkVmFsdWUgPSAodmFsdWUgLyBNQikudG9GaXhlZCgyKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPj0gS0IpIHtcclxuXHRcdFx0c3VmZml4ID0gXCLaqduM2YTZiCDYqNin24zYqlwiO1xyXG5cdFx0XHRjb252ZXJ0ZWRWYWx1ZSA9ICh2YWx1ZSAvIEtCKS50b0ZpeGVkKDIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3VmZml4ID0gXCLYqNin24zYqlwiO1xyXG5cdFx0XHRjb252ZXJ0ZWRWYWx1ZSA9IHZhbHVlLnRvRml4ZWQoMik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbnZlcnRlZFZhbHVlICsgXCIgXCIgKyBzdWZmaXg7XHJcblx0fVxyXG59XHJcbiJdfQ==