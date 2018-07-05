import { WidgetModel } from "../../../models/widget.model";
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
