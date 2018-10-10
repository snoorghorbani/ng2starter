import { Actions } from "@ngrx/effects";
import { UpsertWidgetAction, DeleteWidgetAction } from "./widget.actions";
export declare class WidgetDbEffects {
    private actions$;
    constructor(actions$: Actions<any>);
    Upsert$: import("../../../../../../../../../Projects/ng2starter/client/node_modules/rxjs/internal/Observable").Observable<UpsertWidgetAction>;
    UpsertMany$: import("../../../../../../../../../Projects/ng2starter/client/node_modules/rxjs/internal/Observable").Observable<UpsertWidgetAction>;
    Delete$: import("../../../../../../../../../Projects/ng2starter/client/node_modules/rxjs/internal/Observable").Observable<DeleteWidgetAction>;
}
