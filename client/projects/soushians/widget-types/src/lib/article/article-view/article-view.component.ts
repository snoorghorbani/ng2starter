import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { WidgetModel, IWidgetView } from "@soushians/widget";

import { ArticleWidgetConfigModel } from "../article-widget-config.model";

@Component({
	selector: "widget-article-view",
	templateUrl: "./article-view.component.html",
	styleUrls: [ "./article-view.component.css" ]
})
export class ArticleViewComponent implements OnInit, IWidgetView<ArticleWidgetConfigModel> {
	// tslint:disable-next-line:no-input-rename
	widget: WidgetModel<ArticleWidgetConfigModel>;
	constructor(private store: Store<any>) {}

	ngOnInit() {}
}
