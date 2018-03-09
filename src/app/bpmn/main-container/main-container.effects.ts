import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";

import { BpmnService } from "../services";

@Injectable()
export class BpmnEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: BpmnService) {}
}
