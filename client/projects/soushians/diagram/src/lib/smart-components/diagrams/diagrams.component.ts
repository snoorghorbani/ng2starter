import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { GetDiagramsApiModel } from "../../models/get-diagrams-api.model";
import { DiagramService } from "../../services/diagram.service";
@Component({
	selector: "diagrams",
	templateUrl: "./diagrams.component.html",
	styleUrls: ["./diagrams.component.scss"]
})
export class DiagramsComponent implements OnInit {
	diagrams: Observable<GetDiagramsApiModel.Response>;
	width = 100;
	constructor(private diagramService: DiagramService) {
		this.diagrams = this.diagramService.getDiagrams();

		// this.diagrams
		//         .delay(100)
		//         .subscribe(diagrams =>
		//                 diagrams.Result.forEach(diagram =>
		//                         this.diagramService.generateDiagram(diagram.Chart, diagram._id, diagram.Source.Route, diagram.Source.Sync)));
	}

	ngOnInit() {
		// this.socketService.initSocket();
		// this.socketService.send("add-message");
		// this.socketService.onMessage().subscribe(msg=>{
		//         debugger
		// });
	}
}
