<script lang="ts">
  import { page } from "$app/stores"
</script>

{#if $page.status === 401}
  <h1>Error {$page.status}: {$page.error?.message}</h1>
  <p>
    Go to <a href="/auth/login">login</a> page to login.
  </p>

{:else if $page.status === 404}
  <h1>Error {$page.status}: {$page.error?.message}</h1>
  <p>
    Got to the <a href="/">Home page</a>
  </p>
{:else}
  <h1>{$page.status}: {$page.error?.message}</h1>
{/if}