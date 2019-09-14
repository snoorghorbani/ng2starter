import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { PageService } from "../../page.service";
import { GetPageActions, GetPageSucceedAction, GetPageFailedAction } from "./get-page.actions";
export declare class GetPageApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<GetPageActions>, service: PageService);
    start$: Observable<GetPageSucceedAction | GetPageFailedAction>;
}
