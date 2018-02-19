import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { ConfigsActionTypes, GetConfigs, GetConfigsStart, GetConfigsSucceed, GetConfigsFailed } from "../actions";
// import { ConfigService } from '../services';
import { ConfigModel, GetConfigsApiModel } from "@soushians/config";
import { ConfigService } from "@soushians/config";

@Injectable()
export class ConfigsEffects {
	constructor(private actions$: Actions<any>, private router: Router, private configService: ConfigService) {}

	@Effect() ConfigRequest$ = this.actions$.ofType().map(toPayload).map((data) => new GetConfigsStart());

	@Effect()
	getConfigs$ = this.actions$.ofType().map(toPayload).switchMap((data: GetConfigsApiModel.Request) => {
		return this.configService
			.getConfigs()
			.map((res) => new GetConfigsSucceed(res))
			.catch(() => Observable.of(new GetConfigsFailed()));
	});
}
