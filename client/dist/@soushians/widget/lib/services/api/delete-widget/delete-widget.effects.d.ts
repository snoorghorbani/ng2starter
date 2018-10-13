import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { WidgetService } from "../../widget.service";
import { DeleteWidgetActions, DeleteWidgetSucceedAction, DeleteWidgetFailedAction } from "./delete-widget.actions";
export declare class DeleteWidgetApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<DeleteWidgetActions>, service: WidgetService);
    start$: Observable<DeleteWidgetSucceedAction | DeleteWidgetFailedAction>;
}
