import { Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
import { RulesListStartAction } from "./rule-db.actions";
export declare class RulesListEffects {
    private actions$;
    constructor(actions$: Actions<any>);
    EditProfileRequest$: Observable<RulesListStartAction>;
}
