<script>
  import { page } from "$app/stores"

  // Define an array for the dynamic items in the navigation bar. We are using for now static links with args: label and path
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact me", path: "/contact-me" }
  ]

  let activePath = "/"

  /**
   * @param {MouseEvent & {currentTarget: (EventTarget & HTMLAnchorElement)}} event
   * @param {string} url
   * */
  function handleRouteChange(event, url) {
    activePath = url
    console.log("activePath", activePath)
  }

  const navItemStyle = {
    base:
      "px-4 py-2 font-bold text-md border-b-2 border-transparent hover:bg-opacity-10 drop-shadow-sm hover:drop-shadow-lg",
    inactive: "hover:border-sky-200",
    active: "border-b-brand-500 drop-shadow text-neutral-700"
  }

</script>

<nav class="grid items-center py-1.5 px-4">
  <ul class="flex flex-row place-self-center max-w-2xl">
    {#each navItems as item}
      {@const isActive = $page.url.pathname === item.path}
      <li>
        <a href={item.path}
           class={isActive ? navItemStyle["base"] + " " + navItemStyle["active"]:  navItemStyle["base"] + " " + navItemStyle["inactive"]}
           on:click={(event) => handleRouteChange(event, item.path)}
        >
          {item.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>