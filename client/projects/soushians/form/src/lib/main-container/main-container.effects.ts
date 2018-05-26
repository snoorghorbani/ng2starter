import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";

import { FormService } from "../services";

@Injectable()
export class FormEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: FormService) {}
}
