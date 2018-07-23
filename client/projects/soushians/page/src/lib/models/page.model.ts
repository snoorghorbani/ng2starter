export class PageModel {
	_id: string;
	name: string;
	grid: string;
	constructor({ _id, name, grid }: { _id?: string; name?: string; grid?: string } = {}) {
		this._id = _id;
		this.name = name || "";
		this.grid = grid || "";
	}
}
