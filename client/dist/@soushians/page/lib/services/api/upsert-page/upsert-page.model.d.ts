import { PageModel } from "../../../models/page.model";
export declare namespace UpsertPageApiModel {
    class Request {
        page: PageModel<any>;
        constructor(page?: {});
        getRequestBody(): PageModel<any>;
    }
    class Response {
        Result: PageModel<any>;
        constructor();
    }
}
