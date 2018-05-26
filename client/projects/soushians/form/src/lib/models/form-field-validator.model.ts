export interface validation {
	active: boolean;
	message: string;
	value?: any;
}
export class Validator {
	required: validation;
	minlength: validation;
	email: validation;

	constructor() {
		this.required = {
			active: false,
			message: "این فیلد الزامی است"
		};
		this.minlength = {
			active: false,
			message: "حداقل تعداد کارکترها",
			value: 5
		};
		this.email = {
			active: false,
			message: "لطفا ایمیل صحیح وارد نمایید"
		};
	}
}
