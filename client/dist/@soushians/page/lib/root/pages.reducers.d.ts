import { PageModel } from "../models/page.model";
import { PagesActions } from "./pages.actions";
export interface State {
    data: PageModel[];
}
export declare function Reducer(state: State, action: PagesActions): State;
export declare const getPages: (state: State) => PageModel[];
