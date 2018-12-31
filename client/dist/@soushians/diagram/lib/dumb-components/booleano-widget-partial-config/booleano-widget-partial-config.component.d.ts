import { OnInit, Injector, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs";
import { FormGroup } from "@angular/forms";
import { DiagramService } from "../../services/diagram.service";
export declare class BooleanoWidgetPartialConfigComponent implements OnInit, OnDestroy {
    private injector;
    dataSubscribtion: Subscription;
    dataLoaded: BehaviorSubject<boolean>;
    _dataLoaded: any;
    formGroup: FormGroup;
    booleanoFormGroup: FormGroup;
    diagramService: DiagramService;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
