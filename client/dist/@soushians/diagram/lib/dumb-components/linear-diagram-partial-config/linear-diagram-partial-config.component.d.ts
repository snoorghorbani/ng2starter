import { OnInit, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { DiagramService } from "../../services/diagram.service";
export declare class LinearDiagramPartialConfigComponent implements OnInit, OnDestroy {
    private injector;
    dataSubscribtion: Subscription;
    dataLoaded: BehaviorSubject<boolean>;
    _data: any;
    data: any;
    ConfigChanged: EventEmitter<any>;
    diagramService: DiagramService;
    formGroup: FormGroup;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    configChanged(): void;
}
