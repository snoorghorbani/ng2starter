import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { GridService } from "../../grid.service";
import { UpsertGridActions, UpsertGridSucceedAction, UpsertGridFailedAction } from "./upsert-grid.actions";
export declare class UpsertGridApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<UpsertGridActions>, service: GridService);
    start$: Observable<UpsertGridSucceedAction | UpsertGridFailedAction>;
}
