import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
export declare class GwtModeButtonComponent {
    private store;
    anchorsMode: boolean;
    havePermission$: Observable<boolean>;
    constructor(store: Store<any>);
    toggleAnchors(): void;
}
