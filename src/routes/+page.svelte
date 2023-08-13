<script lang="ts">
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

<div class="py-10 flex flex-col items-center gap-6">
  <h1 class="text-teal-700 text-center text-2xl font-bold">{companyName}</h1>
  <ul class="grid grid-cols-3 text-sm max-w-2xl place-items-center">
    {#each sitePurposes as item}
      <li class={item.textEffect}>{item.label}</li>
    {/each}
  </ul>
  <p class="max-w-3xl">👋 Hello! I'm Luca, a passionate Italian who's been chasing the digital frontier since the age of 9. Back in 1994,
    with wide-eyed
    wonder,
    I delved into the world of ones and zeros through a 286 PC, and boy, was it love at first sight!

    School? Ah, the days when I fortified my foundations in math and physics, unknowingly setting the stage for the tech whizz in me. Beyond
    the textbooks, life had its own curriculum. Be it flipping pizzas, tending to gardens, or selling construction materials, every hat I
    wore
    taught me patterns - patterns that now shape the digital solutions I craft for diverse industries.

    For 14 vivid years, I waved the green and blue flags of my beloved Saletto, living the art of 'sbandieratore'. These very colors now
    breathe life into my logo, a nod to my roots.

    Racing? Oh, the adrenaline! I've been burning virtual rubber since 2006. Still revving it up with my original online team, our proudest
    moment? Conquering the 24-hour online race at Nurburgring.

    From the lanes of Saletto to the digital lanes of the Netherlands, my journey's been nothing short of an adventure. Here's to life,
    passions, and the quirks in between. Buckle up, and let's ride this journey together! 🚀
    <span class="ndr">Content created with the help of ChatGTP</span>
  </p>
</div>
<svelte:head>
  <title>DreamLab.Solutions by Luca Faccio</title>
</svelte:head>
<style lang="postcss">
    :global(html) {
        margin: 0;
        padding: 0;
        background: #fff;
        color: #333;
    }

    :global(body) {
        font-family: 'Exo 2', sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
        background-color: theme(colors.white);
        color: theme(colors.neutral.500);
        font-size: 1.2rem;
        line-height: 1.2rem;
        display: grid;
        grid-template-columns: 1fr;
        min-height: 100svh;
    }

    span.ndr::before {
        content: "NDR: ";
        font-weight: bold;
    }

    span.ndr {
        margin-top: 2rem;
        font-size: .88rem;
        display: block;
        text-align: right;
    }

    span.ndr::after {
        content: " - Luca";
        font-weight: bold;
    }
</style>