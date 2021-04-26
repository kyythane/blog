<script>
  import { onMount } from 'svelte';

  export let title;
  export let category;
  export let tags;

  onMount(() => {
    console.log('mount');
    const headings = document.getElementsByClassName('article-section-heading');
    for (let index = 0; index < headings.length; index++) {
      const heading = headings.item(index);
      const link = document.querySelector(`#${heading.id} .article-section-link`);
      const onEnter = () => {
        link.style.opacity = '1';
      };
      const onExit = () => {
        link.style.opacity = null;
      };
      heading.addEventListener('mouseenter', onEnter);
      heading.addEventListener('mouseleave', onExit);
    }
  });
</script>

<title>{title}</title>
<h1>{title}</h1>
<article>
  <slot />
</article>
