import { sh } from 'tasksfile';

const cssCommand = 'NODE_ENV=development postcss ./src/styles/template.css -o ./src/styles/generated.css -w';
const svelteCommand = 'svelte-kit dev';
export const dev = {
    css() {
        sh(cssCommand);
    },
    svelte() {
        sh(svelteCommand);
    },
    default() {
        sh(`${cssCommand} & ${svelteCommand}`);
    }
}
