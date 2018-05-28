import * as MainContainerReducer from "../../main-container/main-container.reducers";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
export declare class MainContainerComponent {
    private route;
    private store;
    constructor(route: ActivatedRoute, store: Store<MainContainerReducer.MainContainerState>);
}
