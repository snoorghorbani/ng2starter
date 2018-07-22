export class PageModel {
	_id: string;
	name: string;
	constructor({ _id, name }: { _id?: string; name?: string } = {}) {
		this._id = _id;
		this.name = name || "";
	}
}
