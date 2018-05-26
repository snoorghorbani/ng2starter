import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { FormService } from "../services";
import { AddFormStartAction, AddFormSucceedAction, AddFormFailedAction } from "./add-form.actions";
export declare class AddFormEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: FormService);
    AddForm$: Observable<AddFormStartAction>;
    AddFormStart$: Observable<AddFormSucceedAction | AddFormFailedAction>;
}
