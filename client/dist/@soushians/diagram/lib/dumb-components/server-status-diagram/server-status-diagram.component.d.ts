import { OnInit, Injector } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
export declare class ServerStatusDiagramComponent implements OnInit {
    private injector;
    dataSubscribtion: Subscription;
    dataLoaded: BehaviorSubject<boolean>;
    _data: any;
    data: any;
    constructor(injector: Injector);
    timeChange(e: any): void;
    ngOnInit(): void;
}
