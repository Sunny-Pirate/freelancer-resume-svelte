<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte"

  let companyName = "DreamLab.Solutions"
  let sitePurposes = [
    {
      label: "UX Designer", textEffect:
        "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
    },
    { label: "UI Developer", textEffect: "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500" },
    { label: "Frontend Engineer", textEffect: "bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-amber-500" }

  ]
</script>

<!--{@debug sitePurposes}-->

<div class="grid grid-cols-1 grid-rows-1 min-h-full">
  <div class="grid grid-rows-2">
    <div class="self-center place-self-center">
      <h1 class="place-self-center text-brand-500 text-2xl md:text-4xl font-black">{companyName}</h1>
    </div>
    <div class="grid grid-cols-2 place-items-center">
      <Button href="/index" label="Website" />
      <Button href="/experiments" label="Experiments" />
    </div>
  </div>
</div>

<svelte:head>
  <title>DreamLab.Solutions by Luca Faccio</title>
</svelte:head>

<style lang="postcss">
    span.ndr::before {
        content: "NDR: ";
        font-weight: bold;
    }

    span.ndr {
        @apply block mt-4 text-xs text-right;
    }

    span.ndr::after {
        content: " - Luca F.";
        font-weight: bold;
    }
</style>