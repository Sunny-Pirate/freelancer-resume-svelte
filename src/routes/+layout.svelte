<script lang="ts">

  import "../app.css";

  import NavigationBar from "$lib/NavigationBar.svelte"
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
<div class="grid grid-cols-1 min-h-full row-">
  <header class="h-1/3">
    <NavigationBar />
  </header>
  <slot />
</div>

