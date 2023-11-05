<script lang="ts">
  import type { PageData } from "./$types"
  import type { UploadFileEntity } from "$lib/graphql/types"
  import { format } from "date-fns"
  import { parseISO } from "date-fns/fp"

  export let data: PageData
  const workshop = data.workshop
  const slotsCount = (workshop.availableSlots as number) - (workshop.participants?.length as number)
  const gallery = workshop.gallery?.data as UploadFileEntity[]
  const date = format(parseISO(workshop.date), "GGGG BBB" )
</script>


<div class="relative">
  <!-- Background image with overlay -->
  <img class="w-full h-96 object-cover" src={workshop.coverImage?.data?.attributes?.url} alt={workshop.title} />
  <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center p-4">

    <a href="/experiments/workshops" class="absolute top-4 left-4 text-white">
      Back to Workshops
    </a>
    <!-- Title and brief description overlaid on the image -->
    <h1 class="text-4xl font-bold text-white">{workshop.title}</h1>
    <p class="text-xl text-white">{@html workshop.agenda}</p>
  </div>
</div>

<div class="container mx-auto p-4">
  <div class="bg-white rounded-lg p-4 shadow-lg mt-[-3rem] relative">
    <!-- Date and Location -->
    <div class="flex justify-between items-center">
      <p class="text-gray-600">{date}</p>
      <p class="text-gray-600">{ workshop.location}</p>
    </div>
    <!-- Full Description -->
    <div class="my-4">
      <h2 class="text-2xl font-bold mb-2">About the Workshop</h2>
      <p>{@html workshop.agenda}</p>
    </div>
    <!-- Other details -->
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h3 class="text-lg font-bold">Duration</h3>
        <p>{workshop.duration} hours</p>
      </div>
      <div>
        <h3 class="text-lg font-bold">Available Slots</h3>
        <p>{workshop.availableSlots}</p>
      </div>
      <!-- More details can be added here -->
    </div>
    <!-- Action buttons or additional content -->
  </div>
</div>


<!--
<div class="container mx-auto grid grid-rows-webpage-main-layout">
  <div class="grid grid-cols-1 pt-6">
    <div class="grid grid-cols-1 grid-rows-3">
      <h1>{workshop.title}</h1>
    </div>
  </div>
  <div class="grid grid-cols-[13fr_4fr] grid-rows-1">
    <div class="agenda">
      <div>{@html workshop.agenda}</div>
      <div>
        <ul>
          {#each gallery as image}
            <li class="h-24">
              <img src={image.attributes?.url} alt="{image.attributes?.alternativeText}" class="" />
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="text-sm">
      <div>Location: {workshop.location?.substring(0, 16)} on {date}</div>
      <div>Places availables: {slotsCount} (Max {workshop.availableSlots})</div>
    </div>
  </div>

  <div class="actions place-self-end self-start">
    <button>Subscribe</button>
  </div>
</div>
-->