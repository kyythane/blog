import { sh } from 'tasksfile';
import { buildArticleDictionaries } from './generate_page_data.js';

export const prebuildCSS = () => {
  sh('cp -R node_modules/@fortawesome/fontawesome-free/ ./static/font-awesome/');
};

export const prebuildSvelte = async () => {
  await buildArticleDictionaries();
};
