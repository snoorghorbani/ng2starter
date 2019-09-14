import { OnInit } from "@angular/core";
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";
import { SourceModel } from "../../models";
import { SourceService } from "../../services/source.service";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import * as FeatureReducer from "../../reducers";
export declare class SourceUpsertComponent implements OnInit {
    private sourceService;
    private formBuilder;
    private route;
    private store;
    formGroup: FormGroup;
    sources: Observable<SourceModel[]>;
    thresholds: AbstractControl[];
    data: any;
    types: string[];
    constructor(sourceService: SourceService, formBuilder: FormBuilder, route: ActivatedRoute, store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
    addItem(Name?: string, Formula?: string, Message?: string, Type?: string): void;
    removeItem(i: number): void;
    getData(): Observable<any>;
    add(data: any): void;
}
