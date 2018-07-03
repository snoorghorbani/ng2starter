import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { RuleConfigurationService } from "./rule-configuration.service";
import { AppState } from "../rule.reducers";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
export declare class ScenarioService {
    private http;
    private store;
    private configurationService;
    constructor(http: HttpClient, store: Store<AppState>, configurationService: RuleConfigurationService);
    upsert(scenario: GwtScenarioModel): Observable<GwtScenarioModel>;
    getAnchorScenarios(anchorId: string): Observable<GwtScenarioModel[]>;
    selectScenarioById(_id: string): Observable<GwtScenarioModel>;
    selectAnchorScenarios(anchorId: string): Observable<GwtScenarioModel[]>;
}
