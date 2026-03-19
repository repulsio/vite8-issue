import * as esbuild from 'esbuild';

await esbuild.build({
	/* --------------------------------------------------------------- CommonOptions ---------------------------------------------------------------- */
	sourcemap: true,

	format: 'esm',

	// platform: 'node',

	// minify: true,

	/* ---------------------------------------------------------------- BuildOptions ---------------------------------------------------------------- */
	bundle: true,
	// splitting: true,

	outdir: './dist/',

	entryPoints: ['./tsc/index.js'],
});
