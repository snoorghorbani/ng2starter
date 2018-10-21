export const stringTemplate = (template: any, model: any) => {
	let url;
	try {
		// tslint:disable-next-line:no-eval
		url = eval("`" + template + "`");

	} catch (error) {
		// tslint:disable-next-line:no-eval
		url = "";
	}
	return url;
};
