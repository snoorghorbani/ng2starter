import { Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
import { UpsertGridAction } from "./widget.actions";
export declare class GridDbEffects {
    private actions$;
    constructor(actions$: Actions<any>);
    Upsert$: Observable<UpsertGridAction>;
    UpsertMany$: Observable<UpsertGridAction>;
}
