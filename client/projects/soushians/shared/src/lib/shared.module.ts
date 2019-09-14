import { NgModule } from "@angular/core";
import { DataUnitPipe } from "./pipes/data-unit.pipe";
import { TimeUnitPipe } from "./pipes/time-unit.pipe";
import { PersianDatePipe } from "./pipes/persian-date.pipe";
import { CurrencyUnitPipe } from "./pipes/currency-unit.pipe";
import { PersianNumberPipe } from "./pipes/persian-number.pipe";
import { TimeCounterPipe } from "./pipes/time-counter.pipe";

@NgModule({
	declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
	exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
})
export class SharedModule {
	constructor() {
		(<any>window).___starter = (<any>window).___starter || {};
		(<any>window).___starter.shared = "8.0.10";
	}
}
