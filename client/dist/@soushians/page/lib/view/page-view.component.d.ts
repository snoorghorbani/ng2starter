import { OnInit, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { PageModel } from "../models/page.model";
import { AppState } from "../page.reducer";
import { PageService } from "../services/page.service";
import { ActivatedRoute } from "@angular/router";
export declare class PageViewComponent implements OnInit {
    store: Store<AppState>;
    private service;
    private route;
    private resolver;
    private container;
    page$: Observable<PageModel>;
    constructor(store: Store<AppState>, service: PageService, route: ActivatedRoute, resolver: ComponentFactoryResolver, container: ViewContainerRef);
    ngOnInit(): void;
    _selectPage(): void;
}
