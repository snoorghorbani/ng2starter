import { responseStatusTypes } from "@soushians/shared";
import { ProfileViewModel } from "../models";
import { SearchAction } from "./search.actions";
export interface State {
    status: responseStatusTypes;
    data: ProfileViewModel.Response;
}
export declare const initialState: State;
export declare function reducer(state: State, action: SearchAction): State;
export declare var getStatus: (state: State) => responseStatusTypes;
export declare var getUserInfo: (state: State) => ProfileViewModel.Response;
