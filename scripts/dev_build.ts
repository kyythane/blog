import { sh } from 'tasksfile';

const cssCommand =
  'NODE_ENV=development postcss ./src/styles/template.css -o ./src/styles/generated.css -w';
const svelteCommand = 'svelte-kit dev';
export const dev = {
  css(): void {
    sh(cssCommand);
  },
  svelte(): void {
    sh(svelteCommand);
  },
  default(): void {
    sh(cssCommand, { async: true });
    sh(svelteCommand, { async: true });
  },
};
