<script lang="ts">
  import type { Workshop, WorkshopEntity, WorkshopEntityResponseCollection } from "$lib/graphql/types"
  import type { PageData } from "./$types"
  import { invalidate } from "$app/navigation"
  import { format } from "date-fns"
  import { parseISO } from "date-fns/fp"

  export let data: PageData
  export let wsTotal = data.wsTotal
  export let workshops = data.workshops as Workshop[]
  $: formattedWorkshops = workshops.map((workshop) => ({
    ...workshop,
    date: format(parseISO(workshop.date), "PPPP")
  }));

</script>

<div class="grid grid-cols-1 grid-rows-[96px_auto] min-h-full h-full px-4">
  <div class="grid grid-cols-1 grid-rows-2">
    <!--    TODO: Ricorda di cambiare il totale filtrando solo gli elementi attivi -->
    <h1 class="justify-self-center self-center font-bold text-3xl">Active workshop{wsTotal > 1 ? "s" : ""}: {wsTotal}</h1>
  </div>
  <ul>
    {#each formattedWorkshops as workshop, index}
      {@const {title, agenda, location, date, slug, duration, availableSlots, participants, state} = workshop}
      {@const wsPath = `/kitsite/workshops/${workshop.slug}`}
      {@const wsCoverAltText = workshop.coverImage?.data?.attributes?.alternativeText}
      {@const wsCoverUrl = workshop.coverImage?.data?.attributes?.url}
      {@const cardStyle = " "}
      {@const cardActiveStyle = "active:bg-sky-300"}
      {@const partcipantsRegisteredCount = workshop.participants?.length}
      <!--{@const wsDate = format(parseISO(workshop.date), "dd/MM/yyyy" )}-->

      <a href="{wsPath}">
        <li class="mb-4">
          <a href={wsPath} class="block border rounded-lg border-cyan-400 shadow-sm hover:shadow-md transition-shadow duration-700 ease-in-out">
            <div class="grid grid-cols-[240px_1fr]">
              <img src={wsCoverUrl} class="rounded-tl-lg rounded-bl-lg" alt={title} loading="lazy" />
              <div class="grid grid-cols-2 grid-rows-[3fr_12fr] py-2 px-4">
                <h3 class="text-2xl col-span-2">{title}</h3>
                <div class="col-span-2">
                  <p>{date}</p>
                  <p>Available places: {partcipantsRegisteredCount} on {availableSlots}</p>
                </div>
                <div class="col-span-2">
                  {@html agenda}
                </div>
              </div>
            </div>
          </a>
        </li>
      </a>
    {/each}
  </ul>
</div>