import { cli, sh } from 'tasksfile';
import { dev } from './dev_build.js';
import { buildArticleDictionaries } from './generate_page_data.js';
import { cssCommand, prod } from './prod_build.js';

const lint = {
  fix() {
    sh('npx prettier --write .');
    sh('npx eslint --ignore-path .gitignore . --fix');
  },
  default() {
    sh('npx prettier --check .', { async: true });
    sh('npx eslint --ignore-path .gitignore .', { async: true });
  },
};

const init = () => {
  sh(cssCommand, { async: true });
  buildArticleDictionaries();
};

cli({
  dev,
  prod,
  start() {
    sh('svelte-kit start');
  },
  lint,
  init,
});
