import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ConfigModel } from "../../models";
import { FeatureState } from "../../reducers";
export declare class ConfigsComponent {
    private store;
    configs: Observable<ConfigModel<any>[]>;
    constructor(store: Store<FeatureState>);
}
