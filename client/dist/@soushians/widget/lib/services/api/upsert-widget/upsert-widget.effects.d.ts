import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { WidgetService } from "../../widget.service";
import { UpsertWidgetActions, UpsertWidgetSucceedAction, UpsertWidgetFailedAction } from "./upsert-widget.actions";
export declare class UpsertWidgetApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<UpsertWidgetActions>, service: WidgetService);
    start$: Observable<UpsertWidgetSucceedAction | UpsertWidgetFailedAction>;
}
