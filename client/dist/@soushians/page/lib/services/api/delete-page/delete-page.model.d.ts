import { PageModel } from "../../../models/page.model";
export declare namespace DeletePageApiModel {
    class Request {
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: PageModel;
        constructor();
    }
}
