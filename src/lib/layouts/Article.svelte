<script lang="ts">
  export let title: string;
  export let category: string;
  export let tags: Array<string>;
</script>

<title>{title}</title>

<h1>{title}</h1>
<article>
  <slot />
</article>
