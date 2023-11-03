<script lang="ts">
  import type { Workshop, WorkshopEntityResponseCollection } from "$lib/graphql/types"
  import type { PageData } from "./$types"

  export let data: PageData;
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
      {@const wsPath = `/kitsite/workshops/${workshop.slug}`}
      <li>
        <a href="{wsPath}">
          {workshop.title}
        </a>
      </li>
    {/each}
  </ul>
</div>