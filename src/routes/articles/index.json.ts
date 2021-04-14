import { articleList } from './_metadata';

export const get = async () => {
  return {
    body: {
      articles: articleList,
    },
  };
};
