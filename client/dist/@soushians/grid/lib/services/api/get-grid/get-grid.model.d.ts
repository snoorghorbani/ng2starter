import { GridModel } from "../../../models";
export declare namespace GetGridApiModel {
    class Request {
        _id: string;
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: GridModel;
        constructor();
    }
}
