import { sh } from 'tasksfile';
import { buildArticleDictionaries } from './generate_page_data.js';

export const cssCommand =
  'NODE_ENV=production postcss ./src/styles/template.css -o ./src/styles/generated.css';
const svelteCommand = 'svelte-kit build';

const css = (): void => {
  sh(cssCommand);
};
const svelte = async () => {
  await buildArticleDictionaries();
  sh(svelteCommand);
};

export const prod = {
  css,
  svelte,
  default() {
    css();
    svelte();
  },
};
