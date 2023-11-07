<script lang="ts">
  export let label: string = "Button Text"
  export let bgColor: string = "bg-green-300"

  export let href: string = "#_"

  export let darkMode = false

  // Extract the color number and increment it for the hover state
  const colorNumber = parseInt(bgColor.replace(/[^0-9]/g, ""))
  const hoverColorNumber = Math.min(colorNumber + 100, 900) // Ensures the color number does not exceed 900
  const hoverColor = bgColor.replace(colorNumber.toString(), hoverColorNumber.toString())

  // Final classes
  const baseClasses = "relative px-10 py-3 font-medium text-white transition duration-300 rounded-md ease"
  const bgClasses = `${bgColor} hover:${hoverColor}`
</script>

{#if !darkMode}
  <a href="{href}" class="{baseClasses} {bgClasses}">
  <span class="btn-first-layer">
      <svg viewBox="0 0 487 487" class="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      fill="#FFF" fill-rule="nonzero" fill-opacity=".1" />
                  </svg>
  </span>
    <span class="btn-second-layer">
     <svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      fill="#FFF" fill-rule="nonzero" fill-opacity=".1" />
                  </svg>
  </span>
    <span class="btn-label">{label}</span>
  </a>
{:else}
  <a href={href}
     class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
    <span
      class="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-br from-sky-400 to-fuchsia-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span
      class="absolute inset-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
    <span class="relative">{label}</span>
  </a>
{/if}

<style lang="postcss">
    .btn-first-layer {
        @apply absolute bottom-0 left-0 h-full;
    }

    .btn-second-layer {
        @apply absolute top-0 right-0 w-12 h-full;
    }

    .btn-label {
        @apply relative;
    }
</style>