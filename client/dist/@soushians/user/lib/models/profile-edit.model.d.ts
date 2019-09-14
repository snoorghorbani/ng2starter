import { HttpRequestBaseModel, HttpResponseBaseModel } from "@soushians/shared";
import { FormGroup } from "@angular/forms";
import { UserModel } from "./user.model";
export declare namespace EditProfile_ApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        Email: string;
        Roles: string[];
        Groups: string[];
        constructor(initValue?: Partial<Request>);
        getRequestBody(): this;
        static readonly formGroup: FormGroup;
    }
    class Response implements HttpResponseBaseModel<Response> {
        Result: {
            User: UserModel;
        };
        constructor(initValue?: Response);
        extractData(): UserModel;
    }
}
