export declare class PageModel<T> {
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
