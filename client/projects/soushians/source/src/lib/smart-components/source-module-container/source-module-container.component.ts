import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { SourceService } from "../../services/source.service";

@Component({
	selector: "source-module-container",
	templateUrl: "./source-module-container.component.html"
})
export class SourceModuleContainerComponent implements OnInit {
	constructor(private service: SourceService) {}

	ngOnInit() {}
}
