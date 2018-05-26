import { Component, OnInit, Input } from "@angular/core";
import { UserConfigurationService } from "../../services/user-configuration.service";
import { Observable } from "rxjs/Observable";
@Component({
	selector: "user-dashboard-links",
	templateUrl: "./dashboard-links.component.html",
	styleUrls: [ "./dashboard-links.component.scss" ]
})
export class DashboardLinksComponent implements OnInit {
	links: any[];
	links$: Observable<any[]>;
	constructor(private userConfigurationService: UserConfigurationService) {
		this.links$ = this.userConfigurationService.config$.map(data => data.dashboardLinks);
		this.links = [
			{
				title: "مشاهده حساب کاریری",
				route: "/user/panel/profile",
				description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
				icon: "credit_card"
			},
			{
				route: "/user/panel/password/change",
				title: "تغییر کلمه عبور",
				description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
				icon: "security"
			}
		];
	}

	ngOnInit() {}
}
