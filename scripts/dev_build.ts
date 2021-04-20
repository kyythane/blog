import { sh } from 'tasksfile';
import { prebuildCSS, prebuildSvelte } from './build_shared.js';
import { stringifyOptions } from './utils.js';

const cssCommand =
  'NODE_ENV=development postcss ./src/styles/template.css -o ./src/styles/generated.css -w';
const svelteCommand = 'svelte-kit dev';

const css = (): void => {
  prebuildCSS();
  sh(cssCommand, { async: true });
};
const svelte = async (options: { [key: string]: string }) => {
  await prebuildSvelte();
  sh(`${svelteCommand} ${stringifyOptions(options)}`, { async: true });
};

export const dev = {
  css,
  svelte,
  default(options: { [key: string]: string }) {
    css();
    svelte(options);
  },
};
