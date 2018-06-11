import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DataUnitService {
	transform(value: number, exponent?: string): string {
		if (value == 0) return "0 B";
		if (value == null) return "نامحدود";

		let B = 1;
		let KB = B * 1024;
		let MB = KB * 1024;
		let GB = MB * 1024;

		let convertedValue;
		let suffix = "B";

		if (value >= GB) {
			suffix = "GB";
			convertedValue = (value / GB).toPrecision(3);
		} else if (value >= MB) {
			suffix = "MG";
			convertedValue = (value / MB).toPrecision(3);
		} else if (value >= KB) {
			suffix = "KB";
			convertedValue = (value / KB).toPrecision(3);
		} else {
			suffix = "B";
			convertedValue = value.toPrecision(3);
		}

		return convertedValue + " " + suffix;
	}
}
