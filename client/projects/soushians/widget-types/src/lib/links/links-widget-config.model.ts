export interface LinkItem {
	url: string;
	isExternal: boolean;
	label: string;
}

export class LinksWidgetConfigModel {
	links: LinkItem[];

	constructor() {
		this.links = [];
	}
}
