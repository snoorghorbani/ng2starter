import { OnInit, Injector } from "@angular/core";
import { BehaviorSubject } from "rxjs";
export declare class ServerConnectingTimeDiagramComponent implements OnInit {
    private injector;
    time: number;
    dataLoaded: BehaviorSubject<boolean>;
    _data: any;
    data: any;
    constructor(injector: Injector);
    ngOnInit(): void;
    timeChange(e: any): void;
}
