import { GridModel } from "../models/grid.model";
import { GridsActions } from "./widget.actions";
export interface State {
    data: GridModel[];
}
export declare function Reducer(state: State, action: GridsActions): State;
export declare const getGrids: (state: State) => GridModel[];
