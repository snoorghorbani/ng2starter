import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

import { ScenariosListActionTypes, ScenariosListStartAction, ScenarioFechedAction } from "./scenario-db.actions";
import { ScenarioService } from "../services/scenario.service";

@Injectable()
export class ScenariosDbEffects {
	constructor(private actions$: Actions<any>, private service: ScenarioService) {}

	@Effect()
	EditProfileRequest$ = this.actions$.pipe(
		ofType(ScenariosListActionTypes.SCENARIOS_LIST),
		map(() => new ScenariosListStartAction())
	);

	@Effect()
	UpsertScenario$ = this.actions$.pipe(
		ofType<any>(ScenariosListActionTypes.UPSERT),
		map(action => action.payload),
		switchMap(scenario => this.service.upsert(scenario)),
		map(scenario => new ScenarioFechedAction(scenario))
	);

	// @Effect()
	// GetScenario$ = this.actions$
	// 	.ofType(ScenariosListActionTypes.GET_SCENARIO)
	// 	.pipe(
	// 		map(action => action.payload),
	// 		switchMap(id => this.service.get(id)),
	// 		map(rule => new ScenarioFechedAction(rule))
	// 	);

	// @Effect()
	// get_rules_list$ = this.actions$
	// 	.ofType(ScenariosListActionTypes.SCENARIOS_LIST_START)
	// 	.pipe(
	// 		switchMap((data: any) => this.service.getList()),
	// 		map(res => new ScenariosListSucceedAction(res)),
	// 		catchError(() => of(new ScenariosListFailedAction()))
	// 	);
}
