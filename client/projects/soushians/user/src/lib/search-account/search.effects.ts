import { Injectable } from "@angular/core";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Observable } from "rxjs/observable";

import { ProfileViewModel } from "../models/profile-view.model";
import { UserService } from "../services/user.service";
import { SearchStartAction, SearchFailed, SearchActionTypes, SearchSucceed } from "./search.actions";

@Injectable()
export class SearchEffects {
	constructor(private actions$: Actions<any>, private userService: UserService) {}

	@Effect()
	canSearch$ = this.actions$.pipe(
		ofType(SearchActionTypes.SEARCH),
		pluck("payload"),
		map((data: any) => new SearchStartAction(data))
	);

	@Effect()
	search$ = this.actions$.pipe(
		ofType(SearchActionTypes.SEARCH_START),
		pluck("payload"),
		switchMap((data: ProfileViewModel.Request) => {
			return this.userService.getInfo(data).pipe(
				map(res => {
					return res == null ? new SearchFailed() : new SearchSucceed(res);
				}),
				catchError(() => of(new SearchFailed()))
			);
		})
	);
}
