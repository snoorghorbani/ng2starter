import { OnInit } from "@angular/core";
import { FormGroup, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";
import { WidgetModel, IWidgetUpsert } from "@soushians/widget";
import { ListWidgetConfigModel } from "../list-widget-config.model";
import { ListItem } from "../list-widget-config.model";
export declare class ListUpsertComponent implements OnInit, IWidgetUpsert<ListWidgetConfigModel> {
    private store;
    widget: WidgetModel<ListWidgetConfigModel>;
    widgetFormGroup: FormGroup;
    configFormGroup: FormGroup;
    constructor(store: Store<any>);
    upsert(): void;
    ngOnInit(): void;
    addItem(): void;
    removelist(list: any): FormArray;
    _createFormGroup(): void;
    _get_new_empty_list_item(): FormGroup;
    _update_list(list: ListItem[]): void;
}
