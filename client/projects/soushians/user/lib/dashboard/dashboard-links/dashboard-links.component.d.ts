import { OnInit } from "@angular/core";
import { UserConfigurationService } from "../../services/user-configuration.service";
import { Observable } from "rxjs/Observable";
export declare class DashboardLinksComponent implements OnInit {
    private userConfigurationService;
    links: any[];
    links$: Observable<any[]>;
    constructor(userConfigurationService: UserConfigurationService);
    ngOnInit(): void;
}
