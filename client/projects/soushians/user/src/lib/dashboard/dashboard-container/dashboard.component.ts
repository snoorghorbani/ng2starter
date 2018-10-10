import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { UserModel } from "../../models/user.model";
import { getAccountInfo } from "../account.reducer";

@Component({
	selector: "user-dashboard-container",
	templateUrl: "./dashboard.component.html",
	styleUrls: [ "./dashboard.component.css" ]
})
export class DashboardContainerComponent implements OnInit {
	user$: Observable<UserModel>;
	// is_agent : Observable<boolean>;
	constructor(private store: Store<any>) {
		this.user$ = this.store.select(getAccountInfo);
		// this.is_agent = signinService.is_agent();
	}

	ngOnInit() {}
}
