export interface ListItem {
	title: string;
	subtitle: string;
	description: string;
}

export class ListWidgetConfigModel {
	list: ListItem[];

	constructor() {
		this.list = [];
	}
}
