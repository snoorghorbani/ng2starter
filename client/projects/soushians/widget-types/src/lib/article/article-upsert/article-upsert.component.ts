import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";

import { UpsertWidgetStartAction, WidgetModel, IWidgetUpsert } from "@soushians/widget";

import { ArticleWidgetConfigModel } from "../article-widget-config.model";

@Component({
	selector: "widget-article-upsert",
	templateUrl: "./article-upsert.component.html",
	styleUrls: [ "./article-upsert.component.css" ]
})
export class ArticleUpsertComponent implements OnInit, IWidgetUpsert<ArticleWidgetConfigModel> {
	@Input() widget: WidgetModel<ArticleWidgetConfigModel>;
	widgetFormGroup: FormGroup;
	configFormGroup: FormGroup;
	constructor(private store: Store<any>) {
		this._createFormGroup();
		this.widget = new WidgetModel<ArticleWidgetConfigModel>({ type: "article" });
	}

	upsert() {
		const widget = {
			...this.widget,
			...this.widgetFormGroup.value,
			Config: this.configFormGroup.value
		};
		this.store.dispatch(new UpsertWidgetStartAction(widget));
	}
	ngOnInit() {
		if (this.widget != undefined) {
			this.widgetFormGroup.patchValue(this.widget);
			this.configFormGroup.patchValue(this.widget.Config);
		}
	}

	_createFormGroup() {
		this.configFormGroup = new FormGroup({
			content: new FormControl("")
		});
		this.widgetFormGroup = new FormGroup({
			name: new FormControl("")
		});
	}
}
