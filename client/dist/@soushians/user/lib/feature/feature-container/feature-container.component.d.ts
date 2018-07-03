import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import * as FeatureReducer from "../../user.reducers";
export declare class FeatureContainerComponent {
    private route;
    private store;
    constructor(route: ActivatedRoute, store: Store<FeatureReducer.AppState>);
}
