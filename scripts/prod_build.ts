import { sh } from 'tasksfile';

const cssCommand = 'NODE_ENV=production postcss ./src/styles/template.css -o ./src/styles/generated.css';
const svelteCommand = 'svelte-kit build';
export const prod = {
    css() {
        sh(cssCommand);
    },
    svelte() {
        sh(svelteCommand);
    },
    default() {
        sh(cssCommand);
        sh(svelteCommand);
    }
}