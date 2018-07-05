import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject, Observable } from "rxjs";

import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";

import { ShowAnchorsAction, HideAnchorsAction } from "../rule-anchor/rule-anchor.actions";

@Component({
	selector: "gwt-mode-button",
	templateUrl: "./mode-button.component.html",
	styleUrls: [ "./mode-button.component.css" ]
})
export class GwtModeButtonComponent {
	anchorsMode: boolean;
	havePermission$: Observable<boolean>;
	constructor(private store: Store<any>) {
		this.anchorsMode = false;
		this.havePermission$ = this.store.select(getFrontendAuthenticationState);
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
