/// <reference types="@auth/sveltekit" />


// Avoid redirection to non index.es export  https://github.com/Cweili/svelte-fa
declare module "@fortawesome/pro-solid-svg-icons/index.es" {
  export * from "@fortawesome/pro-solid-svg-icons"
}