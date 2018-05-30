import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ViewChild,
	Directive,
	ViewContainerRef,
	ComponentFactoryResolver,
	ViewChildren
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { DashboardService } from "../../../services";
import { WidgetListAction } from "../../widget.actions";
import { WidgetModel } from "../../../models";
import { WidgetItem } from "app/dashboard/models/widget-item.model";

@Component({
	selector: "widget-list-layout",
	templateUrl: "./widget-list-layout.component.html",
	styleUrls: [ "./widget-list-layout.component.css" ]
})
export class WidgetListLayoutComponent {
	widgetEntry = {};
	widgetItems: WidgetItem[] = [];
	@ViewChild("gridStack") gridStack: any;
	@ViewChild("editDrawer") editDrawer: any;
	_data: WidgetModel[] = [];
	@Input()
	set data(data: WidgetModel[]) {
		if (this._data.length == this.data.length) this._data = data;
	}
	get data() {
		return this._data;
	}
	@Input() activeWidget: WidgetModel;
	@Output() submited = new EventEmitter();
	@Output() deleted = new EventEmitter();

	constructor() {
		this.widgetItems.push(
			new WidgetItem("TestComponent", "../../../../../assets/images/dashboard/TestComponent.png")
		);
		this.widgetItems.push(
			new WidgetItem("Test2Component", "../../../../../assets/images/dashboard/Test2Component.png")
		);
		this.widgetItems.push(
			new WidgetItem("ListComponent", "../../../../../assets/images/dashboard/ListLayoutComponent.png")
		);
	}
	delete(_id: string) {
		this.deleted.emit(_id);
	}
	saveGrid(data) {
		this.submited.emit(data);
	}
	gridStackSave() {
		this.gridStack.savePanel();
	}
	editConfig(widget) {
		this.activeWidget = widget;
		this.editDrawer.toggle();
	}
}
