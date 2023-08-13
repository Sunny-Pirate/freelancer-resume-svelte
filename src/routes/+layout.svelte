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
<div>
  <header>
    <NavigationBar />
  </header>
  <slot />
</div>

