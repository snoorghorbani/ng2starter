import { Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
import { UpsertWidgetAction, DeleteWidgetAction } from "./widget.actions";
export declare class WidgetDbEffects {
    private actions$;
    constructor(actions$: Actions<any>);
    Upsert$: Observable<UpsertWidgetAction>;
    UpsertMany$: Observable<UpsertWidgetAction>;
    Delete$: Observable<DeleteWidgetAction>;
}
