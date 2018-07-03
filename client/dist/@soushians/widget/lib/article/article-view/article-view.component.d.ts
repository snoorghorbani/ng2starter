import { OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { WidgetModel, WidgetService, IWidgetView } from "@soushians/widget";
import { ArticleWidgetConfigModel } from "../article-widget-config.model";
export declare class ArticleViewComponent implements OnInit, IWidgetView<ArticleWidgetConfigModel> {
    private store;
    private service;
    widget: WidgetModel<ArticleWidgetConfigModel>;
    constructor(store: Store<any>, service: WidgetService);
    ngOnInit(): void;
}
