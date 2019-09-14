import { Observable } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { RuleConfigurationService } from "./rule-configuration.service";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { RuleModuleConfig } from "../rule.config";
import { AppState } from "../rule.reducers";
export declare class ScenarioService {
    private http;
    private store;
    private configService;
    config$: Observable<RuleModuleConfig>;
    config: RuleModuleConfig;
    scenarios: {};
    constructor(http: HttpClient, store: Store<AppState>, configService: RuleConfigurationService);
    upsert(scenario: GwtScenarioModel): Observable<GwtScenarioModel>;
    getAnchorScenarios(anchorId: string): Observable<GwtScenarioModel[]>;
    selectScenarioById(_id: string): Observable<GwtScenarioModel>;
    selectAnchorScenarios(anchorId: string): Observable<GwtScenarioModel[]>;
}
