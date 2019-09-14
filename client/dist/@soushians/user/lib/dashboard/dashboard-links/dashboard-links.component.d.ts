import { AfterViewInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { UserConfigurationService } from "../../services/user-configuration.service";
import { Store } from "@ngrx/store";
export declare class DashboardLinksComponent implements AfterViewInit {
    private userConfigurationService;
    private store;
    links: any[];
    links$: Observable<any[]>;
    constructor(userConfigurationService: UserConfigurationService, store: Store<any>);
    ngAfterViewInit(): void;
}
