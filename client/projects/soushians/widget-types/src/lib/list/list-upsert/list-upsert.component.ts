import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";

import { UpsertWidgetStartAction, WidgetModel, IWidgetUpsert } from "@soushians/widget";

import { ListWidgetConfigModel } from "../list-widget-config.model";
import { ListItem } from "../list-widget-config.model";

@Component({
	selector: "widget-list-upsert",
	templateUrl: "./list-upsert.component.html",
	styleUrls: ["./list-upsert.component.css"]
})
export class ListUpsertComponent implements OnInit, IWidgetUpsert<ListWidgetConfigModel> {
	@Input() widget: WidgetModel<ListWidgetConfigModel>;
	widgetFormGroup: FormGroup;
	configFormGroup: FormGroup;
	constructor(private store: Store<any>) {
		this._createFormGroup();
		this.widget = new WidgetModel<ListWidgetConfigModel>({ type: "list" });
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
			this._update_list(this.widget.Config.list);
		}
	}

	addItem() {
		(this.configFormGroup.get("list") as FormArray).push(this._get_new_empty_list_item());
	}
	removelist(list) {
		debugger;
		const data = this.configFormGroup.get("list") as FormArray;
		if (data.controls.length > -1) {
			data.removeAt(list);
		} else {
			return data;
		}
	}
	_createFormGroup() {
		this.configFormGroup = new FormGroup({
			list: new FormArray([])
		});
		this.widgetFormGroup = new FormGroup({
			name: new FormControl("")
		});
	}

	_get_new_empty_list_item() {
		return new FormGroup({
			title: new FormControl(""),
			subtitle: new FormControl(""),
			description: new FormControl("")
		});
	}

	_update_list(list: ListItem[]) {
		(this.configFormGroup.get("list") as FormArray).reset();
		list.forEach((item) => {
			const _list = this._get_new_empty_list_item();
			_list.patchValue(item);
			(this.configFormGroup.get("list") as FormArray).push(_list);
		});
	}
}
