import { OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { DiagramService } from "../../services/diagram.service";
import * as FeatureReducer from "../../reducers";
export declare class DataMapperComponent implements OnInit {
    private diagramService;
    private store;
    destination: string;
    _data: any;
    data: any;
    dataReport: any[];
    constructor(diagramService: DiagramService, store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
}
