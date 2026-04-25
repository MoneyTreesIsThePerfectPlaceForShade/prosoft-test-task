declare module '*.png'
declare module '*.gif'
declare module '*.svg'

declare module '*.css' {
	const resource: {[key: string]: string};
	export = resource;
}
