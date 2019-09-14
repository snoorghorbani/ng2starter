import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { WidgetService } from "../../widget.service";
import { GetWidgetActions, GetWidgetSucceedAction, GetWidgetFailedAction } from "./get-widget.actions";
export declare class GetWidgetApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<GetWidgetActions>, service: WidgetService);
    start$: Observable<GetWidgetSucceedAction | GetWidgetFailedAction>;
}
