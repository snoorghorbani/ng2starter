import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";

import { UpsertWidgetStartAction, WidgetModel, IWidgetUpsert } from "@soushians/widget";

import { LinksWidgetConfigModel, LinkItem } from "../links-widget-config.model";

@Component({
	selector: "widget-links-upsert",
	templateUrl: "./links-upsert.component.html",
	styleUrls: [ "./links-upsert.component.css" ]
})
export class LinksUpsertComponent implements OnInit, IWidgetUpsert<LinksWidgetConfigModel> {
	@Input() widget: WidgetModel<LinksWidgetConfigModel>;
	widgetFormGroup: FormGroup;
	configFormGroup: FormGroup;
	constructor(private store: Store<any>) {
		this._createFormGroup();
		this.widget = new WidgetModel<LinksWidgetConfigModel>({ type: "links" });
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
			debugger;
			this._update_links(this.widget.Config.links);
		}
	}

	/**
	 * view methods
	 */
	addlink() {
		(this.configFormGroup.get("links") as FormArray).push(this._get_new_empty_link_item());
	}

	/**
	 * private methods
	 */

	_createFormGroup() {
		this.configFormGroup = new FormGroup({
			links: new FormArray([])
		});
		this.widgetFormGroup = new FormGroup({
			name: new FormControl("")
		});
	}
	_get_new_empty_link_item() {
		return new FormGroup({
			url: new FormControl("/"),
			label: new FormControl("")
		});
	}
	_update_links(links: LinkItem[]) {
		(this.configFormGroup.get("links") as FormArray).reset();
		links.forEach((link) => {
			const _link = this._get_new_empty_link_item();
			_link.patchValue(link);
			(this.configFormGroup.get("links") as FormArray).push(_link);
		});
	}
}
