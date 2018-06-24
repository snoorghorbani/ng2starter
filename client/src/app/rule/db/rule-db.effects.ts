import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import { RulesListActionTypes, RulesListStartAction } from "./rule-db.actions";

@Injectable()
export class RulesListEffects {
	constructor(private actions$: Actions<any>) {}

	@Effect()
	EditProfileRequest$ = this.actions$.ofType(RulesListActionTypes.RULES_LIST).map(() => new RulesListStartAction());

	// @Effect()
	// GetRule$ = this.actions$
	// 	.ofType(RulesListActionTypes.GET_RULE)
	// 	.pipe(
	// 		map(action => action.payload),
	// 		switchMap(id => this.service.get(id)),
	// 		map(rule => new RuleFechedAction(rule))
	// 	);

	// @Effect()
	// get_rules_list$ = this.actions$
	// 	.ofType(RulesListActionTypes.RULES_LIST_START)
	// 	.pipe(
	// 		switchMap((data: any) => this.service.getList()),
	// 		map(res => new RulesListSucceedAction(res)),
	// 		catchError(() => Observable.of(new RulesListFailedAction()))
	// 	);
}
