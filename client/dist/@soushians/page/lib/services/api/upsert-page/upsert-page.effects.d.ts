import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { PageService } from "../../page.service";
import { UpsertPageActions, UpsertPageSucceedAction, UpsertPageFailedAction } from "./upsert-page.actions";
export declare class UpsertPageApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<UpsertPageActions>, service: PageService);
    start$: Observable<UpsertPageSucceedAction | UpsertPageFailedAction>;
}
