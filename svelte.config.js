import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

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
	    fallback: null
	  }),
		paths: {
      assets: '',
      base: '/svelte-schemaform'
    },
		prerender: {
			default: true
		}
	}
};

export default config;
