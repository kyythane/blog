import { cli, sh } from 'tasksfile';
import { dev } from './dev_build';
import { prod } from './prod_build';

cli({
  dev,
  prod,
  start() {
      sh('svelte-kit start');
  }
})