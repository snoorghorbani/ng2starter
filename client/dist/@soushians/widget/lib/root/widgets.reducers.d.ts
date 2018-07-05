import { WidgetModel } from "../models/widget.model";
import { WidgetsActions } from "./widget.actions";
export interface State {
    data: WidgetModel<any>[];
}
export declare function Reducer(state: State, action: WidgetsActions): State;
export declare const getWidgets: (state: State) => WidgetModel<any>[];
