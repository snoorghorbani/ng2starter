/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
                    exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
                },] }
    ];
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsic2hhcmVkL3NyYy9saWIvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQ7SUFBQTtJQUkyQixDQUFDOztnQkFKM0IsUUFBUSxTQUFDO29CQUNULFlBQVksRUFBRSxDQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBRTtvQkFDbkgsT0FBTyxFQUFFLENBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFFO2lCQUM5Rzs7SUFDMEIsbUJBQUM7Q0FBQSxBQUo1QixJQUk0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERhdGFVbml0UGlwZSB9IGZyb20gXCIuL3BpcGVzL2RhdGEtdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFRpbWVVbml0UGlwZSB9IGZyb20gXCIuL3BpcGVzL3RpbWUtdW5pdC5waXBlXCI7XHJcbmltcG9ydCB7IFBlcnNpYW5EYXRlUGlwZSB9IGZyb20gXCIuL3BpcGVzL3BlcnNpYW4tZGF0ZS5waXBlXCI7XHJcbmltcG9ydCB7IEN1cnJlbmN5VW5pdFBpcGUgfSBmcm9tIFwiLi9waXBlcy9jdXJyZW5jeS11bml0LnBpcGVcIjtcclxuaW1wb3J0IHsgUGVyc2lhbk51bWJlclBpcGUgfSBmcm9tIFwiLi9waXBlcy9wZXJzaWFuLW51bWJlci5waXBlXCI7XHJcbmltcG9ydCB7IFRpbWVDb3VudGVyUGlwZSB9IGZyb20gXCIuL3BpcGVzL3RpbWUtY291bnRlci5waXBlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogWyBEYXRhVW5pdFBpcGUsIFRpbWVVbml0UGlwZSwgUGVyc2lhbkRhdGVQaXBlLCBDdXJyZW5jeVVuaXRQaXBlLCBQZXJzaWFuTnVtYmVyUGlwZSwgVGltZUNvdW50ZXJQaXBlIF0sXHJcblx0ZXhwb3J0czogWyBEYXRhVW5pdFBpcGUsIFRpbWVVbml0UGlwZSwgUGVyc2lhbkRhdGVQaXBlLCBDdXJyZW5jeVVuaXRQaXBlLCBQZXJzaWFuTnVtYmVyUGlwZSwgVGltZUNvdW50ZXJQaXBlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxyXG4iXX0=