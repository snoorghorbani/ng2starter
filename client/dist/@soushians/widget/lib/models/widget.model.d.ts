export declare class WidgetModel<T> {
    _id: string;
    name: string;
    type: string;
    Config: T;
    constructor({_id, name, type, Config}?: {
        _id?: string;
        name?: string;
        type?: string;
        Config?: T;
    });
}
