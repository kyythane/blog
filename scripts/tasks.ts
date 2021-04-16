import { cli, sh } from 'tasksfile';
import { dev } from './dev_build.js';
import { buildArticleDictionaries } from './generate_page_data.js';
import { cssCommand, prod } from './prod_build.js';

const noop = () => {
  return;
};

const lint = {
  fix() {
    sh('npx prettier --ignore-path .gitignore --write .');
    sh('npx eslint --ignore-path .gitignore . --fix');
    sh('npx stylelint --ignore-path .gitignore "**/*.{css,svelte,svg}" --fix');
  },
  default() {
    sh('npx prettier --ignore-path .gitignore --check .', { async: true }).catch(noop);
    sh('npx eslint --ignore-path .gitignore .', { async: true }).catch(noop);
    sh('npx stylelint --ignore-path .gitignore "**/*.{css,svelte,svg}"', { async: true }).catch(
      noop,
    );
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
