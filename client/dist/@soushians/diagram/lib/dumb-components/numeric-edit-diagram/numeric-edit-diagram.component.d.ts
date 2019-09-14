import { OnInit, Injector, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { DiagramService } from "../../services/diagram.service";
import { Subject } from "rxjs";
export declare class NumericEditDiagramComponent implements OnInit, OnDestroy {
    private injector;
    private diagramService;
    unsubscribe: Subject<void>;
    dataLoaded: BehaviorSubject<boolean>;
    _data: any;
    data: any;
    constructor(injector: Injector, diagramService: DiagramService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
