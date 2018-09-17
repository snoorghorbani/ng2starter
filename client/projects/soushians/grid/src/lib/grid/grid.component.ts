import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { Store } from "@ngrx/store";
import { filter, map } from "rxjs/operators";
import { MatBottomSheet, MatCheckboxChange } from "@angular/material";
import { Observable } from "rxjs";

import { getAccountInfo } from "@soushians/user";

import { AppState } from "../grid.reducer";
import { GridModel } from "../models";
import { GridService } from "../services/grid.service";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { DynamicGridItemConfigComponent } from "../grid-item/dynamic-grid-item-config.directive";
import { GridConfigComponent } from "../grid-config/grid-config.component";
import { IGridItemModel } from "../models/gird-item.model";
import { UpsertGridStartAction } from "../services/api/upsert-grid/upsert-grid.actions";
import { UserFacadeService } from "@soushians/user";

@Component({
	selector: "ngs-grid",
	templateUrl: "./grid.component.html",
	styleUrls: ["./grid.component.css"]
})
export class GridComponent implements OnInit {
	@Output() itemValidateCallback = new EventEmitter();
	@Output() itemRemovedCallback = new EventEmitter();
	@Output() itemInitCallback = new EventEmitter();
	@Output() itemResizeCallback = new EventEmitter();
	@Output() itemChangeCallback = new EventEmitter();
	@Output() gridSizeChangedCallback = new EventEmitter();
	@Output() destroyCallback = new EventEmitter();
	@Output() initCallback = new EventEmitter();

	@Input() oid: string;
	havePermission$: Observable<boolean>;
	username: string;
	options: GridsterConfig;
	grid: GridModel;
	ready = false;
	gridItemTypes: any[string];
	constructor(
		private store: Store<AppState>,
		private service: GridService,
		private userFacadeService: UserFacadeService,
		private configurationService: GridConfigurationService,
		private bottomSheet: MatBottomSheet
	) {
		this.options = {};
		this.userFacadeService
			.getInfo()
			.pipe(
				filter((user: any) => user.CurrentSession != undefined),
				map((user: any) => user.CurrentSession.Username)
			)
			.subscribe(username => {
				this.username = username;
			});
		this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
		this.havePermission$ = this.store.select(getAccountInfo).pipe(map(user => {
			const criteria = [
				user, user._id, this.grid, this.grid.owner
			];
			if (criteria.some(i => !i)) return false;

			return user._id == this.grid.owner;
		}));
	}

	static itemChange(item, itemComponent) {
		console.log("itemChanged", item, itemComponent);
	}

	static itemResize(item, itemComponent) {
		console.log("itemResized", item, itemComponent);
	}

	ngOnInit() {
		// this.items = [ { cols: 2, rows: 1, y: 0, x: 0 }, { cols: 2, rows: 2, y: 0, x: 2 } ];

		this.grid = new GridModel({
			oid: this.oid,
			config: {}
		});
		this._get_grid_by_oid_and_update_component();
	}

	_initCallback(item) {
		this.initCallback.emit(item);
	}

	removeItem(item) {
		this.grid.items.splice(this.grid.items.indexOf(item), 1);
	}
	make_public(item: IGridItemModel<any>, event: MatCheckboxChange) {
		debugger;
		item.access = event.checked ? "public" : "private";
		this.service.update_item_access(item).subscribe(item => {
			debugger;
		});
	}
	addItem(e) {
		debugger;
		e.stopPropagation();
		this.grid.items.push({} as IGridItemModel<any>);
	}
	emptyCellClick(event: MouseEvent, item: GridsterItem) {
		console.log("empty cell click", event, item);
		this.grid.items.push(item as any);
	}
	openConfig(e) {
		debugger;
		e.stopPropagation();
		e.preventDefault();
		this.bottomSheet.open(GridConfigComponent, {
			data: {
				grid: this.grid
			}
		});
	}
	saveConfig(e) {
		debugger;
		e.stopPropagation();
		e.stopImmediatePropagation();
		e.preventDefault();

		/**
		 * TODO:
		 * احزار هویت در سمت نود اتحام شود
		* کانفیگ برای گرفتن شناسه کاربر
		 */
		this.store.dispatch(new UpsertGridStartAction(this.grid));
	}
	gridItemTypeChanged(item: IGridItemModel<any>) {
		const bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
			data: {
				type: item.type
			}
		});
		bs.afterDismissed().subscribe(data => {
			item.config = bs.instance.config;
			item.valid = bs.instance.valid;
		});
	}
	showConfig(item: IGridItemModel<any>) {
		const bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
			data: {
				type: item.type
			}
		});
		bs.afterDismissed().subscribe(data => {
			item.config = bs.instance.config;
			item.valid = bs.instance.valid;
		});
	}
	_get_grid_by_oid_and_update_component() {
		this.service.selectById(this.oid).pipe(filter(data => data != undefined)).subscribe(data => {
			this.grid = data;
			this.options = { ...this.options, ...data.config };
			// this.options.draggable = {
			// 	enabled: true
			// };
			// this.options.emptyCellContextMenuCallback = this.emptyCellClick.bind(this);
			// this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
			if (this.options.enableEmptyCellDrag) this.options.emptyCellDragCallback = this.emptyCellClick.bind(this);
			// if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
			this.ready = true;
			// this.options.api.optionsChanged();
		});
	}
}
