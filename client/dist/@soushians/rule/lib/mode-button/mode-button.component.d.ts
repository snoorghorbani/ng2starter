import { Store } from "@ngrx/store";
export declare class GwtModeButtonComponent {
    private store;
    anchorsMode: boolean;
    constructor(store: Store<any>);
    toggleAnchors(): void;
}
