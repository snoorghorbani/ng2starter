import { OnInit } from "@angular/core";
import { FormGroup, FormArray } from "@angular/forms";
import { Store } from "@ngrx/store";
import { WidgetModel, IWidgetUpsert } from "@soushians/widget";
import { LinksWidgetConfigModel, LinkItem } from "../links-widget-config.model";
export declare class LinksUpsertComponent implements OnInit, IWidgetUpsert<LinksWidgetConfigModel> {
    private store;
    widget: WidgetModel<LinksWidgetConfigModel>;
    widgetFormGroup: FormGroup;
    configFormGroup: FormGroup;
    constructor(store: Store<any>);
    upsert(): void;
    ngOnInit(): void;
    /**
     * view methods
     */
    addlink(): void;
    removelink(link: any): FormArray;
    /**
     * private methods
     */
    _createFormGroup(): void;
    _get_new_empty_link_item(): FormGroup;
    _update_links(links: LinkItem[]): void;
}
