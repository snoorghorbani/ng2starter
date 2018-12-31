import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { WidgetModel, IWidgetUpsert } from "@soushians/widget";
import { ArticleWidgetConfigModel } from "../article-widget-config.model";
export declare class ArticleUpsertComponent implements OnInit, IWidgetUpsert<ArticleWidgetConfigModel> {
    private store;
    widget: WidgetModel<ArticleWidgetConfigModel>;
    widgetFormGroup: FormGroup;
    configFormGroup: FormGroup;
    constructor(store: Store<any>);
    upsert(): void;
    ngOnInit(): void;
    _createFormGroup(): void;
}
