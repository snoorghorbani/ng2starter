import { PageModel } from "../../../models/page.model";
export declare namespace GetPageApiModel {
    class Request {
        name: string;
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: PageModel;
        constructor();
    }
}
