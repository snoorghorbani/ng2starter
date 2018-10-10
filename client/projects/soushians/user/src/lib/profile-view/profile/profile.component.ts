import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { UserModel } from "../../models/user.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
	selector: "user-profile",
	templateUrl: "./profile.component.html",
	styleUrls: [ "./profile.component.css" ]
})
export class ProfileComponent implements OnInit {
	@Input()
	set information(information: UserModel) {
		if (!information) return;

		Object.keys(information).forEach(k => this.info.push([ k, information[k] ]));
	}
	@Input() dataStatus$: BehaviorSubject<boolean>;
	info: any[] = [];
	constructor() {}

	ngOnInit() {}
}
