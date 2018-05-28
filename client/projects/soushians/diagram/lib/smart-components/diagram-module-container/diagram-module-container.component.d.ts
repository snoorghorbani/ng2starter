import { OnInit } from "@angular/core";
import { DiagramService } from "../../services/diagram.service";
export declare class DiagramModuleContainerComponent implements OnInit {
    private service;
    constructor(service: DiagramService);
    ngOnInit(): void;
}
