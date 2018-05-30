export class DashboardSchemaModel {
	_id: string;
	name: string;
	cols: number;
	rows: number;

	init() {
		this._id = (Math.random() * 10).toString();
	}
}
