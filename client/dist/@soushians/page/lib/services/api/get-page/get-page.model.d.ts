import { PageModel } from "../../../models/page.model";
export declare namespace GetPageApiModel {
    class Request {
        _id: string;
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: PageModel<any>;
        constructor();
    }
}
