import { SourceModel } from "./source.model";
export declare namespace GetSourcesApiModel {
    class Request {
        constructor(initValue?: GetSourcesApiModel.Request);
        getRequestBody(): {};
    }
    class Response {
        Result: SourceModel[];
        constructor();
    }
}
