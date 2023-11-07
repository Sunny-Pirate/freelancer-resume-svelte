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
<!--  <svg class="dynamic-svg absolute mx-auto" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">-->
<!--    {#each lines as line}-->
<!--      <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={line.color} />-->
<!--    {/each}-->
<!--  </svg>-->
  <div class="content-wrapper">
    <div class="glass-card">
      <div class="absolute">
        <h1 class="brand-name">DREAMLAB.SOLUTIONS</h1>
      </div>
      <h2 class="hero-title">Transforming Your Ideas into Digital Excellence.</h2>
      <p class="hero-content">DreamLab.Solutions is your strategic partner in digitizing business processes and developing custom software
        solutions.
        Innovation,
        agility, and cutting-edge technology dedicated to your growth.</p>
      <a class="hero-cta" href="_#">Explore Our Services</a>
      <a class="hero-cta" href="_#">Contact Us</a>
    </div>
  </div>
  <Footer />
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<style lang="postcss">
    .hero {
        @apply relative min-h-screen grid grid-cols-1 grid-rows-[1fr_64px] bg-gradient-to-tr from-emerald-300 to-yellow-300;
    }

    .content-wrapper {
        @apply relative place-self-center self-center;
    }
    .glass-card {
        @apply relative max-w-screen-md mx-auto p-10 backdrop-blur-md hover:backdrop-blur-lg transition-transform grid grid-cols-2
        place-items-center items-start;

    }
    .brand-name{
        @apply font-brand bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-emerald-400 font-black text-2xl
        md:text-3xl lg:text-5xl leading-7 drop-shadow-lg shadow-sky-400;
    }
    .hero-title{
        @apply col-span-2 font-bold text-xl md:text-2xl lg:text-3xl py-3 md:py-4 leading-5;
    }

    .hero-content {
        @apply col-span-2 text-gray-700 text-lg md:text-xl lg:text-2xl;
    }

    .hero-cta{
        @apply cursor-pointer inline-block px-4 py-2 mt-4 text-lg font-bold text-white bg-gradient-to-tr from-violet-500 to-emerald-400
        rounded-md shadow-md hover:shadow-lg;
    }

    @media screen and (min-width: 768px) {
        .glass-card::before {
            content: "";
            position: absolute;
            backdrop-filter: blur(20px);
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            top: 0;
            left: 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 1.2s, backdrop-filter 0.7s;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .glass-card:hover::before {
            transform: rotateX(9deg) rotateY(6deg) rotateZ(3deg);
            backdrop-filter: blur(6px);
        }
    }

</style>
