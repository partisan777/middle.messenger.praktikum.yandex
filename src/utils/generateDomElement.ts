export const generateDomElement = (html_code: string): DocumentFragment => {
	const dom = document.createRange().createContextualFragment(html_code);
	return dom.firstChild as DocumentFragment;
};

