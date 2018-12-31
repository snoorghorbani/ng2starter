import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { WidgetService } from "../../widget.service";
import { GetWidgetsActions, GetWidgetsSucceedAction, GetWidgetsFailedAction } from "./get-widgets.actions";
export declare class GetWidgetsApiEffects {
    private actions$;
    private service;
    constructor(actions$: Actions<GetWidgetsActions>, service: WidgetService);
    start$: Observable<GetWidgetsSucceedAction | GetWidgetsFailedAction>;
}
