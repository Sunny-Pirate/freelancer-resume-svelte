<script lang="ts">
  let companyName = "DreamLab.Solutions"
  let sitePurposes = [
    "UX Designer", "UI Developer", "by Luca Faccio"
  ]
</script>


<h1>{companyName}</h1>
<ul>
  {#each sitePurposes as item}
    <li>{item}</li>
  {/each}
</ul>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    h1 {
        text-align: center;
        font-size: 2.56rem;
        background: linear-gradient(90deg, #27ae60, #408bd1);
        background-clip: text;
        fill: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    ul {
        list-style: none;
        display: inline-flex;
        flex-direction: row;
    }

    ul li {
        padding: .44rem 1rem;
    }
</style>