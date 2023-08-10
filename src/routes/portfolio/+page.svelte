<script lang="ts">

  let isListfiltered = false

</script>
<h1>Projects and Working experiences</h1>
<div>
  <p>Filter by Industry</p>
  <div class="filter-container">
    {#if (isListfiltered)}
      <button on:click={() => isListfiltered = false}>Remove Filter</button>
    {:else}
      Select an industry to filter
    {/if}
    <button on:click={() => isListfiltered = true}>IT</button>
    <button on:click={() => isListfiltered = true}>Gardening</button>
    <button on:click={() => isListfiltered = true}>Clothing</button>
    <button on:click={() => isListfiltered = true}>Buidling</button>
    <button on:click={() => isListfiltered = true}>Hospitality</button>
  </div>
</div>


<style>
    .filter-container {
        display: inline-flex;
        list-style-type: none;
        padding: 0;
    }

    button {
        margin: 0 10px;
        padding: 5px 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background: #ccc;
        }
    }
</style>