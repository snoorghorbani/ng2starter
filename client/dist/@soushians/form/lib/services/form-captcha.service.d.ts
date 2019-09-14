import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { FormSchemaModel } from "../models";
import { FormConfigurationService } from "./form-configuration.service";
import { MainContainerState } from "../main-container/main-container.reducers";
export declare class FormCaptchaService {
    private http;
    private store;
    private configurationService;
    constructor(http: HttpClient, store: Store<MainContainerState>, configurationService: FormConfigurationService);
    getCaptcha(): Observable<any>;
    sendCaptcha(): Observable<FormSchemaModel[]>;
}
