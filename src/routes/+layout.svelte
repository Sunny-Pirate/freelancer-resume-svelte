<script lang="ts">

  import "../app.css"
  import { page } from "$app/stores"


</script>

<div class="grid min-h-full">
  <slot />
</div>


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

    :global(.pageTitle) {
        @apply text-brand-600 text-center text-5xl font-bold;
    }

    :global(.pageContent) {
        @apply max-w-xl place-self-center px-2 text-justify sm:text-left leading-7;
    }

</style>
