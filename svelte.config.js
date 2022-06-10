import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

let dev = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

	kit: {
		adapter: adapter({
			trailingSlash: 'always',
	    pages: 'build',
	    assets: 'build',
	    fallback: null,
	  }),
		paths: {
      base: dev === true ? '' : '/svelte-schemaform'
    },
		appDir: 'internal',
		prerender: {
			default: true
		}
	}
};

export default config;
