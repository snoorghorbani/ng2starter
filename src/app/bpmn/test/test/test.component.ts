import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BpmnModel, StateType } from "../../models";
import { Observable } from "rxjs/Observable";
import { MatDrawer } from "@angular/material";

@Component({
	selector: "ngs-flow-test",
	templateUrl: "./test.component.html"
})
export class FlowTestComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
