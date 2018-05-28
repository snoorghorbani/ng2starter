import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { AddFormApiModel } from "../models";
import { FormConfigurationService } from "./form-configuration.service";
import { MainContainerState } from "../main-container/main-container.reducers";
export declare class FormUtilityService {
    private http;
    private store;
    private configurationService;
    responseCache: AddFormApiModel.Response;
    constructor(http: HttpClient, store: Store<MainContainerState>, configurationService: FormConfigurationService);
}
