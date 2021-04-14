<script lang="ts">
  import TopNavButton from './TopNavButton.svelte';
</script>

<nav>
  <ul class="flex flex-row">
    <TopNavButton path="/">Home</TopNavButton>
    <TopNavButton path="/articles" partialPath prefetch>Writing</TopNavButton>
  </ul>
</nav>
