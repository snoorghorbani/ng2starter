import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
export declare class ArticleUpsertComponent implements OnInit {
    private store;
    widget: any;
    widgetFormGroup: FormGroup;
    configFormGroup: FormGroup;
    constructor(store: Store<any>);
    upsert(): void;
    ngOnInit(): void;
    _createFormGroup(): void;
}
