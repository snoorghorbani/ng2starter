import { Actions } from "@ngrx/effects";
import { Observable } from "rxjs/observable";
import { UserService } from "../services/user.service";
import { SearchStartAction, SearchFailed, SearchSucceed } from "./search.actions";
export declare class SearchEffects {
    private actions$;
    private userService;
    constructor(actions$: Actions<any>, userService: UserService);
    canSearch$: Observable<SearchStartAction>;
    search$: Observable<SearchSucceed | SearchFailed>;
}
