<script>
  import TopNavButton from './TopNavButton.svelte';
</script>

<nav>
  <div class="flex flex-row">
    <TopNavButton path="/">Home</TopNavButton>
    <TopNavButton path="/articles" partialPath prefetch>Writing</TopNavButton>
  </div>
</nav>
