import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpParams } from "@angular/common/http";

export abstract class HttpRequestBaseModel<T> {
	constructor() {}

	abstract getRequestBody?<K extends keyof T>(keys: any): { [key: string]: any };
	abstract getRequestQueryParams?<K extends keyof T>(keys: any): HttpParams;

	// static get formGroup(): FormGroup | null {
	// 	return;
	// }
}
