import { OnInit, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { PageModel } from "../models/page.model";
import { AppState } from "../page.reducer";
import { PageService } from "../services/page.service";
import { PageConfigurationService } from "../services/page-configuration.service";
export declare class PageViewComponent implements OnInit {
    store: Store<AppState>;
    private service;
    private configurationService;
    private resolver;
    private container;
    oid: string;
    page$: Observable<PageModel<any>>;
    component: ComponentRef<any>;
    constructor(store: Store<AppState>, service: PageService, configurationService: PageConfigurationService, resolver: ComponentFactoryResolver, container: ViewContainerRef);
    ngOnInit(): void;
    _selectPage(id: string): void;
}
