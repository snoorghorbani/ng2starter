import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";

import { ConfigActionTypes, ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from "../actions";
import { ConfigService } from "../services/config.service";
import { GetConfigsApiModel } from "../models";
import { map, switchMap, catchError } from "rxjs/operators";

@Injectable()
export class LoadConfigEffects {
	constructor(private actions$: Actions<any>, private configService: ConfigService) {}

	@Effect()
	getConfigs$ = this.actions$
		.ofType(ConfigActionTypes.GET_CONFIGS)
		.pipe(
			map(action => action.payload),
			switchMap((data: GetConfigsApiModel.Request) => this.configService.getConfigs()),
			map(configs => new ConfigLoadedSucceedAction(configs)),
			catchError(() => of(new ConfigLoadedFailedAction()))
		);
}
