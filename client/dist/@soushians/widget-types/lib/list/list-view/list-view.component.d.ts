import { OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { WidgetModel, IWidgetView } from "@soushians/widget";
import { ListWidgetConfigModel } from "../list-widget-config.model";
export declare class ListViewComponent implements OnInit, IWidgetView<ListWidgetConfigModel> {
    private store;
    widget: WidgetModel<ListWidgetConfigModel>;
    havePermission$: Observable<boolean>;
    constructor(store: Store<any>);
    ngOnInit(): void;
}
