<script lang="ts">
  import type { Workshop, WorkshopEntityResponseCollection } from "$lib/graphql/types"
  import type { PageData } from "./$types"
  import { invalidate } from "$app/navigation"

  export let data: PageData
  export let wsTotal = data.wsTotal
  export let workshops = data.workshops as Workshop[]

</script>

<div class="grid grid-cols-1 grid-rows-[96px_auto] min-h-full h-full px-4">
  <div class="grid grid-cols-1 grid-rows-2">
    <!--    TODO: Ricorda di cambiare il totale filtrando solo gli elementi attivi -->
    <h1 class="justify-self-center self-center font-bold text-3xl">Active workshop{wsTotal > 1 ? "s" : ""}: {wsTotal}</h1>
  </div>
  <ul>
    {#each workshops as workshop}
      {@const wsPath = `/kitsite/workshops/${workshop.slug}`}
      {@const wsCoverAltText = workshop.coverImage?.data?.attributes?.alternativeText}
      {@const wsCoverUrl = workshop.coverImage?.data?.attributes?.url}
      {@const cardStyle = " "}
      {@const cardActiveStyle = "active:bg-sky-300"}
      {@const partcipantsRegisteredCount = workshop.participants?.length}

      <a href="{wsPath}">
        <li class="mb-4">
          <div class={"grid grid-cols-[240px_1fr] border rounded-lg border-cyan-400 shadow-sm hover:shadow-md transition-shadow duration-700 ease-in-out"}>
            <img src="{wsCoverUrl}" alt="{wsCoverAltText}" class="rounded-tl-lg rounded-bl-lg"/>
            <div class="grid grid-cols-2 grid-rows-[3fr_12fr] py-2 px-4">
              <h3 class="text-2xl active:text-white">{workshop.title}</h3>
              <div class="justify-self-end self-start grid grid-cols-1 place-items-end items-end gap-2">
                <h5>{workshop.date}</h5>
                <h5>Available places: {partcipantsRegisteredCount} on {workshop.availableSlots}</h5>
              </div>
              <div class="col-span-2 justify-self-center self-center">
                {@html workshop.agenda}
              </div>
            </div>
          </div>
        </li>
      </a>
    {/each}
  </ul>
</div>