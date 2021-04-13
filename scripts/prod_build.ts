import { sh } from 'tasksfile';

export const cssCommand =
  'NODE_ENV=production postcss ./src/styles/template.css -o ./src/styles/generated.css';
const svelteCommand = 'svelte-kit build';
export const prod = {
  css(): void {
    sh(cssCommand);
  },
  svelte(): void {
    sh(svelteCommand);
  },
  default(): void {
    sh(cssCommand);
    sh(svelteCommand);
  },
};
