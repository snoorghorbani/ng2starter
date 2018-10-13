import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { UserConfigurationService } from "../../services/user-configuration.service";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

@Component({
	selector: "user-dashboard-links",
	templateUrl: "./dashboard-links.component.html",
	styleUrls: [ "./dashboard-links.component.scss" ]
})
export class DashboardLinksComponent implements AfterViewInit {
	links: any[];
	links$: Observable<any[]>;
	constructor(private userConfigurationService: UserConfigurationService, private store: Store<any>) {
		this.links$ = this.userConfigurationService.config$.pipe(map(data => data.dashboardLinks));
		this.links = [
			{
				title: "مشاهده حساب کاربری",
				route: "/user/panel/profile",
				// description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
				icon: "person"
			}
			// ,
			// {
			// 	route: "/user/panel/password/change",
			// 	title: "تغییر کلمه عبور",
			// 	// description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
			// 	icon: "security"
			// }
		];
	}

	ngAfterViewInit() {}
}
