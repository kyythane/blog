<script>
  import '../styles/generated.css';
  import TopNav from '$lib/components/TopNav.svelte';
</script>

<div class="main-wrapper">
  <TopNav />
  <slot />
</div>

<style>
  .main-wrapper {
    display: grid;
    grid-template-rows: 2rem 1fr 2rem;

    @apply grid-cols-1 gap-4;
  }
</style>
