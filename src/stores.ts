import { type Writable, writable } from "svelte/store"
import type { UsersPermissionsLoginInput } from "$lib/graphql/types"

// While server determines whether the user is logged in by examining RequestEvent.locals.user, the
// loginSession is updated so all parts of the SPA client-side see the user and role.
export const loginSession = <Writable<UsersPermissionsLoginInput | undefined>>writable(undefined)
