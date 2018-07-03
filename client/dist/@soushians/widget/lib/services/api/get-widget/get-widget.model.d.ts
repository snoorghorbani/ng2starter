import { WidgetModel } from "../../../models";
export declare namespace GetWidgetApiModel {
    class Request {
        _id: string;
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: WidgetModel<any>;
        constructor();
    }
}
