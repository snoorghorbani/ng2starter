import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { FormSchemaModel, AddFormApiModel, EditFormApiModel } from "../models";
import { FormConfigurationService } from "./form-configuration.service";
import { MainContainerState } from "../main-container/main-container.reducers";
export declare class FormService {
    private http;
    private store;
    private configurationService;
    responseCache: AddFormApiModel.Response;
    constructor(http: HttpClient, store: Store<MainContainerState>, configurationService: FormConfigurationService);
    add(data: AddFormApiModel.Request): Observable<FormSchemaModel>;
    get(_id: string): Observable<FormSchemaModel>;
    getList(): Observable<FormSchemaModel[]>;
    update(data: EditFormApiModel.Request): Observable<FormSchemaModel>;
    delete(_id: string): Observable<Object>;
    selectFormById(_id: string): Observable<FormSchemaModel>;
}
