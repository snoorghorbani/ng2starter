/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { DataUnitPipe } from "./pipes/data-unit.pipe";
import { TimeUnitPipe } from "./pipes/time-unit.pipe";
import { PersianDatePipe } from "./pipes/persian-date.pipe";
import { CurrencyUnitPipe } from "./pipes/currency-unit.pipe";
import { PersianNumberPipe } from "./pipes/persian-number.pipe";
import { TimeCounterPipe } from "./pipes/time-counter.pipe";
var SharedModule = /** @class */ (function () {
    function SharedModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.shared = "8.0.10";
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
                    exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
                },] }
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = function () { return []; };
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVEO0lBS0M7UUFDQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1FBQzFELENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUM1QyxDQUFDOztnQkFSRCxRQUFRLFNBQUM7b0JBQ1QsWUFBWSxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO29CQUNqSCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7aUJBQzVHOzs7O0lBTUQsbUJBQUM7Q0FBQSxBQVRELElBU0M7U0FMWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhVW5pdFBpcGUgfSBmcm9tIFwiLi9waXBlcy9kYXRhLXVuaXQucGlwZVwiO1xyXG5pbXBvcnQgeyBUaW1lVW5pdFBpcGUgfSBmcm9tIFwiLi9waXBlcy90aW1lLXVuaXQucGlwZVwiO1xyXG5pbXBvcnQgeyBQZXJzaWFuRGF0ZVBpcGUgfSBmcm9tIFwiLi9waXBlcy9wZXJzaWFuLWRhdGUucGlwZVwiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeVVuaXRQaXBlIH0gZnJvbSBcIi4vcGlwZXMvY3VycmVuY3ktdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFBlcnNpYW5OdW1iZXJQaXBlIH0gZnJvbSBcIi4vcGlwZXMvcGVyc2lhbi1udW1iZXIucGlwZVwiO1xyXG5pbXBvcnQgeyBUaW1lQ291bnRlclBpcGUgfSBmcm9tIFwiLi9waXBlcy90aW1lLWNvdW50ZXIucGlwZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtEYXRhVW5pdFBpcGUsIFRpbWVVbml0UGlwZSwgUGVyc2lhbkRhdGVQaXBlLCBDdXJyZW5jeVVuaXRQaXBlLCBQZXJzaWFuTnVtYmVyUGlwZSwgVGltZUNvdW50ZXJQaXBlXSxcclxuXHRleHBvcnRzOiBbRGF0YVVuaXRQaXBlLCBUaW1lVW5pdFBpcGUsIFBlcnNpYW5EYXRlUGlwZSwgQ3VycmVuY3lVbml0UGlwZSwgUGVyc2lhbk51bWJlclBpcGUsIFRpbWVDb3VudGVyUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgPSAoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIgfHwge307XHJcblx0XHQoPGFueT53aW5kb3cpLl9fX3N0YXJ0ZXIuc2hhcmVkID0gXCI4LjAuMTBcIjtcclxuXHR9XHJcbn1cclxuIl19