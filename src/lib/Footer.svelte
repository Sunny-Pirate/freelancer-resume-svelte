<script>
  import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

  import { PUBLIC_GITHUB_URL, PUBLIC_LINKEDIN_URL, PUBLIC_WABUSINESS_URL } from "$env/static/public"

  const socials = [
    { type: "github", label: "github", icon: faGithub, url: PUBLIC_GITHUB_URL },
    { type: "linkedin", label: "linkedin", icon: faLinkedin, url: PUBLIC_LINKEDIN_URL },
    { type: "whatsapp", label: "whatsapp", icon: faWhatsapp, url: PUBLIC_WABUSINESS_URL }
  ]
</script>

<div class="text-xs grid grid-cols-1 grid-rows-2">

  <div class="flex place-self-center py-1">
    {#each socials as social}
      <a class="mx-2 min-h-max text-lg hover:scale-125 hover:text-brand-500 transition-all duration-500 ease-in-out"
         href={social.url}
         target="_blank"
      >
        <Fa icon={social.icon} />
      </a>
    {/each}
  </div>

  <p class="self-end justify-self-end py-1 pr-2">
    Developed and Engineered by <a class="text-blue-500 hover:text-blue-700"
                                   href="https://www.linkedin.com/in/luca-faccio/"
                                   target="_blank"
  >
    Luca Faccio
  </a>
  </p>
</div>