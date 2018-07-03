import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpRequestBaseModel, HttpResponseBaseModel } from "@soushians/shared";
import { UserModel } from "./user.model";
export namespace Signin_ApiModel {
	export class Request implements HttpRequestBaseModel<Request> {}

	export class Response implements HttpResponseBaseModel<Response> {
		Result: UserModel;
	}
}
