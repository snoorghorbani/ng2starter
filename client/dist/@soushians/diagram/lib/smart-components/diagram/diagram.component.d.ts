import { AfterViewInit, OnDestroy, Injector } from "@angular/core";
import { Subscription, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { MatSliderChange } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
import { DiagramService } from "../../services/diagram.service";
import { DiagramModel } from "../../models/diagram.model";
import { FeatureState } from "../../reducers";
export declare class DiagramComponent implements AfterViewInit, OnDestroy {
    private store;
    private diagramService;
    private http;
    private injector;
    private route;
    unsubscribe: Subject<void>;
    modelIsCorrect: BehaviorSubject<boolean>;
    _model: DiagramModel;
    data: DiagramModel;
    dataSubscribtion: Subscription;
    chart: any;
    time: number;
    now: number;
    constructor(store: Store<FeatureState>, diagramService: DiagramService, http: HttpClient, injector: Injector, route: ActivatedRoute);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    timeChange(e: MatSliderChange): void;
}
