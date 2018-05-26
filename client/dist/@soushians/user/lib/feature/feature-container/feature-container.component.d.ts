import * as FeatureReducer from "../../feature/feature.reducers";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
export declare class FeatureContainerComponent {
    private route;
    private store;
    constructor(route: ActivatedRoute, store: Store<FeatureReducer.FeatureState>);
}
