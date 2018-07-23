import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { PageService } from "../../page.service";
import { DeletePageActions, DeletePageSucceedAction, DeletePageFailedAction } from "./delete-page.actions";
export declare class DeletePageApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<DeletePageActions>, service: PageService);
    start$: Observable<DeletePageSucceedAction | DeletePageFailedAction>;
}
