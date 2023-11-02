import type { Writable } from "svelte/store"
import { writable } from "svelte/store"

interface SharedState {
  categories: string[];
  flavors: string[];
}

const initialState: SharedState = { categories: [], flavors: [] }
export const sharedState: Writable<SharedState> = writable<SharedState>(initialState)
