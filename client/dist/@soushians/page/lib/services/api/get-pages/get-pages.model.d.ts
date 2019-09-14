import { PageModel } from "../../../models/page.model";
export declare namespace GetPagesApiModel {
    class Request {
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: PageModel[];
        constructor();
    }
}
