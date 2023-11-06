/// <reference types="@auth/sveltekit" />


import type { User } from "@auth/core/types"
import type { JWTString } from "@auth/core/lib/cookie"

declare global {
  namespace App {
    interface Locals {
      user?: any
    }
  }



  interface PrivateEnv { // $env/static/private
    SENDGRID_SENDER: string
    SENDGRID_API_KEY: string
  }


// Avoid redirection to non index.es export  https://github.com/Cweili/svelte-fa
  module "@fortawesome/pro-solid-svg-icons/index.es" {
    export * from "@fortawesome/pro-solid-svg-icons"
  }

}
export {}