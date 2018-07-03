import { Actions } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { UpsertWidgetAction } from "./widget.actions";
export declare class WidgetDbEffects {
    private actions$;
    constructor(actions$: Actions<any>);
    Upsert$: Observable<UpsertWidgetAction>;
    UpsertMany$: Observable<UpsertWidgetAction>;
}
