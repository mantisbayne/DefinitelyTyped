// Type definitions for lodash-webpack-plugin 0.11
// Project: https://github.com/lodash/lodash-webpack-plugin#readme
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Webpack } from 'webpack';

export = LodashModuleReplacementPlugin;

declare class LodashModuleReplacementPlugin implements Plugin {
	constructor(options?: LodashModuleReplacementPlugin.Options);
	apply(thisArg: Webpack, ...args: any[]): void;
}

declare namespace LodashModuleReplacementPlugin {
	export interface Options {
		caching?: boolean;
		chaining?: boolean;
		cloning?: boolean;
		coercions?: boolean;
		collections?: boolean;
		currying?: boolean;
		deburring?: boolean;
		exotics?: boolean;
		flattening?: boolean;
		guards?: boolean;
		memoizing?: boolean;
		metadata?: boolean;
		paths?: boolean;
		placeholders?: boolean;
		shorthands?: boolean;
		unicode?: boolean;
	}
}