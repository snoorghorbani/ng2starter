import { WidgetModel } from ".";
export declare namespace UpsertWidgetApiModel {
    class Request<T> {
        widget: WidgetModel<T>;
        constructor(initValue?: Partial<UpsertWidgetApiModel.Request<T>>);
        getRequestBody(): WidgetModel<T>;
    }
    class Response<T> {
        Result: WidgetModel<T>;
        constructor();
    }
}
