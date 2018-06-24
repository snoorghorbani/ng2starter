import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import { ScenariosListActionTypes, ScenariosListStartAction } from "./scenario-db.actions";

@Injectable()
export class ScenariosListEffects {
	constructor(private actions$: Actions<any>) {}

	@Effect()
	EditProfileRequest$ = this.actions$
		.ofType(ScenariosListActionTypes.SCENARIOS_LIST)
		.map(() => new ScenariosListStartAction());

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
	// 		catchError(() => Observable.of(new ScenariosListFailedAction()))
	// 	);
}
