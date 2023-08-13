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

<div class="py-10 grid grid-rows-homepage-hero-vertical justify-items-center gap-6">
  <h1 class="text-teal-700 text-center text-2xl font-bold">{companyName}</h1>
  <ul class="grid grid-cols-3 text-sm max-w-2xl place-items-center">
    {#each sitePurposes as item}
      <li class={item.textEffect}>{item.label}</li>
    {/each}
  </ul>
  <p class="max-w-3xl place-self-center">👋 Hey, I'm Luca! Raised amidst computers, technology, and science, IT quickly became
    more than
    just a hobby.
    Graduating in aeronautics in 2006, I honed a deeply mathematical mindset. Through experiences across diverse industries, I now design
    unique web solutions, capturing the essence of each sector. Ready to meet the brain behind the code? Dive into my CV! 🚀
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