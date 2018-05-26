import { OnInit, Injector, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subscription } from "rxjs";
import { FormGroup } from "@angular/forms";
import { DiagramService } from "../../services/diagram.service";
export declare class NumericWidgetPartialConfigComponent implements OnInit, OnDestroy {
    private injector;
    dataSubscribtion: Subscription;
    dataLoaded: BehaviorSubject<boolean>;
    _dataLoaded: any;
    formGroup: FormGroup;
    donutFormGroup: FormGroup;
    diagramService: DiagramService;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
