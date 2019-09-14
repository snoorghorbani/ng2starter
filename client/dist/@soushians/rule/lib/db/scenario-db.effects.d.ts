import { Actions } from "@ngrx/effects";
import { Observable } from "rxjs";
import { ScenariosListStartAction, ScenarioFechedAction } from "./scenario-db.actions";
import { ScenarioService } from "../services/scenario.service";
export declare class ScenariosDbEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<any>, service: ScenarioService);
    EditProfileRequest$: Observable<ScenariosListStartAction>;
    UpsertScenario$: Observable<ScenarioFechedAction>;
}
