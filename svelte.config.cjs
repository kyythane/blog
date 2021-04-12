const sveltePreprocess = require('svelte-preprocess');
const { mdsvex } = require('mdsvex');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');
const mdsvex_config = require('./mdsvex.config.cjs');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  extensions: ['.svelte', '.svelte.md'],
  preprocess: [sveltePreprocess(), mdsvex(mdsvex_config)],
  kit: {
    // By default, `npm run build` will create a standard Nosde app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
