import { GridModel } from "../../../models";
export declare namespace GetGridsApiModel {
    class Request {
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: GridModel[];
        constructor();
    }
}
