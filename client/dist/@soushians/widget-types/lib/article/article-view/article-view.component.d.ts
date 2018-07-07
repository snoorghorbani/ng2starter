import { OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { WidgetModel, IWidgetView } from "@soushians/widget";
import { ArticleWidgetConfigModel } from "../article-widget-config.model";
export declare class ArticleViewComponent implements OnInit, IWidgetView<ArticleWidgetConfigModel> {
    private store;
    widget: WidgetModel<ArticleWidgetConfigModel>;
    constructor(store: Store<any>);
    ngOnInit(): void;
}
