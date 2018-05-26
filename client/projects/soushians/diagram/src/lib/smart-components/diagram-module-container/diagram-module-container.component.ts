import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
// import { UserModel } from 'app/models/authentication';
import { Store } from "@ngrx/store";

import { DiagramService } from "../../services/diagram.service";

// import * as appReducer from 'app/reducers';

@Component({
	selector: "diagram-module-container",
	templateUrl: "./diagram-module-container.component.html"
})
export class DiagramModuleContainerComponent implements OnInit {
	constructor(private service: DiagramService) {}

	ngOnInit() {}
}
