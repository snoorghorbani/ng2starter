import { Actions } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { UpsertPageAction, DeletePageAction } from "./pages.actions";
export declare class PageDbEffects {
    private actions$;
    constructor(actions$: Actions<any>);
    Upsert$: Observable<UpsertPageAction>;
    UpsertMany$: Observable<UpsertPageAction>;
    delete$: Observable<DeletePageAction>;
}
