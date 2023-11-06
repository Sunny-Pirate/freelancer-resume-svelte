<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData } from './$types';
  import Button from "$lib/components/ui/Button.svelte"
  import Categories from "$lib/components/Categories.svelte"

  export let data: PageData;

  const { user } = data;
</script>

<div class="grid">
  <div class="container py-8 px-4">
    <Button href="/experiments/workshops" label="Workshops" darkMode />
  </div>

  <form method="POST" action="?/logout">
    <button type="submit" name="logout" value="true">Logout</button>
  </form>
</div>