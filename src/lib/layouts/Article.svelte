<script>
  export let title;
  export let category;
  export let tags;
</script>

<title>{title}</title>

<h1>{title}</h1>
<article>
  <slot />
</article>
