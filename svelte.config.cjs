const sveltePreprocess = require('svelte-preprocess');
const { mdsvex } = require('mdsvex');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');
const mdsvexConfig = require('./mdsvex.config.cjs');
const postcssConfig = require('./postcss.config.cjs');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  extensions: ['.svelte', '.svelte.md'],
  preprocess: [
    sveltePreprocess({
      postcss: postcssConfig,
    }), 
    mdsvex(mdsvexConfig),
  ],
  kit: {
    // By default, `npm run build` will create a standard Nosde app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
