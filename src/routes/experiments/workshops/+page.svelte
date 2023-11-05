<script lang="ts">
  import type { Workshop, WorkshopEntity, WorkshopEntityResponseCollection } from "$lib/graphql/types"
  import type { PageData } from "./$types"
  import { invalidate } from "$app/navigation"
  import { format } from "date-fns"
  import { parseISO } from "date-fns/fp"
  import Fa from "svelte-fa"
  import { faMapPin, faClock, faFlag } from "@fortawesome/free-solid-svg-icons"
  import Button from "$lib/components/ui/Button.svelte"

  export let data: PageData
  export let wsTotal = data.wsTotal
  export let workshops = data.workshops as Workshop[]
  $: formattedWorkshops = workshops.map((workshop) => ({
    ...workshop,
    date: format(parseISO(workshop.date), "PPPP")
  }))

</script>

<div class="grid grid-cols-1 grid-rows-[96px_auto] min-h-full h-full px-4">
  <div class="grid grid-cols-1 grid-rows-2">
    <!--    TODO: Ricorda di cambiare il totale filtrando solo gli elementi attivi -->
    <h1 class="justify-self-center self-center font-bold text-3xl">Active workshop{wsTotal > 1 ? "s" : ""}: {wsTotal}</h1>
  </div>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {#each formattedWorkshops as workshop, index}
        {@const { title, agenda, location, date, slug, duration, availableSlots, participants, state } = workshop}
        {@const wsPath = `/experiments/workshops/${slug}`}
        {@const wsCoverUrl = workshop.coverImage?.data?.attributes?.url}

        <div class="bg-white rounded-lg overflow-hidden shadow-lg grid grid-rows-2 grid-cols-1">
          <img class="w-full h-48 object-cover" src="{workshop.coverImage?.data?.attributes?.url}" alt="{title}" />
          <div class="p-4 grid grid-cols-1">
            <h3 class="text-lg font-semibold truncate">{title}</h3>
            <p class="text-sm text-gray-500 mt-1">{date}</p>
            <div class="text-sm text-gray-500 mt-1">
              <div class="inline-flex">
                <Fa icon={faMapPin} pull="left" class="text-emerald-400 m-1" />{location}</div>
              <div class="inline-flex">
                <Fa icon={faClock} pull="left" class="text-emerald-400 m-1" />{duration} mins
              </div>
            </div>
            <div class="flex justify-between items-center mt-3 place-self-end self-end gap-2">
              <span class="text-sm font-medium text-gray-800">{availableSlots} Slots</span>
              <Button href={wsPath} label="More details" bgColor="bg-brand-400" />
            </div>
          </div>
        </div>

      {/each}
    </div>
  </div>
</div>