import { HttpRequestBaseModel, HttpResponseBaseModel } from "@soushians/shared";
import { UserModel } from "./user.model";
export declare namespace Signin_ApiModel {
	class Request implements HttpRequestBaseModel<Request> {}
	class Response implements HttpResponseBaseModel<Response> {
		Result: UserModel;
	}
}
