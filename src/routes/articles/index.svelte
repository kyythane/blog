<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const url = '/articles.json';
    const res = await fetch(url);
    const { articles } = await res.json();

    if (res.ok) {
      return {
        props: {
          articles,
        },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<script lang="ts">
  import type { ArticleMetadata } from './_metadata';
  export let articles: Array<ArticleMetadata>;
</script>

<title>Articles</title>

<main>
  <h1>Articles</h1>
  {#each articles as article}
    <li><a href={article.url}>{article.title}</a></li>
  {/each}
</main>
