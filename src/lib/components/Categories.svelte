<script lang="ts">

  import { sharedState } from "$lib/stores/SharedStateStore"

  let categories: string[] = []
  let count = 0

  function addCategory() {
    categories = [...categories, "New Category"]
  }

</script>

<div>
  <h1>Categories</h1>
  <div class="grid flex-row">

    <ul class="list-decimal">
      {#each categories as category, i}
        <li>{i} - {category}</li>
      {/each}
    </ul>
  </div>
  <button on:click={addCategory}>Add Category</button>
  <button on:click={() => count += 1}>Count: {count}</button>
</div>

<style lang="scss">
  h1 {
    font-size: 2rem;
  }
</style>