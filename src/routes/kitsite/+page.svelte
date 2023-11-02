<script lang="ts">
  import Categories from "$lib/components/Categories.svelte"
  import type { LayoutData } from './$types';

  export let data: LayoutData

</script>



<svelte:head>
  <title>KITSite.Manager</title>
</svelte:head>

<div class="grid bg-brand">
  <div class="container">
    <h1>KITSite WebApp</h1>

    {#each data.categories as category}
      <p class="">{category}</p>
    {/each}
    <Categories  />
  </div>
</div>