<script lang="ts">


  import NavigationBar from "$lib/NavigationBar.svelte"
  import Footer from "$lib/Footer.svelte"

  let navItems = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "Portfolio",
      url: "/portfolio"
    },
    {
      name: "Contact me",
      url: "/contact-me"
    }
  ]
</script>

<!--<TailwindCSS />-->
<div class="grid grid-cols-1 grid-rows-webpage-main-layout min-h-full ">
  <header class="h-1/3">
    <NavigationBar />
  </header>
  <div class="py-10 grid grid-rows-homepage-hero-vertical justify-items-center gap-6">
  <slot />
  </div>
  <Footer />
</div>

