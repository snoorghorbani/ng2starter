import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { UserModel } from "../../models";
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

		this.info = Object.entries(information);
	}
	@Input() dataStatus$: BehaviorSubject<boolean>;
	info: any[];
	constructor() {}

	ngOnInit() {}
}
