import { OnInit, Injector, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs";
import { DiagramService } from "../../services/diagram.service";
export declare class NumericDiagramComponent implements OnInit, OnDestroy {
    private injector;
    private diagramService;
    dataLoaded: BehaviorSubject<boolean>;
    _data: any;
    counter: number;
    data: any;
    dataSubscribtion: Subscription;
    constructor(injector: Injector, diagramService: DiagramService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
