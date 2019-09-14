import { OnInit } from "@angular/core";
import { SourceService } from "../../services/source.service";
export declare class SourceModuleContainerComponent implements OnInit {
    private service;
    constructor(service: SourceService);
    ngOnInit(): void;
}
