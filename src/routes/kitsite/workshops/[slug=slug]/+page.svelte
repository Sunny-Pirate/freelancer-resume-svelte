<script lang="ts">
  import type { PageData } from "./$types"

  export let data: PageData
  const workshop = data.workshop
</script>

<div>
  <h1>{workshop.title} <span>{workshop.duration}</span></h1>
  <h2>Reference ID: {data.workshopID}</h2>
</div>