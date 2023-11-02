import { sveltekit } from "@sveltejs/kit/vite"
import { reactivePreprocess } from "svelte-reactive-preprocessor"

/** @type {import("vite").UserConfig} */
const config = {
  plugins: [sveltekit(),
    reactivePreprocess()]
}

export default config
