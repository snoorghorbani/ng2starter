import { OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { DiagramService } from "../../services/diagram.service";
import { FeatureState } from "../../reducers";
import { DiagramModel } from "../../models/diagram.model";
import { SourceModel } from "../../models/source.model";
import { Subject } from "rxjs";
export declare class AddDiagramComponent implements OnInit, OnDestroy {
    private diagramService;
    private formBuilder;
    private store;
    private route;
    unsubscribe: Subject<void>;
    formGroup: FormGroup;
    data: any;
    columns: any;
    chart: any;
    diagramTypes: string[];
    pathOptions: {
        path: string;
        name: string;
        type: string;
        color: string;
    }[];
    columnsMappings: AbstractControl[];
    dataSubscription: Subscription;
    diagramModel: DiagramModel;
    componentModel: {
        component: any;
        inputs: object;
    };
    typeMapToDiagram: {
        [type: string]: any;
    };
    diagramPartialConfig: {
        type: string;
        inputs: {
            formGroup: FormGroup;
            diagramService: DiagramService;
        };
    };
    sources: Observable<SourceModel[]>;
    groups: Observable<string[]>;
    source: SourceModel;
    constructor(diagramService: DiagramService, formBuilder: FormBuilder, store: Store<FeatureState>, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getDataStructure(): Observable<any>;
    configChanged(): void;
    typeChanged(): void;
    addColumn(NamePath?: string, ValuePath?: string): void;
    routeEntered(event: any): void;
    removeColumn(i: number): void;
    calculateColumns(): Observable<void>;
    generateDiagram(): Observable<any>;
    add(event: any): void;
}
