import { sh } from 'tasksfile';
import { buildArticleDictionaries } from './generate_page_data.js';

const cssCommand =
  'NODE_ENV=development postcss ./src/styles/template.css -o ./src/styles/generated.css -w';
const svelteCommand = 'svelte-kit dev';

const css = (): void => {
  sh(cssCommand, { async: true });
};
const svelte = async () => {
  await buildArticleDictionaries();
  sh(svelteCommand, { async: true });
};

export const dev = {
  css,
  svelte,
  default() {
    css();
    svelte();
  },
};
