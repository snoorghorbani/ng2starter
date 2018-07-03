import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IGridItemComponent } from "@soushians/grid";

import { GetDiagrams } from "../../actions";
import { DiagramModel } from "../../models";
import { DiagramService } from "../../services/diagram.service";
import { map } from "rxjs/operators";

@Component({
	templateUrl: "diagram-selector.component.html"
})
export class DiagramSelectorComponent implements OnInit, IGridItemComponent<{ diagramId: string }> {
	diagrams$: Observable<DiagramModel[]>;
	selectedDiagramId: string;
	get valid() {
		return this.config.diagramId != undefined;
	}
	get config() {
		return {
			diagramId: this.selectedDiagramId
		};
	}
	constructor(private diagramService: DiagramService) {
		this.diagrams$ = this.diagramService.getDiagrams().pipe(map((res) => res.Result));
	}
	ngOnInit() {}
}
