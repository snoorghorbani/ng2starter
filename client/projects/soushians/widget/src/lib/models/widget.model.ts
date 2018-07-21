export class WidgetModel<T> {
	_id: string;
	name: string;
	type: string;
	Config: T;
	constructor({ _id, name, type, Config }: { _id?: string; name?: string; type?: string; Config?: T } = {}) {
		this._id = _id;
		this.name = name || "";
		this.type = type;
		this.Config = Config || ({} as T);
	}
}
