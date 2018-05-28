/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    return SharedModule;
}());
export { SharedModule };
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
                // declarations: [ DataUnitPipe ]
                exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
            },] },
];
//# sourceMappingURL=shared.module.js.map
