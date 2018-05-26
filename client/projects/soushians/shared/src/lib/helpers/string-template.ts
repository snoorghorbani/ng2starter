export const stringTemplate = (template: any, model: any) => {
	return eval('`' + template + '`');
};
