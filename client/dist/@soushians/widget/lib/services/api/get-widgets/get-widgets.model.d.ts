import { WidgetModel } from "../../../models/widget.model";
export declare namespace GetWidgetsApiModel {
    class Request {
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: WidgetModel<any>[];
        constructor();
    }
}
