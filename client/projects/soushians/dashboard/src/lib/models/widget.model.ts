export class WidgetModel<T> {
	_id: string;
	x: number;
	y: number;
	height: number;
	width: number;
	text: string;
	typeId: string;
	componentId: number;
	configs: T;
	constructor(config: any) {
		this.configs = new config();
	}
}
