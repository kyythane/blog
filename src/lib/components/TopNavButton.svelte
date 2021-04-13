<script lang="ts">
    import { page } from '$app/stores';
    import { buildPathMatcher } from '$lib/utils/navigation';
    export let path: string
    export let partialPath: boolean = false;
    let pathMatcher = (_route: string) => false;
    let matches = false;
    $: pathMatcher = buildPathMatcher(partialPath ? path + '/*' : path);
    $: matches = pathMatcher($page.path);
</script>

<li>
    <a href="{path}">
        <slot />
    </a>
</li>