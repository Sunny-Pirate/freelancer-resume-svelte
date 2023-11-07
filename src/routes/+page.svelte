<script lang="ts">

  import Button from "$lib/components/ui/Button.svelte"
  import Footer from "$lib/Footer.svelte"
  import type { PageData } from "./$types"


  export let data: PageData
  const { title, content } = data

  $: lines = [] as unknown as { x1: number, x2: number, y1: number, y2: number, color: string }[] // Array to hold our lines

  // Function to generate a random line
  function generateLine() {
    const x1 = Math.random() * 100
    const y1 = Math.random() * 100
    const x2 = Math.random() * 100
    const y2 = Math.random() * 100
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`
    lines = [...lines, { x1, y1, x2, y2, color }]
  }

  // Generate some lines
  // for (let i = 0; i < 10; i++) {
  //   generateLine();
  // }


</script>

<div class="hero">
  <svg class="dynamic-svg absolute w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    {#each lines as line}
      <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={line.color} />
    {/each}
  </svg>
  <div class="hero-content">
    <div class="glass-card">
      {@html content}
    </div>
  </div>
  <Footer />
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<style lang="postcss">
    .hero {
        @apply min-h-screen grid grid-cols-1 grid-rows-[1fr_64px] bg-gradient-to-tr from-[#85FFBD] to-[#FFFB7D];
    }

    .hero-content {
        @apply relative place-self-center self-center;
    }

    .glass-card {
        @apply relative max-w-screen-md mx-auto p-10 backdrop-blur-md hover:backdrop-blur-lg transition-transform;
    }

    @media screen and (min-width: 768px) {
        .glass-card::before {
            content: "";
            position: absolute;
            backdrop-filter: blur(20px);
            background-color: rgba(255, 255, 255, 0.1);
            /*border-radius: 1rem;*/
            top: 0;
            left: 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 1.2s, backdrop-filter 0.7s;
            width: 100%;
            height: 100%;
        }

        .glass-card:hover::before {
            transform: rotateY(12deg) rotateZ(5deg);
            backdrop-filter: blur(6px);
        }
    }

</style>
