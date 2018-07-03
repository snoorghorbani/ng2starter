import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { RuleConfigurationService } from "./rule-configuration.service";
import { AppState } from "../rule.reducers";
export declare class RuleService {
    private http;
    private store;
    private configurationService;
    constructor(http: HttpClient, store: Store<AppState>, configurationService: RuleConfigurationService);
}
