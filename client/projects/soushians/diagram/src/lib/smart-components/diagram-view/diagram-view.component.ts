import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { DiagramService } from "../../services/diagram.service";
import { GetDiagramsApiModel } from "../../models/get-diagrams-api.model";

@Component({
	selector: "diagram-view",
	templateUrl: "./diagram-view.component.html",
	styleUrls: ["./diagram-view.component.scss"]
})
export class diagramViewComponent implements OnInit {
	diagrams: Observable<GetDiagramsApiModel.Response>;
	width = 100;

	diagramData$: any;
	@Input("id") diagramId: string;

	constructor(private diagramService: DiagramService) {
		this.diagrams = this.diagramService.getDiagrams();
	}

	ngOnInit() {
		this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
	}
}
