import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Action, Store } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { ConfigsActionTypes, GetConfigs, GetConfigsStart, GetConfigsSucceed, GetConfigsFailed } from "../actions";
// import { ConfigService } from '../services';
import { ConfigModel, GetConfigsApiModel } from "@soushians/config";
import { ConfigService } from "@soushians/config";
import { Observable, pipe, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

@Injectable()
export class ConfigsEffects {
	constructor(private actions$: Actions, private router: Router, private configService: ConfigService) { }

	@Effect() ConfigRequest$ = this.actions$.pipe(ofType(), map((data) => new GetConfigsStart()));

	@Effect()
	getConfigs$: Observable<Action> = this.actions$.pipe(
		ofType(),
		switchMap((data) => this.configService
			.getConfigs().pipe(
				map((res) => new GetConfigsSucceed(res)),
				catchError(() => of(new GetConfigsFailed()))
			)
		));
}
