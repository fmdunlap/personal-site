export function segmentize(url: string): string[] {
	return url
		.replace(/(http[s]*:\/\/)/, '')
		.replace(/(^\/+|\/+$)/g, '')
		.split('/');
}
