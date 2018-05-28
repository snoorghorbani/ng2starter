import { ActivatedRoute } from "@angular/router";
import { OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormGroup } from "@angular/forms";
import { DiagramService } from "../../services/diagram.service";
import { FeatureState } from "../../reducers";
export declare class EditDiagramComponent implements OnInit {
    private diagramService;
    private route;
    private store;
    formGroup: FormGroup;
    constructor(diagramService: DiagramService, route: ActivatedRoute, store: Store<FeatureState>);
    ngOnInit(): void;
    add(event: any): void;
}
