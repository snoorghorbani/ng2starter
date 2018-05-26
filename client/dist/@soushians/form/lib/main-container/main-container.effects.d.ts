import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Actions } from "@ngrx/effects";
import { FormService } from "../services";
export declare class FormEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: FormService);
}
