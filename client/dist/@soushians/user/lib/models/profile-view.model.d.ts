import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup } from "@angular/forms";
import { UserModel } from "./user.model";
export declare namespace ProfileViewModel {
    class Request implements HttpRequestBaseModel<Request> {
        Email: string;
        constructor(initValue?: ProfileViewModel.Request);
        getRequestBody(): {};
        static readonly formGroup: FormGroup;
    }
    class Response extends UserModel {
        constructor();
    }
}
