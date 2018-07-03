import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";

import { AppState } from "../rule.reducers";
import { ShowAnchorsAction, HideAnchorsAction } from "../rule-anchor";

@Component({
	selector: "gwt-mode-button",
	templateUrl: "./mode-button.component.html",
	styleUrls: [ "./mode-button.component.css" ]
})
export class GwtModeButtonComponent {
	anchorsMode: boolean;
	constructor(private store: Store<any>) {
		this.anchorsMode = false;
	}

	toggleAnchors() {
		if (this.anchorsMode === false) {
			this.store.dispatch(new ShowAnchorsAction());
			this.anchorsMode = true;
		} else {
			this.store.dispatch(new HideAnchorsAction());
			this.anchorsMode = false;
		}
	}
}
