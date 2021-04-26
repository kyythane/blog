<script>
  import '../styles/generated.css';
  import TopNav from '$lib/components/TopNav.svelte';
</script>

<div class="body">
  <TopNav />
  <main>
    <slot />
  </main>
</div>

<style>
  .body {
    display: grid;
    grid-template-rows: 2rem 1fr 2rem;

    @apply grid-cols-1 gap-8;
  }

  :global(h1) {
    @apply text-5xl font-normal leading-normal mt-0 mb-0;
  }

  :global(h2) {
    @apply text-4xl font-normal leading-normal mt-0 mb-0;
  }

  :global(h3) {
    @apply text-3xl font-normal leading-normal mt-0 mb-0;
  }

  :global(h4) {
    @apply text-2xl font-normal leading-normal mt-0 mb-0;
  }

  :global(h5) {
    @apply text-xl font-normal leading-normal mt-0 mb-0;
  }

  :global(h6) {
    @apply text-lg font-normal leading-normal mt-0 mb-0;
  }

  :global(.article-section-link) {
    @apply text-gray-300 mx-2 opacity-0;

    transition: opacity 300ms ease-out;
  }

  :global(.article-section-link:hover) {
    @apply text-gray-500 opacity-100;
  }
</style>
