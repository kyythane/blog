const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{svelte, svelte.md}'],
    options: {
      defaultExtractor: (content) => [
        ...tailwindExtractor(content),
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group,
        ),
      ],
      keyframes: true,
    },
  },
};
