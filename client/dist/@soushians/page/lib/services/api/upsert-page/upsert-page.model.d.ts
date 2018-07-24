import { PageModel } from "../../../models/page.model";
export declare namespace UpsertPageApiModel {
    class Request {
        page: PageModel;
        constructor(page?: {});
        getRequestBody(): PageModel;
    }
    class Response {
        Result: PageModel;
        constructor();
    }
}
