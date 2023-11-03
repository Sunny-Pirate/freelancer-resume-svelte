<script lang="ts">
  import type { Workshop, WorkshopEntityResponseCollection } from "$lib/graphql/types"

  export let data
  export let wsTotal = data.wsTotal
  export let workshops = data.workshops as Workshop[]


</script>

<div class="grid grid-cols-1 grid-rows-[96px_auto] min-h-full h-full px-4">
  <div>
    <h1 class="justify-self-start self-center">Workshops</h1>
    <h2 class="justify-self-start self-center">
      {wsTotal} workshop{wsTotal > 1 ? "s" : ""}
    </h2>
  </div>
  <ul>
    {#each workshops as workshop}
      <li>
        {workshop.title}
      </li>
    {/each}
  </ul>
</div>