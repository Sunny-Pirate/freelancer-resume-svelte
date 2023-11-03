<script lang="ts">
  export let data
  const { title, content } = data

</script>


<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="max-w-3xl px-3">
  {@html content}
</div>