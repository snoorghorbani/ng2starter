import { OnInit, Injector, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs";
import { DiagramService } from "../../services/diagram.service";
export declare class DiagramPartialConfigEditComponent implements OnInit, OnDestroy {
    private injector;
    dataSubscribtion: Subscription;
    dataLoaded: BehaviorSubject<boolean>;
    _data: any;
    data: any;
    diagramService: DiagramService;
    formGroup: FormGroup;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    configChanged(): void;
}
