import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { GridService } from "../../grid.service";
import { GetGridsActions, GetGridsSucceedAction, GetGridsFailedAction } from "./get-grids.actions";
export declare class GetGridsApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<GetGridsActions>, service: GridService);
    start$: Observable<GetGridsSucceedAction | GetGridsFailedAction>;
}
