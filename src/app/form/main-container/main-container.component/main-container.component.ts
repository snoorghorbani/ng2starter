import { Component, OnInit } from "@angular/core";

import * as MainContainerReducer from "../../main-container/main-container.reducers";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { FormModel } from "app/models/form";

@Component({
	template: "<router-outlet></router-outlet>"
})
export class MainContainerComponent {
	constructor(private route: ActivatedRoute, private store: Store<MainContainerReducer.MainContainerState>) {}
}
