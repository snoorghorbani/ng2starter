import { GridsterConfig } from "angular-gridster2";
import { IGridItemModel } from "./gird-item.model";

export class GridModel {
	_id: string;
	oid: string;
	name: string;
	type: string;
	config: GridsterConfig;
	items: IGridItemModel<any>[];
	constructor(
		{
			_id,
			oid,
			name,
			type,
			config,
			items
		}: { _id?: string; oid?: string; name?: string; type?: string; config?: GridsterConfig; items?: any[] } = {
			config: {},
			items: []
		}
	) {
		this._id = _id;
		this.oid = oid;
		this.name = name;
		this.type = type;
		this.config = config;
		this.items = items;
	}
}
