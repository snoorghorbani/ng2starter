import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { Router } from "@angular/router";
import { SourceSubmitSucceed, SourceSubmitFailed } from "../actions";
import { SourceService } from "../services/source.service";
export declare class SourceEffects {
    private actions$;
    private router;
    private sourceService;
    constructor(actions$: Actions<any>, router: Router, sourceService: SourceService);
    afterSubmitSource$: Observable<SourceSubmitSucceed | SourceSubmitFailed>;
    SigninSucceed$: Observable<never>;
}
