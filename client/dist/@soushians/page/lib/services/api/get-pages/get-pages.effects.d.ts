import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { PageService } from "../../page.service";
import { GetPagesActions, GetPagesSucceedAction, GetPagesFailedAction } from "./get-pages.actions";
export declare class GetPagesApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<GetPagesActions>, service: PageService);
    start$: Observable<GetPagesSucceedAction | GetPagesFailedAction>;
}
