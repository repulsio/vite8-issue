import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	/*
		By default, `base` is '/', however this assumes that the app is served from domain's root (e.g. regna.io).
		
		If you want to serve it from a subdirectory instead, set `base` to use the relative path './' instead of the absolute path '/' (root).

		For Cloudflare Pages, you can just copy the build output `./dist/` to a folder with any name you want the subdirectory to be (e.g. './game1/' to serve under regna.io/game1/).
	*/
	base: './',

	mode: 'development',
	plugins: [tailwindcss()],

	build: {
		/*
			Do not minify so that stripping logs via regex is simpler for `postprocess.ts`.
		*/
		minify: false,

		/*
			Private class fields were released in ES2022, but `google-closure-compiler` does not support them yet.

			https://github.com/google/closure-compiler/issues/4286
		*/
		target: 'es2021',

		sourcemap: true,
	},

	css: {
		devSourcemap: true,
	},
});
