import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { GridService } from "../../grid.service";
import { GetGridActions, GetGridSucceedAction, GetGridFailedAction } from "./get-grid.actions";
export declare class GetGridApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<GetGridActions>, service: GridService);
    start$: Observable<GetGridSucceedAction | GetGridFailedAction>;
}
