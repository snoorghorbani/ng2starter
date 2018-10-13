import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatchValidator } from "@soushians/shared";

export namespace ChangePasswordModel {
	export class Request implements HttpRequestBaseModel<Request> {
		Username: string;
		Password: string;

		constructor(initValue: ChangePasswordModel.Request = {} as ChangePasswordModel.Request) {
			Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
		}

		getRequestBody() {
			return {
				Password: this.Password
			};
		}

		static get formGroup() {
			return new FormGroup({
				Password: new FormControl(null, [ Validators.required, Validators.minLength(7) ]),
				Confirm: new FormControl(null, [ Validators.required, MatchValidator("Password") ])
			});
		}
	}

	export class Response {
		constructor() {}
	}
}
