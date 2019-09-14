import { OnInit } from "@angular/core";
import { SourceService } from "../../services/source.service";
import { Observable } from "rxjs/Observable";
import { GetSourcesApiModel } from "../../models";
export declare class SourceListComponent implements OnInit {
    private sourceService;
    sources: Observable<GetSourcesApiModel.Response>;
    constructor(sourceService: SourceService);
    ngOnInit(): void;
}
