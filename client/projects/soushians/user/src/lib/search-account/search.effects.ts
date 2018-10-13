import { Injectable } from "@angular/core";
import { map, switchMap, catchError } from "rxjs/operators";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs";
import { Observable } from "rxjs/observable";

import { ProfileViewModel } from "../models/profile-view.model";
import { UserService } from "../services/user.service";
import { SearchStartAction, SearchFailed, SearchActionTypes, SearchSucceed } from "./search.actions";

@Injectable()
export class SearchEffects {
	constructor(private actions$: Actions<any>, private userService: UserService) {}

	@Effect()
	canSearch$ = this.actions$
		.ofType(SearchActionTypes.SEARCH)
		.pipe(map(action => action.payload), map(data => new SearchStartAction(data)));

	@Effect()
	search$ = this.actions$.ofType(SearchActionTypes.SEARCH_START).pipe(
		map(action => action.payload),
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
