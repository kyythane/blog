<script lang="ts">
  import { page } from '$app/stores';
  import { buildPathMatcher } from '$lib/utils/navigation';
  export let path: string;
  export let partialPath = false;
  export let prefetch = false;
  let pathMatcher = (_route: string) => false;
  let matches = false;
  $: pathMatcher = buildPathMatcher(partialPath ? path + '/*' : path);
  $: matches = pathMatcher($page.path);
</script>

<li>
  <a
    href={path}
    sveltekit:prefetch={prefetch || undefined}
    class={`link ${matches ? 'selected' : ''}`}
  >
    <slot />
  </a>
</li>

<style>
  .link {
    @apply px-4 py-2;
    @apply rounded border-none;
  }

  .link:hover {
    @apply bg-red-100;
  }

  .selected {
    @apply bg-red-200;
  }
</style>
