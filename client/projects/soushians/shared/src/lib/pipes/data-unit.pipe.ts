import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "dataUnit" })
export class DataUnitPipe implements PipeTransform {
	transform(value: number, exponent: string): string {
		if (value == 0) return "0 بایت";
		if (value == null) return "نامحدود";

		let B = 1;
		let KB = B * 1024;
		let MB = KB * 1024;
		let GB = MB * 1024;

		let convertedValue;
		let suffix = "بایت";

		if (value >= GB) {
			suffix = "گیگا بایت";
			convertedValue = (value / GB).toFixed(2);
		} else if (value >= MB) {
			suffix = "مگا بایت";
			convertedValue = (value / MB).toFixed(2);
		} else if (value >= KB) {
			suffix = "کیلو بایت";
			convertedValue = (value / KB).toFixed(2);
		} else {
			suffix = "بایت";
			convertedValue = value.toFixed(2);
		}

		return convertedValue + " " + suffix;
	}
}
