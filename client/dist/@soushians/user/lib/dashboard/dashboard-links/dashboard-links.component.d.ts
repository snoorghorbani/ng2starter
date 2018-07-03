import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { UserConfigurationService } from "../../services/user-configuration.service";
export declare class DashboardLinksComponent implements OnInit {
    private userConfigurationService;
    links: any[];
    links$: Observable<any[]>;
    constructor(userConfigurationService: UserConfigurationService);
    ngOnInit(): void;
}
