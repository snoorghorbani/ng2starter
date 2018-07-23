import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../page.reducer";
import { ActivatedRoute } from "@angular/router";
import { PageModel } from "../models/page.model";
import { PageService } from "../services/page.service";
export declare class UpsertComponent implements OnInit {
    private store;
    private route;
    private service;
    formGroup: FormGroup;
    page$: Observable<PageModel>;
    constructor(store: Store<AppState>, route: ActivatedRoute, service: PageService);
    /**
     * view methods
     */
    upsert(): void;
    ngOnInit(): void;
    /**
     * private methods
     */
    _init_formgroup(): void;
    _select_page(): void;
    _update_formgroup_base_on_page(): void;
}
