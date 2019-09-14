import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { FormService } from "../services/form.service";
import { EditFormStartAction, EditFormSucceedAction, EditFormFailedAction } from "./edit-form.actions";
import { UpdateFormSchemaAction } from "../list";
export declare class EditFormEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: FormService);
    EditForm$: Observable<EditFormStartAction>;
    EditFormStart$: Observable<EditFormSucceedAction | EditFormFailedAction>;
    UpdateFormsListStart$: Observable<UpdateFormSchemaAction>;
}
