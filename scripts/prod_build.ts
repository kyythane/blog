import { sh } from 'tasksfile';
import { prebuildCSS, prebuildSvelte } from './build_shared.js';
import { stringifyOptions } from './utils.js';

export const cssCommand =
  'NODE_ENV=production postcss ./src/styles/template.css -o ./src/styles/generated.css';
const svelteCommand = 'svelte-kit build';

const css = (): void => {
  prebuildCSS();
  sh(cssCommand);
};
const svelte = async (options: { [key: string]: string }) => {
  await prebuildSvelte();
  sh(`${svelteCommand} ${stringifyOptions(options)}`);
};

export const prod = {
  css,
  svelte,
  default(options: { [key: string]: string }) {
    css();
    svelte(options);
  },
};
