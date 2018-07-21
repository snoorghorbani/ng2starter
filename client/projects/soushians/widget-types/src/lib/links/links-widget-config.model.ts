export interface LinkItem {
	url: string;
	label: string;
}

export class LinksWidgetConfigModel {
	links: LinkItem[];

	constructor() {
		this.links = [];
	}
}
