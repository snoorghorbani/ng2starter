import { Observable } from "rxjs/Observable";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import { ConfigModel, getAppConfig } from "@soushians/config";
import { ChangeToolbatToComfortableModeAction } from "@soushians/layout";

import { State } from "./app.reducers";
import { SocketService } from "@soushians/socket";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: [ "./app.component.scss" ]
})
export class AppComponent {
	app_config: Observable<ConfigModel<any>>;

	constructor(private store: Store<State>, private socketService: SocketService) {
		this.app_config = this.store.select(getAppConfig);
		// debugger;
		setTimeout(() => {
			this.store.dispatch(new ChangeToolbatToComfortableModeAction());
		}, 3000);
	}
}
