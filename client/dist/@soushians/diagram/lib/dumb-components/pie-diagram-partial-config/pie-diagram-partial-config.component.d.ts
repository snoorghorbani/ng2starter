import { OnInit, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { DiagramService } from "../../services/diagram.service";
export declare class PieDiagramPartialConfigComponent implements OnInit, OnDestroy {
    private injector;
    ConfigChanged: EventEmitter<any>;
    dataSubscribtion: Subscription;
    dataLoaded: BehaviorSubject<boolean>;
    _dataLoaded: any;
    formGroup: FormGroup;
    donutFormGroup: FormGroup;
    diagramService: DiagramService;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    configChanged(): void;
}
