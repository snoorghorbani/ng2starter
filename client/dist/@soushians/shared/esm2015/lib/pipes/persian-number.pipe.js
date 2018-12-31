/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
export class PersianNumberPipe {
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    transform(value, exponent) {
        if (!value)
            return '';
        /** @type {?} */
        var res = '';
        for (var index = 0; index < value.length; index++) {
            res += (+value[index]).toLocaleString('fa-IR', {
                useGrouping: false
            });
        }
        return res;
    }
}
PersianNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'persianNumber' },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lhbi1udW1iZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3BlcnNpYW4tbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUMxQixTQUFTLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ3JDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUM7O1FBQ3RCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUViLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQy9DLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDM0MsV0FBVyxFQUFFLEtBQUs7YUFDckIsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLEdBQUcsQ0FBQztLQUNkOzs7WUFiSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdwZXJzaWFuTnVtYmVyJyB9KVxyXG5leHBvcnQgY2xhc3MgUGVyc2lhbk51bWJlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBleHBvbmVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XHJcbiAgICAgICAgdmFyIHJlcyA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHJlcyArPSAoK3ZhbHVlW2luZGV4XSkudG9Mb2NhbGVTdHJpbmcoJ2ZhLUlSJywge1xyXG4gICAgICAgICAgICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxufSJdfQ==