import * as source from "../actions/source.action";
import { SourceModel } from "../models";
export interface State {
    data: SourceModel[];
}
export declare function Reducer(state: State, action: source.Actions): State;
export declare const getSourceListData: (state: State) => SourceModel[];
