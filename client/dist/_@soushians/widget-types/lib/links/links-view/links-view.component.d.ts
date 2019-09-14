import { OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { WidgetModel, IWidgetView } from "@soushians/widget";
import { LinksWidgetConfigModel } from "../links-widget-config.model";
export declare class LinksViewComponent implements OnInit, IWidgetView<LinksWidgetConfigModel> {
    private store;
    _widget: WidgetModel<LinksWidgetConfigModel>;
    widget: WidgetModel<LinksWidgetConfigModel>;
    havePermission$: Observable<boolean>;
    constructor(store: Store<any>);
    ngOnInit(): void;
}
